import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  WhatsAppIcon,
} from "./Icons";
import { navLinks, site, whatsappLink } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.social.facebook, icon: Facebook, label: "فيسبوك" },
    { href: site.social.instagram, icon: Instagram, label: "إنستجرام" },
    { href: site.social.linkedin, icon: Linkedin, label: "لينكد إن" },
    { href: site.social.youtube, icon: Youtube, label: "يوتيوب" },
  ];

  const contacts = [
    {
      icon: MapPin,
      label: "العنوان",
      value: site.address,
      href: site.mapHref,
      external: true,
    },
    {
      icon: Phone,
      label: "الهاتف",
      value: site.phone,
      href: site.phoneHref,
      dir: "ltr",
    },
    {
      icon: WhatsAppIcon,
      label: "واتساب",
      value: site.whatsappPhone,
      href: whatsappLink(),
      external: true,
      dir: "ltr",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <footer className="relative bg-[#0B1F3A] shadow-[0_-28px_56px_-16px_rgba(11,31,58,0.42)]">
      {/* Soft shadow fade above footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 h-16"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(11,31,58,0.06) 45%, rgba(11,31,58,0.22) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 55%, transparent 100%)",
        }}
      />

      {/* Gold accent line */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="container-x py-8 sm:py-10">
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="text-center lg:col-span-4 lg:text-right">
            <Link to="/" aria-label={site.name} className="group inline-block">
              <img
                src="/logo-footer.png"
                alt={site.fullName}
                loading="lazy"
                decoding="async"
                className="mx-auto h-24 w-16 object-cover transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-36 md:h-32 md:w-44 lg:mx-0"
              />
            </Link>
            <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-white/55 sm:text-sm lg:mx-0">
              {site.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center lg:col-span-3 lg:text-right">
            <h3 className="mb-3 text-xs font-bold tracking-wide text-gold-light sm:text-sm">
              روابط سريعة
            </h3>
            <nav className="flex flex-col items-center gap-2 lg:items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs font-medium text-white/70 transition-colors hover:text-gold-light sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center lg:col-span-5 lg:text-right">
            <h3 className="mb-3 text-xs font-bold tracking-wide text-gold-light sm:text-sm">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              {contacts.map((item) => (
                <li key={item.label}>
                  <div className="flex items-start justify-center gap-2.5 lg:justify-start">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gold-light">
                      <item.icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0 text-right">
                      <p className="text-[11px] text-white/40 sm:text-xs">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          dir={item.dir}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="mt-0.5 block text-xs font-medium text-white/75 transition-colors hover:text-gold-light sm:text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-xs font-medium text-white/75 sm:text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="mx-auto mt-8 flex max-w-5xl justify-center gap-2.5 lg:justify-start">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-white"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-3.5">
        <p className="container-x text-center text-xs text-white/40">
          © {year} {site.fullName}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
