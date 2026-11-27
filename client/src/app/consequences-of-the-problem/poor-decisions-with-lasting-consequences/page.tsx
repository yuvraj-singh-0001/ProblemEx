import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

type ConsequenceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro: string; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

const point = {
    title: "Poor Decisions with Lasting Consequences",
    blocks: [
      { type: "paragraph", text: "Life is, in many ways, a continuous series of decisions. Some are trivial. Others can fundamentally alter the course of our lives." },
      { type: "paragraph", text: "What career should I pursue? Whom should I trust? Should I invest my money in this scheme? Should I take this loan? Should I accept this job? How should I respond to this conflict? Should I sign this agreement? Should I confront this person? Should I walk away from this relationship? Should I take this risk?" },
      { type: "paragraph", text: "The consequences of some decisions may last for years, decades or even a lifetime." },
      { type: "paragraph", text: "Yet, how often do we make decisions without adequately understanding the situation, examining the alternatives, identifying the risks, anticipating the consequences or recognising our own biases, emotions and vulnerabilities?" },
      { type: "paragraph", text: "A person may invest their life savings in a seemingly attractive scheme because they failed to recognise the warning signs. Someone may choose a career merely because it appears prestigious, without understanding whether it aligns with their abilities, interests or circumstances. An individual may send an angry message in the heat of the moment, damaging a relationship that took years to build. Someone may sign a contract without reading its terms and conditions, only to discover the consequences when it is too late." },
      { type: "paragraph", text: "And sometimes, the biggest mistake is not making a wrong decision. It is making a decision without even realising what one ought to have considered before making it." },
      { type: "paragraph", text: "The Bhagavad Gita offers a timeless lesson in decision-making. After imparting his wisdom to Arjuna, Bhagwan Shri Krishna does not simply command him to follow his instructions. Instead, he says:" },
      { type: "quote", text: "\u0907\u0924\u093f \u0924\u0947 \u091c\u094d\u091e\u093e\u0928\u092e\u093e\u0916\u094d\u092f\u093e\u0924\u0902 \u0917\u0941\u0939\u094d\u092f\u093e\u0926\u094d \u0917\u0941\u0939\u094d\u092f\u0924\u0930\u0902 \u092e\u092f\u093e\u0964\n\u0935\u093f\u092e\u0943\u0936\u094d\u092f\u0948\u0924\u0926\u0936\u0947\u0937\u0947\u0923 \u092f\u0925\u0947\u091a\u094d\u091b\u0938\u093f \u0924\u0925\u093e \u0915\u0941\u0930\u0941\u0965\u0965\n\nReflect upon it fully and thoroughly, and then decide as you wish.", attribution: "Bhagavad Gita 18.63" },
      { type: "paragraph", text: "Perhaps this is one of the most profound principles of sound decision-making: do not merely react, follow or act impulsively. Understand the situation, weigh the considerations, exercise विवेक and then make a conscious decision." },
      { type: "paragraph", text: "The ancient wisdom of the Bhagavad Gita reminds us of the importance of clarity, discernment and thoughtful action. The battlefield of life, however, is not always Kurukshetra. Sometimes, it is a boardroom, a bank, a courtroom, a family conversation, a WhatsApp message or a decision made at 2 a.m.!" },
      { type: "paragraph", text: "A decision made in minutes can sometimes create consequences that take years to undo." },
      { type: "paragraph", text: "The ability to think critically, evaluate situations, assess alternatives, recognise risks, exercise judgement and make informed decisions is therefore not merely an intellectual advantage. It is one of the most consequential abilities a person can develop." },
    ],
  } as { title: string; blocks: ConsequenceBlock[] };
const description = (point.blocks.find((block) => block.type === "paragraph")?.text ?? "Explore a consequence of gaps in practical knowledge and real-life problem-solving skills.").slice(0, 160);
const parentPath = "/consequences-of-the-problem";
const slug = "poor-decisions-with-lasting-consequences";

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
