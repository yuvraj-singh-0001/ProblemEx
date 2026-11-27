import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";

const title = "Insufficient Emphasis on Vocational, Technical and Practical Skills";
const paragraphs = [
  "Not everyone needs to become a doctor, engineer, lawyer or corporate executive. Nor should success in life be measured exclusively by academic qualifications or conventional career paths.",
  "The world needs electricians, plumbers, technicians, designers, skilled tradespeople, entrepreneurs, craftspeople and individuals with a wide range of practical and vocational abilities. These skills can create livelihoods, open doors to entrepreneurship, meet real-world demands and provide economic independence.",
  "Yet, vocational, technical, trade-based and practical skills continue to receive insufficient emphasis, recognition and development in many educational settings.",
  "The result? Countless individuals may spend years pursuing conventional academic pathways while opportunities to acquire valuable practical skills, develop expertise, build livelihoods and explore alternative routes to success remain overlooked or underdeveloped.",
  "Not every successful person needs a degree. But almost every successful journey requires the ability to do something useful, solve something meaningful or create something of value."
];

export const metadata: Metadata = {
  title,
  description: "Explore why vocational, technical and practical abilities matter alongside academic learning and career preparation.",
  alternates: { canonical: "/problem/insufficient-vocational-technical-practical-skills" },
  openGraph: {
    siteName: "ProblemEx",
    title: title + " | ProblemEx",
    description: "Explore why vocational, technical and practical abilities matter alongside academic learning and career preparation.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: title + " | ProblemEx",
    description: "Explore why vocational, technical and practical abilities matter alongside academic learning and career preparation.",
    images: ["/problemEx.png"],
  },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <Link className="inline-flex items-center gap-2 rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white" href="/problem#problem-insufficient-vocational-technical-practical-skills">← Back to this problem card</Link>
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
