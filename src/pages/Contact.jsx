import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";
import { slideRight, slideLeft } from "@/lib/motion";
import {
  MapPin,
  Phone,
  Mail,
  WhatsAppIcon,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "@/components/Icons";
import { site, whatsappLink } from "@/data/site";

export default function Contact() {
  const info = [
    { icon: MapPin, label: "العنوان", value: site.address },
    { icon: Phone, label: "الهاتف", value: site.phone, href: site.phoneHref, dir: "ltr" },
    { icon: Mail, label: "البريد الإلكتروني", value: site.email, href: `mailto:${site.email}` },
  ];
  const socials = [
    { href: site.social.facebook, icon: Facebook, label: "فيسبوك" },
    { href: site.social.instagram, icon: Instagram, label: "إنستجرام" },
    { href: site.social.linkedin, icon: Linkedin, label: "لينكد إن" },
    { href: site.social.youtube, icon: Youtube, label: "يوتيوب" },
  ];

  return (
    <PageTransition>
      <PageHeader
        title="تواصل معنا"
        subtitle="نحن هنا للإجابة على كل استفساراتك ومساعدتك في اختيار وحدتك المثالية."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ to: "/", label: "الرئيسية" }, { label: "تواصل معنا" }]}
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="eyebrow mb-3">
              <span className="h-px w-8 bg-gold" />
              ابقَ على تواصل
            </span>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              دعنا نبدأ رحلتك العقارية
            </h2>
            <p className="mt-4 text-navy/65">
              فريقنا جاهز لخدمتك. اختر الطريقة الأنسب للتواصل معنا أو املأ النموذج
              وسنعاود الاتصال بك.
            </p>

            <div className="mt-8 space-y-5">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-navy/50">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        dir={item.dir}
                        className="font-semibold text-navy transition-colors hover:text-gold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-navy">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(`مرحبًا ${site.name}، أريد الاستفسار.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-7 w-fit"
            >
              <WhatsAppIcon className="h-5 w-5" />
              محادثة واتساب فورية
            </a>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-navy/70">تابعنا على</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="btn-icon"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="card p-7 sm:p-8"
          >
            <h3 className="mb-5 font-display text-xl font-bold text-navy">
              أرسل لنا رسالة
            </h3>
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <Reveal className="container-x pb-24">
        <div className="overflow-hidden rounded-3xl border border-navy/10">
          <iframe
            title="موقع الشركة"
            src={site.mapEmbed}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
          />
        </div>
      </Reveal>
    </PageTransition>
  );
}
