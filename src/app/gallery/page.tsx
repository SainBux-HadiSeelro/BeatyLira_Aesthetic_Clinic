import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the BeautyLira gallery — real results, clinic imagery and before & after transformations.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80", alt: "Skin treatment result", size: "large" },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80", alt: "Laser treatment", size: "small" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Aesthetic clinic", size: "small" },
  { src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80", alt: "Before treatment", size: "medium" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", alt: "Clinic interior", size: "medium" },
  { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80", alt: "Beauty result", size: "large" },
  { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80", alt: "Treatment room", size: "small" },
  { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80", alt: "Practitioner", size: "small" },
  { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", alt: "Skin care", size: "medium" },
];

const beforeAfterPairs = [
  {
    label: "HIFU Skin Tightening",
    before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    after: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  },
  {
    label: "Laser Treatment",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
  },
  {
    label: "Dermal Fillers",
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80",
  },
];


export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-ivory text-center">
        <div className="container-lira">
          <p className="section-label mb-4">Our Work</p>
          <h1 className="heading-xl text-espresso mb-6">The Gallery</h1>
          <p className="body-lg max-w-xl mx-auto">
            A curated collection of results, clinic moments, and transformations from BeautyLira. Each image tells a story of care, precision, and natural beauty.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-section-sm bg-ivory">
        <div className="container-lira">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={img.size === "large" ? 700 : img.size === "medium" ? 480 : 360}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before After */}
      <section className="section-pad bg-ivory-dark">
        <div className="container-lira text-center mb-12">
          <p className="section-label mb-4">Transformations</p>
          <h2 className="heading-xl text-espresso">Before &amp; After</h2>
        </div>
        <div className="container-lira grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterPairs.map((pair, i) => (
            <div key={i} className="space-y-1">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <Image
                    src={pair.before}
                    alt={`Before — ${pair.label}`}
                    width={400}
                    height={300}
                    className="w-full object-cover h-48"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-espresso/80 px-2 py-0.5">
                    <span className="font-dm text-[9px] tracking-widest uppercase text-ivory">Before</span>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={pair.after}
                    alt={`After — ${pair.label}`}
                    width={400}
                    height={300}
                    className="w-full object-cover h-48"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-rose-gold/90 px-2 py-0.5">
                    <span className="font-dm text-[9px] tracking-widest uppercase text-ivory">After</span>
                  </div>
                </div>
              </div>
              <p className="font-dm text-xs text-center text-warm-gray tracking-wider uppercase pt-2">
                {pair.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
