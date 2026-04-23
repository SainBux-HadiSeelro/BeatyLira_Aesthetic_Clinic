import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import type { Metadata } from "next";

const posts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
    authorRole: string;
    content: { heading?: string; body: string }[];
  }
> = {
  "natural-enhancement-first-consultation": {
    title: "The Art of Natural Enhancement: What to Expect from Your First Consultation",
    category: "Education",
    date: "March 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&q=85",
    author: "Dr. Elena Marchetti",
    authorRole: "Founder & Lead Aesthetic Physician",
    content: [
      { body: "Walking into an aesthetic clinic for the first time can feel daunting — even when you have done your research. The combination of medical environment and deeply personal subject matter creates a unique anxiety that even the most confident clients experience." },
      { heading: "What to Expect When You Arrive", body: "From the moment you arrive at BeautyLira, the environment is designed to be calming rather than clinical. You will be welcomed into a private consultation room where your practitioner will spend time simply talking — asking about your concerns, your lifestyle, your skincare routine, and most importantly, your goals." },
      { heading: "The Consultation is Yours", body: "The most important thing to understand about a genuine aesthetic consultation is that it belongs to you. There is no treatment quota to fill. No pressure to proceed. Our role in that room is to listen, advise, and educate — not to sell." },
      { heading: "Questions Worth Asking", body: "Come prepared with questions. What are the realistic outcomes? How many sessions might I need? What does the recovery look like? Are there lifestyle factors that affect results? What are the risks? A good practitioner will welcome every question and answer them honestly." },
      { heading: "What Happens Next", body: "If a treatment plan is recommended and you decide to proceed, you will receive a bespoke written protocol outlining every step — including expected outcomes, aftercare guidance, and follow-up appointments. Nothing begins until you are fully comfortable." },
      { body: "The consultation is the beginning of a relationship — not a transaction. At BeautyLira, that distinction means everything." },
    ],
  },
  "hifu-vs-thread-lifts": {
    title: "HIFU vs Thread Lifts: Which Non-Surgical Lift is Right for You?",
    category: "Treatments",
    date: "February 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1400&q=85",
    author: "Dr. James Holloway",
    authorRole: "Laser & Resurfacing Specialist",
    content: [
      { body: "As the demand for non-surgical alternatives to facelift surgery continues to grow, two treatments consistently lead the conversation: HIFU (High-Intensity Focused Ultrasound) and PDO Thread Lifts. Both offer compelling, visible results — but they work through fundamentally different mechanisms." },
      { heading: "How HIFU Works", body: "HIFU uses focused ultrasound energy to create precise thermal injury at multiple depths within the skin — including the SMAS layer, which is the same layer addressed in surgical facelifts. The body responds by initiating collagen remodelling, resulting in progressive tightening and lifting over 2–3 months." },
      { heading: "How Thread Lifts Work", body: "The Endo Fibre Lift uses fine dissolvable PDO threads inserted beneath the skin to provide immediate mechanical lift. As the threads dissolve over 4–6 months, they leave collagen-rich channels that maintain and enhance the result." },
      { heading: "Which Delivers Faster Results?", body: "Thread lifts win on immediacy — structural lift is visible the same day. HIFU results develop gradually, peaking around 3 months. However, HIFU requires no recovery time while threads require 3–5 days." },
      { heading: "Which Lasts Longer?", body: "Both treatments typically last 12–18 months. Results are enhanced by maintenance treatments — a single annual HIFU session or thread refresh can sustain the effect long-term." },
      { heading: "Our Recommendation", body: "For mild to moderate laxity with no desire for any downtime, HIFU is often the preferred choice. For those who want a more immediate structural lift and are comfortable with a brief recovery, thread lifting offers impressive results. Many clients benefit most from a combination of both — a decision always made through consultation." },
    ],
  },
  "skin-ageing-collagen-guide": {
    title: "Understanding Skin Ageing: Why Collagen is the Key to Youthful Skin",
    category: "Skin Science",
    date: "January 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1400&q=85",
    author: "Dr. Elena Marchetti",
    authorRole: "Founder & Lead Aesthetic Physician",
    content: [
      { body: "Collagen is the structural protein that gives skin its firmness, elasticity, and plumpness. At its peak — typically in our mid-twenties — our skin produces abundant collagen. But from around age 25, production begins to decline by approximately 1% per year. By 50, we may have lost as much as half our youthful collagen density." },
      { heading: "What Accelerates Collagen Loss?", body: "Beyond the natural ageing process, several lifestyle factors significantly accelerate collagen breakdown: UV exposure (the most damaging), smoking, chronic stress, poor sleep, high-sugar diets, and pollution. Understanding these triggers is the first step to protecting what you have." },
      { heading: "What Happens When Collagen Depletes?", body: "As collagen fibres weaken and fragment, skin loses its structural scaffolding. The result is visible in the form we all recognise: fine lines, deepening wrinkles, hollowing of the cheeks and temples, jowl formation, and a loss of the smooth, plump texture associated with youth." },
      { heading: "How We Stimulate New Collagen", body: "The most effective treatments work by triggering the body's own collagen repair response. HIFU, laser resurfacing, and PDO threads all create controlled micro-injury at precise depths — prompting the skin to produce new, organised collagen fibres in response." },
      { heading: "The Role of Skincare", body: "Topicals play a supporting role. Vitamin C (a key cofactor in collagen synthesis), retinoids (which stimulate fibroblast activity), and SPF (which prevents UV-induced degradation) are the cornerstones of any collagen-protective skincare programme." },
      { body: "Collagen stimulation is not a single event — it is an ongoing commitment. The most effective approach combines treatments that stimulate production with daily habits that prevent further loss." },
    ],
  },
};

const slugs = Object.keys(posts);

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: post.title, description: post.content[0]?.body.slice(0, 160) };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug] ?? posts["natural-enhancement-first-consultation"];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end pb-16 overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
        <div className="container-lira relative z-10 max-w-3xl">
          <p className="section-label text-rose-gold-light mb-3">{post.category}</p>
          <h1 className="heading-xl text-ivory mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-white/50">
            <span className="flex items-center gap-2 font-dm text-xs"><Calendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-2 font-dm text-xs"><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-ivory">
        <div className="container-lira">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 max-w-5xl mx-auto">
            {/* Article */}
            <article>
              {/* Author */}
              <div className="flex items-center gap-4 mb-12 pb-8 border-b border-ivory-dark">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80"
                    alt={post.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-dm text-sm font-medium text-espresso">{post.author}</p>
                  <p className="font-dm text-xs text-warm-gray">{post.authorRole}</p>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-7">
                {post.content.map((block, i) => (
                  <div key={i}>
                    {block.heading && (
                      <h2 className="heading-md text-espresso mb-4 mt-10">{block.heading}</h2>
                    )}
                    <p className="body-lg">{block.body}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-16 p-10 bg-espresso">
                <p className="font-cormorant text-2xl text-ivory italic mb-4">
                  Ready to begin your treatment journey?
                </p>
                <p className="body-sm text-white/60 mb-6">
                  Book a complimentary consultation with our expert team.
                </p>
                <Link href="/booking" className="btn-rose inline-flex">
                  Book Now <ArrowRight size={14} />
                </Link>
              </div>

              {/* Back */}
              <div className="mt-10">
                <Link href="/blog" className="inline-flex items-center gap-2 font-dm text-xs tracking-wider uppercase text-warm-gray hover:text-rose-gold transition-colors">
                  <ArrowLeft size={12} /> Back to Journal
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
              <div className="bg-ivory-dark p-8">
                <h3 className="heading-md text-espresso mb-6">Also in The Journal</h3>
                <div className="space-y-6">
                  {Object.entries(posts)
                    .filter(([s]) => s !== slug)
                    .slice(0, 2)
                    .map(([s, p]) => (
                      <Link key={s} href={`/blog/${s}`} className="group block">
                        <p className="section-label mb-1 text-[10px]">{p.category}</p>
                        <p className="font-cormorant text-lg text-espresso group-hover:text-rose-gold transition-colors duration-200 leading-snug">{p.title}</p>
                        <p className="font-dm text-xs text-warm-gray mt-1">{p.date}</p>
                      </Link>
                    ))}
                </div>
              </div>
              <div className="bg-espresso p-8 text-center">
                <p className="font-cormorant text-2xl text-ivory italic mb-4">Book a Consultation</p>
                <p className="body-sm text-white/60 mb-6">Complimentary. No obligation. Entirely yours.</p>
                <Link href="/booking" className="btn-rose w-full justify-center text-xs">
                  Reserve Your Visit
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
