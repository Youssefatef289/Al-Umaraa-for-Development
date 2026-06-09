import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { scaleIn, staggerContainer } from "@/lib/motion";
import { Gem, Shield, Handshake, Sparkles } from "@/components/Icons";

const items = [
  {
    icon: Gem,
    title: "جودة لا تقبل المساومة",
    desc: "خامات ممتازة وتشطيبات راقية تعكس فخامة المكان وتدوم لأجيال.",
  },
  {
    icon: Shield,
    title: "ثقة وأمان",
    desc: "سجل حافل من المشاريع المسلّمة في موعدها وعقود واضحة تحمي حقوقك.",
  },
  {
    icon: Handshake,
    title: "خطط سداد مرنة",
    desc: "أنظمة دفع وتقسيط متنوعة مصممة لتناسب إمكانياتك وتطلعاتك.",
  },
  {
    icon: Sparkles,
    title: "تصميم استثنائي",
    desc: "هندسة معمارية عصرية ومساحات مدروسة تمنحك تجربة معيشة فريدة.",
  },
];

export default function WhyUs() {
  return (
    <section className="section relative overflow-hidden bg-ink-soft">
      <div className="absolute inset-0 bg-radial-fade opacity-70" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="لماذا نحن"
          title="أسباب تجعلنا خيارك الأول"
          subtitle="نقدّم أكثر من مجرد عقار؛ نقدّم تجربة متكاملة مبنية على الثقة والإتقان."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={scaleIn}>
              <TiltCard className="group h-full rounded-2xl border border-navy/10 bg-ink-card/70 p-7 backdrop-blur transition-colors duration-300 hover:border-gold/40">
                <div
                  style={{ transform: "translateZ(40px)" }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-navy"
                >
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">
                  {item.desc}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
