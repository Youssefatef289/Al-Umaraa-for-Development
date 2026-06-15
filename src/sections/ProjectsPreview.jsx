import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ProjectShowcase from "@/sections/ProjectShowcase";
import Reveal from "@/components/Reveal";
import { portfolioProjects } from "@/data/portfolio";
import { ArrowLeft } from "@/components/Icons";

export default function ProjectsPreview() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="أعمالنا السابقة"
          title="مشاريع نفخر بإنجازها"
          subtitle="نماذج حقيقية من مشاريعنا السكنية في بني سويف وأهناسيا والحمرايا."
        />

        <div className="mt-14">
          <ProjectShowcase projects={portfolioProjects} limit={4} />
        </div>

        <Reveal delay={0.15} className="mt-16 flex justify-center">
          <Link to="/projects" className="btn-outline">
            عرض جميع المشاريع
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
