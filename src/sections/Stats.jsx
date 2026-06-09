import { useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 25, suffix: "+", label: "مشروع مكتمل" },
  { value: 5000, suffix: "+", label: "عميل راضٍ" },
  { value: 15, suffix: "", label: "عامًا من الخبرة" },
  { value: 98, suffix: "%", label: "نسبة رضا العملاء" },
];

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, { start: active });
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-extrabold text-gold-gradient sm:text-5xl">
        {count.toLocaleString("en-US")}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-navy/65 sm:text-base">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);

  return (
    <section className="relative overflow-hidden border-y border-navy/10 bg-ink-soft py-16">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D5710C 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        onViewportEnter={() => setActive(true)}
        viewport={{ once: true, amount: 0.4 }}
        className="container-x relative grid grid-cols-2 gap-10 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </motion.div>
    </section>
  );
}
