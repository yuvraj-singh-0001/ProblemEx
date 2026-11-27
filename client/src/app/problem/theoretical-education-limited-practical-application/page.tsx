import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

const title = "Theoretical Education with Limited Practical Application";
const paragraphs = [
  "We learn about electricity, but do we know what to do when a live wire poses a danger? We learn mathematics, but can we confidently calculate the actual cost of a loan, understand a financial commitment or evaluate whether a deal is too good to be true? We learn about communication, but can we handle a difficult conversation without making matters worse?",
  "As 3 Idiots reminded us in its own way, education should be about understanding, not merely about chasing marks. But understanding a concept is only half the journey. Knowing how to use it when life puts you to the test is the other half.",
  "Our education often equips us with theoretical knowledge, concepts and information, but doesn't always adequately prepare us to apply that knowledge when real-life situations demand it.",
  "Knowing something and knowing what to do with it are two different things. And the gap between the two can sometimes be the difference between handling a situation effectively and making a costly mistake!"
];

export const metadata: Metadata = {
  title,
  description: "Explore the gap between learning concepts and applying knowledge to real-life situations and decisions.",
  alternates: { canonical: "/problem/theoretical-education-limited-practical-application" },
  openGraph: {
    siteName: "ProblemEx",
    title: title + " | ProblemEx",
    description: "Explore the gap between learning concepts and applying knowledge to real-life situations and decisions.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: title + " | ProblemEx",
    description: "Explore the gap between learning concepts and applying knowledge to real-life situations and decisions.",
    images: ["/problemEx.png"],
  },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <ProblemCardReturnLink href="/problem" targetId="problem-theoretical-education-limited-practical-application" className="inline-flex items-center gap-2 rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white">← Back to this problem card</ProblemCardReturnLink>
        <header className="mx-auto mt-8 max-w-7xl border-b border-[#d4e0e8] pb-8 text-center sm:mt-10 sm:pb-10">
          <h1 className="mx-auto mt-0 max-w-7xl bg-gradient-to-r from-[#102b50] via-[#183b61] to-[#147b4b] bg-clip-text text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-transparent sm:text-5xl">{title}</h1>
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
