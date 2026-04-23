import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Clock, Zap, Users } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { services, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end pb-16 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
        <div className="container-lira relative z-10">
          <p className="section-label text-rose-gold-light mb-3">{service.subtitle}</p>
          <h1 className="heading-display text-ivory max-w-2xl mb-4">{service.title}</h1>
          <p className="font-dm text-white/60 text-lg max-w-xl leading-relaxed">{service.tagline}</p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-espresso">
        <div className="container-lira">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-0">
            {[
              { icon: Clock, label: "Duration", value: service.duration },
              { icon: Zap, label: "Downtime", value: service.downtime },
              { icon: CheckCircle, label: "Results", value: service.results },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 px-8 py-8">
                <Icon size={18} className="text-rose-gold shrink-0" />
                <div>
                  <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-white/40">{label}</p>
                  <p className="font-cormorant text-xl text-ivory mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-label mb-4">Overview</p>
              <h2 className="heading-xl mb-6 text-espresso">What is {service.title}?</h2>
              <p className="body-lg">{service.overview}</p>
              <div className="mt-10">
                <Link href="/booking" className="btn-primary">
                  Book Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="relative h-[480px] overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.title} at BeautyLira`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-lira">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-label mb-4">The Process</p>
              <h2 className="heading-xl text-espresso">How It Works</h2>
            </div>
            <div className="space-y-6">
              {service.howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-10 h-10 shrink-0 border border-rose-gold flex items-center justify-center">
                    <span className="font-cormorant text-rose-gold text-lg">{i + 1}</span>
                  </div>
                  <p className="body-lg pt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits + Who it's for */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-6">Key Benefits</p>
              <h2 className="heading-lg mb-8 text-espresso">What You Gain</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <CheckCircle size={16} className="text-rose-gold mt-1 shrink-0" />
                    <span className="body-md">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label mb-6">Candidacy</p>
              <h2 className="heading-lg mb-8 text-espresso">Who Is It For?</h2>
              <ul className="space-y-4">
                {service.whoIsItFor.map((who) => (
                  <li key={who} className="flex items-start gap-4">
                    <Users size={16} className="text-rose-gold mt-1 shrink-0" />
                    <span className="body-md">{who}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-8 bg-espresso">
                <p className="font-cormorant text-2xl text-ivory italic mb-4">
                  &ldquo;Not sure if this treatment is right for you?&rdquo;
                </p>
                <p className="body-sm text-white/60 mb-6">
                  Book a free consultation and let our practitioners assess your suitability in person.
                </p>
                <Link href="/booking" className="btn-rose inline-flex">
                  Book Free Consultation <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-lira">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Real Results</p>
            <h2 className="heading-xl text-espresso">Before & After</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt="Before treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/10" />
                <div className="absolute bottom-4 left-4 bg-espresso/80 px-4 py-2">
                  <span className="font-dm text-xs tracking-[0.2em] uppercase text-ivory">Before</span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80"
                  alt="After treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-rose-gold/90 px-4 py-2">
                  <span className="font-dm text-xs tracking-[0.2em] uppercase text-ivory">After</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center body-sm mt-6">
            Results shown are real clients of BeautyLira. Individual results may vary.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-ivory">
        <div className="container-lira max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Questions</p>
            <h2 className="heading-xl text-espresso">Frequently Asked</h2>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-espresso text-center">
        <div className="container-lira max-w-2xl mx-auto">
          <p className="section-label text-rose-gold mb-4">Ready?</p>
          <h2 className="heading-xl text-ivory mb-6">Book Your {service.title}</h2>
          <p className="body-lg text-white/60 mb-10 max-w-xl mx-auto">
            Take the first step towards your transformation. Our practitioners are ready to welcome you.
          </p>
          <Link href="/booking" className="btn-rose">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
