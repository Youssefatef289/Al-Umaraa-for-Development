import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { Menu, Close, Phone } from "./Icons";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 py-3 shadow-soft backdrop-blur-xl"
          : "bg-gradient-to-b from-navy/80 to-transparent py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Logo light={!scrolled} showText={false} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `group relative text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-gold"
                      : scrolled
                        ? "text-navy/80 hover:text-navy"
                        : "text-white/85 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 right-0 h-0.5 bg-gold transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`!px-5 !py-2.5 ${scrolled ? "btn-outline" : "btn-light"}`}
          >
            <Phone className="h-4 w-4" />
            اتصل بنا
          </a>
          <Link to="/projects" className="btn-gold !px-6 !py-2.5">
            مشاريعنا
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden ${
            scrolled
              ? "border-navy/20 text-navy"
              : "border-white/25 text-white"
          }`}
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[64px] z-40 bg-navy/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-4 text-lg font-bold transition-colors ${
                        isActive
                          ? "bg-white/10 text-gold"
                          : "text-white/90 hover:bg-white/10 hover:text-gold"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a href={site.phoneHref} className="btn-light w-full">
                  <Phone className="h-4 w-4" />
                  اتصل بنا
                </a>
                <Link
                  to="/projects"
                  onClick={() => setOpen(false)}
                  className="btn-gold w-full"
                >
                  استكشف المشاريع
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
