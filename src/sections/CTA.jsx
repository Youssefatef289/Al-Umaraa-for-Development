import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { WhatsAppIcon, ArrowLeft } from "@/components/Icons";
import { site, whatsappLink } from "@/data/site";

export default function CTA() {
  return (
    <section className="relative w-full  overflow-hidden">
      <img
        src="/new-project-2.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/78 to-navy/92"
        aria-hidden
      />

      <div className="relative z-10 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Reveal delay={0.15} className="mx-auto mt-14 max-w-3xl sm:mt-16 text-center text-white">
          <div className="rounded-2xl border border-white/15 p-6 text-white shadow-luxe backdrop-blur-sm sm:p-8">
            <FaqAccordion title="الأسئلة الشائعة" variant="on-dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
