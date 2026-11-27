import type { MetadataRoute } from "next";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const paths = [
  "/", "/problem", "/consequences-of-the-problem", "/solution", "/what-problemex-is-not",
  "/core-philosophy-of-problemex", "/12-pillar-framework",
  "/problemex-learning-approach-and-methodologies", "/outcomes-and-benefits",
  "/how-problemex-is-different", "/structure-and-delivery-of-problemex",
  "/advantages-of-problemex-for-schools", "/get-in-touch",
  "/problem/academic-excellence-yet-struggling-in-life",
  "/problem/struggle-for-self-reliance",
  "/problem/disproportionate-impact-of-everyday-problems",
  "/problem/theoretical-education-limited-practical-application",
  "/problem/degrees-yet-struggling-to-earn-a-livelihood",
  "/problem/insufficient-vocational-technical-practical-skills",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
