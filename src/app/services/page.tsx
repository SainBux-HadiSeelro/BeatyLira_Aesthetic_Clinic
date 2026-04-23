import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Explore BeautyLira's signature treatments — HIFU skin tightening, laser resurfacing, Endo Fibre Lift, and dermal fillers.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
          alt="BeautyLira treatments"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/40 to-transparent" />
        <div className="container-lira relative z-10">
          <p className="section-label text-rose-gold-light mb-4">Our Treatments</p>
          <h1 className="heading-display text-ivory max-w-xl">
            Precision. <span className="italic font-light">Artistry.</span> Results.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-ivory">
        <div className="container-lira max-w-3xl mx-auto text-center">
          <Reveal direction="none">
            <p className="body-lg">
              Every treatment at BeautyLira is a considered clinical intervention — tailored to your anatomy, your goals, and your lifestyle. We offer four signature treatments, each refined to deliver results that are visible, natural, and lasting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-section bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.1}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-lira">
          <Reveal direction="none">
            <div className="text-center mb-16">
              <p className="section-label mb-4">How It Works</p>
              <h2 className="heading-xl text-espresso">The BeautyLira Process</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", text: "A private, pressure-free conversation about your goals with a senior practitioner." },
              { step: "02", title: "Bespoke Plan", text: "We design a personalised treatment protocol — nothing generic, ever." },
              { step: "03", title: "Treatment", text: "Your procedure, delivered with precision, comfort, and care." },
              { step: "04", title: "Follow-Up", text: "We check in, review your results, and refine as needed." },
            ].map(({ step, title, text }, i) => (
              <Reveal key={step} delay={i * 0.12}>
                <div className="relative pl-8 border-l border-rose-gold">
                  <p className="font-cormorant text-5xl text-rose-gold/20 absolute -top-2 -left-2">{step}</p>
                  <div className="pt-6">
                    <h3 className="heading-md text-espresso mb-3">{title}</h3>
                    <p className="body-sm">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-espresso text-center">
        <div className="container-lira max-w-2xl mx-auto">
          <p className="section-label text-rose-gold mb-4">Begin Today</p>
          <h2 className="heading-xl text-ivory mb-6">Not Sure Where to Start?</h2>
          <p className="body-lg text-white/60 mb-10">
            Book a complimentary consultation. We will assess your skin, discuss your concerns, and recommend the treatments most suited to you.
          </p>
          <Link href="/booking" className="btn-rose">
            Book a Free Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
