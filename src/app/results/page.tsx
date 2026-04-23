import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results & Transformations",
  description: "Real before and after results from BeautyLira clients. Genuine transformations through precision aesthetic treatments.",
};

const caseStudies = [
  {
    name: "Sarah, 44",
    treatment: "HIFU Skin Tightening",
    story: "Sarah came to us with concerns about jowl laxity and loss of definition around the jaw. After a single HIFU session, she noticed visible tightening within weeks. By month three, the results were described by her as 'transformative' — jaw lifted, neck firmer, confidence fully restored.",
    before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
    after: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80",
    sessions: "1 session",
    duration: "3 months results",
  },
  {
    name: "Priya, 38",
    treatment: "Laser Treatment",
    story: "Priya had struggled with melasma and post-inflammatory hyperpigmentation for over a decade. Using our tailored laser protocol, combined with a bespoke skincare regimen, we achieved a dramatic reduction in pigmentation across just 4 sessions. Her words: 'I feel like I finally have the skin I deserve.'",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80",
    sessions: "4 sessions",
    duration: "5 months results",
  },
  {
    name: "Caroline, 52",
    treatment: "Endo Fibre Lift",
    story: "Caroline wanted a refreshed, rested appearance — not a dramatic change. The Endo Fibre Lift delivered exactly that. Immediate structural lift with a progression of improvement over 3 months. Her family noticed. She glowed.",
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&q=80",
    sessions: "1 session",
    duration: "6 months results",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-lira">
          <p className="section-label mb-4">Client Transformations</p>
          <h1 className="heading-xl text-espresso max-w-2xl">
            Results That Speak for <span className="italic font-light">Themselves</span>
          </h1>
          <p className="body-lg mt-6 max-w-xl">
            Every transformation begins with a conversation. These are real clients, real results, and real stories of confidence renewed.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-pad bg-ivory">
        <div className="container-lira space-y-32">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Images */}
              <Reveal direction={i % 2 !== 0 ? "right" : "left"}>
                <div className={`grid grid-cols-2 gap-4 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="space-y-2">
                    <div className="relative h-72 overflow-hidden">
                      <Image src={cs.before} alt="Before" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" loading="lazy" />
                      <div className="absolute bottom-3 left-3 bg-espresso/80 px-3 py-1">
                        <span className="font-dm text-[10px] tracking-widest uppercase text-ivory">Before</span>
                      </div>
                    </div>
                    <p className="font-dm text-xs text-center text-warm-gray">{cs.sessions}</p>
                  </div>
                  <div className="space-y-2 mt-6">
                    <div className="relative h-72 overflow-hidden">
                      <Image src={cs.after} alt="After" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" loading="lazy" />
                      <div className="absolute bottom-3 left-3 bg-rose-gold/90 px-3 py-1">
                        <span className="font-dm text-[10px] tracking-widest uppercase text-ivory">After</span>
                      </div>
                    </div>
                    <p className="font-dm text-xs text-center text-warm-gray">{cs.duration}</p>
                  </div>
                </div>
              </Reveal>

              {/* Text */}
              <Reveal direction={i % 2 !== 0 ? "left" : "right"} delay={0.1}>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <p className="section-label mb-3">{cs.treatment}</p>
                  <h2 className="heading-xl text-espresso mb-6">{cs.name}</h2>
                  <div className="divider-rose mb-6" />
                  <p className="body-lg mb-8">{cs.story}</p>
                  <Link href="/booking" className="btn-primary">
                    Book This Treatment <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ivory-dark text-center">
        <div className="container-lira max-w-2xl mx-auto">
          <Reveal direction="none">
            <p className="section-label mb-4">Your Story Starts Here</p>
            <h2 className="heading-xl text-espresso mb-6">Ready for Your Transformation?</h2>
            <p className="body-lg mb-10">Join thousands of clients who have rediscovered their confidence at BeautyLira.</p>
            <Link href="/booking" className="btn-primary">
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
