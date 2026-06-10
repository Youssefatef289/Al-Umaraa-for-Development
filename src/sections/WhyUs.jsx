import { useState } from "react";
import { motion } from "framer-motion";
import { slideRight, slideLeft } from "@/lib/motion";
import { useCountUp } from "@/hooks/useCountUp";

const sideStats = [
  { value: 3500, label: "عميل راضٍ" },
  { value: 350, label: "مشروع" },
  { value: 10, label: "مليار حجم استثماراتنا" },
];

function SideStat({ value, label, active }) {
  const count = useCountUp(value, { start: active });
  return (
    <div className="flex items-center justify-end gap-4">
      <p className="text-sm font-medium text-white/70">{label} +</p>
      <p className="font-display text-4xl font-extrabold text-[#EFE7D2] sm:text-5xl">
        {count.toLocaleString("en-US")}
      </p>
    </div>
  );
}

function MainStat({ active }) {
  const count = useCountUp(30, { start: active });
  return (
    <div>
      <p className="font-display text-7xl font-extrabold leading-none text-[#EFE7D2] sm:text-8xl">
        {count}
      </p>
      <p className="mt-3 text-sm font-medium text-white/70">+ سنة من الخبرة</p>
    </div>
  );
}

export default function WhyUs() {
  const [active, setActive] = useState(false);

  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
      {/* Bottom fade to white */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 to-transparent" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text side */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            onViewportEnter={() => setActive(true)}
            className="lg:order-2"
          >
            <p className="mb-4 text-sm font-bold tracking-wide text-[#EFE7D2]/80">
              لماذا تختارنا
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-[#EFE7D2] sm:text-5xl">
              اكتشف قصة
              <br />
              نجاحنا المتميزة
            </h2>

            <p className="mt-7 text-sm leading-loose text-white/75 sm:text-base">
              تتمتع شركة الأمراء للتطوير العقاري بخبرة تمتد لأكثر من 30 عامًا في
              مجالات الهندسة والتطوير العقاري، مما يجعلنا الخيار الأمثل لك
              لتحقيق أهدافك الاستثمارية. نحن نقدم لك مشروعات ذات جودة عالية في
              التصميم والتنفيذ، مدعومة بفريق من المهندسين المحترفين الذين
              يمتلكون خبرات واسعة تزيد عن 25 عامًا في القطاع. نحرص على تقديم
              أنظمة سداد مرنة تناسب احتياجاتك، وبناء علاقات موثوقة مع عملائنا
              وشركائنا من خلال الشفافية والاحترافية. بالإضافة إلى ذلك، نقدم
              خدمات استشارية شاملة، حيث نوفر لك دراسات جدوى، تقييمات مشاريع،
              وخدمات فنية وهندسية لضمان استثمارك الناجح وتحقيق أفضل قيمة من كل
              مشروع.
            </p>

            {/* Stats */}
            <div className="mt-12 grid items-center gap-10 sm:grid-cols-2">
              <div className="space-y-8">
                {sideStats.map((s) => (
                  <SideStat
                    key={s.label}
                    value={s.value}
                    label={s.label}
                    active={active}
                  />
                ))}
              </div>
              <MainStat active={active} />
            </div>
          </motion.div>

          {/* Image side with offset rectangle */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative mx-auto w-full max-w-xl lg:order-1 lg:max-w-none"
          >
            <div className="absolute inset-0 -translate-x-8 -translate-y-8  sm:-translate-x-12 sm:-translate-y-12" />
            <img
              src="/why-us.webp"
              alt="لماذا تختار الأمراء للتطوير العقاري"
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
