import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import VisionMission from "@/sections/VisionMission";
import Stats from "@/sections/Stats";
import CTA from "@/sections/CTA";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { Gem, Shield, Handshake, Sparkles } from "@/components/Icons";

const timeline = [
  {
    year: "2011",
    title: "البداية والتأسيس",
    desc: "انطلقت الشركة برؤية واضحة: تقديم عقارات تجمع بين الجودة والفخامة وأسعار عادلة.",
  },
  {
    year: "2015",
    title: "أول مجتمع متكامل",
    desc: "أطلقنا أول كمبوند سكني متكامل الخدمات وحقق نجاحًا كبيرًا ونفادًا سريعًا للوحدات.",
  },
  {
    year: "2019",
    title: "التوسّع الجغرافي",
    desc: "وسّعنا نشاطنا ليشمل العاصمة الإدارية والساحل الشمالي بمشاريع نوعية متميزة.",
  },
  {
    year: "2023",
    title: "الريادة الرقمية",
    desc: "تبنّينا أحدث تقنيات البناء والمنازل الذكية لنقدّم تجربة سكن عصرية بالكامل.",
  },
  {
    year: "2026",
    title: "نحو المستقبل",
    desc: "نواصل بناء مجتمعات تعيد تعريف الحياة العصرية مع محفظة مشاريع تتجاوز كل التوقعات.",
  },
];

const values = [
  { icon: Gem, title: "الإتقان", desc: "نسعى للكمال في كل تفصيلة." },
  { icon: Shield, title: "النزاهة", desc: "الشفافية أساس علاقتنا بعملائنا." },
  { icon: Handshake, title: "الالتزام", desc: "وعودنا عهد نلتزم به دائمًا." },
  { icon: Sparkles, title: "الابتكار", desc: "نبتكر حلولًا تواكب المستقبل." },
];

function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
      {/* الخط الأساسي */}
      <div className="absolute bottom-0 right-[7px] top-0 w-0.5 bg-navy/10 sm:right-1/2 sm:translate-x-1/2" />
      {/* خط التقدّم المتحرك */}
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute bottom-0 right-[7px] top-0 w-0.5 origin-top bg-gold-gradient sm:right-1/2 sm:translate-x-1/2"
      />

      <div className="space-y-12">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative pr-10 sm:w-1/2 sm:pr-0 ${
              i % 2 === 0
                ? "sm:mr-auto sm:pl-12 sm:text-start"
                : "sm:ml-auto sm:pr-12"
            }`}
          >
            <span
              className={`absolute right-0 top-1.5 z-10 h-4 w-4 rounded-full border-2 border-gold bg-ink sm:right-auto ${
                i % 2 === 0
                  ? "sm:-left-2 sm:translate-x-1/2"
                  : "sm:-right-2 sm:-translate-x-1/2"
              }`}
            />
            <div className="card p-6">
              <span className="font-display text-2xl font-extrabold text-gold-gradient">
                {item.year}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        title="من نحن"
        subtitle="قصة شغف بالعقار امتدت لأكثر من 15 عامًا من الإبداع والتميّز."
        image="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ to: "/", label: "الرئيسية" }, { label: "من نحن" }]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="مسيرتنا"
            title="رحلة من الإنجازات"
            subtitle="محطات بارزة شكّلت حاضر الشركة ورسمت ملامح مستقبلها."
          />
          <Timeline />
        </div>
      </section>

      <Stats />

      <VisionMission />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="قيمنا"
            title="المبادئ التي نؤمن بها"
          />
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="card p-7 text-center transition-colors hover:border-gold/40"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-navy/60">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
