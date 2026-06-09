import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { getProject, categoryLabels } from "@/data/projects";
import { site } from "@/data/site";
import {
  MapPin,
  Layers,
  Home,
  Building,
  Ruler,
  Calendar,
  Check,
  Star,
  ArrowLeft,
} from "@/components/Icons";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/projects" replace />;

  const stats = [
    { icon: Layers, label: "عدد الأدوار", value: `${project.building.floors} دور` },
    { icon: Home, label: "وحدات بالدور", value: `${project.building.unitsPerFloor}` },
    { icon: Building, label: "إجمالي الوحدات", value: `${project.building.totalUnits}` },
    { icon: Ruler, label: "مساحة المشروع", value: project.building.area },
    { icon: Calendar, label: "موعد التسليم", value: project.deliveryYear },
  ];

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    project.location
  )}&output=embed`;

  return (
    <PageTransition>
      {/* Header */}
      <section className="relative border-b border-navy/10 pt-28 pb-10">
        <div className="absolute inset-0 -z-10 bg-radial-fade" />
        <div className="container-x">
          <Reveal>
            <nav className="mb-5 flex items-center gap-2 text-sm text-navy/60">
              <Link to="/" className="hover:text-gold">الرئيسية</Link>
              <span className="text-navy/30">/</span>
              <Link to="/projects" className="hover:text-gold">المشاريع</Link>
              <span className="text-navy/30">/</span>
              <span className="text-gold">{project.name}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                {categoryLabels[project.category]}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-navy/60">
                <MapPin className="h-4 w-4 text-gold" />
                {project.location}
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy sm:text-5xl">
              {project.name}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main grid */}
      <section className="section pt-12">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <Reveal>
              <Gallery images={project.gallery} name={project.name} />
            </Reveal>

            {/* Overview + progress */}
            <Reveal>
              <h2 className="mb-4 font-display text-2xl font-bold text-navy">
                نظرة عامة على المشروع
              </h2>
              <p className="text-base leading-loose text-navy/70">
                {project.description}
              </p>

              <div className="mt-7 rounded-2xl border border-navy/10 bg-ink-card/60 p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy/70">
                    نسبة إنجاز المشروع
                  </span>
                  <span className="font-display text-lg font-extrabold text-gold">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-navy/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gold-gradient"
                  />
                </div>
              </div>
            </Reveal>

            {/* Building stats */}
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-bold text-navy">
                تفاصيل المبنى
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="card flex flex-col items-center gap-2 p-5 text-center transition-colors hover:border-gold/30"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <p className="text-xs text-navy/50">{s.label}</p>
                    <p className="font-bold text-navy">{s.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Features */}
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-bold text-navy">
                مميزات المشروع
              </h2>
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {project.features.map((f) => (
                  <motion.div
                    key={f}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-navy/10 bg-ink-card/50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                      <Star className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-navy/80">{f}</span>
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>

            {/* Payment plans */}
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-bold text-navy">
                أنظمة السداد
              </h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {project.payment.map((plan, i) => (
                  <div
                    key={plan.name}
                    className={`card p-6 text-center transition-all hover:-translate-y-1 ${
                      i === 1 ? "border-gold/40 shadow-gold" : ""
                    }`}
                  >
                    <h3 className="font-display text-lg font-bold text-navy">
                      {plan.name}
                    </h3>
                    <p className="mt-4 font-display text-3xl font-extrabold text-gold-gradient">
                      {plan.down}
                    </p>
                    <p className="mt-1 text-sm text-navy/55">مقدم</p>
                    <div className="my-4 h-px bg-navy/10" />
                    <p className="text-sm text-navy/70">{plan.years}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Location map */}
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-bold text-navy">
                الموقع
              </h2>
              <div className="overflow-hidden rounded-2xl border border-navy/10">
                <iframe
                  title={`موقع ${project.name}`}
                  src={mapSrc}
                  width="100%"
                  height="380"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
                />
              </div>
            </Reveal>
          </div>

          {/* Sticky sidebar - booking */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">
              <div className="card p-6">
                <h3 className="font-display text-xl font-bold text-navy">
                  احجز معاينة
                </h3>
                <p className="mt-2 text-sm text-navy/60">
                  املأ البيانات وسيتواصل معك فريق المبيعات في أقرب وقت.
                </p>
                <div className="mt-5">
                  <BookingForm projectName={project.name} compact />
                </div>
              </div>

              <Link
                to="/projects"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-navy/60 transition-colors hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" />
                العودة لجميع المشاريع
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}
