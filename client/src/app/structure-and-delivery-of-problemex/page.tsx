import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";

export const metadata: Metadata = {
  title: "The Structure and Delivery of ProblemEx | ProblemEx",
  description:
    "Explore the structure, levels, learning formats, delivery modes, duration and fees of the ProblemEx programme by The True Topper.",
  alternates: { canonical: "/structure-and-delivery-of-problemex" },
  openGraph: {
    siteName: "ProblemEx",
    title: "The Structure and Delivery of ProblemEx | ProblemEx",
    description:
      "Explore the structure, levels, learning formats, delivery modes, duration and fees of the ProblemEx programme by The True Topper.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx Structure and Delivery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Structure and Delivery of ProblemEx | ProblemEx",
    description:
      "Explore the structure, levels, learning formats, delivery modes, duration and fees of the ProblemEx programme by The True Topper.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Structure and Delivery of ProblemEx",
      item: siteUrl ? new URL("/structure-and-delivery-of-problemex", siteUrl).toString() : undefined,
    },
  ],
};

const programmeLevels = [
  {
    level: "Level 1",
    target: "Students of Classes 3 and 4",
    accent: "from-[#ef4444] to-[#dc2626]",
    badgeBg: "bg-red-50 text-red-700 border-red-200",
  },
  {
    level: "Level 2",
    target: "Students of Classes 5 and 6",
    accent: "from-[#f97316] to-[#ea580c]",
    badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    level: "Level 3",
    target: "Students of Classes 7 and 8",
    accent: "from-[#eab308] to-[#ca8a04]",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    level: "Level 4",
    target: "Students of Classes 9 and 10",
    accent: "from-[#10b981] to-[#059669]",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    level: "Level 5",
    target: "Students of Classes 11 and 12",
    accent: "from-[#06b6d4] to-[#0891b2]",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    level: "Level 6",
    target: "College-going students",
    accent: "from-[#3b82f6] to-[#2563eb]",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    level: "Level 7",
    target:
      "Graduates and individuals pursuing postgraduate studies, higher education, competitive examinations, professional entrance examinations and other similar pursuits, including Civil Services examinations.",
    accent: "from-[#8b5cf6] to-[#7c3aed]",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-16 pt-2 sm:px-6 sm:pb-24 sm:pt-3">
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

      <article className="relative mx-auto w-full max-w-7xl py-4 sm:py-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-2 text-sm text-slate-500">
          <Link className="font-semibold text-[#147b4b] transition hover:text-[#102b50] hover:underline" href="/">
            Home
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span aria-current="page" className="font-medium text-slate-700">
            The Structure and Delivery of ProblemEx
          </span>
        </nav>

        {/* Hero Section Header */}
        <header className="mx-auto mt-6 max-w-5xl text-center sm:mt-10">
          <h1 className="bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-[3.25rem]">
            The Structure and Delivery of ProblemEx
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ed1c24] via-[#f97316] to-[#159447]"
          />
        </header>

        <div className="mx-auto mt-10 max-w-6xl space-y-12 sm:mt-16 sm:space-y-16">
          {/* ========================================================
              SECTION A: Programme Levels
             ======================================================== */}
          <ScrollReveal>
            <section
              aria-labelledby="section-a-heading"
              className="rounded-3xl border border-[#dce6ed] bg-white/90 p-6 shadow-[0_12px_32px_rgba(16,43,80,0.05)] backdrop-blur-sm sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#102b50] to-[#183b61] text-base font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                  A
                </span>
                <h2
                  id="section-a-heading"
                  className="text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl"
                >
                  Programme Levels
                </h2>
              </div>

              <p className="mt-6 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                Keeping in mind the age groups, developmental needs, maturity and learning requirements of students, we
                have divided the ProblemEx programme into different levels, so that the learning experience, situations,
                activities and content are appropriately suited to the participants.
              </p>

              <div className="mt-8 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5 sm:p-7">
                <p className="text-base font-bold text-[#102b50] sm:text-lg">
                  The programme is currently structured into the following seven levels:
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {programmeLevels.map((lvl, index) => {
                    const isLast = index === programmeLevels.length - 1;
                    return (
                      <div
                        key={lvl.level}
                        className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#159447]/60 hover:shadow-md ${
                          isLast ? "sm:col-span-2 lg:col-span-3" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`inline-flex items-center rounded-lg border px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${lvl.badgeBg}`}
                          >
                            {lvl.level}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">Step {index + 1} of 7</span>
                        </div>
                        <p className="mt-3 text-pretty text-[15px] font-medium leading-relaxed text-slate-800 sm:text-base">
                          {lvl.target}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mt-6 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                Each level is designed keeping in mind the broad age group, maturity, experiences and practical situations
                relevant to its participants. While the core philosophy and framework of ProblemEx remain the same, the
                learning content, situations, activities and emphasis may vary across levels.
              </p>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION B: Learning Formats
             ======================================================== */}
          <ScrollReveal>
            <section
              aria-labelledby="section-b-heading"
              className="rounded-3xl border border-[#dce6ed] bg-white/90 p-6 shadow-[0_12px_32px_rgba(16,43,80,0.05)] backdrop-blur-sm sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#102b50] to-[#183b61] text-base font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                  B
                </span>
                <h2
                  id="section-b-heading"
                  className="text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl"
                >
                  Learning Formats: One-on-One and Batch-Based Programmes
                </h2>
              </div>

              <p className="mt-6 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                ProblemEx is offered through two distinct learning formats, allowing participants to choose the format that
                best suits their individual learning requirements, preferences and circumstances.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Format 1: One-on-One Programme */}
                <div className="flex flex-col justify-between rounded-2xl border-2 border-emerald-100 bg-gradient-to-b from-[#f7fbf9] to-white p-6 shadow-sm transition-all hover:border-[#159447]/60 hover:shadow-md sm:p-7">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#147b4b] text-white">
                        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-extrabold text-[#102b50]">1. One-on-One Programme</h3>
                    </div>
                    <p className="mt-4 text-pretty text-[16px] leading-8 text-slate-700 sm:text-[17px]">
                      The one-on-one format provides an individualised learning experience in which the participant engages
                      directly with the programme facilitator. This format allows for greater individual attention,
                      interaction, discussion and engagement with situations and challenges relevant to the
                      participant&apos;s learning needs and circumstances.
                    </p>
                  </div>
                </div>

                {/* Format 2: Batch-Based Programme */}
                <div className="flex flex-col justify-between rounded-2xl border-2 border-blue-100 bg-gradient-to-b from-[#f8fbfe] to-white p-6 shadow-sm transition-all hover:border-[#0284c7]/60 hover:shadow-md sm:p-7">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0284c7] text-white">
                        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-extrabold text-[#102b50]">2. Batch-Based Programme</h3>
                    </div>
                    <p className="mt-4 text-pretty text-[16px] leading-8 text-slate-700 sm:text-[17px]">
                      The batch-based format brings together a group of participants for a structured learning
                      experience. It facilitates discussions, exchange of perspectives, group activities, collaborative
                      exercises, participation in shared situations and learning from the experiences and responses of
                      other participants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#d8e6df] bg-[#f4faf7] p-4 text-center sm:p-5">
                <p className="text-base font-bold text-[#147b4b] sm:text-lg">
                  Both formats are designed to deliver the core philosophy, framework and learning objectives of
                  ProblemEx.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION C: Modes of Delivery
             ======================================================== */}
          <ScrollReveal>
            <section
              aria-labelledby="section-c-heading"
              className="rounded-3xl border border-[#dce6ed] bg-white/90 p-6 shadow-[0_12px_32px_rgba(16,43,80,0.05)] backdrop-blur-sm sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#102b50] to-[#183b61] text-base font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                  C
                </span>
                <h2
                  id="section-c-heading"
                  className="text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl"
                >
                  Modes of Delivery: Online and Physical Modes
                </h2>
              </div>

              <p className="mt-6 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                Both the one-on-one and batch-based ProblemEx programmes may be delivered through online or physical modes,
                depending upon the programme format and delivery arrangements.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Mode 1: Online Programme */}
                <div className="rounded-2xl border-2 border-teal-100 bg-gradient-to-b from-[#f5fbfb] to-white p-6 shadow-sm transition-all hover:border-[#0d9488]/60 hover:shadow-md sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d9488] text-white">
                      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#102b50]">1. Online Programme</h3>
                  </div>
                  <div className="mt-4 space-y-4 text-pretty text-[16px] leading-8 text-slate-700 sm:text-[17px]">
                    <p>
                      The online programme is a comprehensive learning experience in its own right. Through interactive
                      sessions, discussions, practical exercises, real-life situations, activities, case studies and
                      other learning methodologies, participants can develop and strengthen their Situational Knowledge
                      from the convenience of their homes.
                    </p>
                    <p>
                      The online format is designed to effectively deliver the core ProblemEx programme and its fundamental
                      learning objectives, making it an accessible and convenient option for participants irrespective of
                      their geographical location.
                    </p>
                  </div>
                </div>

                {/* Mode 2: Physical Programme */}
                <div className="rounded-2xl border-2 border-amber-100 bg-gradient-to-b from-[#fefbf7] to-white p-6 shadow-sm transition-all hover:border-[#f59e0b]/60 hover:shadow-md sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d97706] text-white">
                      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#102b50]">2. Physical Programme</h3>
                  </div>
                  <div className="mt-4 space-y-4 text-pretty text-[16px] leading-8 text-slate-700 sm:text-[17px]">
                    <p>
                      The physical mode offers the same core learning philosophy and objectives, while providing
                      additional opportunities for face-to-face interaction, hands-on activities, group exercises,
                      collaborative challenges, simulations and other experiential learning activities that may be
                      particularly effective in a physical setting.
                    </p>
                    <p>
                      The physical format may therefore offer an enhanced learning experience through activities,
                      interactions and experiences that can be facilitated more effectively in person.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION D: Programme Duration
             ======================================================== */}
          <ScrollReveal>
            <section
              aria-labelledby="section-d-heading"
              className="rounded-3xl border border-[#dce6ed] bg-white/90 p-6 shadow-[0_12px_32px_rgba(16,43,80,0.05)] backdrop-blur-sm sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#102b50] to-[#183b61] text-base font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                  D
                </span>
                <h2
                  id="section-d-heading"
                  className="text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl"
                >
                  Programme Duration
                </h2>
              </div>

              <p className="mt-6 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                The online ProblemEx programme is designed to be completed over approximately 2.5 months, through a
                structured sequence of 10 sessions.
              </p>

              {/* 3 Metric Cards */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-[#f2faf6] to-white p-6 text-center shadow-sm">
                  <span className="text-3xl font-extrabold text-[#147b4b] sm:text-4xl">10</span>
                  <span className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-500">Total Sessions</span>
                  <p className="mt-1 text-xs font-medium text-slate-600">Structured Sequence</p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-200/90 bg-gradient-to-br from-[#f3f8fd] to-white p-6 text-center shadow-sm">
                  <span className="text-3xl font-extrabold text-[#0284c7] sm:text-4xl">1 / Week</span>
                  <span className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-500">Frequency</span>
                  <p className="mt-1 text-xs font-medium text-slate-600">1 session per week</p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl border border-purple-200/90 bg-gradient-to-br from-[#f8f5fd] to-white p-6 text-center shadow-sm">
                  <span className="text-3xl font-extrabold text-[#7c3aed] sm:text-4xl">~2.5 Months</span>
                  <span className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-500">Duration</span>
                  <p className="mt-1 text-xs font-medium text-slate-600">Approximately 2.5 months</p>
                </div>
              </div>

              {/* Exact Bullet List */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6">
                <ul className="space-y-2.5 text-base font-semibold text-[#102b50] sm:text-[17px]">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#147b4b]" />
                    <span>Total Sessions: 10</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
                    <span>Frequency: 1 session per week</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
                    <span>Programme Duration: Approximately 2.5 months</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 space-y-4 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                <p>
                  The sessions are structured to progressively expose participants to different areas of Situational
                  Knowledge and equip them with practical abilities to navigate real-life situations.
                </p>
                <p>
                  The detailed session-wise programme structure, content, framework and coverage of the various Situational
                  Knowledge Pillars will be shared with participants upon enrolment.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION E: Programme Fees
             ======================================================== */}
          <ScrollReveal>
            <section
              aria-labelledby="section-e-heading"
              className="rounded-3xl border border-[#dce6ed] bg-white/90 p-6 shadow-[0_12px_32px_rgba(16,43,80,0.05)] backdrop-blur-sm sm:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#102b50] to-[#183b61] text-base font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                  E
                </span>
                <h2
                  id="section-e-heading"
                  className="text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl"
                >
                  Programme Fees
                </h2>
              </div>

              <div className="mt-6 space-y-4 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                <p>
                  The programme fee will vary depending upon the learning format and mode of delivery selected by the
                  participant, as well as the programme&apos;s overall structure and delivery requirements.
                </p>
                <p>
                  For details regarding applicable fees, available formats and enrolment, please contact The True Topper.
                </p>
                <p className="font-semibold text-slate-600">
                  Applicable taxes, including GST, shall be charged extra.
                </p>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
}
