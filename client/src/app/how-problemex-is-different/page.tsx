import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";
import { ProblemCardScrollRestorer } from "@/app/components/problem-card-navigation/problem-card-navigation";
import { differencesData } from "./differences-data";

export const metadata: Metadata = {
  title: "How ProblemEx Is Different",
  description:
    "Discover how ProblemEx takes a fundamentally different perspective on learning and life preparation: from knowledge acquisition to real-time application, built around real-life situations and our proprietary Situational Knowledge framework.",
  alternates: { canonical: "/how-problemex-is-different" },
  openGraph: {
    siteName: "ProblemEx",
    title: "How ProblemEx Is Different | ProblemEx",
    description:
      "Discover how ProblemEx takes a fundamentally different perspective on learning and life preparation: from knowledge acquisition to real-time application, built around real-life situations and our proprietary Situational Knowledge framework.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How ProblemEx Is Different | ProblemEx",
    description:
      "Discover how ProblemEx takes a fundamentally different perspective on learning and life preparation: from knowledge acquisition to real-time application, built around real-life situations and our proprietary Situational Knowledge framework.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "How ProblemEx Is Different", item: siteUrl ? new URL("/how-problemex-is-different", siteUrl).toString() : undefined },
  ],
};

const cardGradients = [
  "from-[#fff5f5] via-white to-[#fff0f1] border-[#fca5a5] border-t-[#ef4444]",
  "from-[#fff8f3] via-white to-[#ffedd5] border-[#fdba74] border-t-[#f97316]",
  "from-[#fffdf0] via-white to-[#fef9c3] border-[#fde047] border-t-[#eab308]",
  "from-[#f2fcf5] via-white to-[#dcfce7] border-[#86efac] border-t-[#16a34a]",
  "from-[#f0fdfa] via-white to-[#ccfbf1] border-[#5eead4] border-t-[#0d9488]",
  "from-[#f4f8ff] via-white to-[#dbeafe] border-[#93c5fd] border-t-[#2563eb]",
  "from-[#f5f5ff] via-white to-[#e0e7ff] border-[#a5b4fc] border-t-[#4f46e5]",
  "from-[#faf5ff] via-white to-[#f3e8ff] border-[#d8b4fe] border-t-[#9333ea]",
];

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-3">
      <ProblemCardScrollRestorer />
      {siteUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]"
      />
      <Navbar />

      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-2 pt-3 text-sm text-slate-500">
          <Link className="font-semibold text-[#147b4b] hover:underline" href="/">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="font-medium text-slate-700">
            How ProblemEx Is Different
          </span>
        </nav>

        {/* Page Header */}
        <header className="px-2 py-7 text-center sm:py-10">
          <h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-[3.25rem]">
            How ProblemEx Is Different
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]"
          />
        </header>

        {/* Introduction Hero Section */}
        <ScrollReveal>
          <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#dce6ed] bg-white/90 p-6 shadow-[0_16px_40px_rgba(16,43,80,0.06)] backdrop-blur-sm sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-200/30 via-teal-200/20 to-transparent blur-3xl"
            />
            <div className="relative z-10 space-y-6 text-pretty text-[17px] leading-8 text-slate-700 sm:text-[19px] sm:leading-9">
              <p>
                There is no shortage of courses, workshops, training programmes and initiatives promising to equip individuals with knowledge, skills and abilities to help them succeed in life. Many do valuable work in their respective fields.
              </p>

              {/* Crucial Highlighting Callout */}
              <div className="rounded-2xl border-l-[5px] border-[#159447] bg-gradient-to-r from-[#edf7f1] via-[#f4faf6] to-white p-5 sm:p-6 shadow-sm">
                <p className="text-lg font-extrabold leading-snug text-[#102b50] sm:text-xl lg:text-[1.35rem]">
                  But ProblemEx is built around a fundamentally different perspective on learning and preparation for life.
                </p>
              </div>

              <p>
                Rather than merely focusing on what individuals should know or learn, ProblemEx focuses on the situations they may actually encounter in life, what those situations demand of them, and how they can become better equipped to navigate them.
              </p>

              <p>
                This difference is reflected in our approach to learning, our curriculum, the abilities we seek to develop, the way we prepare participants for real-life situations, and the framework that underpins the entire programme.
              </p>

              {/* Lead-In Badge */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#147b4b]/20 bg-gradient-to-r from-[#147b4b]/10 to-[#159447]/10 px-5 py-2 text-base font-extrabold text-[#147b4b] sm:text-lg">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#159447]" />
                  Here is what makes ProblemEx different:
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 Cards: Only the Heading, Number, and Button */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:gap-8">
          {differencesData.map((item, index) => (
            <ScrollReveal className="h-full" delay={(index % 2) * 60} key={item.slug}>
              <article
                id={`difference-${item.slug}`}
                className={`group scroll-mt-28 relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-t-[5px] bg-gradient-to-br p-6 shadow-[0_12px_32px_rgba(16,43,80,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_42px_rgba(16,43,80,0.13)] sm:p-8 ${cardGradients[index]}`}
              >
                {/* Background Watermark Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-5 select-none font-black text-[6.5rem] leading-none text-slate-900 opacity-[0.04] transition-transform duration-300 group-hover:scale-105 sm:text-[8rem]"
                >
                  {item.number}
                </span>

                <div className="relative z-10">
                  {/* Top Bar: Number Badge */}
                  <div className="flex items-center justify-between gap-3 pb-3">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-black text-white shadow-md ${item.badgeBg} ${item.glowTheme} sm:h-13 sm:w-13 sm:text-xl`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Card Title (Only Heading) */}
                  <h2 className="mt-4 text-balance text-xl font-extrabold leading-snug text-[#102b50] transition-colors duration-200 group-hover:text-[#147b4b] sm:text-2xl">
                    <Link
                      href={`/how-problemex-is-different/${item.slug}`}
                      className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#159447]"
                    >
                      {item.title}
                    </Link>
                  </h2>

                  <span
                    aria-hidden="true"
                    className="mt-4 block h-1 w-12 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447] transition-all duration-300 group-hover:w-16"
                  />
                </div>

                {/* Card Button */}
                <div className="relative z-10 mt-8 pt-4">
                  <Link
                    href={`/how-problemex-is-different/${item.slug}`}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#0f6d3f]/20 bg-gradient-to-r from-[#117541] to-[#159447] px-6 py-2.5 text-sm font-bold text-white shadow-[0_6px_16px_rgba(21,148,71,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#102b50] hover:to-[#183b61] hover:shadow-[0_10px_22px_rgba(16,43,80,0.26)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447] sm:w-auto"
                  >
                    <span>Learn more</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
