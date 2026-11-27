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
  "/problem/flawed-objectives-and-priorities-of-education",
  "/problem/knowledge-is-tested-its-application-is-not",
  "/problem/real-life-case-studies-and-experiential-learning",
  "/problem/individual-circumstances-struggles-and-achievements",
  "/problem/real-world-demands-more-than-academic-and-technical-knowledge",
  "/problem/schools-and-educators-operate-within-systemic-constraints",
  "/problem/learning-priorities-and-a-changing-world",
  "/problem/no-structured-approach-to-real-life-preparation",
  "/consequences-of-the-problem/a-generation-struggling-to-stand-on-its-own-feet",
  "/consequences-of-the-problem/poor-decisions-with-lasting-consequences",
  "/consequences-of-the-problem/everyday-challenges-turning-into-overwhelming-crises",
  "/consequences-of-the-problem/strained-relationships-and-the-breakdown-of-human-connections",
  "/consequences-of-the-problem/vulnerability-to-manipulation-exploitation-and-deception",
  "/consequences-of-the-problem/reduced-employability-career-growth-and-economic-independence",
  "/consequences-of-the-problem/missed-opportunities-wasted-potential-and-unfulfilled-aspirations",
  "/consequences-of-the-problem/compromised-ethical-judgement-and-responsible-behaviour",
  "/consequences-of-the-problem/a-society-less-equipped-to-handle-its-collective-challenges",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
