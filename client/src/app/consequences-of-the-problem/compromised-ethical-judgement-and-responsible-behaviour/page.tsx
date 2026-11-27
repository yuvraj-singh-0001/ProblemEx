import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

type ConsequenceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro: string; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

const point = {
    title: "Compromised Ethical Judgement and Responsible Behaviour",
    blocks: [
      { type: "paragraph", text: "Ethical judgement is perhaps one of the most difficult aspects of navigating real life. The challenge is not always distinguishing between something obviously right and obviously wrong. It is often deciding what to do when two responsibilities conflict, when every available option carries a cost, when personal interests collide with fairness or when the consequences of a decision are difficult to foresee." },
      { type: "list", intro: "Consider the following situations:", items: [
        "Imagine a young aspirant preparing for a competitive examination in Delhi. His father falls seriously ill in their hometown, and his family desperately needs him back. Yet, leaving Delhi could jeopardise years of preparation and his chances of securing the career for which he has worked so hard. What should he do?",
        "A student discovers that a close friend has cheated in an examination. Reporting the incident may jeopardise the friend's future, but remaining silent would mean condoning dishonesty. What is the right course of action?",
        "A young professional discovers that a decision taken by his team could seriously harm a client. Speaking up may put his own position at risk, particularly when his seniors are involved. Should he challenge the decision or remain silent?",
        "Imagine a family living in a city to provide their children with better educational opportunities, while their ageing parents, living alone in their hometown, increasingly need their care and support. Should they prioritise their children's future or their parents' present needs?",
        "A parent discovers that their child has been bullying another student. Should they instinctively defend their own child, or confront an uncomfortable truth and hold the child accountable?",
        "A person is offered a lucrative opportunity that could significantly improve their family's financial circumstances, but the arrangement involves a questionable practice that could disadvantage others. Do the circumstances justify accepting it?",
      ] },
      { type: "paragraph", text: "These are not merely questions of morality. They are dilemmas involving competing duties, relationships, consequences, personal interests, fairness, responsibility and judgement. In many such situations, there may not be an answer that leaves everyone satisfied." },
      { type: "paragraph", text: "Navigating such situations requires more than knowing what is written in a rulebook or remembering moral teachings. It requires विवेक (wisdom), the ability to examine a situation from multiple perspectives, recognise competing responsibilities, question one's own biases, anticipate consequences and arrive at a considered decision." },
      { type: "paragraph", text: "Ethical judgement is not merely the ability to know what is right. It is the ability to discern what is right when the answer is not obvious, the choices are difficult and the consequences matter." },
    ],
  } as { title: string; blocks: ConsequenceBlock[] };
const description = (point.blocks.find((block) => block.type === "paragraph")?.text ?? "Explore a consequence of gaps in practical knowledge and real-life problem-solving skills.").slice(0, 160);
const parentPath = "/consequences-of-the-problem";
const slug = "compromised-ethical-judgement-and-responsible-behaviour";

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
