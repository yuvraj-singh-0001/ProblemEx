import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

const title = "Academic Excellence, Yet Struggling in Life";
const paragraphs = [
  "We celebrate toppers, high scores, gold medals, degrees and academic achievements. But does academic excellence automatically translate into the ability to handle life?",
  "Meet Rahul. He has scored 95% in his examinations, solved complicated mathematical problems and memorised entire chapters. But when he has to negotiate a difficult situation, handle a conflict, make an important decision, manage an unexpected expense or deal with someone manipulating him, he finds himself clueless!",
  "And Rahul isn't an exception.",
  "Individuals who excel in academics, secure impressive qualifications and demonstrate exceptional intellectual abilities can still struggle when confronted with the complexities, challenges and realities of everyday life.",
  "Because scoring 95% in an examination and knowing what to do when life gives you a problem are not necessarily the same thing!",
  "Life is not an examination where you can memorise the answers beforehand. Sometimes, you are tested first, and the syllabus arrives later!"
];

export const metadata: Metadata = {
  title,
  description: "Learn why strong academic performance does not always prepare people to handle everyday decisions, conflict and practical challenges.",
  alternates: { canonical: "/problem/academic-excellence-yet-struggling-in-life" },
  openGraph: {
    siteName: "ProblemEx",
    title: title + " | ProblemEx",
    description: "Learn why strong academic performance does not always prepare people to handle everyday decisions, conflict and practical challenges.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: title + " | ProblemEx",
    description: "Learn why strong academic performance does not always prepare people to handle everyday decisions, conflict and practical challenges.",
    images: ["/problemEx.png"],
  },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <ProblemCardReturnLink href="/problem" targetId="problem-academic-excellence-yet-struggling-in-life" className="inline-flex items-center gap-2 rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white">← Back to this problem card</ProblemCardReturnLink>
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
