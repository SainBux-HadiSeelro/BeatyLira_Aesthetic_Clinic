"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, CheckCircle, Award, Shield, Clock } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

const testimonials = [
  { name: "Sophia R.", treatment: "HIFU Skin Tightening", text: "The results were beyond what I expected. My skin looks lifted and luminous — exactly what I'd hoped for without surgery.", rating: 5 },
  { name: "Amelia K.", treatment: "Dermal Fillers", text: "The most natural-looking enhancement I've ever had. The team understood my face and worked with my anatomy, not against it.", rating: 5 },
  { name: "Isabella M.", treatment: "Laser Treatment", text: "My pigmentation has cleared dramatically. After years of trying skincare, two sessions here did what nothing else could.", rating: 5 },
  { name: "Charlotte B.", treatment: "Endo Fibre Lift", text: "Incredibly impressed with my results. The lift is real, natural, and the whole experience felt genuinely luxurious.", rating: 5 },
];

const trustPoints = [
  { icon: Award, label: "Clinically Certified", text: "All practitioners hold advanced medical qualifications and ongoing training." },
  { icon: Shield, label: "Safety First", text: "Medical-grade products only. We never compromise on your health or wellbeing." },
  { icon: Star, label: "5-Star Results", text: "Over 2,000 five-star reviews from clients who return again and again." },
  { icon: Clock, label: "Personalised Care", text: "Every treatment plan is bespoke — no templates, no shortcuts." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
];

const blogPosts = [
  { title: "The Art of Natural Enhancement: What to Expect from Your First Consultation", category: "Education", date: "March 2025", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", slug: "natural-enhancement-first-consultation" },
  { title: "HIFU vs Thread Lifts: Which Non-Surgical Lift is Right for You?", category: "Treatments", date: "February 2025", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80", slug: "hifu-vs-thread-lifts" },
  { title: "Understanding Skin Ageing: Why Collagen is the Key to Youthful Skin", category: "Skin Science", date: "January 2025", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80", slug: "skin-ageing-collagen-guide" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end pb-20 overflow-hidden">
        {/* Parallax image */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=90"
            alt="BeautyLira luxury aesthetic clinic"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/75 via-espresso/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />

        {/* Content */}
        <motion.div className="container-lira relative z-10 pb-8" style={{ opacity: heroOpacity }}>
          <div className="max-w-2xl">
            <motion.p
              className="section-label text-rose-gold-light mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Precision-driven treatments
            </motion.p>
            <motion.h1
              className="heading-display text-ivory mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Elevate Your<br />
              <span className="italic font-light">Natural</span> Beauty
            </motion.h1>
            <motion.p
              className="font-dm text-lg text-white/70 leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Where clinical excellence meets artful care. Refined treatments designed to honour and enhance what is uniquely you.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/booking" className="btn-rose">Book Consultation</Link>
              <Link href="/services" className="btn-outline border-white/50 text-ivory hover:bg-white/10 hover:text-ivory hover:border-white/80">
                Explore Treatments <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2 opacity-50">
          <motion.div
            className="w-px h-12 bg-white/40"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <span className="font-dm text-[10px] tracking-[0.3em] uppercase text-white rotate-90 origin-center translate-y-8">Scroll</span>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────── */}
      <div className="bg-espresso py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-0">
              {["2,000+ Treatments", "5-Star Rated", "Harley Street Quality", "0% Downtime Options", "Medical-Grade Protocols", "Award-Winning Clinic"].map((item) => (
                <span key={item} className="inline-flex items-center gap-4 px-8">
                  <span className="text-rose-gold text-lg">✦</span>
                  <span className="font-cormorant text-ivory/70 text-lg tracking-wider">{item}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Services Preview ─────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <div>
                <p className="section-label mb-4">Our Treatments</p>
                <h2 className="heading-xl text-espresso max-w-md">Crafted for Your Transformation</h2>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/services" className="btn-outline shrink-0">View All <ArrowRight size={14} /></Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.1}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ───────────────────────────────────── */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <p className="section-label mb-4">Real Results</p>
                <h2 className="heading-xl mb-6 text-espresso">
                  Transformations That <span className="italic">Speak</span> for Themselves
                </h2>
                <p className="body-lg mb-8 max-w-md">
                  Our results are not filtered or staged. Every case study represents a real client journey — honest, considered, and beautiful.
                </p>
                <Link href="/results" className="btn-primary">See All Results <ArrowRight size={14} /></Link>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-72 overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80" alt="Before" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    <div className="absolute bottom-3 left-3 bg-espresso/80 px-3 py-1">
                      <span className="font-dm text-[10px] tracking-[0.2em] uppercase text-ivory">Before</span>
                    </div>
                  </div>
                  <div className="bg-espresso p-4 text-center">
                    <p className="font-cormorant text-ivory text-lg italic">HIFU Lift</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-72 overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80" alt="After" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    <div className="absolute bottom-3 left-3 bg-rose-gold/90 px-3 py-1">
                      <span className="font-dm text-[10px] tracking-[0.2em] uppercase text-ivory">After</span>
                    </div>
                  </div>
                  <div className="border border-rose-gold p-4 text-center">
                    <p className="font-cormorant text-espresso text-lg italic">3 months later</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-pad bg-espresso">
        <div className="container-lira">
          <Reveal direction="none">
            <div className="text-center mb-16">
              <p className="section-label text-rose-gold mb-4">Client Stories</p>
              <h2 className="heading-xl text-ivory">Words From Our Clients</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-white/10 p-8 hover:border-rose-gold/40 transition-all duration-500 h-full">
                  <div className="flex gap-0.5 mb-6">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={12} className="fill-rose-gold text-rose-gold" />
                    ))}
                  </div>
                  <p className="font-cormorant text-xl text-white/80 italic leading-relaxed mb-8">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-dm text-sm text-ivory font-medium">{t.name}</p>
                    <p className="font-dm text-xs text-rose-gold mt-1 tracking-wider">{t.treatment}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-outline border-white/30 text-ivory hover:bg-white/5 hover:border-white/50">
              View All Reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why BeautyLira ───────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="relative h-[600px] overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80" alt="BeautyLira clinic interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-espresso p-8 max-w-xs hidden lg:block">
                  <p className="font-cormorant text-4xl text-ivory mb-1">2,000+</p>
                  <p className="font-dm text-xs tracking-[0.15em] uppercase text-rose-gold">Satisfied Clients</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div>
                <p className="section-label mb-4">Why BeautyLira</p>
                <h2 className="heading-xl mb-6 text-espresso">The Standard You <span className="italic">Deserve</span></h2>
                <p className="body-lg mb-12 max-w-lg">We believe exceptional care is not a luxury — it is a right. Every detail of your experience at BeautyLira is designed with your comfort, safety, and transformation in mind.</p>
                <div className="space-y-8">
                  {trustPoints.map(({ icon: Icon, label, text }) => (
                    <div key={label} className="flex items-start gap-5">
                      <div className="w-10 h-10 border border-rose-gold flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-rose-gold" />
                      </div>
                      <div>
                        <h4 className="font-dm text-sm font-medium tracking-wider uppercase text-espresso mb-1">{label}</h4>
                        <p className="body-sm">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex gap-4">
                  <Link href="/about" className="btn-primary">Our Story <ArrowRight size={14} /></Link>
                  <Link href="/booking" className="btn-outline">Book Now</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ────────────────────────────────────── */}
      <Reveal direction="none">
        <section className="overflow-hidden bg-ivory-dark py-4">
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative w-64 h-80 shrink-0 overflow-hidden group">
                <Image src={src} alt={`Gallery image ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="256px" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="section-label hover:text-espresso transition-colors duration-200 inline-flex items-center gap-2">
              View Full Gallery <ArrowRight size={12} />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* ── Blog ─────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <div>
                <p className="section-label mb-4">The Journal</p>
                <h2 className="heading-xl text-espresso max-w-md">Beauty Intelligence</h2>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/blog" className="btn-outline shrink-0">All Articles <ArrowRight size={14} /></Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.12}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative h-56 overflow-hidden mb-5">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                  </div>
                  <p className="section-label mb-2 text-rose-gold">{post.category}</p>
                  <h3 className="heading-md text-espresso mb-3 group-hover:text-rose-gold-dark transition-colors duration-300">{post.title}</h3>
                  <p className="font-dm text-xs text-warm-gray tracking-wider">{post.date}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1920&q=80" alt="Book your consultation" fill className="object-cover object-top" sizes="100vw" loading="lazy" />
        <div className="absolute inset-0 bg-espresso/75" />
        <div className="container-lira relative z-10 text-center">
          <Reveal direction="none">
            <p className="section-label text-rose-gold mb-5">Begin Your Journey</p>
            <h2 className="heading-xl text-ivory mb-6 max-w-2xl mx-auto">Your Most Refined Self Awaits</h2>
            <p className="body-lg text-white/60 mb-10 max-w-xl mx-auto">
              Book a complimentary consultation with our expert practitioners. No pressure, no obligation — just a thoughtful conversation about your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/booking" className="btn-rose">Book Your Consultation</Link>
              <Link href="/contact" className="btn-outline border-white/40 text-ivory hover:bg-white/10 hover:text-ivory">Get in Touch</Link>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12">
              {[
                { icon: CheckCircle, text: "No obligation consultation" },
                { icon: CheckCircle, text: "Personalised treatment plan" },
                { icon: CheckCircle, text: "Medical-grade safety protocols" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/50">
                  <Icon size={14} className="text-rose-gold" />
                  <span className="font-dm text-xs tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
