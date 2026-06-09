import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon, ArrowLeft } from "@/components/Icons";
import { site, whatsappLink } from "@/data/site";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold/20 bg-ink-card px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-radial-fade" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #D5710C 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-navy text-balance sm:text-4xl">
              جاهز لتمتلك وحدتك في أحد مشاريع{" "}
              <span className="text-gold-gradient">{site.nameShort}</span>؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy/65">
              تواصل مع فريق المبيعات الآن واحصل على أفضل العروض وخطط السداد
              المتاحة.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink(`مرحبًا ${site.name}، أريد الاستفسار عن العروض.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:-translate-y-0.5 hover:bg-[#20bd5a]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                تواصل عبر واتساب
              </a>
              <Link to="/contact" className="btn-gold">
                احجز معاينة
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
