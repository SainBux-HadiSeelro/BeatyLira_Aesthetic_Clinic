import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what BeautyLira clients say about their experiences. Hundreds of five-star reviews and real client stories.",
};

const testimonials = [
  { name: "Sophia R.", location: "London", treatment: "HIFU Skin Tightening", rating: 5, text: "The results were genuinely beyond what I expected. My skin looks lifted, luminous, and so much more defined. The team made me feel completely at ease throughout.", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80" },
  { name: "Amelia K.", location: "Chelsea", treatment: "Dermal Fillers", rating: 5, text: "I've had fillers elsewhere and been disappointed. At BeautyLira, the results are genuinely natural. My face looks refreshed, not altered. I won't go anywhere else.", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80" },
  { name: "Isabella M.", location: "Mayfair", treatment: "Laser Treatment", rating: 5, text: "Two sessions cleared what 10 years of skincare products couldn't touch. The hyperpigmentation is gone. My confidence is back. I cannot recommend BeautyLira highly enough.", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&q=80" },
  { name: "Charlotte B.", location: "Kensington", treatment: "Endo Fibre Lift", rating: 5, text: "The lift is real and the whole experience felt genuinely luxurious. Isabelle was incredible — professional, reassuring, and clearly an expert. My results are stunning.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=200&q=80" },
  { name: "Grace L.", location: "Notting Hill", treatment: "HIFU Skin Tightening", rating: 5, text: "I was nervous about non-surgical treatments but the team explained everything so clearly. Three months later, my jawline is defined and my skin feels firmer than it did a decade ago.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&q=80" },
  { name: "Olivia W.", location: "Belgravia", treatment: "Dermal Fillers", rating: 5, text: "Dr. Marchetti has a true artist's eye. She didn't just inject — she assessed, planned, and executed with extraordinary precision. I look like a better version of myself.", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=200&q=80" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-lira text-center max-w-2xl mx-auto">
          <p className="section-label mb-4">Client Stories</p>
          <h1 className="heading-xl text-espresso mb-6">What Our Clients Say</h1>
          <p className="body-lg">
            These are not curated highlights. Every review represents a real client, a real experience, and a real transformation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-espresso py-12">
        <div className="container-lira">
          <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
            {[
              { value: "2,000+", label: "Clients Treated" },
              { value: "5.0 ★", label: "Average Rating" },
              { value: "98%", label: "Would Return" },
            ].map(({ value, label }, i) => (
              <Reveal key={label} delay={i * 0.15} direction="none">
                <div className="px-8 py-4">
                  <p className="font-cormorant text-4xl text-rose-gold-light mb-2">{value}</p>
                  <p className="font-dm text-xs tracking-[0.2em] uppercase text-white/40">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
              <div className="bg-white shadow-soft p-8 border-b-2 border-rose-gold group hover:shadow-card transition-all duration-500 h-full">
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-rose-gold text-rose-gold" />
                  ))}
                </div>
                <p className="font-cormorant text-xl text-espresso italic leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-ivory-dark pt-5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-dm text-sm font-medium text-espresso">{t.name}</p>
                    <p className="font-dm text-xs text-warm-gray">{t.location} · {t.treatment}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ivory-dark text-center">
        <div className="container-lira max-w-xl mx-auto">
          <p className="section-label mb-4">Write Your Story</p>
          <h2 className="heading-xl text-espresso mb-6">Join Our Community</h2>
          <p className="body-lg mb-10">Over 2,000 clients have trusted BeautyLira with their transformation. Your journey could begin today.</p>
          <Link href="/booking" className="btn-primary">
            Book a Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
