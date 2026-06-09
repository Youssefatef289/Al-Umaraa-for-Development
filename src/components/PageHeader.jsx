import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, image, crumbs }) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pb-14 pt-36">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      <div className="container-x relative z-10">
        {crumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 flex items-center gap-2 text-sm text-navy/60"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-navy/30">/</span>}
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-extrabold text-navy text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-lg text-navy/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
