import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

const point = {
    title: "Schools and Educators Operate Within Systemic Constraints",
    paragraphs: [
      "It would be unfair to assume that schools and educators do not recognise the importance of practical learning, or that they are unwilling to introduce innovative approaches.",
      "Many teachers and educational institutions genuinely want to provide students with a more meaningful, engaging and holistic learning experience. However, they often operate within a framework of prescribed syllabi, examination systems, academic schedules, institutional requirements, expectations of parents, administrative responsibilities and other constraints.",
      "When substantial portions of the academic calendar must be devoted to completing prescribed syllabi, preparing students for examinations and meeting institutional requirements, introducing experiential, situational and application-oriented learning on a consistent and structured basis can become difficult.",
      "The challenge is not necessarily a lack of intention or awareness. It is also a question of priorities, time, resources, institutional structures and the practical limitations within which schools and educators operate.",
      "Consequently, even when the need for practical and experiential learning is recognised, its systematic and sustained integration into the educational experience may remain limited.",
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
  alternates: { canonical: "/problem/schools-and-educators-operate-within-systemic-constraints" },
  openGraph: { siteName: "ProblemEx", title: point.title + " | ProblemEx", description, type: "article", images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }] },
  twitter: { card: "summary_large_image", title: point.title + " | ProblemEx", description, images: ["/problemEx.png"] },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <ProblemCardReturnLink href="/problem" targetId="why-problem-schools-and-educators-operate-within-systemic-constraints" className="inline-flex min-h-10 items-center rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white">Back to Why This Problem Exists</ProblemCardReturnLink>
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
          <ProblemCardReturnLink href="/problem" targetId="why-problem-schools-and-educators-operate-within-systemic-constraints" className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#117541] to-[#159447] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(21,148,71,0.24)] transition hover:-translate-y-0.5 hover:from-[#102b50] hover:to-[#183b61] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447]">Back to this card</ProblemCardReturnLink>
        </div>      </article>
    </main>
  );
}
