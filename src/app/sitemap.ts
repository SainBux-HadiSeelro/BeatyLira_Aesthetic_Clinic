import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://beautylira.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/hifu-skin-tightening",
    "/services/laser-treatment",
    "/services/endo-fibre-lift",
    "/services/dermal-fillers",
    "/pricing",
    "/gallery",
    "/blog",
    "/blog/natural-enhancement-first-consultation",
    "/blog/hifu-vs-thread-lifts",
    "/blog/skin-ageing-collagen-guide",
    "/blog/laser-treatment-myths",
    "/blog/dermal-fillers-guide",
    "/blog/morning-skincare-routine",
    "/booking",
    "/contact",
    "/results",
    "/membership",
    "/testimonials",
    "/faqs",
    "/careers",
    "/privacy-policy",
    "/terms",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}
