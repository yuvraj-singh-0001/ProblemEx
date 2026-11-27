import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";

const title = "Degrees, Yet Struggling to Earn a Livelihood";
const paragraphs = [
  "India produces millions of graduates every year. Yet, for many, the journey from a degree to a decent livelihood remains far from straightforward.",
  "A degree may open a door, but it does not necessarily equip an individual to walk through it successfully. Employers increasingly expect individuals to communicate effectively, think critically, solve problems, adapt to changing circumstances, take initiative, work with others and handle responsibilities.",
  "And these abilities cannot always be measured by the marks on a report card or the degrees hanging on a wall.",
  "One of the fundamental objectives of education is to equip individuals to earn a livelihood and become economically independent. Yet, when years of education fail to translate into the ability to secure opportunities, build a career and earn a decent living, we need to ask ourselves whether education is adequately preparing individuals for the realities of the world they are entering.",
  "A degree may tell the world what you studied. Your ability to handle real-world challenges often determines what you can actually do with it."
];

export const metadata: Metadata = {
  title,
  description: "Learn why qualifications alone may not build the practical, communication and decision-making abilities needed for work.",
  alternates: { canonical: "/problem/degrees-yet-struggling-to-earn-a-livelihood" },
  openGraph: {
    siteName: "ProblemEx",
    title: title + " | ProblemEx",
    description: "Learn why qualifications alone may not build the practical, communication and decision-making abilities needed for work.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: title + " | ProblemEx",
    description: "Learn why qualifications alone may not build the practical, communication and decision-making abilities needed for work.",
    images: ["/problemEx.png"],
  },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <Link className="inline-flex items-center gap-2 rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white" href="/problem#problem-degrees-yet-struggling-to-earn-a-livelihood">← Back to this problem card</Link>
        <header className="mx-auto mt-8 max-w-7xl border-b border-[#d4e0e8] pb-8 text-center sm:mt-10 sm:pb-10">
          <p className="inline-flex rounded-full border border-[#159447]/15 bg-[#eaf5ee] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#147b4b]">What Is the Problem?</p>
          <h1 className="mx-auto mt-5 max-w-7xl bg-gradient-to-r from-[#102b50] via-[#183b61] to-[#147b4b] bg-clip-text text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-transparent sm:text-5xl">{title}</h1>
          <span aria-hidden="true" className="mx-auto mt-6 block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447] shadow-[0_4px_12px_rgba(21,148,71,0.2)]" />
        </header>
        <div className="mx-auto mt-8 max-w-7xl space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:mt-10 sm:space-y-6 sm:text-lg sm:leading-9">
          {paragraphs.map((paragraph, index) => (
            <p className={index === paragraphs.length - 1 ? "font-semibold text-[#183b61]" : ""} key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
