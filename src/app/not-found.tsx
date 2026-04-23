import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-ivory flex flex-col items-center justify-center text-center px-6">
      <p className="section-label mb-4">404</p>
      <h1 className="heading-display text-espresso mb-6">
        Page Not Found
      </h1>
      <p className="body-lg max-w-md mb-10">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <Link href="/services" className="btn-outline">
          Explore Treatments
        </Link>
      </div>
    </section>
  );
}
