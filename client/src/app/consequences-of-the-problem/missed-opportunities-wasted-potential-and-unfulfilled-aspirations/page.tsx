import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

type ConsequenceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro: string; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

const point = {
    title: "Missed Opportunities, Wasted Potential and Unfulfilled Aspirations",
    blocks: [
      { type: "paragraph", text: "How many people possess remarkable talent, intelligence, ideas, ambition and potential, yet fail to translate them into meaningful achievements?" },
      { type: "paragraph", text: "How many opportunities are lost because someone lacks the confidence to act? How many promising ideas remain confined to conversations because their creators cannot turn them into reality? How many individuals abandon ambitions because they cannot navigate the challenges, uncertainties, setbacks and practical obstacles that inevitably accompany any meaningful pursuit?" },
      { type: "paragraph", text: "A person may have an excellent business idea but lack the ability to evaluate its feasibility, negotiate, manage finances, build relationships, market a product or handle setbacks." },
      { type: "paragraph", text: "Someone may possess extraordinary talent but struggle to present themselves, communicate their strengths or recognise opportunities." },
      { type: "paragraph", text: "Another may want to pursue a particular career, start a business, travel independently, learn a skill or accomplish something meaningful, but remain paralysed by uncertainty, fear, practical difficulties or the inability to figure out what to do next." },
      { type: "paragraph", text: "Potential is important. But potential alone does not guarantee achievement." },
      { type: "paragraph", text: "An idea without execution remains an idea. An opportunity without action remains an opportunity missed. An ambition without the ability to navigate the path ahead can remain an aspiration for years." },
      { type: "paragraph", text: "The world is full of people who could have done something remarkable, had they been better equipped, better prepared or more capable of navigating the challenges standing between them and their goals." },
      { type: "paragraph", text: "Talent may give you the potential to achieve something. Your ability to navigate the journey determines whether that potential gets a chance to become reality." },
    ],
  } as { title: string; blocks: ConsequenceBlock[] };
const description = (point.blocks.find((block) => block.type === "paragraph")?.text ?? "Explore a consequence of gaps in practical knowledge and real-life problem-solving skills.").slice(0, 160);
const parentPath = "/consequences-of-the-problem";
const slug = "missed-opportunities-wasted-potential-and-unfulfilled-aspirations";

export const metadata: Metadata = {
  title: point.title,
  description,
  alternates: { canonical: parentPath + "/" + slug },
  openGraph: { siteName: "ProblemEx", title: point.title + " | ProblemEx", description, type: "article", images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }] },
  twitter: { card: "summary_large_image", title: point.title + " | ProblemEx", description, images: ["/problemEx.png"] },
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-8 sm:py-14">
        <ProblemCardReturnLink href={parentPath} targetId={"consequence-" + slug} className="inline-flex min-h-10 items-center rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white">Back to this consequence card</ProblemCardReturnLink>
        <header className="mx-auto mt-8 max-w-7xl border-b border-[#d4e0e8] pb-8 text-center sm:mt-10 sm:pb-10">
          <h1 className="mx-auto mt-0 max-w-7xl bg-gradient-to-r from-[#102b50] via-[#183b61] to-[#147b4b] bg-clip-text text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-transparent sm:text-5xl">{point.title}</h1>
          <span aria-hidden="true" className="mx-auto mt-6 block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]" />
        </header>
        <div className="mx-auto mt-8 max-w-7xl space-y-5 text-pretty text-[17px] leading-8 text-slate-700 sm:mt-10 sm:space-y-6 sm:text-lg sm:leading-9">
          {point.blocks.map((block, index) => (
            block.type === "paragraph" ? (
              <p key={"paragraph-" + index}>{block.text}</p>
            ) : block.type === "list" ? (
              <div key={"list-" + index}>
                <p>{block.intro}</p>
                <ul className="mt-3 list-disc space-y-3 pl-6 marker:text-[#147b4b] sm:pl-8">{block.items.map((item) => <li className="pl-1" key={item}>{item}</li>)}</ul>
              </div>
            ) : (
              <blockquote className="rounded-2xl border-l-4 border-[#159447] bg-white/75 px-4 py-4 text-[#183b61] shadow-sm sm:px-6 sm:py-5" key={"quote-" + index}>
                <p className="whitespace-pre-line font-medium">{block.text}</p>
                {block.attribution && <cite className="mt-3 block text-sm font-semibold not-italic text-[#147b4b]">{block.attribution}</cite>}
              </blockquote>
            )
          ))}
        </div>
      </article>
    </main>
  );
}
