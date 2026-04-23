import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Crown, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership & Packages",
  description: "BeautyLira VIP membership plans and monthly beauty subscriptions. Exclusive benefits for our most valued clients.",
};

const plans = [
  {
    tier: "Lira Essential",
    price: "£89",
    period: "/ month",
    icon: Sparkles,
    tagline: "An elegant entry into the BeautyLira world.",
    features: [
      "Monthly skin consultation",
      "10% off all treatments",
      "Priority booking access",
      "Personalised skincare advice",
      "Member newsletter & journal",
    ],
    cta: "Join Today",
    highlight: false,
  },
  {
    tier: "Lira Gold",
    price: "£195",
    period: "/ month",
    icon: Crown,
    tagline: "For those who believe in consistent, curated care.",
    features: [
      "1 treatment per month (valued up to £350)",
      "15% off additional treatments",
      "Dedicated practitioner",
      "Complimentary skin booster (quarterly)",
      "Priority same-week appointments",
      "Annual results review",
      "Exclusive member events",
    ],
    cta: "Become Gold",
    highlight: true,
  },
  {
    tier: "Lira Prestige",
    price: "£395",
    period: "/ month",
    icon: Crown,
    tagline: "The complete luxury aesthetic lifestyle.",
    features: [
      "2 treatments per month (up to £800 value)",
      "20% off all treatments",
      "Concierge booking service",
      "Home skincare programme (quarterly)",
      "Same-day booking guarantee",
      "Annual comprehensive assessment",
      "Invitation to VIP evenings",
      "Bespoke gift on each visit",
    ],
    cta: "Apply for Prestige",
    highlight: false,
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-ivory">
        <div className="container-lira text-center max-w-3xl mx-auto">
          <p className="section-label mb-4">Membership</p>
          <h1 className="heading-xl text-espresso mb-6">
            Beauty as a <span className="italic font-light">Lifestyle</span>
          </h1>
          <p className="body-lg">
            The most radiant skin is not a single treatment — it is a practice. Our membership plans offer consistent, curated care, exclusive benefits, and a deeper relationship with your beauty journey.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24 bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.tier}
                  className={`relative p-10 ${
                    plan.highlight
                      ? "bg-espresso text-ivory"
                      : "bg-white border border-ivory-dark"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-rose-gold font-dm text-[10px] tracking-[0.2em] uppercase text-ivory px-4 py-1.5 flex items-center gap-2">
                        <Crown size={10} /> Most Chosen
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 border flex items-center justify-center mb-6 ${plan.highlight ? "border-rose-gold" : "border-rose-gold"}`}>
                    <Icon size={18} className="text-rose-gold" />
                  </div>

                  <h3 className={`heading-md mb-2 ${plan.highlight ? "text-ivory" : "text-espresso"}`}>
                    {plan.tier}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`font-cormorant text-5xl ${plan.highlight ? "text-rose-gold-light" : "text-espresso"}`}>
                      {plan.price}
                    </span>
                    <span className={`font-dm text-sm ${plan.highlight ? "text-white/50" : "text-text-muted"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`font-dm text-sm leading-relaxed mb-8 ${plan.highlight ? "text-white/60" : "text-text-muted"}`}>
                    {plan.tagline}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-rose-gold mt-0.5 shrink-0" />
                        <span className={`font-dm text-sm ${plan.highlight ? "text-white/70" : "text-text-muted"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/booking"
                    className={`inline-flex items-center justify-center w-full gap-2 ${
                      plan.highlight ? "btn-rose" : "btn-outline"
                    }`}
                  >
                    {plan.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-espresso text-center">
        <div className="container-lira max-w-3xl mx-auto">
          <p className="section-label text-rose-gold mb-5">Our Promise</p>
          <blockquote className="font-cormorant text-3xl text-ivory italic leading-relaxed">
            &ldquo;A membership at BeautyLira is not a subscription — it is an investment in the most enduring luxury of all: confidence in your own skin.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-ivory">
        <div className="container-lira max-w-2xl mx-auto">
          <h2 className="heading-xl text-espresso mb-12 text-center">Membership FAQ</h2>
          <div className="space-y-8">
            {[
              { q: "Can I pause my membership?", a: "Yes. You may pause your membership for up to 3 months per year with 30 days' notice." },
              { q: "Are there joining or cancellation fees?", a: "No. There are no hidden fees. You may cancel with 30 days' notice at any time." },
              { q: "Can I upgrade or downgrade?", a: "Absolutely. You can change your plan at any time — upgrades take effect immediately, downgrades at the next billing cycle." },
              { q: "Do unused treatments roll over?", a: "Unused monthly treatments roll over for one month only for Lira Gold and Prestige members." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-ivory-dark pb-8">
                <h4 className="font-cormorant text-xl text-espresso mb-2">{q}</h4>
                <p className="body-md">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
