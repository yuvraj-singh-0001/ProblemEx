import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

type ConsequenceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro: string; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

const point = {
    title: "Strained Relationships and the Breakdown of Human Connections",
    blocks: [
      { type: "paragraph", text: "Relationships are among the most valuable aspects of human life. They can provide companionship, support, belonging, security, happiness and meaning. But they can also become sources of frustration, conflict, disappointment, misunderstanding and distress when we lack the abilities required to navigate them." },
      { type: "paragraph", text: "Love alone is not always enough. Good intentions alone are not always enough. Even people who genuinely care about each other can hurt one another, misunderstand one another, develop resentment, cross boundaries, communicate poorly and struggle to resolve conflicts." },
      { type: "paragraph", text: "How many relationships have suffered because someone could not control their anger? How many friendships have ended because of an unnecessary misunderstanding? How many marriages have deteriorated because two individuals could not communicate effectively, manage expectations or resolve disagreements constructively? How many parents and children have drifted apart because neither knows how to navigate the differences between them?" },
      { type: "paragraph", text: "A person may know the importance of respecting others but still struggle to demonstrate respect when angry. Someone may understand the value of communication but become defensive whenever confronted. Another may genuinely love their family yet repeatedly make decisions that create unnecessary conflict." },
      { type: "paragraph", text: "The irony is that we often expect relationships to function on the basis of love, loyalty and good intentions, while overlooking the practical abilities required to sustain them." },
      { type: "paragraph", text: "Communication, empathy, patience, emotional maturity, conflict resolution, boundary-setting, listening, negotiation, understanding perspectives and knowing when to speak, when to remain silent and when to walk away are not merely desirable qualities. They are practical abilities that can significantly influence the quality of our relationships." },
      { type: "paragraph", text: "Sometimes, relationships do not break because people stop caring. They break because people do not know how to care, communicate and coexist effectively." },
    ],
  } as { title: string; blocks: ConsequenceBlock[] };
const description = (point.blocks.find((block) => block.type === "paragraph")?.text ?? "Explore a consequence of gaps in practical knowledge and real-life problem-solving skills.").slice(0, 160);
const parentPath = "/consequences-of-the-problem";
const slug = "strained-relationships-and-the-breakdown-of-human-connections";

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
