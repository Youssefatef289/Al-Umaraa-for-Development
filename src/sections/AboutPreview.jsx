import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { slideRight, slideLeft, staggerContainer, fadeUp } from "@/lib/motion";
import { Check, ArrowLeft } from "@/components/Icons";
import { site } from "@/data/site";

const points = [
  "تصاميم معمارية عصرية بمعايير عالمية",
  "التزام صارم بمواعيد التسليم",
  "مواقع استراتيجية في أرقى المناطق",
  "أنظمة سداد مرنة تناسب الجميع",
];

export default function AboutPreview() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-luxe">
            <img
              src="/about-section.jpg"
              alt={`عن ${site.name} - شريكك في كل خطوة`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gold-gradient p-6 text-navy shadow-gold sm:block"
          >
            <p className="font-display text-4xl font-extrabold">15+</p>
            <p className="text-sm font-bold">عامًا من التميّز</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow mb-3">
            <span className="h-px w-8 bg-gold" />
            من نحن
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            شريكك الموثوق في عالم العقارات الفاخرة
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/65">
            {site.fullName} شركة رائدة متخصصة في تطوير المشاريع السكنية والتجارية
            والإدارية. نؤمن بأن المكان ليس مجرد جدران، بل أسلوب حياة متكامل، لذلك
            نهتم بكل تفصيلة من التصميم وحتى التسليم.
          </p>

          <motion.ul
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {points.map((p) => (
              <motion.li
                key={p}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-navy/75">{p}</span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.2} className="mt-9">
            <Link to="/about" className="btn-gold">
              تعرّف علينا أكثر
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}
