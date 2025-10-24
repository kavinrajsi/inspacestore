import { Metadata } from "next";
import Article from "@/components/blogs/Article";
// import InteriorDesign from "@/components/blogs/InteriorDesign";
import Header from "@/components/common/Header";
import ExpertForm from "@/components/common/ExpertForm";

export const metadata: Metadata = {
  title: "Insights - Inspace Stores",
  description: "Inspace Stores is the leading rack manufacturers in Chennai offering premium quality racks with personalized features for retail, supermarket, warehouses, and industrial storage solutions. Our durable and customizable racks are designed to maximize space efficiency and enhance organization.",
  alternates: {
    canonical: "https://www.inspacestore.in/insights"
  },
};

export default function Blogs() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Header/>
      <Article />
      {/* <InteriorDesign /> */}
      <ExpertForm backgroundImage="/assets/Blogs/ExpertForm.png" />
    </div>
  );
}
