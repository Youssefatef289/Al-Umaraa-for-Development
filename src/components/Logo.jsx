import { Link } from "react-router-dom";
import { site } from "@/data/site";

export default function Logo({ className = "", showText = true, light = false }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={site.name}
    >
      <span className="relative flex h-20 w-20 items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img
          src="/logo.png"
          alt={site.name}
          className="h-full w-full object-cover "
          loading="eager"
          decoding="async"
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display text-lg font-extrabold ${
              light ? "text-white" : "text-navy"
            }`}
          >
            {site.nameShort}
          </span>
          
        </span>
      )}
    </Link>
  );
}
