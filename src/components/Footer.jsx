import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
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

  return (
    <footer className="relative overflow-hidden shadow-[0_-28px_56px_-12px_rgba(0,0,0,0.55)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-14 z-20 h-14 bg-gradient-to-b from-transparent via-black/10 to-black/35"
      />

      <img
        src="/footer.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-navy/88 to-navy/95 backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,31,58,0.45)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 border-t border-white/15 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]">
        <div className="container-x py-8 sm:py-9">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_1fr] md:items-start md:gap-6 lg:gap-10">
            {/* Brand */}
            <div className="text-center md:text-right">
              <Link to="/" aria-label={site.name} className="inline-block">
                <img
                  src="/logo-white.png"
                  alt={site.fullName}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto h-14 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:mx-0 md:h-16"
                />
              </Link>
              <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-white/90 md:mx-0 sm:text-sm">
                {site.tagline}
              </p>
            </div>

            {/* Links */}
            <div className="text-center md:text-right">
              <h3 className="mb-3 text-xs font-bold text-gold-light sm:text-sm">
                روابط سريعة
              </h3>
              <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-xs font-medium text-white/90 transition-colors hover:text-gold-light sm:text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h3 className="mb-3 text-xs font-bold text-gold-light sm:text-sm">
                تواصل معنا
              </h3>
              <ul className="space-y-2 text-xs font-medium text-white/90 sm:text-sm">
                <li>
                  <a
                    href={site.phoneHref}
                    dir="ltr"
                    className="inline-flex items-center justify-center gap-2 transition-colors hover:text-gold-light md:justify-start"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold-light" />
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="inline-flex items-center justify-center gap-2 transition-colors hover:text-gold-light md:justify-start"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-gold-light" />
                    {site.whatsappPhone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center gap-2 transition-colors hover:text-gold-light md:justify-start"
                  >
                    <Mail className="h-3.5 w-3.5 text-gold-light" />
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-5 sm:flex-row">
            <p className="text-center text-[11px] text-white/75 sm:text-right sm:text-xs">
              © {year} {site.fullName}. جميع الحقوق محفوظة.
            </p>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 bg-black/20 text-white/90 shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-colors hover:border-gold hover:bg-gold hover:text-white"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
