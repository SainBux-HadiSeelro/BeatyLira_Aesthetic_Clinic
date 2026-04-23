import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Book your BeautyLira consultation online. Choose your treatment and preferred date — our team will confirm within 24 hours.",
};

export default function BookingPage() {
  return (
    <>
      <section className="relative min-h-screen pt-32 pb-24 bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-32">
              <p className="section-label mb-4">Reserve Your Visit</p>
              <h1 className="heading-xl text-espresso mb-6">
                Book a<br /><span className="italic font-light">Consultation</span>
              </h1>
              <p className="body-lg mb-10 max-w-md">
                Your consultation is a private, unhurried conversation with one of our senior practitioners. There is no obligation — only an opportunity to explore what is possible.
              </p>

              <div className="relative h-72 overflow-hidden mb-10">
                <Image
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80"
                  alt="BeautyLira clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="space-y-5">
                {[
                  { title: "Complimentary Consultation", text: "Your first visit is always free, with no pressure to proceed." },
                  { title: "Personal Treatment Plan", text: "We design your journey around your goals, not our menu." },
                  { title: "Confirmed Within 24 Hours", text: "A member of our team will be in touch to confirm your time." },
                ].map(({ title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-gold mt-2 shrink-0" />
                    <div>
                      <p className="font-dm text-sm font-medium text-espresso">{title}</p>
                      <p className="body-sm mt-0.5">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white shadow-card p-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
