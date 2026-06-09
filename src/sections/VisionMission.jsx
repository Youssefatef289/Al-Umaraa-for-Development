import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { slideRight, slideLeft } from "@/lib/motion";
import { Target, Eye } from "@/components/Icons";

export default function VisionMission() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-28">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/85" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />

      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-3xl p-9 sm:p-10"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-navy">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-navy">
              رؤيتنا
            </h3>
            <p className="mt-4 leading-relaxed text-navy/70">
              أن نكون الشركة الرائدة في تطوير المجتمعات العمرانية المتكاملة على
              مستوى المنطقة، ونضع معايير جديدة للفخامة وجودة الحياة في كل مشروع
              نقدّمه.
            </p>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-3xl p-9 sm:p-10"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-navy">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-navy">
              رسالتنا
            </h3>
            <p className="mt-4 leading-relaxed text-navy/70">
              تطوير مشاريع عقارية استثنائية تجمع بين التصميم المبتكر والجودة
              العالية والقيمة الاستثمارية، مع الالتزام التام تجاه عملائنا وشركائنا
              والمجتمع.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
