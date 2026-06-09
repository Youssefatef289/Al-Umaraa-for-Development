import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close, ArrowLeft } from "./Icons";

export default function Gallery({ images, name }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setActive((i) => (i + 1) % images.length);
  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl"
        aria-label="تكبير الصورة"
      >
        <img
          src={images[active]}
          alt={`${name} - صورة ${active + 1}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-4 py-2 text-xs font-bold text-navy backdrop-blur">
          {active + 1} / {images.length} — اضغط للتكبير
        </span>
      </button>

      <div className="mt-4 grid grid-cols-5 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
              active === i
                ? "border-gold opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`عرض الصورة ${i + 1}`}
          >
            <img
              src={src}
              alt={`${name} مصغّرة ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="إغلاق"
            >
              <Close className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-5 flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="التالي"
            >
              <ArrowLeft className="h-6 w-6 rotate-180" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[active]}
              alt={`${name} - صورة ${active + 1}`}
              className="max-h-[82vh] max-w-5xl rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-5 flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="السابق"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
