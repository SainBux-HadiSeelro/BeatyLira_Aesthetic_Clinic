import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BeautyLira. Find our clinic address, opening hours, and contact details.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-lira">
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="heading-xl text-espresso max-w-xl">
            We&apos;d Love to Hear From You
          </h1>
        </div>
      </section>

      <section className="pb-24 bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="heading-lg text-espresso mb-8">Send a Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="contact-name" className="field-label">Your Name</label>
                    <input id="contact-name" type="text" placeholder="Full name" className="field-lira" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="field-label">Email Address</label>
                    <input id="contact-email" type="email" placeholder="your@email.com" className="field-lira" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="field-label">Subject</label>
                  <input id="contact-subject" type="text" placeholder="How can we help?" className="field-lira" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="field-label">Message</label>
                  <textarea id="contact-message" rows={5} placeholder="Tell us more..." className="field-lira resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <ArrowRight size={14} />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h2 className="heading-lg text-espresso mb-8">Visit the Clinic</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-rose-gold flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-rose-gold" />
                    </div>
                    <div>
                      <p className="font-dm text-xs tracking-[0.2em] uppercase text-warm-gray mb-1">Address</p>
                      <p className="font-dm text-sm text-espresso leading-relaxed">
                        12 Harley Street<br />London, W1G 9PQ<br />United Kingdom
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-rose-gold flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-rose-gold" />
                    </div>
                    <div>
                      <p className="font-dm text-xs tracking-[0.2em] uppercase text-warm-gray mb-1">Phone</p>
                      <a href="tel:+442071234567" className="font-dm text-sm text-espresso hover:text-rose-gold transition-colors">
                        +44 207 123 4567
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-rose-gold flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-rose-gold" />
                    </div>
                    <div>
                      <p className="font-dm text-xs tracking-[0.2em] uppercase text-warm-gray mb-1">Email</p>
                      <a href="mailto:hello@beautylira.com" className="font-dm text-sm text-espresso hover:text-rose-gold transition-colors">
                        hello@beautylira.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-rose-gold flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-rose-gold" />
                    </div>
                    <div>
                      <p className="font-dm text-xs tracking-[0.2em] uppercase text-warm-gray mb-2">Hours</p>
                      <div className="space-y-1">
                        {[
                          ["Monday – Friday", "9:00am – 7:00pm"],
                          ["Saturday", "10:00am – 5:00pm"],
                          ["Sunday", "Closed"],
                        ].map(([day, hours]) => (
                          <div key={day} className="flex justify-between gap-8">
                            <span className="font-dm text-sm text-espresso">{day}</span>
                            <span className="font-dm text-sm text-text-muted">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map embed */}
              <div className="relative h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9034956050944!2d-0.14916468422958!3d51.51948407963591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052f10e19e0b%3A0x3dda3e4d4e4b5cf0!2sHarley%20St%2C%20London!5e0!3m2!1sen!2suk!4v1617000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BeautyLira location"
                />
              </div>

              <div className="bg-espresso p-8 text-center">
                <p className="font-cormorant text-2xl text-ivory italic mb-4">
                  Ready to begin your journey?
                </p>
                <Link href="/booking" className="btn-rose inline-flex">
                  Book a Consultation <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
