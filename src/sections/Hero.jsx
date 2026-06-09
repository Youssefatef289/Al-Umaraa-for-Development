import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Phone, Star } from "@/components/Icons";
import { site } from "@/data/site";

// مدة تشغيل الفيديو في الهيرو (بالثواني) قبل الإعادة من البداية
const HERO_VIDEO_LIMIT = 30;

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const handleTimeUpdate = (e) => {
    if (e.currentTarget.currentTime >= HERO_VIDEO_LIMIT) {
      e.currentTarget.currentTime = 0;
      e.currentTarget.play();
    }
  };

  // Parallax بسيط: الفيديو يتحرك ببطء والنص يطلع لأعلى أثناء السكروول
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Video background */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 -z-10 scale-110">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/logo.png"
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div style={{ y: contentY }} className="container-x relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold backdrop-blur"
          >
            <Star className="h-4 w-4" />
            {site.fullName}
          </motion.div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-white text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl">
            {"نصنع مجتمعات سكنية".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease }}
                className="inline-block ml-3"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease }}
              className="text-gold-gradient"
            >
              تعيد تعريف الحياة العصرية
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/projects" className="btn-gold">
              مشاريعنا
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn-light">
              <Phone className="h-4 w-4" />
              تواصل معنا
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:flex"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
