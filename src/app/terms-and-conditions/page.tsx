import TermsAndConditions from "@/components/common/TermsAndConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions - Inspace Stores",
    description: "Read the terms and conditions of Inspace Stores, outlining the rules and regulations for using our services and website.",
    alternates: {
        canonical: "https://www.inspacestore.in/terms-and-conditions"
    }
};

export default function Home() {
    return (
        <div className="max-w-[100vw] overflow-hidden">
            <TermsAndConditions />
        </div>
    );
}