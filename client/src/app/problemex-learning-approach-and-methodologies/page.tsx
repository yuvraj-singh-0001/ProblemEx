import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";





const learningApproachDescription =
  "Explore the ProblemEx learning approach and nine practical methodologies, including real-life case studies, discussions, decision-making, simulations, hands-on activities, field learning, collaboration and feedback.";

const learningApproachKeywords = [
  "ProblemEx learning approach",
  "ProblemEx learning methodologies",
  "practical learning for real-life situations",
  "experiential learning and field-based learning",
  "real-life case studies and simulations",
  "interactive discussions and brainstorming",
  "decision-making and problem-solving techniques",
  "hands-on activities and gamified learning",
  "collaborative learning and team activities",
  "feedback reflection and learning reinforcement",
  "Situational Knowledge learning",
];

const methodologies = [
  {
    title: "1. Learning Through Real-Life Stories, Examples, Case Studies and Situations",
    text: "We use real-life stories, incidents, examples, illustrations, case studies and hypothetical situations to bring learning to life. From everyday dilemmas and relatable experiences to unusual incidents, intriguing stories and complex real-world situations, we use these to introduce concepts, stimulate curiosity, encourage thinking and help participants understand how different situations unfold and how they can be navigated.",
  },
  {
    title: "2. Interactive Discussions, Debates and Brainstorming",
    text: "Learning at ProblemEx is not a one-way street where trainers speak and participants simply listen. We encourage participants to question, express opinions, debate ideas, challenge assumptions, share experiences, brainstorm solutions and explore different perspectives. Our sessions are designed to stimulate curiosity, encourage independent thinking and make participants active contributors to the learning process.",
  },
  {
    title: "3. Decision-Making and Problem-Solving Techniques",
    text: "Making decisions and solving problems are among the most important abilities required to navigate real life, yet we often make decisions without adequately evaluating the factors that matter, or spend far too much time deliberating over them. At ProblemEx, we explore practical techniques for making better decisions, identifying and analysing problems, breaking complex problems into manageable components, distinguishing symptoms from underlying issues, evaluating options, recognising biases, avoiding common decision-making traps and arriving at more effective solutions.",
  },
  {
    title: "4. Demonstrations and Guided Practice",
    text: "Sometimes, the best way to learn something is to see how it is done and then try it yourself. Wherever appropriate, our trainers demonstrate techniques, skills, approaches and processes, explain how they work, guide participants through their application and provide opportunities to practise, make mistakes, improve and develop confidence.",
  },
  {
    title: "5. Role Plays and Simulations",
    text: "What would you do if you were confronted with a difficult conversation, an unexpected crisis, a conflict, a negotiation or a challenging situation? Through role plays and simulations, participants step into different roles, experience situations first-hand, interact with others, make decisions and respond to challenges in a controlled learning environment, without having to face the actual consequences of those situations in real life.",
  },
  {
    title: "6. Hands-On Activities, Exercises, Challenges and Gamified Learning",
    text: "We incorporate hands-on activities, practical exercises, games, challenges, puzzles, tasks, competitions and gamified learning experiences wherever appropriate to make learning engaging, exciting and participatory. These activities may require participants to think creatively, solve problems, apply knowledge, collaborate, make decisions, work under constraints and accomplish specific objectives, while learning through the process itself.",
  },
  {
    title: "7. Experiential and Field-Based Learning",
    text: "Learning need not always happen within four walls. Wherever appropriate, we take learning beyond the conventional classroom through field visits, real-world exposure, observation, interactions, practical experiences and activities in actual environments. These experiences enable participants to encounter the realities of the world, observe how things work, interact with people and situations, and learn from experiences that cannot always be recreated within a classroom.",
  },
  {
    title: "8. Collaborative Learning, Group Projects and Team Activities",
    text: "Participants may work individually, in pairs or in groups to undertake assignments, projects, tasks, challenges, research, investigations and other activities. They learn to collaborate, communicate, share responsibilities, exchange ideas, deal with differing opinions, contribute towards collective objectives and learn from one another's strengths, experiences and perspectives.",
  },
  {
    title: "9. Feedback, Reflection and Learning Reinforcement",
    text: "Learning does not end when an activity, exercise or session is over. We encourage participants to reflect upon their experiences, decisions, responses, mistakes and outcomes. Through trainer feedback, peer feedback, discussions, reviews, reflection, takeaways and reinforcement activities, participants identify what they did well, what they could have done differently, what they learnt and how they can apply those lessons in future situations.",
  },
];

const methodologyAccents = ["#147b4b", "#159497", "#ed1c24", "#d99b16", "#147b4b", "#159497", "#ed1c24", "#d99b16", "#147b4b"];
const methodologyMapLabels = [
  "Learning Through Real-Life Stories",
  "Interactive Discussions",
  "Decision-Making",
  "Demonstrations",
  "Role Plays",
  "Hands-On Activities",
  "Experiential Learning",
  "Collaborative Learning",
  "Feedback & Reflection",
];

const methodologyIcons = [
  <><path d="M12 6.2C9.2 4.5 6.1 4.4 3.5 5.7v12.6c2.6-1.3 5.7-1.2 8.5.5 2.8-1.7 5.9-1.8 8.5-.5V5.7c-2.6-1.3-5.7-1.2-8.5.5Z" /><path d="M12 6.2v12.6M6.5 8.5c1.2-.3 2.3-.2 3.3.2M15.5 8.7c1-.4 2.1-.5 3.3-.2M6.5 11c1.2-.3 2.3-.2 3.3.2M15.5 11.2c1-.4 2.1-.5 3.3-.2" /></>,
  <><path d="M4 5.5h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9l-4.5 3v-3.2A3 3 0 0 1 2 12.5v-4a3 3 0 0 1 2-3Z" /><path d="M17 9h2a3 3 0 0 1 3 3v3a3 3 0 0 1-2 2.8V20l-3-2" /><path d="M6 9h7M6 12h5" /></>,
  <><path d="M8 17.5h8M9 20h6M8.4 14.5a7 7 0 1 1 7.2 0c-.8.5-1.3 1.2-1.5 2h-4.2c-.2-.8-.7-1.5-1.5-2Z" /><path d="M12 3v2M4.9 5.9l1.4 1.4M19.1 5.9l-1.4 1.4M4 12h2" /></>,
  <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 21h8M12 16v5M6.5 8h7M6.5 11h4" /><circle cx="17.5" cy="9" r="1.5" /><path d="M15.5 14c.5-1.2 1.2-1.8 2-1.8s1.5.6 2 1.8" /></>,
  <><path d="M3.5 6 11 4v8c0 4-2.1 6.5-4 6.5S3 16 3 12V6ZM13 5l8 2v6c0 3.5-2.2 6-4 6s-4-2.5-4-6V5Z" /><path d="m5.5 10 1.2.8M9 10.8l1.2-.8M6 14c1 .8 2 .8 3 0m5.5-2.8 1.2-.8m2.3.8 1.2.8m-4 2c1 .8 2 .8 3 0" /></>,
  <><path d="M6.5 9h11a4.5 4.5 0 0 1 4.3 5.8l-.6 2a2.5 2.5 0 0 1-4.1 1.1l-2-1.8H9l-2 1.8a2.5 2.5 0 0 1-4.1-1.1l-.6-2A4.5 4.5 0 0 1 6.5 9Z" /><path d="M7 12v4M5 14h4M16.5 12.5h.1M19 15h.1" /></>,
  <><path d="m3 19 5.5-8 3.2 4 3.3-6 6 10H3Z" /><path d="M15 5V2l5 1.5-5 1.5ZM15 5v4" /></>,
  <><circle cx="12" cy="7" r="3" /><circle cx="5" cy="9" r="2.2" /><circle cx="19" cy="9" r="2.2" /><path d="M6 20v-2a6 6 0 0 1 12 0v2H6ZM1.8 19v-1.2a3.2 3.2 0 0 1 3.1-3.2M22.2 19v-1.2a3.2 3.2 0 0 0-3.1-3.2" /></>,
  <><path d="M4 5.5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 3v-3H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" /><path d="m12 8 1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.2-2.4 1.2.5-2.6-1.9-1.8 2.6-.4L12 8Z" /></>,
];

function MethodologyIcon({ index }: { index: number }) {
  return <svg aria-hidden="true" className="h-9 w-9 stroke-current sm:h-10 sm:w-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">{methodologyIcons[index]}</svg>;
}

function MethodologyMapNode({ index, lower = false }: { index: number; lower?: boolean }) {
  const accent = methodologyAccents[index];

  return (
    <li className="group relative z-[1] grid list-none grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-x-3 sm:gap-x-4 xl:flex xl:h-full xl:flex-col xl:items-center xl:px-2 xl:text-center">
      <div aria-hidden="true" className="relative z-10 col-start-1 flex h-12 w-12 items-center justify-center rounded-full border-y-2 border-[#34495c] bg-transparent shadow-[0_7px_18px_rgba(16,43,80,0.17)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_14px_24px_rgba(16,43,80,0.25)] xl:h-[6.5rem] xl:w-[6.5rem]">
        {lower && <span className="absolute -top-1.5 left-1/2 z-20 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white shadow-sm xl:block" style={{ backgroundColor: accent }} />}
        <span className="absolute -left-1.5 top-1/2 z-20 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white shadow-sm xl:block" style={{ backgroundColor: accent }} />
        <span className="absolute -right-1.5 top-1/2 z-20 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white shadow-sm xl:block" style={{ backgroundColor: accent }} />
        <span className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_7px_15px_rgba(16,43,80,0.22)] xl:h-[5.1rem] xl:w-[5.1rem]" style={{ backgroundImage: `linear-gradient(145deg, color-mix(in srgb, ${accent} 78%, white), color-mix(in srgb, ${accent} 55%, #102b50))` }}>
          <MethodologyIcon index={index} />
        </span>
      </div>
      <h3 className="col-start-2 mt-0.5 inline-flex min-h-12 min-w-0 items-center rounded-xl px-4 py-2.5 text-left text-sm font-extrabold leading-snug text-white shadow-[0_8px_18px_rgba(16,43,80,0.16)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_24px_rgba(16,43,80,0.24)] sm:text-base xl:mt-4 xl:min-h-[3.75rem] xl:w-full xl:max-w-[17rem] xl:justify-center xl:rounded-full xl:px-3 xl:text-center" style={{ backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${accent} 80%, #102b50), color-mix(in srgb, ${accent} 55%, #102b50))` }}>
        {methodologyMapLabels[index]}
      </h3>
    </li>
  );
}

const sectionHeading =
  "text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl";

function SectionContent() {
  return (
    <div className="mx-auto mt-5 w-full max-w-7xl space-y-14 text-left sm:mt-8 sm:space-y-20">
      <ScrollReveal>
        <section className="relative isolate py-4 sm:py-6">
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 -z-10 h-56 w-56 rounded-full bg-[#159447]/[0.07] blur-3xl sm:h-72 sm:w-72" />
          <div className="relative w-full">
            <h2 className={sectionHeading}>Our Learning Approach</h2>
            <div className="mt-6 space-y-5 text-pretty text-[17px] leading-7 text-slate-700 sm:mt-8 sm:text-[19px] sm:leading-8">
              <p>At ProblemEx, we believe that learning how to handle real-life situations cannot be achieved simply by listening to lectures, reading textbooks or memorising information. It requires an individual to think, question, explore, experiment, make decisions, experience situations, learn from mistakes and, most importantly, apply knowledge in real life.</p>
              <p>That is why ProblemEx goes beyond conventional classroom teaching. Our learning approach is designed to make learning engaging, interactive, practical, relatable and participatory. Rather than merely telling participants what they should know or do, we endeavour to place them in situations, expose them to ideas, challenge their thinking, encourage them to explore possibilities and equip them with the abilities to figure things out for themselves.</p>
              <p className="relative mt-7 border-l-[3px] border-[#ed1c24] py-1 pl-5 text-lg font-extrabold leading-8 text-[#102b50] sm:mt-9 sm:pl-6 sm:text-xl sm:leading-9">Depending upon the situation, subject, learning objectives and participant profile, we employ a combination of the following learning methodologies:</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section aria-labelledby="learning-methodologies-heading">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-3 border-b border-[#d7e4e8] pb-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <h2 className={sectionHeading} id="learning-methodologies-heading">Our Learning Methodologies</h2>
            <span aria-hidden="true" className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ed1c24] via-[#d99b16] to-[#159447] sm:mb-2" />
          </div>
        </ScrollReveal>
        <ol className="learning-method-spine relative space-y-2 before:absolute before:bottom-5 before:left-[1.25rem] before:top-5 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-[#147b4b] before:via-[#159497] before:to-[#ed1c24] sm:space-y-3 sm:before:left-[1.5rem]">
          {methodologies.map((methodology, index) => (
            <li className="group relative grid list-none grid-cols-[3.25rem_minmax(0,1fr)] gap-x-3 border-b border-[#dce6e9] py-6 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-5 sm:py-8 lg:grid-cols-[4rem_minmax(16rem,0.8fr)_minmax(0,1.2fr)]" key={methodology.title}>
              <span aria-hidden="true" className="relative z-10 col-start-1 mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-white text-sm font-extrabold text-[#102b50] shadow-[0_5px_16px_rgba(16,43,80,0.16)] ring-2 ring-[color:var(--methodology-accent)]/30 transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_12px_22px_rgba(16,43,80,0.22)] sm:ml-1 sm:h-12 sm:w-12 sm:text-base" style={{ color: methodologyAccents[index], "--methodology-accent": methodologyAccents[index] } as React.CSSProperties}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <ScrollReveal className="col-start-2 min-w-0 lg:col-span-2 lg:grid lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] lg:gap-x-7" delay={(index % 3) * 55}>
                <h3 className="min-w-0 text-balance text-lg font-extrabold leading-snug text-[#102b50] transition-colors duration-300 group-hover:text-[#147b4b] sm:text-xl">{methodology.title}</h3>
                <p className="mt-3 min-w-0 text-pretty text-base leading-7 text-slate-600 lg:col-start-2 lg:row-start-1 lg:mt-0">{methodology.text}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Visual overview of the ProblemEx learning methodologies" className="relative left-1/2 my-2 w-[min(calc(100vw_-_2rem),110rem)] max-w-[110rem] -translate-x-1/2 py-4 sm:py-7 xl:py-0">
        <div className="relative">
          <svg aria-hidden="true" className="learning-method-connector pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible xl:block" preserveAspectRatio="none" viewBox="0 0 1000 480">
            <g fill="none" stroke="#d7e1e7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7">
              <path d="M100 52 H900 M224 52 C234 52 234 68 234 94 V244 C234 269 224 286 200 288 M408 52 C418 52 418 68 418 94 V244 C418 269 408 286 400 288 M592 52 C602 52 602 68 602 94 V244 C602 269 592 286 600 288 M900 52 H960 C984 52 992 68 992 92 V230 C992 264 974 284 940 284 H800 V288 M200 340 H800" />
            </g>
            <g fill="none" stroke="#26394d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" vectorEffect="non-scaling-stroke">
              <path d="M100 52 H900 M224 52 C234 52 234 68 234 94 V244 C234 269 224 286 200 288 M408 52 C418 52 418 68 418 94 V244 C418 269 408 286 400 288 M592 52 C602 52 602 68 602 94 V244 C602 269 592 286 600 288 M900 52 H960 C984 52 992 68 992 92 V230 C992 264 974 284 940 284 H800 V288 M200 340 H800" />
            </g>
          </svg>

          <ol className="relative grid list-none grid-cols-1 gap-x-5 gap-y-8 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-[#ed1c24] before:via-[#159497] before:to-[#159447] sm:grid-cols-2 sm:before:hidden xl:mx-auto xl:h-48 xl:w-[92%] xl:grid-cols-5 xl:gap-x-4 xl:before:hidden">
            {methodologies.slice(0, 5).map((methodology, index) => (
              <MethodologyMapNode index={index} key={methodology.title} />
            ))}
          </ol>

          <ol className="relative mx-auto mt-8 grid w-full list-none grid-cols-1 gap-x-5 gap-y-8 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-[#159497] before:via-[#ed1c24] before:to-[#147b4b] sm:grid-cols-2 sm:before:hidden xl:mt-24 xl:h-48 xl:w-4/5 xl:grid-cols-4 xl:gap-x-4 xl:before:hidden" start={6}>
            {methodologies.slice(5).map((methodology, index) => (
              <MethodologyMapNode index={index + 5} key={methodology.title} lower />
            ))}
          </ol>
        </div>
      </section>

      <ScrollReveal>
        <section className="relative isolate overflow-hidden rounded-[2rem] border-y border-[#dce8e8] bg-gradient-to-r from-[#eef5f7] via-white to-[#eef7f1] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <span aria-hidden="true" className="absolute -right-12 -top-14 -z-10 h-48 w-48 rounded-full bg-[#159497]/10 blur-3xl" />
          <h2 className={sectionHeading}>Learning That Goes Beyond the Classroom</h2>
          <div className="mt-6 max-w-6xl space-y-5 text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
            <p>At ProblemEx, we want learning to be more than an interesting session, a memorable activity or a collection of concepts. We want participants to think differently, develop practical abilities, gain confidence, learn from their experiences and progressively become better equipped to navigate real-life situations.</p>
            <p className="border-l-4 border-[#159447] py-1 pl-4 text-lg font-extrabold leading-snug text-[#147b4b] sm:pl-5 sm:text-xl">Because ultimately, the purpose of ProblemEx is not simply to teach you about life. It is to help you become better equipped to handle it.</p>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}


export const metadata: Metadata = {
  title: "Learning Approach and Methodologies",
  description: learningApproachDescription,
  alternates: { canonical: "/problemex-learning-approach-and-methodologies" },
  openGraph: {
    siteName: "ProblemEx",
    title: "Learning Approach and Methodologies | ProblemEx",
    description: learningApproachDescription,
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Approach and Methodologies | ProblemEx",
    description: learningApproachDescription,
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "ProblemEx Learning Approach and Methods", item: siteUrl ? new URL("/problemex-learning-approach-and-methodologies", siteUrl).toString() : undefined },
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
const problemIndex = 6;
function pathFor(slug: string) { return slug === "problem" ? "/problem" : "/" + slug; }

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-3 text-sm text-slate-500"><Link className="font-semibold text-[#147b4b] hover:underline" href="/">Home</Link><span className="mx-2">/</span><span aria-current="page">The ProblemEx Learning Approach and Methodologies</span></nav>
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">The ProblemEx Learning Approach and Methodologies</h1></header>
        {
          <SectionContent />
        }
        
      </section>
    </main>
  );
}
