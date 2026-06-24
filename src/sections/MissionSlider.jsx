import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "@/components/Icons";

const AUTOPLAY_MS = 9000;

const slides = [
  {
    key: "message",
    label: "رسالتنا",
    image: "/ya-message.webp",
    title: "نُقدّم حلولًا عقارية مُبتكرة تُلبي احتياجاتك وتُحقق تطلعاتك.",
    paragraphs: [
      "في شركة الأمراء للتطوير العقاري، نكرّس جهودنا لتقديم مشاريع عقارية تتميز بأعلى معايير الجودة والابتكار، والالتزام التام بتلبية احتياجات عملائنا وتجاوز توقعاتهم. رسالتنا أن نكون شريكًا موثوقًا لعملائنا من خلال تقديم منتجات عقارية عالية الجودة، تتسم بالتميز في التصميم والتنفيذ.",
      "نهدف إلى بناء علاقات طويلة الأمد مع عملائنا وشركائنا، مدعومة بخدمة عملاء ممتازة وأنظمة سداد مرنة، بما يساهم في تحقيق استثمارات ناجحة ومستدامة تعكس قيمنا ومبادئنا في كل مشروع نقوم به.",
    ],
  },
  {
    key: "vision",
    label: "رؤيتنا",
    image: "/ya-vision.webp",
    title: "نُبني مستقبلًا يُلهم أسلوب حياة استثنائي.",
    paragraphs: [
      "رؤيتنا في شركة الأمراء للتطوير العقاري هي أن نكون في طليعة شركات التطوير العقاري في مصر والشرق الأوسط، من خلال تقديم مشاريع مبتكرة وعالية الجودة لتلبية احتياجات عملائنا وتحقيق تطلعاتهم.",
      "نسعى للتوسع الجغرافي والاقتصادي ليصبح لدينا تأثير إيجابي ومستدام على السوق العقاري، وتقديم تجربة استثمارية متميزة من خلال مشاريع تتسم بالتميز والابتكار.",
    ],
  },
  {
    key: "values",
    label: "قيمنا",
    image: "/ya-values.webp",
    title: "قيمنا أساس نجاحنا.",
    values: [
      { name: "الجودة", desc: "مشاريع تتميز بأعلى معايير الجودة في التصميم والتنفيذ لضمان رضا عملائنا." },
      { name: "الابتكار", desc: "أفكار جديدة وحلول مبتكرة تتماشى مع أحدث الاتجاهات العالمية في العقارات." },
      { name: "الشفافية", desc: "صدق وشفافية في تعاملاتنا مع العملاء والشركاء لبناء علاقات قائمة على الثقة." },
      { name: "الاحترافية", desc: "أعلى مستويات الاحترافية في كل جوانب عملنا لضمان قيمة مضافة في كل مشروع." },
      { name: "الاستدامة", desc: "تطوير مشاريع صديقة للبيئة ومبنية على أسس الاستدامة لأثر إيجابي مستدام." },
    ],
  },
];

export default function MissionSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, index]);

  return (
    <section
      className="section overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x">
        {/* Tabs */}
        <div className="mb-12 flex items-center justify-center gap-2 sm:gap-3">
          {slides.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setIndex(i)}
              className={`btn-sm ${i === index ? "btn-gold btn-gold-filled" : "btn-outline"}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.key}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Text side */}
            <div>
              <span className="eyebrow mb-3">
                <span className="h-px w-8 bg-gold" />
                {slide.label}
              </span>
              <h2 className="font-display text-3xl font-extrabold leading-snug text-navy sm:text-4xl">
                {slide.title}
              </h2>

              {slide.paragraphs &&
                slide.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-5 text-base leading-loose text-navy/65"
                  >
                    {p}
                  </p>
                ))}

              {slide.values && (
                <ul className="mt-7 space-y-4">
                  {slide.values.map((v) => (
                    <li key={v.name} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <p className="text-sm leading-relaxed text-navy/70 sm:text-base">
                        <span className="font-bold text-navy">{v.name}: </span>
                        {v.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image side — مربعة */}
            <div className="order-first flex justify-center lg:order-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="aspect-square w-full max-w-sm overflow-hidden sm:max-w-md lg:max-w-lg"
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="السابق"
            className="btn-icon"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setIndex(i)}
                aria-label={s.label}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="التالي"
            className="btn-icon"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
