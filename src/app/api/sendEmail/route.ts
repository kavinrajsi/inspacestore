import { NextResponse } from "next/server";
import { google, sheets_v4 } from "googleapis";

type FormType = "contact" | "footer" | "insight";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  whatsappUpdates?: boolean;
  formType: "contact";
};

type FooterFormData = {
  name: string;
  phoneNumber: string;
  formType: "footer";
};

type InsightFormData = {
  name: string;
  email: string;
  phone: string;
  projectLocation: string;
  whatsappUpdates?: boolean;
  formType: "insight";
};

type FormData = ContactFormData | FooterFormData | InsightFormData;

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

const RESEND_API_ENDPOINT = "https://api.resend.com/emails";
const RESEND_API_KEY = process.env.RESEND_API_KEY; // DO NOT default to bogus string
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SHEET_TAB = process.env.GOOGLE_SHEET_TAB ?? "Form Responses";
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY_RAW = process.env.GOOGLE_PRIVATE_KEY;
const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "inspacestores2012@gmail.com";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "no-reply@inspacestore.in";

const isLocalEnv =
  process.env.NEXT_PUBLIC_ENV === "local" || process.env.NODE_ENV !== "production";

type SheetStatus = "skipped" | "stored" | "failed";

type SubmissionRecord = {
  formType: FormType;
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  projectLocation: string;
  whatsappOptIn: boolean;
};

const sanitizePrivateKey = (value?: string) =>
  value ? value.replace(/\\n/g, "\n").trim() : undefined;

const serializeError = (err: unknown) =>
  err instanceof Error ? { message: err.message, stack: err.stack } : { message: String(err) };

const verifyRecaptcha = async (token: string): Promise<{ success: boolean; score: number }> => {
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn("RECAPTCHA_SECRET_KEY not set — skipping verification");
    return { success: true, score: 1.0 };
  }

  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return { success: data.success && (data.score ?? 0) >= 0.5, score: data.score ?? 0 };
  } catch (error) {
    console.error("reCAPTCHA verification error:", serializeError(error));
    return { success: false, score: 0 };
  }
};

const validateRequiredEnv = () => {
  if (!isLocalEnv && !RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is required in non-local environments");
  }
  // Google Sheets is optional — we will skip if the sheet id or creds are missing, but log safely
};

/**
 * Create a fresh Google Sheets client per call.
 * This avoids issues with cached auth instances that may lack a key or expire.
 */
const createSheetsClient = async (): Promise<sheets_v4.Sheets> => {
  const privateKey = sanitizePrivateKey(GOOGLE_PRIVATE_KEY_RAW);

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !privateKey) {
    throw new Error("Google service account credentials are not fully configured (SERVICE_ACCOUNT_EMAIL or PRIVATE_KEY missing)");
  }

  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  } as any);

  // authorize ensures the JWT is valid before we build the sheets client
  await auth.authorize();
  return google.sheets({ version: "v4", auth });
};

const appendSubmissionToSheet = async (
  record: SubmissionRecord
): Promise<{ status: SheetStatus; error?: string }> => {
  if (!GOOGLE_SHEET_ID) {
    console.warn("Skipping Google Sheet append: GOOGLE_SHEET_ID is missing");
    return { status: "skipped" };
  }

  // if service account creds are missing, skip instead of throwing (safer behavior)
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY_RAW) {
    console.warn("Skipping Google Sheet append: Google service account credentials are missing");
    return { status: "skipped" };
  }

  try {
    const sheetsClient = await createSheetsClient();

    const submissionTimestamp = new Date().toISOString();
    const values = [
      [
        submissionTimestamp,
        record.formType,
        record.fullName,
        record.email,
        record.phoneNumber,
        record.message,
        record.projectLocation,
        record.whatsappOptIn ? "Yes" : "No",
      ],
    ];

    await sheetsClient.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${GOOGLE_SHEET_TAB}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    return { status: "stored" };
  } catch (error) {
    console.error("Error appending submission to Google Sheet:", serializeError(error));
    const errorMessage = error instanceof Error ? error.message : "Unknown Google Sheets error";
    return { status: "failed", error: errorMessage };
  }
};

const formatTitle = (formType: FormType) =>
  `${formType.charAt(0).toUpperCase()}${formType.slice(1)} Form Submission`;

const buildEmailPayload = (
  subject: string,
  fullName: string,
  email: string,
  phoneNumber: string,
  message: string,
  projectLocation: string
) => {
  const rows = [
    ["Name", fullName],
    ["Email", email],
    ["Phone Number", phoneNumber],
    ["Message", message],
    ["Project Location", projectLocation],
    ["Submitted At", new Date().toISOString()],
  ];

  const html = `
    <h2>${subject}</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <th align="left" style="background:#f5f5f5">${label}</th>
          <td>${value}</td>
        </tr>
      `
        )
        .join("")}
    </table>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  return {
    from: RESEND_FROM_EMAIL,
    to: [RESEND_TO_EMAIL],
    subject,
    html,
    text,
  };
};

export async function POST(request: Request) {
  try {
    validateRequiredEnv();

    const formData: FormData = await request.json();

    if (!formData || !formData.formType || !["contact", "footer", "insight"].includes(formData.formType)) {
      return NextResponse.json({ message: "Invalid or missing formType" }, { status: 400 });
    }

    // Verify reCAPTCHA token
    const recaptchaToken = (formData as Record<string, unknown>).recaptchaToken as string | undefined;
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success) {
        console.warn("reCAPTCHA verification failed:", { score: recaptchaResult.score });
        return NextResponse.json(
          { message: "reCAPTCHA verification failed. Please try again." },
          { status: 403 }
        );
      }
    } else if (!isLocalEnv && RECAPTCHA_SECRET_KEY) {
      // In production with reCAPTCHA configured, reject submissions without a token
      return NextResponse.json(
        { message: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }

    let fullName = "";
    let email = "N/A";
    let phoneNumber = "N/A";
    let message = "N/A";
    let projectLocation = "N/A";
    let whatsappOptIn = false;

    switch (formData.formType) {
      case "contact":
        fullName = `${formData.firstName} ${formData.lastName}`.trim();
        email = formData.email;
        phoneNumber = formData.phoneNumber;
        message = formData.message;
        whatsappOptIn = Boolean(formData.whatsappUpdates);
        break;
      case "footer":
        fullName = formData.name;
        phoneNumber = formData.phoneNumber;
        break;
      case "insight":
        fullName = formData.name;
        email = formData.email;
        phoneNumber = formData.phone;
        projectLocation = formData.projectLocation;
        whatsappOptIn = Boolean(formData.whatsappUpdates);
        break;
      default:
        break;
    }

    // Log minimal, non-sensitive info
    console.info("Form submission received:", {
      formType: formData.formType,
      fullName,
      hasEmail: email !== "N/A",
      hasPhone: phoneNumber !== "N/A",
    });

    let delivery: "resend" | "logged" = "resend";
    let resendErrorDetails: unknown = null;
    let sheetStatus: SheetStatus = "skipped";
    let sheetError: string | null = null;

    // Send email via Resend (skip in local env)
    try {
      if (isLocalEnv) {
        resendErrorDetails = { message: "Resend skipped in local environment" };
        console.info("Skipping Resend email dispatch in local environment");
        delivery = "logged";
      } else {
        if (!RESEND_API_KEY) {
          // Defensive: should have been validated earlier, but guard anyway
          throw new Error("RESEND_API_KEY is not set");
        }

        const resendResponse = await fetch(RESEND_API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify(
            buildEmailPayload(
              formatTitle(formData.formType),
              fullName,
              email,
              phoneNumber,
              message,
              projectLocation
            )
          ),
        });

        if (!resendResponse.ok) {
          const errorText = await resendResponse.text().catch(() => "No response body");
          resendErrorDetails = {
            status: resendResponse.status,
            error: errorText,
          };
          console.error("Resend API error:", resendErrorDetails);
          delivery = "logged";
        }
      }
    } catch (resendError) {
      resendErrorDetails = { message: "Exception while calling Resend", ...(serializeError(resendError) as any) };
      console.error("Error sending email via Resend:", resendErrorDetails);
      delivery = "logged";
    }

    // Append to Google Sheet (if configured)
    try {
      const sheetResult = await appendSubmissionToSheet({
        formType: formData.formType,
        fullName,
        email,
        phoneNumber,
        message,
        projectLocation,
        whatsappOptIn,
      });

      sheetStatus = sheetResult.status;
      sheetError = sheetResult.error ?? null;
    } catch (error) {
      sheetStatus = "failed";
      sheetError = error instanceof Error ? error.message : "Unknown Sheets exception";
      console.error("Unexpected error while storing submission in Sheets:", serializeError(error));
    }

    return NextResponse.json(
      {
        message:
          delivery === "resend"
            ? `${formatTitle(formData.formType)} delivered via Resend`
            : `${formatTitle(formData.formType)} recorded (Resend unavailable)`,
        delivery,
        resendError: resendErrorDetails ? (resendErrorDetails instanceof Error ? serializeError(resendErrorDetails) : resendErrorDetails) : null,
        sheetStatus,
        sheetError,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", serializeError(error));
    return NextResponse.json(
      { message: "Error processing form submission", error: serializeError(error) },
      { status: 500 }
    );
  }
}
