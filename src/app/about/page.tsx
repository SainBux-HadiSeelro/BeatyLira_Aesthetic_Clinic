import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Heart, Sparkles, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Discover the story behind BeautyLira — a luxury aesthetic clinic founded on the belief that clinical excellence and artful care are inseparable.",
};

const team = [
  {
    name: "Dr. Elena Marchetti",
    role: "Founder & Lead Aesthetic Physician",
    bio: "Trained at the Royal College of Physicians, Dr. Marchetti has over 14 years of experience in aesthetic medicine. She founded BeautyLira to create a space where clinical precision and genuine care coexist.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    name: "Dr. James Holloway",
    role: "Laser & Resurfacing Specialist",
    bio: "A pioneer in photomedicine with a decade of laser therapy expertise. Dr. Holloway's protocols are respected internationally for their precision and consistently exceptional outcomes.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Isabelle Chen",
    role: "Senior Aesthetic Practitioner",
    bio: "Specialising in thread lifting and injectables, Isabelle is known for her artist's eye and empathetic approach. Clients describe treatments with her as transformative and profoundly comfortable.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
  },
];

const values = [
  { icon: Heart, title: "Empathy First", text: "Every client is a person, not a procedure. We listen deeply before we act." },
  { icon: Award, title: "Clinical Excellence", text: "Our standards exceed regulatory requirements. Excellence is non-negotiable." },
  { icon: Sparkles, title: "Natural Outcomes", text: "We enhance what you have. Your uniqueness is the goal — not an obstacle." },
  { icon: Users, title: "Long-Term Partnership", text: "We build relationships built on trust, honesty, and exceptional results over time." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&q=80"
          alt="BeautyLira clinic"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/40 to-transparent" />
        <div className="container-lira relative z-10">
          <p className="section-label text-rose-gold-light mb-4">Our Story</p>
          <h1 className="heading-display text-ivory max-w-2xl">
            Beauty Through <span className="italic font-light">Intention</span>
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div>
                <p className="section-label mb-5">Foundation</p>
                <h2 className="heading-xl mb-8 text-espresso">
                  Born From a Belief in <span className="italic">Refined</span> Care
                </h2>
                <div className="space-y-5 body-lg">
                  <p>
                    BeautyLira was founded with a single conviction: that aesthetic medicine, practised with integrity and artistry, has the power to restore confidence and reframe how we see ourselves.
                  </p>
                  <p>
                    In a landscape saturated with clinics that prioritise volume over care, we chose a different path. Smaller. More deliberate. More personal. Every client who walks through our doors deserves the full attention of a practitioner who truly understands their goals.
                  </p>
                  <p>
                    Our treatments are not quick fixes — they are the beginning of a considered journey towards your most refined, naturally beautiful self.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative">
                <div className="relative h-[520px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80"
                    alt="BeautyLira founder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-rose-gold p-8 hidden lg:block">
                  <p className="font-cormorant text-3xl text-ivory italic">Est. 2018</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-espresso">
        <div className="container-lira text-center max-w-3xl mx-auto">
          <p className="section-label text-rose-gold mb-5">Our Philosophy</p>
          <blockquote className="font-cormorant text-3xl md:text-4xl text-ivory italic leading-relaxed">
            &ldquo;Beauty is not the absence of imperfection. It is the confidence that radiates when you feel aligned with who you truly are.&rdquo;
          </blockquote>
          <p className="font-dm text-sm text-rose-gold mt-8 tracking-widest uppercase">— Dr. Elena Marchetti, Founder</p>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <Reveal direction="none">
            <div className="text-center mb-16">
              <p className="section-label mb-4">What We Stand For</p>
              <h2 className="heading-xl text-espresso">Our Core Values</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 border border-rose-gold flex items-center justify-center mx-auto mb-6">
                    <Icon size={20} className="text-rose-gold" />
                  </div>
                  <h3 className="heading-md mb-3 text-espresso">{title}</h3>
                  <p className="body-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-lira">
          <Reveal direction="none">
            <div className="text-center mb-16">
              <p className="section-label mb-4">The Experts</p>
              <h2 className="heading-xl text-espresso">Meet Your Practitioners</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.15}>
                <div className="group">
                  <div className="relative h-96 overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="heading-md text-espresso mb-1">{member.name}</h3>
                  <p className="section-label mb-4">{member.role}</p>
                  <p className="body-sm">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-ivory border-y border-ivory-dark">
        <div className="container-lira">
          <p className="text-center section-label mb-8">Credentials & Accreditations</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {["GMC Registered", "Save Face Accredited", "BCAM Member", "CQC Compliant", "ISO Certified"].map((badge) => (
              <div key={badge} className="flex items-center gap-3 border border-ivory-dark px-6 py-3">
                <Award size={16} className="text-rose-gold" />
                <span className="font-dm text-sm tracking-wider text-espresso">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ivory text-center">
        <div className="container-lira max-w-2xl mx-auto">
          <p className="section-label mb-4">Ready to Begin?</p>
          <h2 className="heading-xl mb-6 text-espresso">Start Your Journey With Us</h2>
          <p className="body-lg mb-10">Book a complimentary consultation and let us design a treatment plan as unique as you are.</p>
          <Link href="/booking" className="btn-primary">
            Book a Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
