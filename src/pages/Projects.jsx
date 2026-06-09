import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/sections/CTA";
import { projects, categories } from "@/data/projects";
import { staggerContainer } from "@/lib/motion";

export default function Projects() {
  const [active, setActive] = useState("all");

  const counts = useMemo(() => {
    const c = { all: projects.length };
    categories.forEach((cat) => {
      if (cat.key !== "all")
        c[cat.key] = projects.filter((p) => p.category === cat.key).length;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <PageTransition>
      <PageHeader
        title="مشاريعنا العقارية"
        subtitle="اكتشف مجموعتنا المتكاملة من المشاريع السكنية والتجارية والإدارية."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ to: "/", label: "الرئيسية" }, { label: "المشاريع" }]}
      />

      <section className="section">
        <div className="container-x">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActive(cat.key)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  active === cat.key
                    ? "border-gold bg-gold-gradient text-navy shadow-gold"
                    : "border-navy/15 text-navy/70 hover:border-gold/50 hover:text-navy"
                }`}
              >
                {cat.label}
                <span
                  className={`mr-2 rounded-full px-2 py-0.5 text-xs ${
                    active === cat.key ? "bg-ink/15" : "bg-navy/10"
                  }`}
                >
                  {counts[cat.key] ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            key={active}
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="show"
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-navy/50">
              لا توجد مشاريع في هذا التصنيف حاليًا.
            </p>
          )}
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
