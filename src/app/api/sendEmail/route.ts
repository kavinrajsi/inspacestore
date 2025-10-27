import { NextResponse } from "next/server";

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

const RESEND_API_ENDPOINT = "https://api.resend.com/emails";
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "addasdsd";

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
  const toAddress =
    process.env.RESEND_TO_EMAIL ?? "inspacestores2012@gmail.com";
  const fromAddress =
    process.env.RESEND_FROM_EMAIL ?? "no-reply@inspacestore.in";

  const rows = [
    ["Name", fullName],
    ["Email", email],
    ["Phone Number", phoneNumber],
    ["Message", message],
    ["Project Location", projectLocation],
    ["Submitted At", new Date().toLocaleString()],
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
    from: fromAddress,
    to: [toAddress],
    subject,
    html,
    text,
  };
};

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    let fullName = "";
    let email = "N/A";
    let phoneNumber = "N/A";
    let message = "N/A";
    let projectLocation = "N/A";

    switch (formData.formType) {
      case "contact":
        fullName = `${formData.firstName} ${formData.lastName}`.trim();
        email = formData.email;
        phoneNumber = formData.phoneNumber;
        message = formData.message;
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
        break;
      default:
        break;
    }

    console.info("Form submission received:", {
      formType: formData.formType,
      fullName,
      email,
      phoneNumber,
      message,
      projectLocation,
    });

    let delivery: "resend" | "logged" = "resend";
    let resendErrorDetails: unknown = null;

    try {
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
        const errorText = await resendResponse.text();
        resendErrorDetails = {
          status: resendResponse.status,
          error: errorText,
        };
        console.error("Resend API error:", resendErrorDetails);
        delivery = "logged";
      }
    } catch (resendError) {
      resendErrorDetails = {
        message: "Exception while calling Resend",
        error: resendError,
      };
      console.error("Error sending email via Resend:", resendError);
      delivery = "logged";
    }

    return NextResponse.json(
      {
        message:
          delivery === "resend"
            ? `${formatTitle(formData.formType)} delivered via Resend`
            : `${formatTitle(formData.formType)} recorded (Resend unavailable)`,
        delivery,
        resendError: resendErrorDetails,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { message: "Error processing form submission", error },
      { status: 500 }
    );
  }
}
