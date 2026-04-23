"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Pages that have a dark full-screen hero image — navbar should start transparent/white
const DARK_HERO_PAGES = ["/", "/about", "/services"];

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "HIFU Skin Tightening", href: "/services/hifu-skin-tightening" },
      { label: "Laser Treatment", href: "/services/laser-treatment" },
      { label: "Endo Fibre Lift", href: "/services/endo-fibre-lift" },
      { label: "Dermal Fillers", href: "/services/dermal-fillers" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine if this page has a dark hero (transparent navbar mode)
  const hasDarkHero =
    DARK_HERO_PAGES.includes(pathname) ||
    pathname.startsWith("/services/");

  // Navbar is "light" when scrolled, OR when on a page without a dark hero
  const isLight = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Nav text colour: white when transparent (over hero), espresso after scroll
  const textClass = scrolled
    ? "text-espresso hover:text-rose-gold"
    : "text-ivory/90 hover:text-rose-gold-light";

  const logoClass = scrolled ? "text-espresso" : "text-ivory";
  const subLogoClass = scrolled ? "text-warm-gray" : "text-white/50";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLight
            ? "bg-ivory/95 backdrop-blur-md shadow-soft py-3 border-b border-ivory-dark"
            : "bg-gradient-to-b from-espresso/60 to-transparent py-6"
        }`}
      >
        <div className="container-lira flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-cormorant text-2xl font-light tracking-[0.05em] transition-colors duration-300 ${isLight ? "text-espresso" : "text-ivory"} group-hover:text-rose-gold`}
            >
              Beauty<span className="font-medium">Lira</span>
            </span>
            <span className={`font-dm text-[9px] tracking-[0.35em] uppercase mt-0.5 transition-colors duration-300 ${isLight ? "text-warm-gray" : "text-white/50"}`}>
              Luxury Aesthetic Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-1 font-dm text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${isLight ? "text-espresso hover:text-rose-gold" : "text-ivory/90 hover:text-rose-gold-light"}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-espresso shadow-elevated border-t-2 border-rose-gold"
                      >
                        <div className="py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-6 py-3.5 font-dm text-xs tracking-[0.08em] uppercase text-white/70 hover:text-rose-gold hover:bg-white/5 transition-all duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-dm text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${isLight ? "text-espresso hover:text-rose-gold" : "text-ivory/90 hover:text-rose-gold-light"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/booking"
              className={`font-dm text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${
                isLight
                  ? "bg-espresso text-ivory hover:bg-rose-gold"
                  : "bg-rose-gold text-ivory hover:bg-rose-gold-dark"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isLight ? "text-espresso" : "text-ivory"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* ── Mobile Full-Screen Menu ──────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-espresso/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer — dark espresso panel from right */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 h-full w-[85vw] max-w-sm bg-espresso z-50 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer top */}
              <div className="flex items-center justify-between px-8 pt-7 pb-6 border-b border-white/10">
                <div className="flex flex-col leading-none">
                  <span className="font-cormorant text-2xl font-light tracking-[0.05em] text-ivory">
                    Beauty<span className="font-medium">Lira</span>
                  </span>
                  <span className="font-dm text-[9px] tracking-[0.3em] uppercase text-white/40 mt-0.5">
                    Luxury Aesthetic Clinic
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-white/60 hover:text-rose-gold transition-colors p-1"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-8 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="w-full flex items-center justify-between py-4 border-b border-white/10 font-dm text-xs tracking-[0.18em] uppercase text-white/80 hover:text-rose-gold transition-colors duration-200"
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-rose-gold" : "text-white/40"}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 border-b border-white/10 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-2.5 font-dm text-xs tracking-[0.1em] text-white/50 hover:text-rose-gold transition-colors duration-200"
                                  >
                                    <span className="w-4 h-px bg-rose-gold/40 shrink-0" />
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 border-b border-white/10 font-dm text-xs tracking-[0.18em] uppercase text-white/80 hover:text-rose-gold transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA at bottom */}
              <div className="px-8 pb-10 pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-rose-gold text-ivory font-dm text-xs tracking-[0.2em] uppercase py-4 hover:bg-rose-gold-dark transition-colors duration-300"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center border border-white/20 text-white/60 font-dm text-xs tracking-[0.2em] uppercase py-4 hover:border-rose-gold hover:text-rose-gold transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
