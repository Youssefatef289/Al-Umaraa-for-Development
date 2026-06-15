import PageTransition from "@/components/PageTransition";
import Hero from "@/sections/Hero";
import AboutPreview from "@/sections/AboutPreview";
import WhyUs from "@/sections/WhyUs";
import ProjectsPreview from "@/sections/ProjectsPreview";
import MissionSlider from "@/sections/MissionSlider";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AboutPreview />
      <MissionSlider />
      <WhyUs />
      <ProjectsPreview />
      <CTA />
    </PageTransition>
  );
}
