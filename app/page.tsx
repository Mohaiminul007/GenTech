import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import ProjectSection from "@/Components/ProjectSection";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider
     attribute="class"
      defaultTheme="dark"
      forcedTheme="dark" >
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <ProjectSection/>
      
    </div>
    </ThemeProvider>
  );
}
