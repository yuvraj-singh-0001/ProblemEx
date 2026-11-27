import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    const legacySlugs = [
      "what-is-the-problem",
      "consequences-of-the-problem",
      "solution",
      "what-problemex-is-not",
      "core-philosophy-of-problemex",
      "12-pillar-framework",
      "problemex-learning-approach-and-methodologies",
      "outcomes-and-benefits",
      "how-problemex-is-different",
      "structure-and-delivery-of-problemex",
      "advantages-of-problemex-for-schools",
      "get-in-touch",
    ];
    const destinations = [
      "/problem",
      "/consequences-of-the-problem",
      "/solution",
      "/what-problemex-is-not",
      "/core-philosophy-of-problemex",
      "/12-pillar-framework",
      "/problemex-learning-approach-and-methodologies",
      "/outcomes-and-benefits",
      "/how-problemex-is-different",
      "/structure-and-delivery-of-problemex",
      "/advantages-of-problemex-for-schools",
      "/get-in-touch",
    ];
    return legacySlugs.map((slug, index) => ({
      source: `/problem/${slug}`,
      destination: destinations[index],
      permanent: true,
    })).concat([
      { source: "/academic-excellence-yet-struggling-in-life", destination: "/problem/academic-excellence-yet-struggling-in-life", permanent: true },
      { source: "/struggle-for-self-reliance", destination: "/problem/struggle-for-self-reliance", permanent: true },
      { source: "/disproportionate-impact-of-everyday-problems", destination: "/problem/disproportionate-impact-of-everyday-problems", permanent: true },
      { source: "/theoretical-education-limited-practical-application", destination: "/problem/theoretical-education-limited-practical-application", permanent: true },
      { source: "/degrees-yet-struggling-to-earn-a-livelihood", destination: "/problem/degrees-yet-struggling-to-earn-a-livelihood", permanent: true },
      { source: "/insufficient-vocational-technical-practical-skills", destination: "/problem/insufficient-vocational-technical-practical-skills", permanent: true },
    ]);
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
