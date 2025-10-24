"use client";

import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home";
  const isContactPage = pathname === "/contactus";
  const isAboutPage = pathname === "/aboutus";
  const isProjectPage = pathname === "/projects";

  return (
    <div className={`${poppins.variable} antialiased`}>
      <div className="hidden md:flex lg:flex">{/* <CustomCursor /> */}</div>
      {!isHomePage && !isContactPage && !isAboutPage && !isProjectPage && <Navbar />}
      {children}
      <Footer />
    </div>
  );
}
