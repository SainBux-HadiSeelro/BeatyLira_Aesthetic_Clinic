import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "The BeautyLira Journal — expert skincare advice, treatment insights, and beauty intelligence from our clinical team.",
};

const categories = ["All", "Education", "Treatments", "Skin Science", "Lifestyle"];

const posts = [
  {
    slug: "natural-enhancement-first-consultation",
    title: "The Art of Natural Enhancement: What to Expect from Your First Consultation",
    category: "Education",
    date: "March 2025",
    readTime: "5 min read",
    excerpt: "Walking into an aesthetic clinic for the first time can feel daunting. We break down what to expect, what questions to ask, and how to make the most of your consultation.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    featured: true,
  },
  {
    slug: "hifu-vs-thread-lifts",
    title: "HIFU vs Thread Lifts: Which Non-Surgical Lift is Right for You?",
    category: "Treatments",
    date: "February 2025",
    readTime: "7 min read",
    excerpt: "Both HIFU and PDO thread lifts offer compelling non-surgical alternatives to a facelift — but they work very differently. Here's how to choose.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    featured: false,
  },
  {
    slug: "skin-ageing-collagen-guide",
    title: "Understanding Skin Ageing: Why Collagen is the Key to Youthful Skin",
    category: "Skin Science",
    date: "January 2025",
    readTime: "6 min read",
    excerpt: "Collagen loss is the primary driver of visible ageing. Understanding why it depletes and how to stimulate it is the foundation of every effective treatment.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    featured: false,
  },
  {
    slug: "laser-treatment-myths",
    title: "5 Laser Treatment Myths — Debunked by Our Clinicians",
    category: "Treatments",
    date: "December 2024",
    readTime: "4 min read",
    excerpt: "From 'it burns' to 'it only works on pale skin' — our experts address the most common misconceptions about laser treatments.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    featured: false,
  },
  {
    slug: "dermal-fillers-guide",
    title: "The Complete Guide to Dermal Fillers: What's Changed in 2025",
    category: "Treatments",
    date: "November 2024",
    readTime: "8 min read",
    excerpt: "The dermal filler landscape has evolved dramatically. New formulations, refined techniques, and a philosophical shift towards natural outcomes has transformed what's possible.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    featured: false,
  },
  {
    slug: "morning-skincare-routine",
    title: "The BeautyLira Morning Skincare Ritual: A Clinician's Guide",
    category: "Lifestyle",
    date: "October 2024",
    readTime: "5 min read",
    excerpt: "What you do before 9am matters more than most people realise. Our clinical team shares the morning routine that protects and amplifies every treatment.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-lira">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="section-label mb-4">The Journal</p>
              <h1 className="heading-xl text-espresso">Beauty Intelligence</h1>
            </div>
            {/* Category Filter (static UI) */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`font-dm text-xs tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 ${
                    cat === "All"
                      ? "bg-espresso text-ivory border-espresso"
                      : "border-ivory-dark text-text-muted hover:border-rose-gold hover:text-rose-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-espresso p-10 lg:p-14 flex flex-col justify-center">
                  <p className="section-label text-rose-gold mb-4">Featured · {featured.category}</p>
                  <h2 className="heading-xl text-ivory mb-5 group-hover:text-rose-gold-light transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="font-dm text-sm text-white/60 leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-dm text-xs text-white/40 tracking-wider">
                      {featured.date} · {featured.readTime}
                    </span>
                    <span className="inline-flex items-center gap-2 font-dm text-xs tracking-wider uppercase text-rose-gold group-hover:gap-3 transition-all duration-300">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="relative h-56 overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <p className="section-label mb-2">{post.category}</p>
                <h3 className="heading-md text-espresso mb-3 group-hover:text-rose-gold-dark transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="body-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="font-dm text-xs text-warm-gray tracking-wider">
                  {post.date} · {post.readTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
