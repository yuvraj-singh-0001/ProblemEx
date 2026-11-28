import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";
import {
  ProblemCardNavigationLink,
  ProblemCardScrollRestorer,
} from "@/app/components/problem-card-navigation/problem-card-navigation";
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

const differenceAccents = ["#177b83", "#63b7ad", "#3e8b52", "#d5ac35", "#177b83", "#63b7ad", "#3e8b52", "#d5ac35"];
const differenceIconPaths = [
  ["M20 20l-4.5-4.5", "M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"],
  ["M9 18h6", "M10 22h4", "M8 14c-1.2-1-2-2.5-2-4a6 6 0 0 1 12 0c0 1.5-.8 3-2 4-.8.7-1 1.2-1 2h-6c0-.8-.2-1.3-1-2Z"],
  ["M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z", "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z", "m9 12-5 1 3 3 2-4Z", "m12 15-1 5 3-3-2-2Z", "M15 9h.01"],
  ["M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0", "M5 6m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0", "M19 6m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0", "M5 18m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0", "M19 18m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0", "M6.5 7.5l4 3", "M17.5 7.5l-4 3", "M6.5 16.5l4-3", "M17.5 16.5l-4-3"],
  ["M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z", "m9 12 2 2 4-4"],
  ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],
  ["M4 21v-7", "M4 10V3", "M12 21v-9", "M12 8V3", "M20 21v-5", "M20 12V3", "M2 14h4", "M10 8h4", "M18 16h4"],
  ["m12 3 9 5-9 5-9-5 9-5Z", "m3 12 9 5 9-5", "m3 16 9 5 9-5"],
];

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-3">
      <ProblemCardScrollRestorer block="center" />
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

        {/* Circular cards: keep the existing heading and detail-page destination. */}
        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-8 sm:mt-14 sm:gap-y-10 md:grid-cols-2 md:gap-x-6 xl:grid-cols-4">
          {differencesData.map((item, index) => (
            <ScrollReveal
              animateOnReveal
              className="difference-card-reveal h-full"
              delay={(index % 4) * 140}
              duration={700}
              key={item.slug}
            >
              <article
                id={`difference-${item.slug}`}
                className="group relative flex h-full scroll-mt-28 items-start justify-center overflow-visible py-3"
              >
                <ProblemCardNavigationLink
                  href={`/how-problemex-is-different/${item.slug}`}
                  targetId={`difference-${item.slug}`}
                  ariaLabel={item.title}
                  className="group/link relative flex w-full max-w-[320px] flex-col items-center rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#159447] focus-visible:ring-offset-4"
                >
                  <div className="relative flex h-[270px] w-full items-center justify-center">
                    <svg aria-hidden="true" viewBox="0 0 320 270" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
                      {/* Fine orbit sits just outside the main circle and ends in an arrow and dot. */}
                      <path
                        className="difference-orbit-path"
                        id={`difference-orbit-track-${item.number}`}
                        d="M212 263 A128 128 0 1 0 122 44"
                        fill="none"
                        pathLength={1}
                        stroke={differenceAccents[index]}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path className="difference-orbit-runner" d="M0 -7 16 0 0 7 4 0Z" fill={differenceAccents[index]}>
                        <animateMotion data-reveal-motion dur="1.8s" begin="indefinite" fill="freeze" rotate="auto">
                          <mpath href={`#difference-orbit-track-${item.number}`} />
                        </animateMotion>
                      </path>
                      <path className="difference-orbit-static-arrow" d="m112 27 26 10-16 22Z" fill={differenceAccents[index]} />
                      <circle cx="212" cy="263" r="5.5" fill={differenceAccents[index]} />

                      {/* Thick connector joins the satellite node to the main ring. */}
                      <path d="M72 135h34" stroke={differenceAccents[index]} strokeWidth="23" strokeLinecap="round" />

                      {/* The main ring has small openings at the top and bottom. */}
                      <path d="M185 27 A110 110 0 0 0 185 243" fill="none" stroke={differenceAccents[index]} strokeWidth="10" />
                      <path d="M231 27 A110 110 0 0 1 231 243" fill="none" stroke={differenceAccents[index]} strokeWidth="10" />
                    </svg>

                    <div
                      className="relative z-20 -translate-y-0.5 flex h-[clamp(172px,57vw,204px)] w-[clamp(172px,57vw,204px)] translate-x-[clamp(44px,14vw,48px)] flex-col items-center justify-center rounded-full bg-white px-6 text-center shadow-[0_5px_10px_rgba(16,43,80,0.12),0_18px_28px_rgba(16,43,80,0.2)] transition-[transform,box-shadow] duration-300 ease-out group-hover/link:-translate-y-1 group-hover/link:shadow-[0_8px_14px_rgba(16,43,80,0.15),0_24px_38px_rgba(16,43,80,0.24)] motion-reduce:transition-none"
                    >
                      <h2 className="text-balance text-lg font-bold leading-[1.18] text-slate-950 sm:text-xl">
                        {item.title.split(":")[0]}
                      </h2>
                      <span aria-hidden="true" className="mt-5 inline-flex h-8 w-14 items-center justify-center" style={{ color: differenceAccents[index] }}>
                        <svg viewBox="0 0 32 16" fill="none" className="h-4 w-8">
                          <path d="M1 8h28M22 2l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 z-30 flex h-[78px] w-[78px] -translate-y-1/2 items-center justify-center rounded-full border-[5px] bg-white shadow-[0_10px_24px_rgba(16,43,80,0.22)]"
                      style={{ borderColor: differenceAccents[index] }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke={differenceAccents[index]} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                        {differenceIconPaths[index].map((path) => <path key={path} d={path} />)}
                      </svg>
                    </span>
                  </div>
                </ProblemCardNavigationLink>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
