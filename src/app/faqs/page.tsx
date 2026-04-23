import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to the most common questions about BeautyLira treatments, safety, pricing, and booking.",
};

const faqGroups = [
  {
    category: "Getting Started",
    faqs: [
      { q: "Do I need a referral to book?", a: "No referral is needed. You can book a consultation directly through our website or by calling our clinic." },
      { q: "Is the consultation free?", a: "Yes. Your initial consultation at BeautyLira is complimentary and carries no obligation to proceed with treatment." },
      { q: "How long does a consultation last?", a: "We allocate 45–60 minutes for every initial consultation. We never rush — this time is yours." },
      { q: "Can I book on behalf of someone else?", a: "Yes. You may book a consultation as a gift. Please note that all clients must attend their own consultation before treatment." },
    ],
  },
  {
    category: "Treatments",
    faqs: [
      { q: "Are your treatments safe?", a: "All treatments are performed by medically qualified practitioners using CE-marked, regulatory-approved products and devices. Safety is our highest priority." },
      { q: "How do I know which treatment is right for me?", a: "The honest answer: you may not know before your consultation. That is precisely what the consultation is for — to assess your skin, discuss your goals, and recommend the most appropriate treatment plan." },
      { q: "Can I combine treatments?", a: "Yes. Many clients benefit from combination treatments — for example, HIFU for tightening and fillers for volume restoration. We design every plan holistically." },
      { q: "Are results permanent?", a: "No aesthetic treatment offers permanent results. Most treatments last 12–18 months. Maintenance treatments can sustain and even improve outcomes over time." },
    ],
  },
  {
    category: "Safety & Aftercare",
    faqs: [
      { q: "What are the risks?", a: "All aesthetic treatments carry some risk. During your consultation, we will discuss the specific risks relevant to your chosen treatment and candidacy. We never proceed when risks outweigh benefits." },
      { q: "What should I do if I am unhappy with my results?", a: "Contact us immediately. We take all feedback seriously and will invite you back for a review appointment at no charge. Where appropriate (e.g. with fillers), we will take corrective action." },
      { q: "What aftercare is required?", a: "Aftercare varies by treatment and is detailed in your personalised post-treatment protocol. In general: avoid UV exposure, strenuous exercise, and heat for 24–48 hours after most procedures." },
    ],
  },
  {
    category: "Pricing & Booking",
    faqs: [
      { q: "Do you offer payment plans?", a: "Yes. We partner with finance providers to offer 0% interest instalment plans. Please enquire at your consultation or contact our team directly." },
      { q: "What is your cancellation policy?", a: "We ask for 48 hours' notice for cancellations or rescheduling. Late cancellations may incur a £50 rebooking fee." },
      { q: "Do you offer gift vouchers?", a: "Yes. BeautyLira gift vouchers are available for consultations, specific treatments, or monetary values. Please contact us to order." },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-lira text-center max-w-2xl mx-auto">
          <p className="section-label mb-4">Help Centre</p>
          <h1 className="heading-xl text-espresso mb-6">Frequently Asked Questions</h1>
          <p className="body-lg">
            Find answers to our most commonly asked questions below. If you can&apos;t find what you&apos;re looking for, our team is always happy to help.
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="pb-24 bg-ivory">
        <div className="container-lira max-w-3xl mx-auto space-y-16">
          {faqGroups.map((group) => (
            <div key={group.category}>
              <h2 className="heading-md text-espresso mb-8 pb-4 border-b-2 border-rose-gold inline-block">
                {group.category}
              </h2>
              <FAQAccordion faqs={group.faqs} />
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-24 bg-espresso text-center">
        <div className="container-lira max-w-xl mx-auto">
          <p className="section-label text-rose-gold mb-4">Still Have Questions?</p>
          <h2 className="heading-xl text-ivory mb-6">We&apos;re Here to Help</h2>
          <p className="body-lg text-white/60 mb-10">
            Our team is available Monday to Saturday. Reach us by phone, email, or book a free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-rose">
              Contact Us <ArrowRight size={14} />
            </Link>
            <Link href="/booking" className="btn-outline border-white/30 text-ivory hover:bg-white/10 hover:text-ivory">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
