import Link from "next/link";
import { ArrowRight, Heart, Star, Users, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the BeautyLira team. We are looking for exceptional aesthetic practitioners who share our passion for excellence and patient care.",
};

const values = [
  { icon: Heart, title: "Genuine Care", text: "We put clients first — always. This starts with the culture we build internally." },
  { icon: Star, title: "Clinical Excellence", text: "We invest heavily in training, development, and staying at the forefront of aesthetic medicine." },
  { icon: Users, title: "Collaborative Culture", text: "Despite our boutique scale, our team punches well above its weight — together." },
  { icon: Zap, title: "Growth Mindset", text: "We encourage ambition, reward initiative, and create pathways for progression." },
];

const openRoles = [
  {
    title: "Senior Aesthetic Practitioner",
    type: "Full-Time",
    location: "London, Harley Street",
    description: "We are seeking an experienced, passionate senior practitioner to join our core clinical team. The ideal candidate holds a Level 7 qualification in aesthetic medicine and brings a minimum of 4 years' post-qualification experience.",
    requirements: [
      "Medical professional (Doctor, Dentist, or Nurse Prescriber)",
      "Level 7 qualification in aesthetic medicine",
      "4+ years post-qualification clinical experience",
      "Portfolio of injectable and energy-based treatment experience",
      "Exceptional patient communication skills",
    ],
  },
  {
    title: "Client Relations & Practice Manager",
    type: "Full-Time",
    location: "London, Harley Street",
    description: "A rare opportunity to join a boutique luxury clinic in a hybrid client-facing and operational role. You will be the first point of contact for our discerning client base and the operational backbone of the clinic.",
    requirements: [
      "3+ years in luxury hospitality, beauty, or private healthcare",
      "Exceptional written and verbal communication",
      "Experience with clinic management software",
      "Calm, professional, and naturally empathetic",
      "Passion for aesthetics and premium client experience",
    ],
  },
  {
    title: "Aesthetic Practitioner (Associate)",
    type: "Part-Time / Associate",
    location: "London, Harley Street",
    description: "We welcome experienced associate practitioners looking to build their portfolio in a supported, premium clinical environment. Days and volumes are flexible and can grow with you.",
    requirements: [
      "Medical professional (Doctor, Dentist, or Nurse Independent Prescriber)",
      "Level 7 preferred (Level 6 with strong portfolio considered)",
      "Liability insurance and commitment to CPD",
      "Collaborative, quality-driven mindset",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-ivory">
        <div className="container-lira max-w-3xl">
          <p className="section-label mb-4">Join Our Team</p>
          <h1 className="heading-xl text-espresso mb-6">
            Build Your Career at<br /><span className="italic font-light">BeautyLira</span>
          </h1>
          <p className="body-lg max-w-xl">
            We are a small, exceptional team with standards that match our ambition. If you are passionate about clinical excellence and genuinely luxurious patient care, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ivory-dark">
        <div className="container-lira">
          <p className="section-label mb-12 text-center">Why BeautyLira</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 border border-rose-gold flex items-center justify-center mx-auto mb-5">
                  <Icon size={18} className="text-rose-gold" />
                </div>
                <h3 className="heading-md text-espresso mb-3">{title}</h3>
                <p className="body-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Open Positions</p>
            <h2 className="heading-xl text-espresso">Current Opportunities</h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {openRoles.map((role) => (
              <div key={role.title} className="border border-ivory-dark p-10 hover:border-rose-gold transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="heading-md text-espresso mb-2">{role.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className="font-dm text-xs tracking-wider text-rose-gold uppercase border border-rose-gold px-3 py-1">
                        {role.type}
                      </span>
                      <span className="font-dm text-xs text-warm-gray">{role.location}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-outline shrink-0 text-xs py-3">
                    Apply Now <ArrowRight size={12} />
                  </Link>
                </div>
                <p className="body-md mb-6">{role.description}</p>
                <div>
                  <p className="font-dm text-xs tracking-[0.15em] uppercase text-warm-gray mb-3">Requirements</p>
                  <ul className="space-y-2">
                    {role.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-rose-gold mt-2 shrink-0" />
                        <span className="body-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Speculative */}
          <div className="mt-12 text-center bg-espresso p-12 max-w-2xl mx-auto">
            <p className="font-cormorant text-2xl text-ivory italic mb-4">
              Don&apos;t see your role?
            </p>
            <p className="body-sm text-white/60 mb-8 max-w-sm mx-auto">
              We always welcome speculative applications from exceptional individuals. Send your CV and a brief cover note — we read everything.
            </p>
            <a href="mailto:careers@beautylira.com" className="btn-rose inline-flex">
              Get in Touch <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
