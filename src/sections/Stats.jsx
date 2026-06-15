import { useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

export const companyStats = [
  { value: 25, prefix: "+", suffix: "", label: "مشروع مكتمل" },
  { value: 5000, prefix: "+", suffix: "", label: "عميل راضٍ", comma: true },
  { value: 15, prefix: "", suffix: "", label: "عامًا من الخبرة" },
  { value: 98, prefix: "", suffix: "%", label: "نسبة رضا العملاء" },
];

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, { start: active });
  const formatted = stat.comma
    ? count.toLocaleString("en-US")
    : String(count);

  return (
    <div className="text-center">
      <p className="font-display text-4xl font-extrabold leading-none text-[#C2741F] sm:text-[2.75rem]">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm font-normal text-[#888888] sm:text-[0.95rem]">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsBar({ className = "" }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true, amount: 0.35 }}
      className={`border-t border-navy/[0.06] bg-[#f7f8fa] py-12 sm:py-14 ${className}`}
    >
      <div className="container-x grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-x-8 lg:grid-cols-4 lg:gap-y-0">
        {companyStats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return <StatsBar />;
}
