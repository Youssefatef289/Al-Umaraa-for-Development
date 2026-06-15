import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectMediaSlider from "@/components/ProjectMediaSlider";
import { fadeUp } from "@/lib/motion";
import { ArrowLeft } from "@/components/Icons";

function ProjectShowcaseRow({ project, reversed }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
    >
      <div className={`order-1 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
        <ProjectMediaSlider media={project.gallery} name={project.name} />
      </div>

      <div
        className={`order-2 flex flex-col justify-center text-right ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <h3 className="font-display text-3xl font-extrabold text-[#A17F4E] sm:text-4xl lg:text-[2.5rem]">
          {project.name}
        </h3>
        <p className="mt-5 text-base leading-[2] text-navy/70 sm:text-lg">
          {project.description}
        </p>
        <div className="mt-8">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-bold text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            عرض التفاصيل
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase({ projects, limit }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="space-y-20 lg:space-y-28">
      {items.map((project, index) => (
        <ProjectShowcaseRow
          key={project.slug}
          project={project}
          reversed={index % 2 === 1}
        />
      ))}
    </div>
  );
}
