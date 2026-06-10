import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "./Icons";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.social.facebook, icon: Facebook, label: "فيسبوك" },
    { href: site.social.instagram, icon: Instagram, label: "إنستجرام" },
    { href: site.social.linkedin, icon: Linkedin, label: "لينكد إن" },
    { href: site.social.youtube, icon: Youtube, label: "يوتيوب" },
  ];

  return (
    <footer className="relative bg-[#0B1F3A]">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="container-x flex flex-col items-center py-14 text-center">
        {/* Logo */}
        <Link to="/" aria-label={site.name} className="group inline-block">
          <img
            src="/logo-footer.png"
            alt={site.fullName}
            loading="lazy"
            decoding="async"
            className=" h-40 w-20 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-64 md:w-72"
          />
        </Link>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
          {site.tagline}
        </p>

        {/* Nav links */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/70 transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact info */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-white/60 sm:flex-row sm:gap-10">
          <a
            href={site.phoneHref}
            dir="ltr"
            className="flex items-center gap-2 transition-colors hover:text-gold-light"
          >
            <Phone className="h-4 w-4 text-gold-light" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 transition-colors hover:text-gold-light"
          >
            <Mail className="h-4 w-4 text-gold-light" />
            {site.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-light" />
            {site.address}
          </span>
        </div>

        {/* Socials */}
        <div className="mt-10 flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-white"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5">
        <p className="container-x text-center text-xs text-white/40">
          © {year} {site.fullName}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
