import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";


const problemIntroduction = [
  "Today, we are witnessing a rather uncomfortable paradox. We are educating people for years, awarding degrees, conducting examinations, celebrating toppers and accumulating qualifications. Yet, when life throws a real problem at them, many find themselves struggling to figure out what to do!",
  "After all, life does not come with a textbook, a syllabus, four multiple-choice options or an answer key at the back. And unlike examinations, in real life, the consequences of getting an answer wrong can sometimes be far more serious.",
  "The problem isn't necessarily a lack of intelligence, education or knowledge. It is often the inability to translate what we know into what we need to do when confronted with real-life situations.",
  "Here are some of the most glaring manifestations of this problem:",
];

const problemPoints = [
  {
    title: "Academic Excellence, Yet Struggling in Life",
    paragraphs: [
      "We celebrate toppers, high scores, gold medals, degrees and academic achievements. But does academic excellence automatically translate into the ability to handle life?",
      "Meet Rahul. He has scored 95% in his examinations, solved complicated mathematical problems and memorised entire chapters. But when he has to negotiate a difficult situation, handle a conflict, make an important decision, manage an unexpected expense or deal with someone manipulating him, he finds himself clueless!",
      "And Rahul isn't an exception.",
      "Individuals who excel in academics, secure impressive qualifications and demonstrate exceptional intellectual abilities can still struggle when confronted with the complexities, challenges and realities of everyday life.",
      "Because scoring 95% in an examination and knowing what to do when life gives you a problem are not necessarily the same thing!",
      "Life is not an examination where you can memorise the answers beforehand. Sometimes, you are tested first, and the syllabus arrives later!",
    ],
  },
  {
    title: "The Struggle for Self-Reliance",
    paragraphs: [
      "One of the fundamental objectives of education is to empower individuals to stand on their own feet, become confident and live independently. Yet, how often do we find highly educated individuals who struggle to handle even relatively simple everyday situations without seeking help from parents, teachers, friends or someone else?",
      "Whether it is dealing with a bank, understanding a document, resolving a disagreement, managing basic responsibilities, handling an unexpected situation or simply figuring out what to do when something goes wrong, many individuals find themselves unnecessarily dependent on others.",
      "Somewhere between growing up and becoming an adult, we should ideally learn to do things ourselves. Unfortunately, for some, that lesson remains permanently outsourced!",
      "Education should not merely help us earn degrees. It should also help us become capable of managing our own lives, without being dependent on others.",
    ],
  },
  {
    title: "Disproportionate Impact of Everyday Problems",
    paragraphs: [
      "For some people, a disagreement becomes a relationship crisis. A minor financial setback becomes a major source of distress. A rejection, criticism, failure or unexpected inconvenience can leave them emotionally overwhelmed, unable to think clearly or figure out how to move forward.",
      "The problem is not that life is unfair, unpredictable or difficult. It is. The problem is that many individuals are inadequately equipped to deal with these realities.",
      "Everyday setbacks, disagreements and challenges can disturb peace of mind, strain relationships, disrupt lives and, in some cases, push individuals towards emotional distress, unhealthy coping mechanisms and addictions.",
      "We cannot eliminate every problem from life. But we can certainly learn to handle them better!",
    ],
  },
  {
    title: "Theoretical Education with Limited Practical Application",
    paragraphs: [
      "We learn about electricity, but do we know what to do when a live wire poses a danger? We learn mathematics, but can we confidently calculate the actual cost of a loan, understand a financial commitment or evaluate whether a deal is too good to be true? We learn about communication, but can we handle a difficult conversation without making matters worse?",
      "As 3 Idiots reminded us in its own way, education should be about understanding, not merely about chasing marks. But understanding a concept is only half the journey. Knowing how to use it when life puts you to the test is the other half.",
      "Our education often equips us with theoretical knowledge, concepts and information, but doesn't always adequately prepare us to apply that knowledge when real-life situations demand it.",
      "Knowing something and knowing what to do with it are two different things. And the gap between the two can sometimes be the difference between handling a situation effectively and making a costly mistake!",
    ],
  },
  {
    title: "Degrees, Yet Struggling to Earn a Livelihood",
    paragraphs: [
      "India produces millions of graduates every year. Yet, for many, the journey from a degree to a decent livelihood remains far from straightforward.",
      "A degree may open a door, but it does not necessarily equip an individual to walk through it successfully. Employers increasingly expect individuals to communicate effectively, think critically, solve problems, adapt to changing circumstances, take initiative, work with others and handle responsibilities.",
      "And these abilities cannot always be measured by the marks on a report card or the degrees hanging on a wall.",
      "One of the fundamental objectives of education is to equip individuals to earn a livelihood and become economically independent. Yet, when years of education fail to translate into the ability to secure opportunities, build a career and earn a decent living, we need to ask ourselves whether education is adequately preparing individuals for the realities of the world they are entering.",
      "A degree may tell the world what you studied. Your ability to handle real-world challenges often determines what you can actually do with it.",
    ],
  },
  {
    title: "Insufficient Emphasis on Vocational, Technical and Practical Skills",
    paragraphs: [
      "Not everyone needs to become a doctor, engineer, lawyer or corporate executive. Nor should success in life be measured exclusively by academic qualifications or conventional career paths.",
      "The world needs electricians, plumbers, technicians, designers, skilled tradespeople, entrepreneurs, craftspeople and individuals with a wide range of practical and vocational abilities. These skills can create livelihoods, open doors to entrepreneurship, meet real-world demands and provide economic independence.",
      "Yet, vocational, technical, trade-based and practical skills continue to receive insufficient emphasis, recognition and development in many educational settings.",
      "The result? Countless individuals may spend years pursuing conventional academic pathways while opportunities to acquire valuable practical skills, develop expertise, build livelihoods and explore alternative routes to success remain overlooked or underdeveloped.",
      "Not every successful person needs a degree. But almost every successful journey requires the ability to do something useful, solve something meaningful or create something of value.",
    ],
  },
];

const problemPointSlugs = [
  "academic-excellence-yet-struggling-in-life",
  "struggle-for-self-reliance",
  "disproportionate-impact-of-everyday-problems",
  "theoretical-education-limited-practical-application",
  "degrees-yet-struggling-to-earn-a-livelihood",
  "insufficient-vocational-technical-practical-skills",
];

const problemCardThemes = [
  "border-[#f1d3d0] border-t-[#ef4444] from-[#fff2ef] via-white to-[#fff8f5] text-[#c73532]",
  "border-[#f1dfc3] border-t-[#f59e0b] from-[#fff8e8] via-white to-[#fffaf2] text-[#b66a08]",
  "border-[#d7e8c6] border-t-[#65a30d] from-[#f5faeb] via-white to-[#f8fbf3] text-[#4d7c0f]",
  "border-[#c8e8e8] border-t-[#14b8a6] from-[#eafaf8] via-white to-[#f3fcfb] text-[#0f8177]",
  "border-[#cfe0f5] border-t-[#3b82f6] from-[#eef5ff] via-white to-[#f6f9ff] text-[#2863b4]",
  "border-[#e5d2ef] border-t-[#a855f7] from-[#faf2ff] via-white to-[#fcf8ff] text-[#8541b8]",
];

const whyProblemIntroduction = [
  "Why has this problem persisted for nearly eight decades since India's Independence? Why, despite successive developments in education, numerous reforms, technological advancements and changing times, do we continue to face these challenges?",
  "The answer isn't as simple as blaming schools, teachers, students, parents or the education system. The problem is far more complex. It has evolved through years of established practices, priorities, expectations, limitations and approaches to education that have collectively shaped the way we learn.",
  "We may have changed textbooks, introduced new technologies, revised syllabi and experimented with different teaching methods. Yet, somewhere along the way, the fundamental question of how education prepares us to handle life has not received the attention it deserves.",
  "Let's examine some of the key reasons behind this persistent gap.",
];

const whyProblemPoints = [
  {
    title: "Flawed Objectives and Priorities of Education",
    subsections: [
      {
        title: "Excessive Emphasis on Memorisation and Rote Learning",
        paragraphs: [
          "Much of our educational journey continues to revolve around memorising information, reproducing textbook content, recalling facts and preparing for examinations. Students are often expected to remember what they have been taught, reproduce it accurately and secure good marks.",
          "But how much of this actually prepares them to think independently, analyse situations, question assumptions, solve problems and apply knowledge when life demands it?",
          "When the ability to recall information becomes the primary measure of learning, other equally important abilities can get pushed into the background. Understanding, critical thinking, practical application, creativity, reasoning and independent judgement deserve far greater emphasis than simply memorising answers and reproducing them in an examination.",
          "After all, the objective of education should not be to produce individuals who can merely remember the right answers. It should also be to develop individuals who can think, understand and figure out the answers when they don't already know them.",
        ],
      },
      {
        title: "Learning What Matters Less, While Overlooking What Matters More",
        paragraphs: [
          "We spend years learning numerous concepts, facts, formulas, theories and information. But how often do we consciously learn the things that we genuinely need to navigate everyday life?",
          "How to recognise a scam? How to read the fine print before signing a document? How to handle a disagreement without turning it into a confrontation? How to make an informed financial decision? How to recognise manipulation? How to respond when someone violates our boundaries? How to deal with failure, rejection, uncertainty or pressure?",
          "Many of these abilities are either missing from our conventional learning experiences, inadequately covered or relegated to the periphery of the educational process.",
          "The problem isn't that academic subjects or theoretical knowledge are unimportant. They are absolutely essential. The problem arises when we invest disproportionate time and attention in certain forms of learning while overlooking, or failing to systematically develop, abilities that may prove equally or even more important in navigating the practical realities of life.",
        ],
      },
    ],
  },
  {
    title: "Knowledge Is Tested, Its Application Is Not",
    paragraphs: [
      "Imagine two students who have both learnt the same concept and scored equally well in an examination. Now place them in a real-life situation where they must use that knowledge to solve a problem. Will both necessarily perform equally well?",
      "Not necessarily!",
      "Knowing an answer and knowing how to use that knowledge in a real-life situation are two entirely different abilities.",
      "Yet, students are predominantly evaluated on what they know, how well they remember it and how accurately they reproduce it in examinations, rather than how effectively they can apply their knowledge to solve actual problems.",
      "An examination may test whether a student knows a formula. But does it necessarily test whether the student knows when to use it, how to use it, or whether the formula is even relevant to the situation at hand?",
      "The ability to recall knowledge is important. But the ability to recognise when knowledge is needed, identify what is relevant, apply it appropriately and arrive at an effective response is what makes knowledge practically useful.",
      "And that distinction is often overlooked.",
    ],
  },
  {
    title: "Real-Life Case Studies and Experiential Learning Remain Undervalued",
    paragraphs: [
      "There is a world of difference between learning about a situation and actually engaging with it.",
      "Reading about a conflict is not the same as navigating one. Learning the theory of decision-making is not the same as making a difficult decision. Listening to a lecture about communication is not the same as handling an uncomfortable conversation. Learning about financial concepts is not the same as evaluating an actual financial decision.",
      "Case studies, field-based learning, simulations, real-world challenges, practical assignments, role plays and experiential learning can provide students with opportunities to think, analyse, experiment, make decisions, explore alternatives and learn through doing.",
      "Yet, such approaches are often not given the importance, frequency or systematic integration they deserve.",
      "Students are rarely required to engage consistently with actual or realistic situations that demand practical thinking, analysis, decision-making, judgement and problem-solving.",
      "We often tell students what they should know. We need to give them far more opportunities to discover what they can do with what they know!",
    ],
  },
  {
    title: "Individual Circumstances, Struggles and Achievements Are Rarely Accounted For",
    paragraphs: [
      "Imagine two students who secure identical marks in an examination.",
      "One had access to excellent teachers, resources, supportive parents, a conducive learning environment and every possible advantage. The other struggled with difficult circumstances, limited resources, personal challenges and obstacles that made the learning journey considerably harder.",
      "Should their journeys be viewed as identical merely because their marks are identical?",
      "Academic scores alone cannot reflect the complete journey of a student. The circumstances in which a student learns, the adversities they overcome, the resources available to them, the initiative they demonstrate and the results they achieve despite obstacles deserve meaningful recognition.",
      "Yet, conventional evaluation systems largely focus on standardised performance, scores, grades and predefined academic benchmarks, often failing to adequately account for these factors.",
      "Education and evaluation should not merely measure what an individual has achieved. They should also encourage initiative, resilience, independent thinking, growth, effort, practical abilities and the capacity to overcome challenges.",
      "Because sometimes, the journey behind the marks tells a story that the marks themselves never reveal!",
    ],
  },
  {
    title: "The Real World Demands More Than Academic and Technical Knowledge",
    paragraphs: [
      "The real world is not a textbook. It does not operate chapter by chapter, subject by subject or according to a predefined syllabus.",
      "A single situation may require you to think critically, understand people, manage emotions, communicate effectively, exercise judgement, make decisions, recognise risks, apply knowledge, negotiate, adapt and take responsibility, sometimes all at the same time.",
      "Consider an individual dealing with a workplace conflict, a financial commitment, an unexpected crisis, a difficult relationship, a deceptive situation or a decision involving ethical dilemmas.",
      "There may be no formula to memorise, no teacher to ask, no multiple-choice options and no one to tell you which chapter contains the answer!",
      "Real life demands the ability to navigate complex situations, manage relationships, deal with conflicts, make difficult decisions, exercise sound judgement, confront ethical dilemmas, adapt to changing circumstances and respond effectively to unpredictable challenges.",
      "Yet, the development of these practical abilities, which are essential to successfully navigate the complexities of real life, remains inadequately emphasised in conventional learning and education.",
      "The world does not merely expect you to know things. It expects you to know what to do!",
    ],
  },
  {
    title: "Schools and Educators Operate Within Systemic Constraints",
    paragraphs: [
      "It would be unfair to assume that schools and educators do not recognise the importance of practical learning, or that they are unwilling to introduce innovative approaches.",
      "Many teachers and educational institutions genuinely want to provide students with a more meaningful, engaging and holistic learning experience. However, they often operate within a framework of prescribed syllabi, examination systems, academic schedules, institutional requirements, expectations of parents, administrative responsibilities and other constraints.",
      "When substantial portions of the academic calendar must be devoted to completing prescribed syllabi, preparing students for examinations and meeting institutional requirements, introducing experiential, situational and application-oriented learning on a consistent and structured basis can become difficult.",
      "The challenge is not necessarily a lack of intention or awareness. It is also a question of priorities, time, resources, institutional structures and the practical limitations within which schools and educators operate.",
      "Consequently, even when the need for practical and experiential learning is recognised, its systematic and sustained integration into the educational experience may remain limited.",
    ],
  },
  {
    title: "Learning Priorities Have Not Kept Pace with a Changing World",
    paragraphs: [
      "The world our children are growing up in is dramatically different from the world in which many of our existing educational practices evolved.",
      "Technology, artificial intelligence, digital platforms, changing workplaces, new professions, evolving social realities and unprecedented access to information have fundamentally transformed the way people learn, communicate, work, make decisions and solve problems.",
      "A person can access more information in a few seconds today than previous generations could access in hours, days or even weeks. But does access to information automatically make someone better equipped to understand it, evaluate it, distinguish fact from misinformation, recognise manipulation or use it wisely?",
      "In a world where artificial intelligence can generate answers, write content, analyse information and perform increasingly sophisticated tasks, the ability to think independently, exercise judgement, evaluate information, make decisions and apply knowledge becomes even more important.",
      "Yet, learning priorities and educational practices continue to devote disproportionate attention to conventional methods, without adequately adapting to the competencies and practical abilities increasingly demanded by the world today.",
      "The world is changing rapidly. Our approach to preparing individuals for that world must change as well.",
    ],
  },
  {
    title: "No Structured Approach Exists to Systematically Prepare Individuals for Real-Life Situations",
    paragraphs: [
      "Most individuals learn how to handle life's challenges through a combination of personal experiences, mistakes, family guidance, observations, circumstances, advice from others and trial and error.",
      "Some learn valuable lessons early in life. Others learn them after making mistakes, facing difficult situations or experiencing consequences that could perhaps have been avoided.",
      "Experience is certainly a powerful teacher. But it can also be an expensive one!",
      "A wrong financial decision, an unhealthy relationship, an avoidable conflict, a career mistake, a deceptive situation or a poor judgement call may sometimes teach us a lesson. But the price of learning that lesson can be considerable.",
      "Yet, there remains a fundamental gap in the form of a structured, systematic and comprehensive approach that deliberately prepares individuals to understand, navigate and effectively handle the diverse situations they are likely to encounter in life.",
      "We teach individuals many things they need to know. But where is the systematic preparation for the situations they will actually have to face?",
      "This is the gap that needs to be addressed.",
    ],
  },
];



export const metadata: Metadata = {
  title: "Education and Real-Life Readiness",
  description: "Explore why education can leave a gap in real-life readiness, including rote learning, limited practical application, changing priorities and experiential learning.",
  alternates: { canonical: "/problem" },
  openGraph: {
    siteName: "ProblemEx",
    title: "Education and Real-Life Readiness | ProblemEx",
    description: "Explore why education can leave a gap in real-life readiness, including rote learning, limited practical application, changing priorities and experiential learning.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education and Real-Life Readiness | ProblemEx",
    description: "Explore why education can leave a gap in real-life readiness, including rote learning, limited practical application, changing priorities and experiential learning.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "Education and Real-Life Readiness", item: siteUrl ? new URL("/problem", siteUrl).toString() : undefined },
  ],
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">What Is the Problem?</h1></header>
        {
          (
          <>
            <div className="mt-5 grid w-full min-w-0 items-center gap-5 sm:mt-7 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
              <div className="min-w-0 px-1 py-3 sm:px-2 sm:py-5 lg:pr-4">
                <div className="space-y-4 text-pretty text-[17px] leading-7 text-slate-700 sm:space-y-5 sm:text-[19px] sm:leading-8">
                  {problemIntroduction.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <figure className="relative mx-auto aspect-square w-full min-w-0 max-w-[min(62svh,44rem)] lg:justify-self-end">
                <Image
                  alt="Six-part infographic showing the education and real-life challenges described in this section"
                  className="object-contain mix-blend-multiply"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  src="/The%20Problem_%20Six-Part%20Infographic%20Wheel.png"
                />
              </figure>
            </div>
            <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 text-left sm:mt-20 sm:grid-cols-2 sm:gap-5 2xl:grid-cols-3 2xl:gap-6">
              {problemPoints.map((point, index) => (
                <ScrollReveal className="h-full" delay={(index % 3) * 70} key={point.title}>
                <article id={`problem-${problemPointSlugs[index]}`} className={`group scroll-mt-8 flex h-full min-h-56 min-w-0 flex-col overflow-hidden rounded-3xl border border-t-4 bg-gradient-to-br p-6 shadow-[0_12px_30px_rgba(16,43,80,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(16,43,80,0.16)] sm:p-7 ${problemCardThemes[index]}`}>
                  <h2 className="text-balance text-lg font-extrabold leading-snug tracking-[-0.02em] sm:text-xl">
                    <Link aria-label={`Open ${point.title}`} className="group/title inline-flex max-w-full items-start gap-3 rounded-md text-left text-[#102b50] transition-colors duration-200 hover:text-[#147b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447]" href={`/problem/${problemPointSlugs[index]}`}>
                      <span>{point.title}</span>
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/75 text-sm font-bold text-[#147b4b] shadow-[0_3px_10px_rgba(16,43,80,0.1)] transition duration-200 group-hover/title:translate-x-1 group-hover/title:bg-[#147b4b] group-hover/title:text-white">&rarr;</span>
                    </Link>
                  </h2>
                  <span aria-hidden="true" className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447] transition-all duration-300 group-hover:w-16" />
                  <Link aria-label={`Learn more about ${point.title}`} className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-[#0f6d3f]/20 bg-gradient-to-r from-[#117541] to-[#159447] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(21,148,71,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#102b50] hover:to-[#183b61] hover:shadow-[0_12px_24px_rgba(16,43,80,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447]" href={`/problem/${problemPointSlugs[index]}`}>
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
                </ScrollReveal>
              ))}
            </div>
            <section className="relative isolate mx-auto mt-20 w-full max-w-7xl py-12 text-left sm:mt-28 sm:py-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#eaf3ef]">
              <h2 className="mx-auto block w-fit bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-center text-balance text-2xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                 Why Does This Problem Exist?
              </h2>
              <div className="mt-8 space-y-5 text-pretty text-[17px] leading-7 text-slate-700 sm:mt-10 sm:space-y-6 sm:text-[19px] sm:leading-8">
                {whyProblemIntroduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 sm:mt-12">
                {whyProblemPoints.map((point, index) => (
                  <ScrollReveal className="border-t border-[#d4e0e8] first:border-t-0" key={point.title} delay={(index % 4) * 55}>
                  <article className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6 sm:py-9">
                    <p className="pt-1 text-sm font-extrabold tracking-[0.08em] text-[#159447] sm:text-base">
                      {index + 1}.
                    </p>
                    <div>
                      <h3 className="text-balance text-xl font-bold leading-snug text-[#102b50] sm:text-2xl">
                        {point.title}
                      </h3>
                      {Array.isArray(point.paragraphs) && (
                        <div className="mt-3 space-y-4 text-pretty text-base leading-7 text-slate-600 sm:space-y-5 sm:text-lg sm:leading-8">
                          {point.paragraphs.map((paragraph, paragraphIndex) => (
                            <p className={paragraphIndex === (point.paragraphs?.length ?? 0) - 1 ? "font-semibold text-[#183b61]" : ""} key={paragraph}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                      {Array.isArray(point.subsections) && (
                        <div className="mt-5 space-y-6 sm:mt-7 sm:space-y-8">
                          {point.subsections.map((subsection, subsectionIndex) => (
                            <section key={subsection.title}>
                              <h4 className="text-balance text-lg font-semibold leading-snug text-[#147b4b] sm:text-xl">
                                {String.fromCharCode(97 + subsectionIndex)}. {subsection.title}
                              </h4>
                              <div className="mt-2 space-y-3 text-pretty text-base leading-7 text-slate-600 sm:mt-3 sm:space-y-4 sm:text-lg sm:leading-8">
                                {subsection.paragraphs.map((paragraph, paragraphIndex) => (
                                  <p className={paragraphIndex === subsection.paragraphs.length - 1 ? "font-semibold text-[#183b61]" : ""} key={paragraph}>
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </section>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </>
        )
        }
      </section>
    </main>
  );
}
