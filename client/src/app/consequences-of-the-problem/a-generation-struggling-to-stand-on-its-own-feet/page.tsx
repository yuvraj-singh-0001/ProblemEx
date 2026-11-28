import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";
import { ProblemCardReturnLink } from "@/app/components/problem-card-navigation/problem-card-navigation";

type ConsequenceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro: string; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

const point = {
  title: "A Generation Struggling to Stand on Its Own Feet",
  blocks: [
    {
      type: "paragraph",
      text: "Imagine a person who needs a crutch to walk, a hearing aid to hear, a machine to speak, glasses to see, assistance to eat and a pacemaker to keep the heart functioning. With all these devices and support systems in place, the individual may still manage to function remarkably well. But would we consider such a situation the ideal state of functioning, if these dependencies were avoidable?",
    },
    {
      type: "paragraph",
      text: "Unfortunately, a similar paradox is emerging among today's generation. We are producing individuals who may appear exceptionally capable, scoring impressive marks, acquiring degrees, using sophisticated technology and demonstrating academic brilliance, yet struggling to handle some of the most basic situations of everyday life independently.",
    },
    {
      type: "paragraph",
      text: "A small electrical repair at home, filling out a routine form, managing an unfamiliar situation, handling a practical setback or making a simple decision can leave them dependent on parents, teachers, friends or even people with considerably less formal education but far greater practical understanding.",
    },
    {
      type: "paragraph",
      text: "An individual who appears efficient only because an extensive support system is constantly compensating for their limitations may not be genuinely efficient at all. If even one or two critical elements of that support system disappear, that apparent efficiency can collapse. True efficiency lies in being capable of handling most situations independently, while recognising that certain assistance and support may inevitably be necessary.",
    },
    {
      type: "paragraph",
      text: "When the ability to independently navigate life's ordinary challenges is missing, the consequences extend far beyond inconvenience. They affect confidence, initiative, judgement, responsibility and ultimately, the ability to stand on one's own feet.",
    },
  ],
} as { title: string; blocks: ConsequenceBlock[] };

const description = (point.blocks.find((block) => block.type === "paragraph")?.text ?? "Explore a consequence of gaps in practical knowledge and real-life problem-solving skills.").slice(0, 160);
const parentPath = "/consequences-of-the-problem";
const slug = "a-generation-struggling-to-stand-on-its-own-feet";

export const metadata: Metadata = {
  title: point.title,
  description,
  alternates: { canonical: parentPath + "/" + slug },
  openGraph: {
    siteName: "ProblemEx",
    title: point.title + " | ProblemEx",
    description,
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: point.title + " | ProblemEx",
    description,
    images: ["/problemEx.png"],
  },
};

const dependencies = [
  "Crutch to walk",
  "Hearing aid to hear",
  "Machine to speak",
  "Glasses to see",
  "Assistance to eat",
  "Pacemaker for heart",
];

export default function Page() {
  const [firstPara, ...remainingBlocks] = point.blocks;

  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <article className="relative mx-auto w-full max-w-7xl py-6 sm:py-10">
        {/* Back Link */}
        <ProblemCardReturnLink
          href={parentPath}
          targetId={"consequence-" + slug}
          className="inline-flex min-h-10 items-center rounded-full border border-[#d4e0e8] bg-white/80 px-4 py-2 text-sm font-semibold text-[#147b4b] transition hover:border-[#159447] hover:bg-white"
        >
          Back to this consequence card
        </ProblemCardReturnLink>

        {/* Page Header */}
        <header className="mx-auto mt-6 max-w-7xl border-b border-[#d4e0e8] pb-6 text-center sm:mt-8 sm:pb-8">
          <h1 className="mx-auto mt-0 max-w-7xl bg-gradient-to-r from-[#102b50] via-[#183b61] to-[#147b4b] bg-clip-text text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-transparent sm:text-5xl">
            {point.title}
          </h1>
          <span aria-hidden="true" className="mx-auto mt-5 block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]" />
        </header>

        {/* Story Section Part 1: Initial Metaphor Question */}
        <div className="mx-auto mt-6 max-w-5xl text-pretty text-[17px] leading-8 text-slate-700 sm:mt-8 sm:text-lg sm:leading-9">
          {firstPara && firstPara.type === "paragraph" && (
            <p>{firstPara.text}</p>
          )}
        </div>

        {/* Visual Chain of Dependencies Image */}
        <section aria-label="Visual Chain of Dependencies" className="my-4 w-full sm:my-6">
          <div className="w-full overflow-x-auto py-1">
            <div className="mx-auto min-w-[820px] max-w-7xl px-2 xl:min-w-0">
              <Image
                alt="Visual chain of six avoidable dependencies from the metaphor: Crutch to walk, Hearing aid to hear, Machine to speak, Glasses to see, Assistance to eat, Pacemaker for heart"
                className="h-auto w-full object-contain drop-shadow-sm"
                height={330}
                priority
                src="/avoidable-dependencies-flow-clean.png"
                width={1800}
              />
              {/* Crisp, native code-rendered typography labels aligned with each station */}
              <div
                className="mt-4 grid grid-cols-6 text-center"
                style={{ paddingLeft: "5.83%", paddingRight: "5.83%" }}
              >
                {dependencies.map((item) => (
                  <div className="px-1" key={item}>
                    <p className="text-pretty text-sm font-bold tracking-tight text-[#102b50] sm:text-base md:text-[17px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Remaining Story Paragraphs 100% Intact */}
        <div className="mx-auto max-w-5xl space-y-6 text-pretty text-[17px] leading-8 text-slate-700 sm:space-y-7 sm:text-lg sm:leading-9">
          {remainingBlocks.map((block, index) => (
            block.type === "paragraph" ? (
              <p key={"paragraph-" + index}>{block.text}</p>
            ) : block.type === "list" ? (
              <div key={"list-" + index}>
                <p>{block.intro}</p>
                <ul className="mt-3 list-disc space-y-3 pl-6 marker:text-[#147b4b] sm:pl-8">
                  {block.items.map((item) => (
                    <li className="pl-1" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
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
