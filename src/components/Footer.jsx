import { Link } from "react-router-dom";
import Logo from "./Logo";
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
import { projects } from "@/data/projects";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.social.facebook, icon: Facebook, label: "فيسبوك" },
    { href: site.social.instagram, icon: Instagram, label: "إنستجرام" },
    { href: site.social.linkedin, icon: Linkedin, label: "لينكد إن" },
    { href: site.social.youtube, icon: Youtube, label: "يوتيوب" },
  ];

  return (
    <footer className="relative border-t border-navy/10 bg-ink-soft">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-navy/55">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-bold text-navy">
            روابط سريعة
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-navy/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-bold text-navy">
            أبرز المشاريع
          </h3>
          <ul className="space-y-3">
            {projects.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="text-sm text-navy/60 transition-colors hover:text-gold"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-bold text-navy">
            تواصل معنا
          </h3>
          <ul className="space-y-4 text-sm text-navy/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" />
              <a href={site.phoneHref} dir="ltr" className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-navy/45 sm:flex-row sm:text-start">
          <p>
            © {year} {site.fullName}. جميع الحقوق محفوظة.
          </p>
          <p>
            صُنع بكل <span className="text-gold">♦</span> لعملائنا المميزين
          </p>
        </div>
      </div>
    </footer>
  );
}
