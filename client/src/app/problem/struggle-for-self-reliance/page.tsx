import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";

const title = "The Struggle for Self-Reliance";
const paragraphs = [
  "One of the fundamental objectives of education is to empower individuals to stand on their own feet, become confident and live independently. Yet, how often do we find highly educated individuals who struggle to handle even relatively simple everyday situations without seeking help from parents, teachers, friends or someone else?",
  "Whether it is dealing with a bank, understanding a document, resolving a disagreement, managing basic responsibilities, handling an unexpected situation or simply figuring out what to do when something goes wrong, many individuals find themselves unnecessarily dependent on others.",
  "Somewhere between growing up and becoming an adult, we should ideally learn to do things ourselves. Unfortunately, for some, that lesson remains permanently outsourced!",
  "Education should not merely help us earn degrees. It should also help us become capable of managing our own lives, without being dependent on others."
];

export const metadata: Metadata = {
  title,
  description: "Explore why practical life skills and self-reliance matter for handling everyday responsibilities independently.",
  alternates: { canonical: "/problem/struggle-for-self-reliance" },
  openGraph: {
    siteName: "ProblemEx",
    title: title + " | ProblemEx",
    description: "Explore why practical life skills and self-reliance matter for handling everyday responsibilities independently.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: title + " | ProblemEx",
    description: "Explore why practical life skills and self-reliance matter for handling everyday responsibilities independently.",
    images: ["/problemEx.png"],
  },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <Link className="inline-flex items-center gap-2 rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white" href="/problem#problem-struggle-for-self-reliance">← Back to this problem card</Link>
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
