import { Metadata } from "next";
import FAQPage from "@/components/common/FAQPge";
import TestimonialCard from "@/components/home/testimonial";
import ClientGrid from "@/components/home/clientGrid";
// import WhyChooseUs from "@/components/home/whyChooseUs";
import PortfolioGrid from "@/components/home/portfolioGrid";
import HeroSection from "@/components/home";
// import ProductFilterPage from "@/components/projects/ProductFilterPage";

export const metadata: Metadata = {
  title: "Inspace Stores - Projects",
  description: "Explore our successful rack manufactured projects that showcase our premium quality and style. Our customized solutions ensure maximum space utilization, durability, and efficiency for every business.",
  alternates: {
    canonical: "https://www.inspacestore.in/projects"
  }
};

export default function Blogs() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <HeroSection />
      {/* <ProductFilterPage/> */}
      <PortfolioGrid />
      <ClientGrid />
      <TestimonialCard />
      <FAQPage />
    </div>
  );
}
