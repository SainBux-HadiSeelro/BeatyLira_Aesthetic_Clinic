import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, honest pricing for all BeautyLira treatments. Package deals and VIP plans available.",
};

const treatments = [
  {
    name: "HIFU Skin Tightening",
    slug: "hifu-skin-tightening",
    price: "£650",
    duration: "Full Face",
    options: [
      { label: "Face & Neck", price: "£850" },
      { label: "Face, Neck & Décolletage", price: "£1,100" },
      { label: "Brow Lift Only", price: "£350" },
    ],
  },
  {
    name: "Laser Treatment",
    slug: "laser-treatment",
    price: "£295",
    duration: "Per Session",
    options: [
      { label: "Single Session", price: "£295" },
      { label: "Course of 3", price: "£750" },
      { label: "Course of 6", price: "£1,350" },
    ],
  },
  {
    name: "Endo Fibre Lift",
    slug: "endo-fibre-lift",
    price: "£995",
    duration: "Full Procedure",
    options: [
      { label: "Midface Lift", price: "£995" },
      { label: "Full Face & Neck", price: "£1,450" },
      { label: "Neck & Jawline", price: "£750" },
    ],
  },
  {
    name: "Dermal Fillers",
    slug: "dermal-fillers",
    price: "£350",
    duration: "Per Area",
    options: [
      { label: "Lip Enhancement (0.5ml)", price: "£295" },
      { label: "Cheek Augmentation (1ml)", price: "£450" },
      { label: "Jawline Sculpt (2ml)", price: "£750" },
    ],
  },
];

const packages = [
  {
    name: "Refresh",
    price: "£950",
    description: "Perfect for first-time clients or a single targeted concern.",
    features: [
      "1 Treatment of your choice",
      "Pre-treatment consultation",
      "Aftercare protocol",
      "1-month follow-up",
    ],
    highlight: false,
  },
  {
    name: "Revive",
    price: "£1,850",
    description: "Our most popular combination — address multiple concerns in one plan.",
    features: [
      "2 Treatments of your choice",
      "Advanced skin analysis",
      "Priority booking",
      "Complimentary skin booster",
      "2 follow-up appointments",
    ],
    highlight: true,
  },
  {
    name: "Renew",
    price: "£3,200",
    description: "A comprehensive annual programme for sustained transformation.",
    features: [
      "Full treatment programme",
      "Quarterly check-ins",
      "Dedicated practitioner",
      "Home skincare prescription",
      "Unlimited follow-ups",
      "VIP priority scheduling",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-ivory text-center">
        <div className="container-lira max-w-2xl mx-auto">
          <Reveal direction="none">
            <p className="section-label mb-4">Investment</p>
            <h1 className="heading-xl text-espresso mb-6">Transparent Pricing</h1>
            <p className="body-lg">
              We believe in honest, upfront pricing with no hidden add-ons. Every quote is personalised to your treatment plan during a complimentary consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Individual Pricing */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <Reveal direction="none">
            <p className="section-label mb-12 text-center">Individual Treatments</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.1}>
                <div className="border border-ivory-dark p-8 hover:border-rose-gold transition-colors duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="heading-md text-espresso">{t.name}</h3>
                      <p className="body-sm mt-1">{t.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-cormorant text-3xl text-espresso">from {t.price}</p>
                    </div>
                  </div>
                  <div className="space-y-3 border-t border-ivory-dark pt-6">
                    {t.options.map((opt) => (
                      <div key={opt.label} className="flex items-center justify-between">
                        <span className="font-dm text-sm text-text-muted">{opt.label}</span>
                        <span className="font-dm text-sm font-medium text-espresso">{opt.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/services/${t.slug}`}
                      className="inline-flex items-center gap-2 font-dm text-xs tracking-wider uppercase text-rose-gold hover:text-rose-gold-dark transition-colors duration-200"
                    >
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-lira">
          <Reveal direction="none">
            <div className="text-center mb-16">
              <p className="section-label mb-4">Save More</p>
              <h2 className="heading-xl text-espresso">Treatment Packages</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.12}>
                <div
                  className={`p-10 relative h-full ${
                    pkg.highlight
                      ? "bg-espresso text-ivory"
                      : "bg-white text-espresso border border-ivory-dark"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-rose-gold font-dm text-[10px] tracking-[0.2em] uppercase text-ivory px-4 py-1.5 flex items-center gap-2">
                        <Star size={10} className="fill-ivory" /> Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className={`heading-md mb-2 ${pkg.highlight ? "text-ivory" : "text-espresso"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`font-cormorant text-5xl mb-4 ${pkg.highlight ? "text-rose-gold-light" : "text-espresso"}`}>
                    {pkg.price}
                  </p>
                  <p className={`font-dm text-sm leading-relaxed mb-8 ${pkg.highlight ? "text-white/60" : "text-text-muted"}`}>
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-rose-gold" />
                        <span className={`font-dm text-sm ${pkg.highlight ? "text-white/70" : "text-text-muted"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={pkg.highlight ? "btn-rose w-full justify-center" : "btn-outline w-full justify-center"}
                  >
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Finance note */}
      <section className="py-16 bg-ivory text-center">
        <div className="container-lira max-w-2xl mx-auto">
          <Reveal direction="none">
            <p className="section-label mb-4">Finance Options</p>
            <h2 className="heading-lg text-espresso mb-4">Flexible Payment Plans Available</h2>
            <p className="body-md mb-8">
              We partner with leading finance providers to offer 0% interest payment plans so your journey to refined beauty doesn&apos;t have to wait.
            </p>
            <Link href="/contact" className="btn-primary">
              Enquire About Finance <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
