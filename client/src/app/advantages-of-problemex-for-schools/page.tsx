import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";

export const metadata: Metadata = {
  title: "The Advantages of ProblemEx for Schools | ProblemEx",
  description:
    "Discover how ProblemEx helps schools stand out, strengthen brand reputation, create distinctive admissions advantages, earn certification recognition and cultivate an empowering school environment.",
  alternates: { canonical: "/advantages-of-problemex-for-schools" },
  openGraph: {
    siteName: "ProblemEx",
    title: "The Advantages of ProblemEx for Schools | ProblemEx",
    description:
      "Discover how ProblemEx helps schools stand out, strengthen brand reputation, create distinctive admissions advantages, earn certification recognition and cultivate an empowering school environment.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "The Advantages of ProblemEx for Schools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Advantages of ProblemEx for Schools | ProblemEx",
    description:
      "Discover how ProblemEx helps schools stand out, strengthen brand reputation, create distinctive admissions advantages, earn certification recognition and cultivate an empowering school environment.",
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
      name: "The Advantages of ProblemEx for Schools",
      item: siteUrl ? new URL("/advantages-of-problemex-for-schools", siteUrl).toString() : undefined,
    },
  ],
};

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
            The Advantages of ProblemEx for Schools
          </span>
        </nav>

        {/* Hero Section Header */}
        <header className="mx-auto mt-6 max-w-5xl text-center sm:mt-10">
          <h1 className="bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-[3.25rem]">
            The Advantages of ProblemEx for Schools
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ed1c24] via-[#f97316] to-[#159447]"
          />
        </header>

        <div className="mx-auto mt-10 max-w-6xl space-y-12 sm:mt-16 sm:space-y-16">
          {/* ========================================================
              SECTION A: Stand Out Among Schools in Your League
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
                  Stand Out Among Schools in Your League
                </h2>
              </div>

              <div className="mt-6 space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                <p>
                  In today&apos;s competitive educational landscape, every school aspires to distinguish itself, build a
                  strong reputation and establish a position of its own. While academic performance, infrastructure,
                  facilities and extracurricular activities remain important factors, schools are increasingly looking for
                  meaningful ways to distinguish the overall educational experience they offer.
                </p>

                <p>
                  ProblemEx presents an opportunity for your school to stand out not merely as another institution
                  imparting academic knowledge, but as a school that places a deliberate, structured and meaningful emphasis
                  on helping students learn how to apply knowledge and handle real-life situations.
                </p>

                <div className="rounded-2xl border-l-[4px] border-[#159447] bg-[#f4faf7] p-5 font-medium text-[#102b50] shadow-sm sm:p-6 sm:text-[19px]">
                  Imagine being among the schools in your league that are making a conscious, organised and sustained
                  effort to bridge the gap between classroom learning and the practical realities of life.
                </div>

                <p className="font-semibold text-[#147b4b]">
                  ProblemEx gives your school an opportunity to stand out among its peers, distinguish its educational
                  offering and establish a position of its own.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION B: Strengthen Your School's Brand, Reputation and Positioning
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
                  Strengthen Your School&apos;s Brand, Reputation and Positioning
                </h2>
              </div>

              <div className="mt-6 space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                <p>
                  A school&apos;s reputation is built not merely on what it teaches, but also on what it stands for, the
                  experiences it offers and the kind of individuals it strives to develop.
                </p>

                <p>
                  By integrating ProblemEx into your school&apos;s broader educational offering, you can position your
                  institution as one that goes beyond conventional academic learning and actively endeavours to equip
                  students with practical abilities required to navigate real-life situations.
                </p>

                <p>
                  This can become an important part of your school&apos;s identity, messaging, positioning and communication
                  with prospective parents. It offers you a meaningful initiative to showcase, a distinctive proposition to
                  communicate and another compelling reason for parents to consider your school.
                </p>

                <div className="rounded-2xl border-l-[4px] border-[#0284c7] bg-[#f0f8fd] p-5 font-semibold text-[#102b50] shadow-sm sm:p-6 sm:text-[19px]">
                  ProblemEx can help strengthen your school&apos;s brand as an institution that prepares students not just
                  for examinations, but also for life.
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION C: Create a Distinctive Advantage in Admissions and Parent Engagement
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
                  Create a Distinctive Advantage in Admissions and Parent Engagement
                </h2>
              </div>

              <div className="mt-6 space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                <p>
                  Parents today are not merely looking for schools that help their children score marks, secure degrees and
                  excel in examinations. They also want their children to become confident, independent, responsible, capable
                  and better equipped to handle the challenges of life.
                </p>

                <p>
                  ProblemEx gives schools an opportunity to demonstrate their commitment to these aspirations through a
                  structured programme focused on developing practical abilities, Situational Knowledge and the capability
                  to navigate real-life challenges.
                </p>

                <p>
                  This can become an additional differentiator in your school&apos;s outreach, admissions campaigns, parent
                  interactions, presentations, events and promotional activities. It can help communicate a more holistic
                  and compelling educational proposition to prospective parents.
                </p>

                <p>
                  While admissions ultimately depend on several factors, a distinctive and meaningful educational offering
                  such as ProblemEx can strengthen your school&apos;s appeal, support its positioning and potentially
                  contribute to attracting greater interest from prospective families.
                </p>

                <div className="rounded-2xl border-l-[4px] border-[#ea580c] bg-[#fffaf5] p-5 font-bold text-[#c2410c] shadow-sm sm:p-6 sm:text-[19px]">
                  Give parents another compelling reason to choose your school.
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION D: Earn Recognition Through ProblemEx Certified Schools
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
                  Earn Recognition Through ProblemEx Certified Schools
                </h2>
              </div>

              <div className="mt-6 space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                <p>
                  The ProblemEx Certified Schools initiative is envisioned as a recognition of schools that make a
                  conscious commitment to developing their students beyond conventional academic learning, with a
                  structured emphasis on Situational Knowledge and practical abilities required to navigate real-life
                  situations.
                </p>

                <p>
                  Through this initiative, schools that adopt and implement the ProblemEx programme, in accordance with the
                  applicable certification framework, may be recognised as ProblemEx Certified Schools.
                </p>

                <p>
                  This recognition can become an additional achievement for your institution, reflecting its commitment to a
                  broader and more practical approach to student development.
                </p>

                <p>
                  It also provides the school with an opportunity to communicate this recognition through its institutional
                  profile, website, promotional material, events and other relevant platforms, subject to the applicable
                  certification guidelines.
                </p>

                <div className="rounded-2xl border-l-[4px] border-[#7c3aed] bg-[#f8f5fd] p-5 font-semibold text-[#5b21b6] shadow-sm sm:p-6 sm:text-[19px]">
                  Be recognised not merely for what your students learn, but also for the effort your school makes to
                  prepare them for life.
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================
              SECTION E: Create a More Positive, Engaging and Empowering School Environment
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
                  Create a More Positive, Engaging and Empowering School Environment
                </h2>
              </div>

              <div className="mt-6 space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                <p>
                  Perhaps one of the most meaningful benefits of ProblemEx may not always be visible in brochures,
                  rankings or admissions figures. It may be reflected in the overall environment of the school.
                </p>

                <p>
                  When students are encouraged to think independently, communicate openly, discuss situations, explore
                  solutions, handle disagreements, understand perspectives, collaborate and take responsibility, these
                  experiences can contribute to a more constructive and participatory learning environment.
                </p>

                <p>
                  A programme that encourages students to engage with practical situations, develop greater awareness,
                  exercise judgement and learn to navigate challenges can potentially contribute to more confident students,
                  healthier interactions, better understanding and a more positive atmosphere within the school.
                </p>

                <p>
                  ProblemEx is not intended to transform a school&apos;s environment overnight. However, we believe that a
                  sustained emphasis on developing practical abilities, awareness, responsibility and the capacity to
                  navigate real-life situations can contribute meaningfully to the overall school culture.
                </p>

                <div className="rounded-2xl border-l-[4px] border-[#0d9488] bg-[#f2faf9] p-5 font-bold text-[#0f766e] shadow-sm sm:p-6 sm:text-[19px]">
                  Because a school that prepares students to handle life can also help create a better environment in
                  which they learn, grow and thrive.
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </article>
    </main>
  );
}
