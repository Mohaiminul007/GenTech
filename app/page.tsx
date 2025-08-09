import { CallToAction } from "@/Components/CallToAction";
import { Footer } from "@/Components/Footer";
import Hero from "@/Components/Hero";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navbar from "@/Components/Navbar";
import OurService from "@/Components/OurService";
import OurVision from "@/Components/OurVision";
import ProjectSection from "@/Components/ProjectSection";
import Reviews from "@/Components/Reviews";
import ToolsWeUse from "@/Components/ToolsWeUse";
import WhyChoseGenTech from "@/Components/WhyGenTech";
export default function Home() {
  return (
    
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <ProjectSection/>
      <Reviews/>
      <ToolsWeUse/>
      <OurService/>
      <WhyChoseGenTech/>
      <OurVision/>
      <CallToAction/>
      <Footer/>
      
    </div>
    
  );
}
