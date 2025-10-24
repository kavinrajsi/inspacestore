import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as XLSX from 'xlsx';
import { appendToGoogleSheet } from '@/lib/googleSheet';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  whatsappUpdates?: boolean;
  formType: 'contact';
}

interface FooterFormData {
  name: string;
  phoneNumber: string;
  formType: 'footer';
}

interface InsightFormData {
  name: string;
  email: string;
  phone: string;
  projectLocation: string;
  whatsappUpdates?: boolean;
  formType: 'insight';
}

type FormData = ContactFormData | FooterFormData | InsightFormData;



export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    // Get full name based on form type
    let fullName = '';
    let email = 'N/A';
    let phoneNumber = 'N/A';
    let message = 'N/A';
    let projectLocation = 'N/A';

    // Extract data based on form type
    switch (formData.formType) {
      case 'contact':
        const contactData = formData as ContactFormData;
        fullName = `${contactData.firstName} ${contactData.lastName}`.trim();
        email = contactData.email;
        phoneNumber = contactData.phoneNumber;
        message = contactData.message;
        break;
      case 'footer':
        const footerData = formData as FooterFormData;
        fullName = footerData.name;
        phoneNumber = footerData.phoneNumber;
        break;
      case 'insight':
        const InsightData = formData as InsightFormData;
        fullName = InsightData.name;
        email = InsightData.email;
        phoneNumber = InsightData.phone;
        projectLocation = InsightData.projectLocation;
        break;
    }

    // Create worksheet data
    const wsData = [
      ['Field', 'Value'],
      ['Form Type', formData.formType],
      ['Name', fullName],
      ['Email', email],
      ['Phone Number', phoneNumber],
      ['Message', message],
      ['Project Location', projectLocation],
      ['Submission Date', new Date().toLocaleString()]
    ];

    const timestamp = new Date().toLocaleString();

    // Store in Google Sheets
    await appendToGoogleSheet([
      timestamp,
      formData.formType,
      fullName,
      email,
      phoneNumber,
      message,
      projectLocation,
    ]);

    // Create Excel worksheet
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Form Submission');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Set up email options
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `${formData.formType.charAt(0).toUpperCase() + formData.formType.slice(1)} Form Submission`,
      text: `
        Form Type: ${formData.formType}
        Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Message: ${message}
        Project Location: ${projectLocation}
      `,
      html: `
        <h2>${formData.formType.charAt(0).toUpperCase() + formData.formType.slice(1)} Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Project Location:</strong> ${projectLocation}</p>
      `,
      attachments: [
        {
          filename: `${formData.formType}_submission_${Date.now()}.xlsx`,
          content: excelBuffer,
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ message: 'Error processing form submission', error }, { status: 500 });
  }
}