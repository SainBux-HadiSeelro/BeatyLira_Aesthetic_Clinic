import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-2 text-ivory font-dm text-xs tracking-[0.1em] uppercase">
            Learn More <ArrowRight size={12} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="section-label mb-2">{service.subtitle}</p>
        <h3 className="heading-md mb-3 text-espresso group-hover:text-rose-gold-dark transition-colors duration-300">
          {service.title}
        </h3>
        <p className="body-sm line-clamp-2 mb-4">{service.tagline}</p>
        <div className="flex items-center gap-6 pt-4 border-t border-ivory-dark">
          <div>
            <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-warm-gray">Duration</p>
            <p className="font-dm text-sm text-espresso mt-0.5">{service.duration}</p>
          </div>
          <div>
            <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-warm-gray">Downtime</p>
            <p className="font-dm text-sm text-espresso mt-0.5">{service.downtime}</p>
          </div>
          <div>
            <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-warm-gray">Results</p>
            <p className="font-dm text-sm text-espresso mt-0.5">{service.results}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
