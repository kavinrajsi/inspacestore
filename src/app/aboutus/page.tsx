import AwardsSection from "@/components/aboutus/awardsSection";
import FactoryExplorer from "@/components/aboutus/factoryExplorer";
import HeroAboutPage from "@/components/aboutus/heroAboutPage";
import JourneySection from "@/components/aboutus/journeySection";
import ManagementAttention from "@/components/aboutus/managementAttention";
import MeetOurTeam from "@/components/aboutus/meetOurTeam";
import MissionVisionSection from "@/components/aboutus/missionAndVision";
import TeamSection from "@/components/aboutus/teamSection";
// import ExpertForm from "@/components/common/ExpertForm";
import StatsDisplay from "@/components/home/statsDisplay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspace Stores - Premier Rack Manufacturers & Suppliers ",
  description: "Inspace Stores is a racking company with 38+ years of industry expertise, providing a wide range of customized racks for retail stores, supermarkets, warehouses, and industrial spaces, helping businesses optimize their storage and display needs.",
  alternates: {
    canonical: "https://www.inspacestore.in/aboutus "
  }
};

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <HeroAboutPage />
      <ManagementAttention />
      <StatsDisplay />
      <TeamSection />
      <MeetOurTeam/>
      <MissionVisionSection/>
      <JourneySection/>
      <FactoryExplorer/>
      <AwardsSection/>
      {/* <ExpertForm backgroundImage="/assets/aboutus/designBg.svg" staticWords/> */}
    </div>
  );
}
