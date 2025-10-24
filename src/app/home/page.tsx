import HeroSection from "@/components/home";
import { Metadata } from "next";
import FAQPage from "@/components/common/FAQPge";
import TestimonialCard from "@/components/home/testimonial";
import ClientGrid from "@/components/home/clientGrid";
import WhyChooseUs from "@/components/home/whyChooseUs";
import PortfolioGrid from "@/components/home/portfolioGrid";
import StatsDisplay from "@/components/home/statsDisplay";
import HeroMainPage from "@/components/home/HeroMainPage";
import HowItWorksSection from "@/components/contactus/howItWorksSection";

export const metadata: Metadata = {
  title: "Rack Manufacturers in Chennai | Steel Rack Suppliers Chennai",
  description: "Inspace Stores is the leading rack manufacturers in Chennai offering premium quality racks with personalized features for retail, supermarket, warehouses, and industrial storage solutions. Our durable and customizable racks are designed to maximize space efficiency and enhance organization.",
  alternates: {
    canonical: "https://www.inspacestore.in/home"
  },
};

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <HeroMainPage />
      {/* <HeroSection /> */}
      <StatsDisplay />
      <WhyChooseUs />
      <PortfolioGrid />
      <ClientGrid />
      <TestimonialCard />
      <HowItWorksSection />
      <FAQPage />
    </div>
  );
}
