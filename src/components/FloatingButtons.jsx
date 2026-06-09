import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon, ArrowUp, Phone } from "./Icons";
import { site, whatsappLink } from "@/data/site";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center gap-3 sm:bottom-7 sm:left-7">
      <a
        href={site.phoneHref}
        aria-label="اتصل بنا"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-ink-card text-navy shadow-luxe transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold sm:h-14 sm:w-14"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      <a
        href={whatsappLink(
          `مرحبًا ${site.name}، أرغب في الاستفسار عن مشاريعكم العقارية.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_34px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink-card px-3 py-2 text-xs font-bold text-navy opacity-0 shadow-luxe transition-opacity duration-300 group-hover:opacity-100 sm:block">
          تواصل معنا الآن
        </span>
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="العودة للأعلى"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-navy shadow-gold transition-all duration-300 hover:-translate-y-1 sm:h-14 sm:w-14"
          >
            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
