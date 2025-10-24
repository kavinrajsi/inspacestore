import { Metadata } from "next";
import HeroContactPage from "@/components/contactus/heroContactPage";
import VisitUs from "@/components/contactus/visitus";
// import VideoConsultSection from "@/components/contactus/videoConsultSection";
import HowItWorksSection from "@/components/contactus/howItWorksSection";
import TestimonialSection from "@/components/home/testimonial";
import FAQPage from "@/components/common/FAQPge";

export const metadata: Metadata = {
  title: "Contact us | INSPACE STORE",
  description: "Contact page",
  alternates: {
    canonical: "https://www.inspacestore.in/contactus"
  },
};

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <HeroContactPage />
      <VisitUs />
      {/* <VideoConsultSection /> */}
      <HowItWorksSection />
      <TestimonialSection />
      <FAQPage />
    </div>
  );
}
