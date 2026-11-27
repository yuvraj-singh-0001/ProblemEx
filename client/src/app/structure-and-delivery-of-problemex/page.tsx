import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";






export const metadata: Metadata = {
  title: "Programme Structure and Delivery",
  description: "Learn how the ProblemEx programme is structured and delivered to build practical abilities for everyday challenges.",
  alternates: { canonical: "/structure-and-delivery-of-problemex" },
  openGraph: {
    siteName: "ProblemEx",
    title: "ProblemEx Programme Structure and Delivery | ProblemEx",
    description: "Learn how the ProblemEx programme is structured and delivered to build practical abilities for everyday challenges.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProblemEx Programme Structure and Delivery | ProblemEx",
    description: "Learn how the ProblemEx programme is structured and delivered to build practical abilities for everyday challenges.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "ProblemEx Programme Structure and Delivery", item: siteUrl ? new URL("/structure-and-delivery-of-problemex", siteUrl).toString() : undefined },
  ],
};

const sections = [
  { slug: "problem", title: "What Is the Problem?" },
  { slug: "consequences-of-the-problem", title: "The Consequences of the Problem" },
  { slug: "solution", title: "The Solution: ProblemEx" },
  { slug: "what-problemex-is-not", title: "What ProblemEx Is Not" },
  { slug: "core-philosophy-of-problemex", title: "The Core Philosophy of ProblemEx" },
  { slug: "12-pillar-framework", title: "The 12-Pillar Framework" },
  { slug: "problemex-learning-approach-and-methodologies", title: "The ProblemEx Learning Approach and Methodologies" },
  { slug: "outcomes-and-benefits", title: "The Outcomes and Benefits" },
  { slug: "how-problemex-is-different", title: "How ProblemEx Is Different" },
  { slug: "structure-and-delivery-of-problemex", title: "The Structure and Delivery of ProblemEx" },
  { slug: "advantages-of-problemex-for-schools", title: "The Advantages of ProblemEx for Schools" },
  { slug: "get-in-touch", title: "Get in Touch" },
];
const problemIndex = 9;
function pathFor(slug: string) { return slug === "problem" ? "/problem" : "/" + slug; }

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-3 text-sm text-slate-500"><Link className="font-semibold text-[#147b4b] hover:underline" href="/">Home</Link><span className="mx-2">/</span><span aria-current="page">The Structure and Delivery of ProblemEx</span></nav>
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">The Structure and Delivery of ProblemEx</h1></header>
        {
          (
          <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-[#dce6ed] bg-white/85 px-6 py-8 text-center text-base leading-7 text-slate-600 sm:text-lg">
            This ProblemEx section is ready for its learning content.
          </p>
        )
        }
        <nav aria-label="Explore more ProblemEx sections" className="mx-auto mt-16 max-w-6xl border-t border-[#d4e0e8] pt-7 sm:mt-20 sm:pt-9"><p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#147b4b]">Continue exploring</p><div className="grid gap-3 sm:grid-cols-2">
          {problemIndex > 0 && <Link className="rounded-2xl border border-[#d4e0e8] bg-white/80 p-4 transition hover:border-[#159447] hover:shadow-md" href={pathFor(sections[problemIndex - 1].slug)}><span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Previous section</span><span className="mt-1 block font-semibold text-[#102b50]">← {sections[problemIndex - 1].title}</span></Link>}
          {problemIndex < sections.length - 1 && <Link className="rounded-2xl border border-[#d4e0e8] bg-white/80 p-4 transition hover:border-[#159447] hover:shadow-md sm:text-right" href={pathFor(sections[problemIndex + 1].slug)}><span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Next section</span><span className="mt-1 block font-semibold text-[#102b50]">{sections[problemIndex + 1].title} →</span></Link>}
        </div></nav>
      </section>
    </main>
  );
}
