import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";
import { differencesData, type DifferencePoint } from "@/app/how-problemex-is-different/differences-data";

interface DifferenceDetailViewProps {
  point: DifferencePoint;
}

export default function DifferenceDetailView({ point }: DifferenceDetailViewProps) {
  const currentIndex = differencesData.findIndex((p) => p.slug === point.slug);
  const prevPoint = currentIndex > 0 ? differencesData[currentIndex - 1] : null;
  const nextPoint = currentIndex < differencesData.length - 1 ? differencesData[currentIndex + 1] : null;

  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-3">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]"
      />
      <Navbar />

      <article className="relative mx-auto w-full max-w-5xl py-4 sm:py-8">
        {/* Back Button */}
        <div className="flex items-center justify-between">
          <ProblemCardReturnLink
            href="/how-problemex-is-different"
            targetId={`difference-${point.slug}`}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#d4e0e8] bg-white/90 px-5 py-2 text-sm font-semibold text-[#147b4b] shadow-sm transition hover:border-[#159447] hover:bg-white hover:shadow"
          >
            <span aria-hidden="true">&larr;</span>
            <span>Back to How ProblemEx Is Different</span>
          </ProblemCardReturnLink>

          {/* Badge Number */}
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-black text-white shadow ${point.badgeBg}`}
          >
            {point.number}
          </span>
        </div>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mt-6 text-sm text-slate-500">
          <Link className="font-semibold text-[#147b4b] hover:underline" href="/">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link className="font-semibold text-[#147b4b] hover:underline" href="/how-problemex-is-different">
            How ProblemEx Is Different
          </Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="font-medium text-slate-700">
            Difference {point.number}
          </span>
        </nav>

        {/* Page Header (Exact Heading from User) */}
        <header className="mt-8 border-b border-[#dce6ed] pb-8 text-left sm:mt-10 sm:pb-10">
          <h1 className="bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-2xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-[2.65rem]">
            {point.title}
          </h1>
          <span
            aria-hidden="true"
            className="mt-6 block h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]"
          />
        </header>

        {/* Main Content Body: 100% Exact User Paragraphs Immediately Following the Heading */}
        <div className="mt-8 space-y-6 text-pretty text-[17px] leading-8 text-slate-700 sm:mt-10 sm:space-y-7 sm:text-[19px] sm:leading-9">
          {point.paragraphs.map((para, index) => {
            const isLast = index === point.paragraphs.length - 1;

            // Point 2: Hyperlink on learning methodologies
            if (point.hasMethodologiesLink && index === 1) {
              return (
                <p key={index}>
                  At ProblemEx, The True Topper (TTT) doesn’t want learning to be restricted to lectures, textbooks, presentations or theoretical explanations. We incorporate a wide range of{" "}
                  <Link
                    href="/problemex-learning-approach-and-methodologies"
                    className="font-bold text-[#147b4b] underline decoration-[#159447]/60 underline-offset-4 transition hover:text-[#102b50] hover:decoration-[#102b50]"
                  >
                    learning methodologies
                  </Link>
                  , including real-life stories, case studies, discussions, debates, role plays, simulations, practical exercises, challenges, games, group activities and experiential learning.
                </p>
              );
            }

            // Point 3: Hyperlink on 12 Pillars
            if (point.hasPillarsLink && index === 1) {
              return (
                <p key={index}>
                  Our programme is organised around the broad areas of life, conceptualised as{" "}
                  <Link
                    href="/12-pillar-framework"
                    className="font-bold text-[#147b4b] underline decoration-[#159447]/60 underline-offset-4 transition hover:text-[#102b50] hover:decoration-[#102b50]"
                  >
                    12 Pillars in ProblemEx Program
                  </Link>
                  , in which individuals actually encounter problems, challenges, situations and dilemmas. Rather than restricting learning to conventional subjects or isolated topics, we focus on the situations individuals may encounter in their student life, personal life, professional life, relationships, society and other spheres of life.
                </p>
              );
            }

            // Concluding paragraph of each point
            if (isLast) {
              return (
                <p
                  key={index}
                  className="rounded-2xl border-l-[4px] border-[#159447] bg-white/80 p-5 text-lg font-bold text-[#102b50] shadow-sm sm:p-6 sm:text-xl"
                >
                  {para}
                </p>
              );
            }

            return <p key={index}>{para}</p>;
          })}
        </div>

        {/* Navigation Between Differences */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#dce6ed] pt-8 sm:mt-16 sm:flex-row sm:pt-10">
          {prevPoint ? (
            <Link
              href={`/how-problemex-is-different/${prevPoint.slug}`}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#d4e0e8] bg-white px-5 py-3 text-sm font-bold text-[#102b50] shadow-sm transition hover:-translate-y-0.5 hover:border-[#147b4b] hover:text-[#147b4b] hover:shadow sm:w-auto sm:justify-start"
            >
              <span>&larr;</span>
              <span>Difference {prevPoint.number}</span>
            </Link>
          ) : (
            <Link
              href="/how-problemex-is-different"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#d4e0e8] bg-white px-5 py-3 text-sm font-bold text-[#102b50] shadow-sm transition hover:border-[#147b4b] sm:w-auto"
            >
              <span>&larr;</span>
              <span>All Differences</span>
            </Link>
          )}

          {nextPoint ? (
            <Link
              href={`/how-problemex-is-different/${nextPoint.slug}`}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#0f6d3f]/20 bg-gradient-to-r from-[#117541] to-[#159447] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_16px_rgba(21,148,71,0.24)] transition hover:-translate-y-0.5 hover:from-[#102b50] hover:to-[#183b61] hover:shadow-[0_10px_22px_rgba(16,43,80,0.26)] sm:w-auto sm:justify-end"
            >
              <span>Difference {nextPoint.number}</span>
              <span>&rarr;</span>
            </Link>
          ) : (
            <Link
              href="/how-problemex-is-different"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#0f6d3f]/20 bg-gradient-to-r from-[#117541] to-[#159447] px-6 py-3 text-sm font-bold text-white shadow sm:w-auto"
            >
              <span>Back to Overview</span>
              <span>&rarr;</span>
            </Link>
          )}
        </div>
      </article>
    </main>
  );
}
