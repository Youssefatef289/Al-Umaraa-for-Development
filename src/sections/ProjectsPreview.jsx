import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import { ArrowLeft } from "@/components/Icons";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="مشاريعنا المميزة"
          title="وجهات سكنية تصنع الفارق"
          subtitle="مجموعة مختارة من أرقى مشاريعنا المصممة بعناية لتلبّي تطلعاتك."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <Link to="/projects" className="btn-outline">
            عرض جميع المشاريع
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
