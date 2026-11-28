import type { Metadata } from "next";
import DifferenceDetailView from "@/app/components/difference-detail-view/difference-detail-view";
import { differencesData } from "@/app/how-problemex-is-different/differences-data";

const point = differencesData[6];

export const metadata: Metadata = {
  title: `${point.title} | ProblemEx`,
  description: point.paragraphs[0].slice(0, 160),
  alternates: { canonical: `/how-problemex-is-different/${point.slug}` },
  openGraph: {
    siteName: "ProblemEx",
    title: `${point.title} | ProblemEx`,
    description: point.paragraphs[0].slice(0, 160),
    type: "article",
    images: [{ url: "/problemEx.png", alt: point.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${point.title} | ProblemEx`,
    description: point.paragraphs[0].slice(0, 160),
    images: ["/problemEx.png"],
  },
};

export default function Page() {
  return <DifferenceDetailView point={point} />;
}
