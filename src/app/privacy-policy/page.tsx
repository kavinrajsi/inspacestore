import PrivacyPolicy from "@/components/common/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Inspace Stores",
    description: "Learn about the privacy policy of Inspace Stores, detailing how we collect, use, and protect your personal information.",
    alternates: {
        canonical: "https://www.inspacestore.in/privacy-policy"
    }
};

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
     <PrivacyPolicy/>
    </div>
  );
}