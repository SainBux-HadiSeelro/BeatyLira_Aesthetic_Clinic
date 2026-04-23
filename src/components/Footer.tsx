import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const footerServices = [
  { label: "HIFU Skin Tightening", href: "/services/hifu-skin-tightening" },
  { label: "Laser Treatment", href: "/services/laser-treatment" },
  { label: "Endo Fibre Lift", href: "/services/endo-fibre-lift" },
  { label: "Dermal Fillers", href: "/services/dermal-fillers" },
];

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Membership", href: "/membership" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <div className="container-lira py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex flex-col mb-6">
                <span className="font-cormorant text-3xl font-light tracking-[0.05em] text-ivory">
                  Beauty<span className="font-medium">Lira</span>
                </span>
                <span className="font-dm text-[9px] tracking-[0.35em] uppercase text-rose-gold mt-1">
                  Luxury Aesthetic Clinic
                </span>
              </Link>
              <p className="font-dm text-sm leading-relaxed text-white/50 mb-8 max-w-xs">
                Precision-driven treatments for refined beauty. Where clinical excellence meets artful care.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-rose-gold hover:border-rose-gold transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-dm text-[10px] tracking-[0.25em] uppercase text-rose-gold mb-6">Treatments</h4>
              <ul className="space-y-3">
                {footerServices.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="font-dm text-sm text-white/50 hover:text-rose-gold-light transition-colors duration-200">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-dm text-[10px] tracking-[0.25em] uppercase text-rose-gold mb-6">Explore</h4>
              <ul className="space-y-3 columns-2">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-dm text-sm text-white/50 hover:text-rose-gold-light transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-dm text-[10px] tracking-[0.25em] uppercase text-rose-gold mb-6">Visit Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/50">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-rose-gold" />
                  <span className="font-dm text-sm leading-relaxed">
                    12 Harley Street,<br />London, W1G 9PQ
                  </span>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <Phone size={14} className="shrink-0 text-rose-gold" />
                  <a href="tel:+442071234567" className="font-dm text-sm hover:text-rose-gold-light transition-colors">
                    +44 207 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <Mail size={14} className="shrink-0 text-rose-gold" />
                  <a href="mailto:hello@beautylira.com" className="font-dm text-sm hover:text-rose-gold-light transition-colors">
                    hello@beautylira.com
                  </a>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-dm text-[11px] text-white/30 uppercase tracking-wider mb-2">Opening Hours</p>
                <p className="font-dm text-sm text-white/50">Mon – Fri: 9am – 7pm</p>
                <p className="font-dm text-sm text-white/50">Saturday: 10am – 5pm</p>
                <p className="font-dm text-sm text-white/50">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-lira py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-dm text-[11px] text-white/30 tracking-wider">
          © {new Date().getFullYear()} BeautyLira. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="font-dm text-[11px] text-white/30 hover:text-white/50 tracking-wider transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-dm text-[11px] text-white/30 hover:text-white/50 tracking-wider transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
