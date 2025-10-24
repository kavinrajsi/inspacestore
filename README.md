# 🏗️ INSPACE-WEB-2025

A modern **Next.js 14** (App Router) project for **INSPACE**, built using **TypeScript**.  
This repository powers the official **Inspace Store website** and its internal UAT deployment.

---

## 🌍 Environments

| Environment | URL |
|--------------|-----|
| **Production** | [https://inspacestore.in](https://inspacestore.in) |
| **UAT** | [https://inspace.ysd.agency](https://inspace.ysd.agency) |

---

## ⚙️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** CSS Modules / Global CSS
- **Email API:** SMTP via `/api/sendEmail`
- **Hosting:** Vercel / Custom Node (manual deploy)
- **Font Optimization:** [Geist Font (Vercel)](https://vercel.com/font)

---

## 🧱 Folder Structure

src/
├── app/                        # Next.js App Router entry
│   ├── layout.tsx              # Global layout wrapper
│   ├── globals.css             # Global styles
│   ├── favicon.ico
│   │
│   ├── home/                   # Home Page
│   │   └── page.tsx
│   ├── aboutus/                # About Us Page
│   │   └── page.tsx
│   ├── projects/               # Projects Overview
│   │   └── page.tsx
│   ├── insights/               # Insights / Blog Section
│   │   └── page.tsx
│   ├── contactus/              # Contact Us Page
│   │   └── page.tsx
│   ├── products/[...slug]/     # Dynamic Product Detail Pages
│   │   └── page.tsx
│   └── api/
│       └── sendEmail/
│           └── route.ts        # Email API (SMTP Integration)
│
├── components/                 # Reusable UI components
├── hooks/                      # Custom React hooks (API, forms, etc.)
└── lib/                        # Utilities, constants, and helper functions




## 🚀 Getting Started

### 1️⃣ Installation


npm i
Requires Node.js v18+

2️⃣ Development Server


npm run dev
Open http://localhost:3000 in your browser.

🧩 Environment Setup
Create a .env.local file in your project root.


# ---------- SITE CONFIG ----------
NEXT_PUBLIC_SITE_URL=https://inspacestore.in
NEXT_PUBLIC_ENV=production    # local | uat | production

# ---------- SMTP CONFIG (for /api/sendEmail) ----------
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false             # true if port 465
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM="Inspace <no-reply@inspacestore.in>"
SMTP_TO=hello@inspacestore.in

# ---------- OPTIONAL ----------
# NEXT_PUBLIC_GA_ID=G-XXXXXXX
For UAT:


NEXT_PUBLIC_SITE_URL=https://inspace.ysd.agency
NEXT_PUBLIC_ENV=uat
📬 API — /api/sendEmail
Method
POST

Example Request Body

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 90000 00000",
  "subject": "Product Enquiry",
  "message": "Hi team, I’m interested in the modular workstation."
}
Response

{ "ok": true }
Example NodeMailer Handler (src/app/api/sendEmail/route.ts)

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `[INSPACE] ${body.subject}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone}
        Message:
        ${body.message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
🖥️ Pages Overview
Page	Path	Description
Home	/home	Landing page — hero, features, CTA
About Us	/aboutus	Company story, team, and mission
Projects	/projects	Showcase of key Inspace projects
Insights	/insights	Blog, updates, and interior design trends
Products	/products/[slug]	Dynamic product detail pages
Contact Us	/contactus	Inquiry form → /api/sendEmail

🧰 Available Scripts

npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Run production server
npm run lint      # Lint code
🧾 Notes
Uses App Router for routing (no pages/ directory).

Uses React Server Components (RSC) where applicable.

Images are optimized automatically via Next.js <Image>.

Fonts are preloaded using next/font for optimal performance.

Global SEO metadata can be set in each page’s metadata export.

💡 Contribution
Feel free to open issues or submit pull requests for enhancements or bug fixes.

🏁 Deployment
Deploy manually or using your CI/CD setup.
This README omits platform-specific instructions.

Env	URL
Production	https://inspacestore.in
UAT	https://inspace.ysd.agency

© 2025 INSPACE • Designed & Developed by YSD





