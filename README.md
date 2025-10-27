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
- **Email API:** Resend via `/api/sendEmail`
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
│           └── route.ts        # Email API (Resend integration)
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

# ---------- RESEND CONFIG (for /api/sendEmail) ----------
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL="Inspace <contact@mail.inspacestore.in>"
RESEND_TO_EMAIL=hello@inspacestore.in

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
Current Handler (src/app/api/sendEmail/route.ts)

- Accepts the JSON payload shown above.
- Logs the submission server-side for monitoring.
- Sends the submission details through Resend using the API key (`RESEND_API_KEY`).
- Responds with delivery metadata `{ delivery: "resend" | "logged" }` so callers know when Resend fails.
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

