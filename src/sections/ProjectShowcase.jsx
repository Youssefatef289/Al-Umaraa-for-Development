import { motion } from "framer-motion";
import ProjectHoverCard from "@/components/ProjectHoverCard";
import { staggerContainer } from "@/lib/motion";

export default function ProjectShowcase({ projects, limit }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
    >
      {items.map((project) => (
        <ProjectHoverCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}
