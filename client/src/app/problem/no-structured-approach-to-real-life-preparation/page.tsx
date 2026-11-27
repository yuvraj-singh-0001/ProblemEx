import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

const point = {
    title: "No Structured Approach Exists to Systematically Prepare Individuals for Real-Life Situations",
    paragraphs: [
      "Most individuals learn how to handle life's challenges through a combination of personal experiences, mistakes, family guidance, observations, circumstances, advice from others and trial and error.",
      "Some learn valuable lessons early in life. Others learn them after making mistakes, facing difficult situations or experiencing consequences that could perhaps have been avoided.",
      "Experience is certainly a powerful teacher. But it can also be an expensive one!",
      "A wrong financial decision, an unhealthy relationship, an avoidable conflict, a career mistake, a deceptive situation or a poor judgement call may sometimes teach us a lesson. But the price of learning that lesson can be considerable.",
      "Yet, there remains a fundamental gap in the form of a structured, systematic and comprehensive approach that deliberately prepares individuals to understand, navigate and effectively handle the diverse situations they are likely to encounter in life.",
      "We teach individuals many things they need to know. But where is the systematic preparation for the situations they will actually have to face?",
      "This is the gap that needs to be addressed.",
    ],
  } as {
  title: string;
  paragraphs?: string[];
  subsections?: { title: string; paragraphs: string[] }[];
};
const description = (point.paragraphs?.[0] ?? point.subsections?.[0]?.paragraphs[0] ?? "Understand the educational factors behind this challenge and why practical learning matters.").slice(0, 160);

export const metadata: Metadata = {
  title: point.title,
  description,
  alternates: { canonical: "/problem/no-structured-approach-to-real-life-preparation" },
  openGraph: { siteName: "ProblemEx", title: point.title + " | ProblemEx", description, type: "article", images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }] },
  twitter: { card: "summary_large_image", title: point.title + " | ProblemEx", description, images: ["/problemEx.png"] },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <ProblemCardReturnLink href="/problem" targetId="why-problem-no-structured-approach-to-real-life-preparation" className="inline-flex min-h-10 items-center rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white">Back to Why This Problem Exists</ProblemCardReturnLink>
        <header className="mx-auto mt-8 max-w-7xl border-b border-[#d4e0e8] pb-8 text-center sm:mt-10 sm:pb-10">
          <h1 className="mx-auto mt-0 max-w-7xl bg-gradient-to-r from-[#102b50] via-[#183b61] to-[#147b4b] bg-clip-text text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-transparent sm:text-5xl">{point.title}</h1>
          <span aria-hidden="true" className="mx-auto mt-6 block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]" />
        </header>
        <div className="mx-auto mt-8 max-w-7xl space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:mt-10 sm:space-y-6 sm:text-lg sm:leading-9">
          {point.paragraphs?.map((paragraph, index) => <p className={index === point.paragraphs!.length - 1 ? "font-semibold text-[#183b61]" : ""} key={paragraph}>{paragraph}</p>)}
          {point.subsections?.map((subsection, index) => (
            <section className="border-l-4 border-[#159447]/40 pl-5 sm:pl-7" key={subsection.title}>
              <h2 className="mb-3 text-balance text-xl font-bold leading-snug text-[#147b4b] sm:text-2xl">{subsection.title}</h2>
              <div className="space-y-4 text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                {subsection.paragraphs.map((paragraph, paragraphIndex) => <p className={paragraphIndex === subsection.paragraphs.length - 1 ? "font-semibold text-[#183b61]" : ""} key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10 border-t border-[#d4e0e8] pt-7">
          <ProblemCardReturnLink href="/problem" targetId="why-problem-no-structured-approach-to-real-life-preparation" className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#117541] to-[#159447] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(21,148,71,0.24)] transition hover:-translate-y-0.5 hover:from-[#102b50] hover:to-[#183b61] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447]">Back to this card</ProblemCardReturnLink>
        </div>      </article>
    </main>
  );
}
