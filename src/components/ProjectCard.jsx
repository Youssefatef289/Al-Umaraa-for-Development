import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";
import { categoryLabels } from "@/data/projects";
import { MapPin, ArrowLeft, Building } from "./Icons";

function isVideo(src) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src);
}

function ProjectMedia({ project, className }) {
  if (project.coverVideo) {
    return (
      <video
        src={project.coverVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={className}
        aria-label={project.name}
      />
    );
  }

  return (
    <img
      src={project.cover}
      alt={project.name}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export default function ProjectCard({ project }) {
  return (
    <motion.div variants={scaleIn}>
      <Link
        to={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-navy/10 bg-ink-card/70 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <ProjectMedia
            project={project}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <span className="absolute right-4 top-4 rounded-full border border-gold/30 bg-ink/70 px-3 py-1 text-xs font-bold text-gold backdrop-blur">
            {categoryLabels[project.category]}
          </span>
          {project.progress < 100 && (
            <span className="absolute bottom-4 right-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-navy backdrop-blur">
              الإنجاز {project.progress}%
            </span>
          )}
          {project.progress >= 100 && (
            <span className="absolute bottom-4 right-4 rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              تم التسليم
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-navy/55">
            <MapPin className="h-4 w-4 text-gold" />
            {project.location}
          </div>
          <h3 className="font-display text-xl font-bold text-navy transition-colors group-hover:text-gold">
            {project.name}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy/60">
            {project.short}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4">
            <span className="flex items-center gap-2 text-xs font-semibold text-navy/55">
              <Building className="h-4 w-4 text-gold" />
              {project.building.totalUnits} وحدة
            </span>
            <span className="flex items-center gap-1.5 text-sm font-bold text-gold transition-all group-hover:gap-3">
              التفاصيل
              <ArrowLeft className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export { isVideo };
