import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";
import { ArrowLeft, MapPin } from "./Icons";
import { isVideo } from "./ProjectCard";
import TypewriterText from "./TypewriterText";

const ROTATE_MS = 4500;

export default function ProjectHoverCard({ project }) {
  const media = project.gallery?.length ? project.gallery : [project.cover];
  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % media.length),
      ROTATE_MS
    );
    return () => clearInterval(timer);
  }, [media.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index, media.length]);

  return (
    <motion.div variants={scaleIn} className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="project-card group block h-full"
        aria-label={`${project.name} — عرض التفاصيل`}
      >
        <div className="project-card-media" aria-hidden>
          {media.map((src, i) =>
            isVideo(src) ? (
              <video
                key={`${src}-${i}`}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                className={`project-card-media-item ${i === index ? "is-active" : ""}`}
              />
            ) : (
              <img
                key={`${src}-${i}`}
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className={`project-card-media-item ${i === index ? "is-active" : ""}`}
              />
            )
          )}
        </div>

        <div className="project-card-dots" aria-hidden>
          {media.map((_, i) => (
            <span
              key={i}
              className={`project-card-dot ${i === index ? "is-active" : ""}`}
            />
          ))}
        </div>

        <div className="project-card-details">
          <div className="project-card-extra">
            <p className="project-card-text">{project.short}</p>
            <p className="project-card-location">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {project.location}
            </p>
            <span className="btn-light btn-sm project-card-cta">
              عرض التفاصيل
              <ArrowLeft className="h-3.5 w-3.5" />
            </span>
          </div>

          <h3 className="project-card-header">
            <TypewriterText text={project.name} />
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
