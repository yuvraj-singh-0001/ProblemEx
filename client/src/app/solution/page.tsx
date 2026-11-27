import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";






export const metadata: Metadata = {
  title: "Practical Skills for Real-Life Problems",
  description: "Learn how ProblemEx by The True Topper develops Situational Knowledge and practical abilities for real-life problems, challenges and dilemmas.",
  alternates: { canonical: "/solution" },
  openGraph: {
    siteName: "ProblemEx",
    title: "Introducing ProblemEx | ProblemEx",
    description: "Learn how ProblemEx by The True Topper develops Situational Knowledge and practical abilities for real-life problems, challenges and dilemmas.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Introducing ProblemEx | ProblemEx",
    description: "Learn how ProblemEx by The True Topper develops Situational Knowledge and practical abilities for real-life problems, challenges and dilemmas.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "Introducing ProblemEx", item: siteUrl ? new URL("/solution", siteUrl).toString() : undefined },
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
const problemIndex = 2;
function pathFor(slug: string) { return slug === "problem" ? "/problem" : "/" + slug; }

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-3 text-sm text-slate-500"><Link className="font-semibold text-[#147b4b] hover:underline" href="/">Home</Link><span className="mx-2">/</span><span aria-current="page">Introducing ProblemEx</span></nav>
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">Introducing ProblemEx</h1></header>
        {
          (
          <div className="mx-auto mt-5 w-full max-w-7xl space-y-12 text-left sm:mt-8 sm:space-y-16">
            <ScrollReveal delay={0}>
            <section>
              <div className="mt-8 text-center sm:mt-10">
                <h2 className="text-2xl font-bold tracking-tight text-[#102b50] sm:text-3xl">
                  ProblemEx by TTT
                </h2>
                <p className="mt-3 bg-gradient-to-r from-[#e11d48] via-[#c2410c] to-[#15803d] bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
                  Practical Skills to Exit Real-Life Problems
                </p>
              </div>
              <div className="mt-7 space-y-5 sm:mt-9 sm:space-y-6">
                <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
                  The real world presents us with countless practical problems, challenges, difficult situations and dilemmas. Navigating them requires more than merely possessing knowledge. It requires the ability to confront situations, think clearly, make appropriate choices and find a way forward. It requires what we term as the &ldquo;Situational Knowledge&rdquo;.
                </p>
                <p className="border-l-4 border-[#159447] pl-5 text-pretty text-lg font-semibold leading-8 text-[#183b61] sm:pl-7 sm:text-xl sm:leading-9">
                  ProblemEx by TTT is an initiative by The True Topper (TTT) to help individuals develop the practical abilities to navigate these real-life challenges by providing them &ldquo;Situational Knowledge&rdquo;.
                </p>
              </div>
            </section>
            </ScrollReveal>

            <ScrollReveal delay={50}>
            <section className="border-t border-[#d4e0e8] pt-8 sm:pt-10">
              <h2 className="text-balance text-xl font-extrabold text-[#102b50] sm:text-2xl">
                B. Why the Name ProblemEx?
              </h2>
              <p className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-[#e8f0fa] to-[#e8f6ee] px-5 py-3 text-xl font-extrabold tracking-tight text-[#147b4b] sm:text-2xl">
                ProblemEx = Problems + Exit.
              </p>
              <p className="mt-5 text-pretty text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                The name ProblemEx embodies a simple yet powerful idea: equipping the individuals with the practical skills through which they can exit from the real-life problems, through which they can proudly say that this is my &ldquo;Ex Problem&rdquo;, which no longer exists in my life
              </p>
              <blockquote className="mt-6 border-l-4 border-[#ed1c24] pl-5 text-pretty text-lg italic leading-8 text-[#183b61] sm:mt-8 sm:pl-7 sm:text-xl sm:leading-9">
                Imagine being able to look back at the challenges that once troubled you and proudly say, &quot;These were the problems of my life. They are no longer problems in my life.&quot;
              </blockquote>
              <p className="mt-5 text-base font-semibold text-[#147b4b] sm:text-lg">
                That is the spirit behind ProblemEx.
              </p>
            </section>
            </ScrollReveal>

            <ScrollReveal delay={50}>
            <section className="border-t border-[#d4e0e8] pt-8 sm:pt-10">
              <h2 className="text-balance text-xl font-extrabold text-[#102b50] sm:text-2xl">
                C. Our Tagline: Practical Skills to Exit Real-Life Problems
              </h2>
              <div className="mt-5 space-y-5 text-pretty text-base leading-7 text-slate-700 sm:mt-6 sm:space-y-6 sm:text-lg sm:leading-8">
                <p>
                  Our tagline captures the essence of ProblemEx. The programme is centred around the practical skills and abilities required to navigate the problems, challenges, situations and dilemmas that individuals encounter in their everyday lives.
                </p>
                <p>
                  It is about equipping individuals not merely to know, but to handle. Not merely to understand problems, but to confront them, navigate them and find a way forward.
                </p>
              </div>
            </section>
            </ScrollReveal>

            <ScrollReveal delay={50}>
            <section className="border-t border-[#d4e0e8] pt-8 sm:pt-10">
              <h2 className="text-balance text-xl font-extrabold text-[#102b50] sm:text-2xl">
                D. But First, Let&apos;s Clear Something Up!
              </h2>
              <div className="mt-5 space-y-5 text-pretty text-base leading-7 text-slate-700 sm:mt-6 sm:space-y-6 sm:text-lg sm:leading-8">
                <p>
                  Before we explain what our program ProblemEx actually is and how it works, let&apos;s first clarify what it is <strong>not</strong>.
                </p>
                <p>
                  Because when we talk about practical skills, real-life learning and solving life&apos;s problems, people tend to associate them with all sorts of programmes, courses and initiatives. And we&apos;d rather clear up those misconceptions first than leave you guessing!
                </p>
              </div>
            </section>
            </ScrollReveal>
          </div>
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
