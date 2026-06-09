import PageTransition from "@/components/PageTransition";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import AboutPreview from "@/sections/AboutPreview";
import WhyUs from "@/sections/WhyUs";
import ProjectsPreview from "@/sections/ProjectsPreview";
import VisionMission from "@/sections/VisionMission";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <AboutPreview />
      <WhyUs />
      <ProjectsPreview />
      <VisionMission />
      <CTA />
    </PageTransition>
  );
}
