"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-6 text-left group"
          >
            <span className="font-cormorant text-xl text-espresso group-hover:text-rose-gold transition-colors duration-300">
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 mt-1 text-rose-gold transition-transform duration-400 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              openIndex === i ? "max-h-60 pb-6" : "max-h-0"
            }`}
          >
            <p className="body-md pr-8">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
