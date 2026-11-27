import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";
import { ProblemCardScrollRestorer } from "@/app/components/problem-card-navigation/problem-card-navigation";


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

const whyProblemSlugs = [
  "flawed-objectives-and-priorities-of-education",
  "knowledge-is-tested-its-application-is-not",
  "real-life-case-studies-and-experiential-learning",
  "individual-circumstances-struggles-and-achievements",
  "real-world-demands-more-than-academic-and-technical-knowledge",
  "schools-and-educators-operate-within-systemic-constraints",
  "learning-priorities-and-a-changing-world",
  "no-structured-approach-to-real-life-preparation",
];

const whyProblemTitles = [
  "Flawed Objectives and Priorities of Education",
  "Knowledge Is Tested, Its Application Is Not",
  "Real-Life Case Studies and Experiential Learning Remain Undervalued",
  "Individual Circumstances, Struggles and Achievements Are Rarely Accounted For",
  "The Real World Demands More Than Academic and Technical Knowledge",
  "Schools and Educators Operate Within Systemic Constraints",
  "Learning Priorities Have Not Kept Pace with a Changing World",
  "No Structured Approach Exists to Systematically Prepare Individuals for Real-Life Situations",
];

const whyCardThemes = [
  "from-[#fff1e8] to-[#fffaf5] border-[#e9b48c] text-[#9a4f21]",
  "from-[#e8f3ff] to-[#f8fbff] border-[#9fc6e8] text-[#285b86]",
  "from-[#ecf8f1] to-[#f8fcf9] border-[#a9d6bd] text-[#276747]",
  "from-[#f5edff] to-[#fcf9ff] border-[#c7b0e6] text-[#68469a]",
  "from-[#fff5df] to-[#fffdf7] border-[#e4ca85] text-[#80621d]",
  "from-[#e8f7f7] to-[#f8fdfd] border-[#9bcfd0] text-[#286b6c]",
  "from-[#fff0f2] to-[#fffafb] border-[#e5b1bb] text-[#963e53]",
  "from-[#edf0ff] to-[#fafaff] border-[#b4bce8] text-[#4b5794]",
];

const problemCardThemes = [
  "border-[#f1c5be] border-t-[#ef4444] from-[#ffe7e2] via-[#fff0ed] to-[#ffd8d1] text-[#a83232]",
  "border-[#ead3a0] border-t-[#f59e0b] from-[#fff2cb] via-[#fff7e5] to-[#ffe6ac] text-[#8d5809]",
  "border-[#c9dca4] border-t-[#65a30d] from-[#e9f4cf] via-[#f3f8e4] to-[#d9ebae] text-[#496d13]",
  "border-[#a9ddd5] border-t-[#14b8a6] from-[#d5f2ed] via-[#e7f8f5] to-[#bce9e1] text-[#0f756d]",
  "border-[#b9d1f2] border-t-[#3b82f6] from-[#dceaff] via-[#edf4ff] to-[#c8dcff] text-[#285aa2]",
  "border-[#d6b8e8] border-t-[#a855f7] from-[#f0defa] via-[#f7edfc] to-[#e5c9f4] text-[#75409b]",
];

const whyProblemIntroduction = [
  "Why has this problem persisted for nearly eight decades since India's Independence? Why, despite successive developments in education, numerous reforms, technological advancements and changing times, do we continue to face these challenges?",
  "The answer isn't as simple as blaming schools, teachers, students, parents or the education system. The problem is far more complex. It has evolved through years of established practices, priorities, expectations, limitations and approaches to education that have collectively shaped the way we learn.",
  "We may have changed textbooks, introduced new technologies, revised syllabi and experimented with different teaching methods. Yet, somewhere along the way, the fundamental question of how education prepares us to handle life has not received the attention it deserves.",
  "Let's examine some of the key reasons behind this persistent gap.",
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
      <ProblemCardScrollRestorer />
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
                <article id={`problem-${problemPointSlugs[index]}`} className={`group scroll-mt-28 flex h-full min-h-56 min-w-0 flex-col overflow-hidden rounded-3xl border border-t-4 bg-gradient-to-br p-6 shadow-[0_12px_30px_rgba(16,43,80,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(16,43,80,0.16)] sm:p-7 ${problemCardThemes[index]}`}>
                  <h2 className="text-center text-balance text-lg font-extrabold leading-snug tracking-[-0.02em] sm:text-xl">
                    <Link aria-label={`Open ${point.title}`} className="mx-auto block w-full rounded-md text-center text-[#102b50] transition-colors duration-200 hover:text-[#147b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447]" href={`/problem/${problemPointSlugs[index]}`}>
                      {point.title}
                    </Link>
                  </h2>
                    <span aria-hidden="true" className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447] transition-all duration-300 group-hover:w-16" />
                    <Link aria-label={`Learn more about ${point.title}`} className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-[#0f6d3f]/20 bg-gradient-to-r from-[#117541] to-[#159447] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(21,148,71,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#102b50] hover:to-[#183b61] hover:shadow-[0_12px_24px_rgba(16,43,80,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447]" href={`/problem/${problemPointSlugs[index]}`}>
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
                </ScrollReveal>
              ))}
            </div>
            <section className="relative isolate mx-auto mt-20 w-full max-w-7xl py-12 text-left sm:mt-28 sm:py-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#eaf3ef]">
              <h2 className="mx-auto block w-fit bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text pb-[0.12em] text-center text-balance text-2xl font-extrabold leading-[1.3] tracking-tight text-transparent sm:text-4xl">
                 Why Does This Problem Exist?
              </h2>
              <div className="mt-8 space-y-5 text-pretty text-[17px] leading-7 text-slate-700 sm:mt-10 sm:space-y-6 sm:text-[19px] sm:leading-8">
                {whyProblemIntroduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
                {whyProblemSlugs.map((slug, index) => {
                  return (
                    <ScrollReveal className="h-full" key={slug} delay={(index % 4) * 55}>
                      <article id={`why-problem-${slug}`} className={`group scroll-mt-28 relative flex h-full min-h-64 flex-col overflow-hidden rounded-[1.75rem] border bg-gradient-to-br p-6 shadow-[0_12px_28px_rgba(16,43,80,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(16,43,80,0.14)] sm:p-7 ${whyCardThemes[index]}`}>
                        <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-7 select-none text-[7rem] font-black leading-none text-current opacity-[0.07] transition-transform duration-300 group-hover:scale-110">{String(index + 1).padStart(2, "0")}</span>
                        <p className="relative text-center text-xs font-extrabold uppercase tracking-[0.2em] opacity-75">Reason {String(index + 1).padStart(2, "0")}</p>
                        <h3 className="relative my-auto py-7 text-center text-balance text-xl font-extrabold leading-snug tracking-[-0.025em] text-[#102b50] sm:text-[1.35rem]">
                          <Link aria-label={`Read: ${whyProblemTitles[index]}`} className="block rounded-xl px-2 py-3 transition-colors hover:text-[#147b4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147b4b]" href={`/problem/${slug}`}>
                            {whyProblemTitles[index]}
                          </Link>
                        </h3>
                        <Link aria-label={`Explore reason: ${whyProblemTitles[index]}`} className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-[#102b50]/15 bg-white/75 px-5 py-2.5 text-sm font-bold text-[#102b50] shadow-sm transition-all duration-200 hover:bg-[#102b50] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147b4b]" href={`/problem/${slug}`}>
                          Explore this reason
                        </Link>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>
            </section>
          </>
        )
        }
      </section>
    </main>
  );
}
