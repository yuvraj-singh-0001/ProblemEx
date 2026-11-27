import type { Metadata } from "next";
import HomeHero from "@/app/components/home-hero/home-hero";

export const metadata: Metadata = {
  title: "Practical Skills for Real-Life Problems",
  description:
    "ProblemEx turns real-life challenges into practical, usable solutions. Explore everyday problems and ideas that can help solve them.",
  keywords: [
    "ProblemEx",
    "real-life problems",
    "everyday challenges",
    "practical solutions",
    "problem solving",
  ],
  openGraph: {
    siteName: "ProblemEx",
    title: "ProblemEx | Practical Skills for Real-Life Problems",
    description: "Explore practical skills and Situational Knowledge for navigating real-life challenges.",
    type: "website",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProblemEx | Practical Skills for Real-Life Problems",
    description: "Explore practical skills and Situational Knowledge for navigating real-life challenges.",
    images: ["/problemEx.png"],
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const structuredData = siteUrl
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ProblemEx",
          alternateName: "ProblemEx by The True Topper",
          url: new URL("/", siteUrl).toString(),
          logo: new URL("/problemEx.png", siteUrl).toString(),
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ProblemEx",
          url: new URL("/", siteUrl).toString(),
        },
      ]
    : null;

  return (
    <>
      {structuredData?.map((schema) => (
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
          key={schema["@type"]}
          type="application/ld+json"
        />
      ))}
      <HomeHero />
    </>
  );
}
