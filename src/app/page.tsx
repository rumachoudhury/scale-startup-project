import Bannar from "@/components/Bannar";
import Navbar from "../components/Navbar";
import Struggling from "@/components/ Struggling";
import Solutions from "@/components/Solutions";
import GrowthSection from "@/components/GrowthSection";
import OurClient from "@/components/OurClients";
import WhyScaleStartups from "@/components/WhyScaleStartups";
import OurServices from "@/components/OurServices";
import WorkProcess from "@/components/WorkProcess";
import Portfolio from "@/components/Portfolio";
import GreatProducts from "@/components/GreatProducts";
import WhatWeDeliver from "@/components/WhatWeDeliver";
import HyperGrowth from "@/components/HyperGrowth";
import StartupDomination from "@/components/StartupDomination";
import Roadmap from "@/components/Roadmap";
// import BlueSvg from "@/components/BlueSvg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Bannar />
      <Struggling />
      <Solutions />
      <GrowthSection />
      <OurClient />
      <WhyScaleStartups />
      <OurServices />
      <WorkProcess />
      <Portfolio />
      <GreatProducts />
      <WhatWeDeliver />
      <HyperGrowth />
      <StartupDomination />
      <Roadmap />
    </>
  );
}
