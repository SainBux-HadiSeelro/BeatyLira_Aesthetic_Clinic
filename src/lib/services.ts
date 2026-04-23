export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  duration: string;
  downtime: string;
  results: string;
  overview: string;
  howItWorks: string[];
  benefits: string[];
  whoIsItFor: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "hifu-skin-tightening",
    title: "HIFU Skin Tightening",
    subtitle: "Non-Surgical Lifting",
    tagline: "Precision ultrasound energy for a visibly lifted, contoured complexion.",
    description: "High-Intensity Focused Ultrasound targets deep foundational layers of the skin to stimulate collagen renewal — delivering results comparable to a surgical lift, without a single incision.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
    duration: "60–90 min",
    downtime: "None",
    results: "3–6 months",
    overview: "HIFU (High-Intensity Focused Ultrasound) is a cutting-edge, non-invasive treatment that uses focused ultrasound energy to target the deep structural layers of the skin — the same layers addressed in surgical facelifts. The thermal energy stimulates the body's natural collagen production, resulting in a progressively lifted, firmer, and more youthful appearance.",
    howItWorks: [
      "A trained clinician maps your facial anatomy and applies ultrasound gel",
      "The HIFU handpiece delivers focused energy at precise depths (1.5mm, 3mm, 4.5mm)",
      "Thermal coagulation points trigger collagen regeneration deep in the dermis",
      "Over 2–3 months, new collagen fibres tighten and lift the skin naturally",
      "Results continue to improve for up to 6 months post-treatment",
    ],
    benefits: [
      "Non-surgical, no incisions or scarring",
      "Stimulates natural collagen production",
      "Lifts brows, jawline, neck and décolletage",
      "No downtime — return to life immediately",
      "Long-lasting results (12–18 months)",
      "Safe for all skin types and tones",
    ],
    whoIsItFor: [
      "Those experiencing early signs of skin laxity",
      "Anyone wanting a lifted appearance without surgery",
      "Clients aged 30–65 seeking preventative anti-ageing",
      "Post-pregnancy skin recovery",
      "Pre-event skin firming",
    ],
    faqs: [
      { q: "Is HIFU painful?", a: "Most clients experience mild discomfort — a warming or tingling sensation. We apply numbing cream prior to treatment to maximise comfort." },
      { q: "How many sessions do I need?", a: "A single session often delivers visible results. A course of 2–3 treatments 6 months apart is recommended for optimal outcomes." },
      { q: "When will I see results?", a: "Initial tightening is visible within days. Full results develop over 2–3 months as collagen rebuilds." },
      { q: "Is there any downtime?", a: "None. You may experience mild redness or swelling for a few hours, but can resume normal activities immediately." },
      { q: "How long do results last?", a: "Results typically last 12–18 months. Maintenance treatments help sustain the lifting effect." },
    ],
  },
  {
    slug: "laser-treatment",
    title: "Laser Treatment",
    subtitle: "Precision Skin Resurfacing",
    tagline: "Advanced laser technology for luminous, refined skin texture.",
    description: "Our medical-grade laser protocols address pigmentation, texture, pores and tone — delivering a visible clarity and radiance that feels effortlessly natural.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
    duration: "30–60 min",
    downtime: "1–3 days",
    results: "Immediate + progressive",
    overview: "Our precision laser treatments use state-of-the-art technology to target specific skin concerns with exceptional accuracy. From pigmentation and sun damage to texture irregularities and enlarged pores, our tailored laser protocols are designed to reveal your skin's natural luminosity.",
    howItWorks: [
      "Comprehensive skin analysis and personalised protocol design",
      "Protective eyewear applied; cooling gel prepared",
      "Laser energy delivered in precise pulses targeting concern areas",
      "Controlled thermal energy stimulates cellular renewal",
      "Post-treatment soothing serum and SPF applied",
    ],
    benefits: [
      "Reduces pigmentation, sunspots and melasma",
      "Refines skin texture and minimises pores",
      "Improves overall skin tone and clarity",
      "Stimulates collagen for long-term skin health",
      "Customisable to your specific skin type",
      "Visible results after a single session",
    ],
    whoIsItFor: [
      "Clients with uneven skin tone or pigmentation",
      "Those seeking refined texture and pore reduction",
      "Acne scarring and post-inflammatory hyperpigmentation",
      "Sun-damaged or dull, lacklustre skin",
      "Anyone wanting a brighter, more luminous complexion",
    ],
    faqs: [
      { q: "Which laser is used?", a: "We use medical-grade Nd:YAG and fractional lasers, selected based on your skin type and concern." },
      { q: "Is laser safe for darker skin tones?", a: "Yes. Our protocols are adapted for all Fitzpatrick skin types with appropriate settings and safety measures." },
      { q: "How many sessions are recommended?", a: "Typically 3–6 sessions spaced 4 weeks apart for optimal results." },
      { q: "What aftercare is required?", a: "Strict sun protection, gentle cleansing, and prescribed post-treatment serums for 7 days." },
      { q: "Can I wear makeup after?", a: "We recommend 24–48 hours without makeup to allow the skin to settle." },
    ],
  },
  {
    slug: "endo-fibre-lift",
    title: "Endo Fibre Lift",
    subtitle: "Thread-Based Rejuvenation",
    tagline: "Clinically proven threads for immediate lift and lasting regeneration.",
    description: "The Endo Fibre Lift uses biocompatible PDO threads to mechanically lift and structurally support sagging skin — with the added benefit of ongoing collagen stimulation.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80",
    duration: "45–75 min",
    downtime: "3–5 days",
    results: "Immediate + 3 months",
    overview: "The Endo Fibre Lift is a minimally invasive thread lifting procedure using ultra-fine PDO (polydioxanone) threads to provide immediate mechanical lifting of the face and neck. As threads dissolve over 4–6 months, they leave behind a scaffold of new collagen — maintaining and enhancing results naturally.",
    howItWorks: [
      "Detailed facial mapping and lift vector planning",
      "Local anaesthetic applied for complete comfort",
      "Fine cannulas introduce PDO threads at precise angles",
      "Threads are anchored and tensioned for optimal lift",
      "Dissolved threads leave collagen-rich channels over 4–6 months",
    ],
    benefits: [
      "Immediate visible lifting effect",
      "Stimulates lasting collagen regeneration",
      "Fully dissolvable, biocompatible material",
      "Natural-looking results, not 'pulled' appearance",
      "Can be combined with other treatments",
      "Minimal recovery time",
    ],
    whoIsItFor: [
      "Clients with mild to moderate facial sagging",
      "Those wanting an alternative to surgical lifting",
      "Individuals in their mid-30s to 60s",
      "Anyone seeking a refreshed, naturally lifted look",
    ],
    faqs: [
      { q: "Is the procedure painful?", a: "Local anaesthetic ensures minimal discomfort during the procedure. Some tenderness may be felt for 2–3 days post-treatment." },
      { q: "How long do threads last?", a: "PDO threads dissolve in 4–6 months, but the collagen they stimulate can maintain results for 12–24 months." },
      { q: "Are there visible sutures?", a: "No. Threads are placed beneath the skin via tiny entry points that heal invisibly." },
      { q: "Can I combine this with fillers?", a: "Yes — we often combine threads with fillers for a comprehensive rejuvenation result." },
      { q: "What is the recovery like?", a: "Mild swelling and bruising for 3–5 days is normal. Most clients return to normal activities within a week." },
    ],
  },
  {
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    subtitle: "Sculpting & Volume Restoration",
    tagline: "Artful enhancement that honours your natural anatomy.",
    description: "Our dermal filler treatments use premium hyaluronic acid to restore lost volume, define facial contours and subtly enhance features — with results that look genuinely natural.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
    duration: "30–60 min",
    downtime: "1–2 days",
    results: "Immediate",
    overview: "Dermal fillers at BeautyLira are a clinical art form. Using premium hyaluronic acid formulations, our practitioners restore youthful volume, define contours and enhance features with precision. Every treatment is personalised to your anatomy, ensuring results that complement — never overstate — your natural beauty.",
    howItWorks: [
      "In-depth facial analysis and treatment planning",
      "Topical anaesthetic applied for comfort",
      "Premium HA filler injected using fine needles or cannulas",
      "Precise moulding and sculpting by your practitioner",
      "Review of results and aftercare protocol provided",
    ],
    benefits: [
      "Immediate, visible results",
      "Reversible with hyaluronidase if needed",
      "Natural-looking volume restoration",
      "Enhances lips, cheeks, jawline and chin",
      "Smooths nasolabial folds and marionette lines",
      "No downtime for most clients",
    ],
    whoIsItFor: [
      "Anyone experiencing volume loss in the face",
      "Clients wanting subtle lip or cheek enhancement",
      "Those seeking jawline definition or chin projection",
      "Individuals wanting to soften lines and hollows",
    ],
    faqs: [
      { q: "Are fillers safe?", a: "When performed by trained practitioners using premium products, dermal fillers have an excellent safety record. We use only CE-marked, FDA-approved hyaluronic acid products." },
      { q: "How long do fillers last?", a: "Depending on area and product, results last 9–18 months. Lips typically dissolve faster than cheeks." },
      { q: "Will it look natural?", a: "Our philosophy is natural enhancement. We never overfill — our goal is to make you look refreshed, not altered." },
      { q: "What is the aftercare?", a: "Avoid strenuous activity and makeup for 24 hours. Sleep elevated and avoid extreme heat for 48 hours." },
      { q: "Can fillers be dissolved?", a: "Yes. Hyaluronic acid fillers can be dissolved at any time using hyaluronidase if you are unhappy with results." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
