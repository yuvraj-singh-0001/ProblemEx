import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";





const situationalCapabilities = [
  ["Academic Knowledge", "What you have learnt through formal education, subjects, concepts, theories and intellectual understanding."],
  ["Technical and Practical Skills", "Your ability to perform tasks, use tools, execute processes and apply specialised skills."],
  ["Acquired Knowledge and Experience", "What you have learnt through life experiences, observations, interactions, mistakes, successes and the experiences of others."],
  ["Common Sense", "Your ability to recognise what is obvious, practical, reasonable and appropriate in a given situation."],
  ["Critical Thinking and Analytical Ability", "Your ability to examine facts, question assumptions, analyse circumstances, identify patterns and evaluate alternatives."],
  ["Decision-Making and Judgement", "Your ability to assess available options, weigh consequences, make choices and exercise sound judgement."],
  ["Emotional Awareness and Regulation", "Your ability to understand your emotions, manage your reactions and maintain composure when situations become difficult."],
  ["Communication and Interpersonal Skills", "Your ability to communicate, understand people, negotiate, resolve conflicts and navigate relationships."],
  ["Situational Awareness", "Your ability to recognise what is happening around you, identify relevant factors, understand dynamics and anticipate possible consequences."],
  ["Creativity, Adaptability and Resourcefulness", "Your ability to think beyond conventional solutions, adapt to changing circumstances and find a way forward even when resources or options are limited."],
  ["Values, Ethics and Responsibility", "Your ability to recognise ethical considerations, distinguish between right and wrong, and act responsibly."],
];

const capabilityColors = [
  { border: "#f2a900", badge: "#fff3c4", text: "#8a5b00" },
  { border: "#ef6b16", badge: "#ffeadb", text: "#a33b08" },
  { border: "#db3f70", badge: "#ffe1eb", text: "#a51f4b" },
  { border: "#bb3b94", badge: "#f9e2f3", text: "#8c216d" },
  { border: "#7145a5", badge: "#eee5fa", text: "#4f2b7c" },
  { border: "#1976c9", badge: "#dfedff", text: "#15539a" },
  { border: "#28a7cf", badge: "#dff7ff", text: "#14738f" },
  { border: "#159497", badge: "#ddf5f1", text: "#116d6e" },
  { border: "#5b9d20", badge: "#e8f5d8", text: "#3d7314" },
  { border: "#91ae18", badge: "#f2f7d8", text: "#647b0c" },
  { border: "#d34b3d", badge: "#ffe7e2", text: "#a33229" },
];

const skAssessmentSteps = [
  ["The Initial Assessment", "Before beginning the ProblemEx programme, participants undertake an assessment designed to evaluate their Situational Knowledge Quotient (SKQ). Based on their performance, an initial SKI value is calculated, providing a starting point for their journey."],
  ["The ProblemEx Journey", "Participants undertake the ProblemEx programme, engaging with practical situations, challenges, learning experiences and activities designed to progressively develop their Situational Knowledge Quotient (SKQ)."],
  ["The Final Assessment", "Upon completion of the programme, participants undertake another assessment. Their performance is evaluated to calculate their final SKI value."],
  ["Measure Your Progress", "The initial and final SKI values provide an indicator of the development achieved during the ProblemEx journey, allowing participants to understand and evaluate their progress in Situational Knowledge."],
];

const skStepColors = ["text-[#159497]", "text-[#147b4b]", "text-[#d99b16]", "text-[#dc493b]"];
const skFlowStages = ["Initial SKI", "ProblemEx", "Final SKI", "Measurable Development"];

const paragraphs = (items: string[], className = "") =>
  items.map((text) => (
    <p className={`text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8 ${className}`} key={text}>
      {text}
    </p>
  ));

const sectionHeading = "text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl";

function SectionContent() {
  return (
    <div className="mx-auto mt-5 w-full max-w-7xl space-y-14 text-left sm:mt-8 sm:space-y-20">
      <ScrollReveal>
        <section className="relative isolate py-8 sm:py-12 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-gradient-to-r before:from-[#eaf3ef] before:via-[#f3f7fa] before:to-[#eef5f7]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-0 -z-10 h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl sm:h-72 sm:w-72" />
          <div className="max-w-7xl">
            <h2 className="max-w-4xl bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
              The Solution Lies in Situational Knowledge
            </h2>
            <div className="mt-6 max-w-7xl space-y-5 sm:mt-8">
              {paragraphs([
                "We have already seen how academic knowledge, degrees, qualifications and even specialised technical skills, despite their importance, may not always be sufficient to help us navigate the complex realities of life. The real world doesn't always present us with a question paper, four options to choose from, or a teacher who tells us which chapter to revise. Sometimes, life simply throws a situation at us and expects us to figure it out!",
                "And when we are unable to do so, the consequences can be far more serious than a poor score in an examination.",
                "So, what is the solution? What is it that truly equips us to handle the situations, challenges, dilemmas and problems that life throws our way?",
              ])}
            </div>
            <p className="mt-7 border-l-4 border-[#159447] pl-5 text-xl font-extrabold leading-snug text-[#147b4b] sm:text-2xl">
              The answer lies in what The True Topper (TTT) terms as {"\u201cSituational Knowledge\u201d"}.
            </p>
            <div className="mt-6 space-y-5">
              {paragraphs([
                "Think about it. When you encounter an academic problem, you draw upon your academic knowledge. When you face a technical problem, you rely upon your technical skills. But when life confronts you with a complicated, unpredictable and often messy real-world situation, neither academic knowledge nor technical skills, in isolation, may be enough.",
                "Real-life problems require something more. They require Situational Knowledge.",
              ])}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <div className="max-w-4xl">
            <h2 className={sectionHeading}>What Is Situational Knowledge?</h2>
            <div className="mt-6 space-y-5">
              {paragraphs([
                "Situational Knowledge is not one isolated skill, nor is it a single subject that you can study, memorise and master while sitting in classrooms. It is the coming together of multiple streams of knowledge, abilities, skills, experiences and human faculties, which collectively enable you to understand a situation, make sense of what is happening, figure out what needs to be done and act effectively.",
                "It is the combined strength of everything you know, everything you have learnt, everything you can do, and everything you are capable of thinking, judging and applying when faced with a real-life situation.",
              ])}
            </div>
          </div>

          <h3 className="mt-8 text-lg font-extrabold text-[#147b4b] sm:text-xl">This includes, among other things:</h3>
          <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
            {situationalCapabilities.map(([title, description], index) => {
              const color = capabilityColors[index];
              return (
                <ScrollReveal className="w-full" delay={(index % 3) * 65} key={title}>
                  <article
                    className="group relative mx-auto aspect-square w-full max-w-[360px] rounded-full border-[7px] bg-white p-2 shadow-[0_16px_30px_rgba(16,43,80,0.20)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_42px_rgba(16,43,80,0.28)] sm:p-2.5"
                    style={{ borderColor: color.border }}
                  >
                    <div className="relative h-full w-full rounded-full border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 shadow-[0_5px_14px_rgba(16,43,80,0.16),inset_0_2px_8px_rgba(16,43,80,0.08)] transition duration-300 group-hover:scale-[1.015] group-hover:shadow-[0_9px_20px_rgba(16,43,80,0.24),inset_0_2px_9px_rgba(16,43,80,0.10)]">
                      <div className="absolute left-[3%] right-[1%] top-[-9%] z-10 flex items-center">
                        <span
                          aria-hidden="true"
                          className="relative z-20 -mr-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] bg-white text-base font-extrabold outline outline-4 outline-white shadow-[0_5px_12px_rgba(16,43,80,0.28)] sm:h-16 sm:w-16"
                          style={{ borderColor: color.border, color: color.text, boxShadow: `0 4px 8px rgba(16,43,80,0.22), inset 0 0 0 3px ${color.badge}` }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h4
                          className="flex min-h-14 flex-1 items-center border-2 py-2 pl-8 pr-6 text-left text-[13px] font-extrabold leading-tight sm:min-h-16 sm:pl-9 sm:pr-7 sm:text-[15px]"
                          style={{ backgroundColor: color.badge, borderColor: color.border, color: color.text, clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)" }}
                        >
                          {title}
                        </h4>
                      </div>
                      <p className="absolute inset-x-[11%] bottom-[14%] top-[28%] flex items-center justify-center text-center text-pretty text-[15px] leading-6 text-slate-700 sm:text-[17px] sm:leading-7">
                        {description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
          <p className="mt-6 text-pretty text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            These and many other relevant abilities may come into play, depending upon the situation you encounter.
          </p>
          <p className="mt-4 text-pretty text-lg font-bold leading-8 text-[#183b61] sm:text-xl">
            But the real magic isn&apos;t merely in possessing all these individual components.
          </p>
          <p className="mt-4 text-pretty text-lg font-bold leading-8 text-[#183b61] sm:text-xl">
            The real magic happens when all these individual components start operating in a synchronized manner.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative isolate border-y border-[#dce8e8] py-8 sm:py-12 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-gradient-to-r before:from-[#edf3fa] before:via-[#f3f7fa] before:to-[#eaf4ef]">
          <span aria-hidden="true" className="pointer-events-none absolute -right-8 top-0 -z-10 h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl sm:h-72 sm:w-72" />
          <h2 className={sectionHeading}>The Whole Is Greater Than the Sum of Its Parts</h2>
          <div className="mt-6 max-w-7xl space-y-5">
            {paragraphs([
              "Situational Knowledge is not a mathematical addition of individual skills and abilities. It is their harmonious, constructive and purposeful integration.",
              "Imagine that each of these components contributes a value of 1 to your ability to navigate a particular situation. If five such components are involved, their contribution isn't necessarily limited to a simple sum of 5.",
              "When these abilities complement, reinforce and work in harmony with one another, their combined effectiveness can be significantly greater than what each could achieve independently.",
            ])}
          </div>
          <p className="mt-8 max-w-7xl border-y border-[#c8ddd6] py-5 text-2xl font-extrabold leading-tight tracking-tight text-[#147b4b] sm:mt-10 sm:py-6 sm:text-3xl">
            The whole is greater than the sum of its parts.
          </p>
          <p className="mt-5 text-lg font-bold text-[#147b4b] sm:text-xl">This is the essence of Situational Knowledge.</p>
          <div className="mt-6 max-w-7xl space-y-5">
            {paragraphs([
              "It is not merely about having knowledge, possessing skills or accumulating experiences. It is about bringing the right combination of these abilities together, at the right time, in the right context, and putting them to effective use when a real-life situation demands it.",
              "You may possess excellent academic knowledge, exceptional technical skills, considerable experience and sound common sense. But if you cannot recognise what a situation demands, connect the relevant pieces, exercise judgement and apply them effectively, their individual value may not translate into the outcome you need.",
              "Situational Knowledge is what enables these individual strengths to come together and work for you when life puts you to the test.",
            ])}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="max-w-7xl">
          <h2 className={sectionHeading}>How Do We Know How Much Situational Knowledge a Person Possesses?</h2>
          <div className="mt-6 space-y-5">
            {paragraphs([
              "Understanding the concept is one thing. Knowing how developed it is within an individual is another.",
              "How do we assess whether a person is better equipped to navigate real-life situations? How do we identify areas of strength and weakness? And, most importantly, how do we track whether this ability is actually improving?",
              "We have concepts and parameters that help us understand and assess different aspects of human capability. Intelligence Quotient (IQ), for instance, is widely associated with the assessment of intellectual abilities. Emotional Quotient (EQ) is associated with emotional capabilities, while Spiritual Quotient (SQ) is often used in discussions around spirituality and deeper personal growth.",
              "On similar lines, The True Topper (TTT) has conceptualised a framework to understand, assess and develop Situational Knowledge, which we term as the \u201cSituational Knowledge Quotient\u201d (SKQ).",
            ])}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="grid gap-6 border-y border-[#d7e4e8] py-9 sm:py-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12">
          <div>
            <h2 className={sectionHeading}>Situational Knowledge Quotient (SKQ)</h2>
          </div>
          <div className="space-y-5">
            {paragraphs([
              "SKQ is the framework that The True Topper (TTT) has conceptualised to understand the extent to which an individual is equipped with Situational Knowledge and the ability to understand, evaluate, navigate and effectively respond to real-life situations.",
              "It gives us a way to think about, assess and systematically work towards developing an individual's capability to handle practical challenges encountered in real life.",
            ])}
            <p className="text-lg font-bold leading-8 text-[#147b4b] sm:text-xl">SKQ is central to the philosophy of ProblemEx.</p>
            <p className="text-pretty text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              ProblemEx is designed around the development of this capability. It is not simply about learning a collection of topics or acquiring a set of disconnected skills. It is about progressively strengthening the abilities that enable individuals to deal with the situations life presents them with.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <h2 className={sectionHeading}>From a Concept to a Measurable Journey: Situational Knowledge Index (SKI)</h2>
          <div className="mt-6 max-w-7xl space-y-5">
            {paragraphs([
              "We understand that a concept, however powerful, becomes far more meaningful when individuals can assess where they stand, understand their progress and see tangible evidence of their development.",
              "Because, let's be honest, simply being told that you are becoming better equipped to handle life is encouraging. But being able to assess that progress makes the journey considerably more meaningful!",
              "That is why we The True Topper (TTT) has also conceptualised the Situational Knowledge Index (SKI), our framework for measuring an individual's SKQ.",
              "Drawing a parallel with indices such as the Human Development Index (HDI), which provides a composite measure that helps assess and compare human development, SKI is intended to provide a measurable indicator of an individual's Situational Knowledge Quotient.",
            ])}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <h2 className={sectionHeading}>How Does SKI Work in ProblemEx?</h2>
          <div className="mt-6 divide-y divide-[#d7e4e8] border-y border-[#d7e4e8]">
            {skAssessmentSteps.map(([title, description], index) => (
              <ScrollReveal delay={(index % 2) * 70} key={title}>
                <article className="grid gap-3 py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-5 sm:py-7">
                  <p className="text-2xl font-extrabold tracking-tight text-[#159447] sm:text-3xl">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-xl font-bold text-[#102b50] sm:text-2xl">{title}</h3>
                    <p className="mt-2 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ol aria-label="Initial SKI to measurable development process" className="relative mt-10 grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
            <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible lg:hidden" preserveAspectRatio="none" viewBox="0 0 375 896">
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="ski-flow-one" x1="187.5" x2="187.5" y1="160" y2="208"><stop stopColor="#159497" /><stop offset="100%" stopColor="#147b4b" /></linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="ski-flow-two" x1="187.5" x2="187.5" y1="368" y2="416"><stop stopColor="#147b4b" /><stop offset="100%" stopColor="#d99b16" /></linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="ski-flow-three" x1="187.5" x2="187.5" y1="576" y2="624"><stop stopColor="#d99b16" /><stop offset="100%" stopColor="#dc493b" /></linearGradient>
              </defs>
              <path className="step-flow-path" d="M187.5 160 V208" fill="none" stroke="url(#ski-flow-one)" strokeDasharray="3 7" strokeLinecap="round" strokeWidth="2.5" />
              <path className="step-flow-path" d="M187.5 368 V416" fill="none" stroke="url(#ski-flow-two)" strokeDasharray="3 7" strokeLinecap="round" strokeWidth="2.5" />
              <path className="step-flow-path" d="M187.5 576 V624" fill="none" stroke="url(#ski-flow-three)" strokeDasharray="3 7" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
            <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 hidden h-36 w-full overflow-visible lg:block" preserveAspectRatio="none" viewBox="0 0 1000 144">
              <defs>
                <linearGradient id="ski-desktop-flow-gradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#159497" />
                  <stop offset="52%" stopColor="#d99b16" />
                  <stop offset="100%" stopColor="#dc493b" />
                </linearGradient>
              </defs>
              <path className="step-flow-path" d="M125 72 C190 72 188 18 250 18 S310 72 375 72 C440 72 438 126 500 126 S560 72 625 72 C690 72 688 18 750 18 S810 72 875 72" fill="none" stroke="url(#ski-desktop-flow-gradient)" strokeDasharray="3 7" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
            {skFlowStages.map((stage, index) => (
              <li className="relative z-10 h-56 min-w-0 lg:h-auto" key={stage}>
                <ScrollReveal delay={index * 90}>
                  <div className="group flex flex-col items-center px-2 text-center">
                    <div className={`step-ring relative flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(16,43,80,0.12)] ring-1 ring-[#102b50]/[0.06] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_38px_rgba(16,43,80,0.18)] lg:h-36 lg:w-36 ${skStepColors[index]}`}>
                      <svg aria-hidden="true" className="absolute inset-0 h-full w-full -rotate-90 overflow-visible" viewBox="0 0 144 144">
                        <circle className="step-ring-stroke" cx="72" cy="72" r="64" fill="none" stroke="currentColor" strokeDasharray="402" strokeDashoffset="402" strokeLinecap="round" strokeWidth="8" />
                      </svg>
                      <span className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#dce6ea] bg-gradient-to-br from-white to-[#f4f8fa] shadow-inner lg:h-28 lg:w-28">
                        <span className="max-w-24 text-balance text-[15px] font-extrabold leading-tight text-[#183b61]">{stage}</span>
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
          <div className="mt-6 max-w-7xl space-y-5">
            {paragraphs([
              "The difference between the initial and final SKI values is intended to reflect the progress made in Situational Knowledge through the ProblemEx programme.",
              "This transforms Situational Knowledge from an abstract concept into a structured developmental journey, with an assessment at the beginning, a programme designed to strengthen the capability, and an assessment at the end to evaluate the progress.",
            ])}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative isolate border-y border-[#dce8e8] py-8 sm:py-12 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-gradient-to-r before:from-[#eaf3ef] before:via-[#f3f7fa] before:to-[#eef5f7]">
          <span aria-hidden="true" className="pointer-events-none absolute -right-8 top-0 -z-10 h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl sm:h-72 sm:w-72" />
          <p className="mt-6 max-w-7xl text-pretty text-[17px] font-bold leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
            The ultimate objective of ProblemEx is not merely to teach you something. It is to make you better equipped to handle life.
          </p>
          <div className="mt-6 max-w-7xl space-y-5">
            {paragraphs([
              "The True Topper (TTT) wants your ProblemEx journey to reflect a meaningful improvement in your Situational Knowledge Quotient, demonstrated through an improvement in your Situational Knowledge Index.",
            ])}
          </div>
          <p className="mt-5 max-w-7xl text-pretty text-[17px] font-bold leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
            A higher SKI reflects an improvement in SKQ. An improved SKQ means you are progressively developing a stronger combination of knowledge, skills, judgement, awareness and practical abilities that can help you navigate real-life situations.
          </p>

          <p className="mt-9 text-xl font-extrabold leading-snug text-[#147b4b] sm:mt-12 sm:text-2xl">
            And what does that ultimately mean for you?
          </p>
          <div className="mt-4 max-w-7xl space-y-5">
            {paragraphs([
              "It means you are better equipped to face the practical challenges that real-life situations present. You are better positioned to analyse a situation, identify the challenges, assess possible solutions, make decisions, take appropriate action and work towards achieving a desired outcome.",
              "You may still encounter difficult situations. You may still make mistakes. Life will certainly not stop throwing problems at you just because you completed ProblemEx!",
            ])}
          </div>
          <p className="mt-5 max-w-7xl text-pretty text-[17px] font-bold leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
            But you need not face those problems with the same level of helplessness, uncertainty, confusion or inadequacy as before.
          </p>

          <div className="mt-7 max-w-7xl border-y border-[#c8ddd6] py-5 sm:mt-9 sm:py-6">
            <p className="text-pretty text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              You will have a better-developed toolkit of abilities. You will have a stronger foundation to{" "}
              <span className="inline-block rounded-lg bg-white/80 px-2 py-0.5 font-bold text-[#147b4b] shadow-sm">think</span>{" "}
              <span className="inline-block rounded-lg bg-white/80 px-2 py-0.5 font-bold text-[#102b50] shadow-sm">act</span>{" "}
              <span className="inline-block rounded-lg bg-white/80 px-2 py-0.5 font-bold text-[#147b4b] shadow-sm">adapt</span>{" "}
              <span className="inline-block rounded-lg bg-white/80 px-2 py-0.5 font-bold text-[#102b50] shadow-sm">decide</span>{" "}and{" "}
              <span className="inline-block rounded-lg bg-white/80 px-2 py-0.5 font-bold text-[#147b4b] shadow-sm">navigate.</span>
            </p>
          </div>

          <p className="mt-7 max-w-7xl border-l-4 border-[#159447] pl-5 text-pretty text-lg font-extrabold leading-8 text-[#102b50] sm:mt-9 sm:text-xl sm:leading-9">
            And that is the very purpose of ProblemEx: to help you become better equipped to handle the problems, challenges, situations and dilemmas that life throws your way.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}


export const metadata: Metadata = {
  title: "Situational Knowledge Philosophy",
  description: "Explore ProblemEx's Situational Knowledge philosophy, SKQ framework and SKI assessment for developing practical skills to handle real-life situations.",
  alternates: { canonical: "/core-philosophy-of-problemex" },
  openGraph: {
    siteName: "ProblemEx",
    title: "Situational Knowledge Philosophy | ProblemEx",
    description: "Explore ProblemEx's Situational Knowledge philosophy, SKQ framework and SKI assessment for developing practical skills to handle real-life situations.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Situational Knowledge Philosophy | ProblemEx",
    description: "Explore ProblemEx's Situational Knowledge philosophy, SKQ framework and SKI assessment for developing practical skills to handle real-life situations.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "ProblemEx Situational Knowledge Philosophy", item: siteUrl ? new URL("/core-philosophy-of-problemex", siteUrl).toString() : undefined },
  ],
};

const sections = [
  { slug: "problem", title: "What Is the Problem?" },
  { slug: "consequences-of-the-problem", title: "The Consequences of the Problem" },
  { slug: "solution", title: "The Solution: ProblemEx" },
  { slug: "what-problemex-is-not", title: "What ProblemEx Is Not" },
  { slug: "core-philosophy-of-problemex", title: "The Core Philosophy of ProblemEx" },
  { slug: "12-pillar-framework", title: "The 12-Pillar Framework" },
  { slug: "problemex-learning-approach-and-methodologies", title: "The ProblemEx Learning Approach and Methodologies" },
  { slug: "outcomes-and-benefits", title: "The Outcomes and Benefits" },
  { slug: "how-problemex-is-different", title: "How ProblemEx Is Different" },
  { slug: "structure-and-delivery-of-problemex", title: "The Structure and Delivery of ProblemEx" },
  { slug: "advantages-of-problemex-for-schools", title: "The Advantages of ProblemEx for Schools" },
  { slug: "get-in-touch", title: "Get in Touch" },
];
const problemIndex = 4;
function pathFor(slug: string) { return slug === "problem" ? "/problem" : "/" + slug; }

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-3 text-sm text-slate-500"><Link className="font-semibold text-[#147b4b] hover:underline" href="/">Home</Link><span className="mx-2">/</span><span aria-current="page">The Core Philosophy of ProblemEx</span></nav>
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">The Core Philosophy of ProblemEx</h1></header>
        {
          <SectionContent />
        }
        
      </section>
    </main>
  );
}
