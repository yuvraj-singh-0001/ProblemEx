import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { problemSections } from "@/app/problem-sections";
import { problemSectionSlugs } from "@/app/problem-section-slugs";
import Navbar from "@/app/components/navbar";
import ScrollReveal from "@/app/components/scroll-reveal";
import CorePhilosophyContent from "@/app/problem/core-philosophy-content";
import TwelvePillarFrameworkContent, {
  twelvePillarDescription,
  twelvePillarKeywords,
} from "@/app/problem/twelve-pillar-framework-content";

type ProblemPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return problemSectionSlugs.map((slug) => ({ slug }));
}

function getProblemIndex(slug: string) {
  const slugIndex = problemSectionSlugs.indexOf(slug);

  if (slugIndex !== -1) {
    return slugIndex;
  }

  if (/^\d+$/.test(slug)) {
    const numericIndex = Number(slug) - 1;
    return numericIndex >= 0 && numericIndex < problemSections.length
      ? numericIndex
      : -1;
  }

  return -1;
}

function getProblemTitle(slug: string) {
  const index = getProblemIndex(slug);
  return problemSections[index] ?? `Problem ${slug}`;
}

const problemDescription =
  "Today, we are witnessing some striking paradoxes in the world of education, academic achievement and its actual application in real life. Despite unprecedented access to education and the pursuit of increasingly higher qualifications, many individuals find themselves inadequately equipped to deal with life's challenges. Some of these glaring paradoxes are:";

const problemPoints = [
  {
    title: "Academic Excellence, Yet Struggling in Life",
    text: "Individuals who excel in academics, secure impressive qualifications and demonstrate exceptional intellectual abilities, yet struggle when confronted with the complexities, challenges and realities of everyday life.",
  },
  {
    title: "The Declining Spirit of Self-Reliance (आत्मनिर्भरता)",
    text: "One of the fundamental objectives of education is to empower individuals to stand on their own feet, become confident and live independently. Yet, despite years of education, many individuals find themselves dependent on parents, teachers or others even to deal with everyday problems and situations that they ought to be capable of handling themselves.",
  },
  {
    title: "Disproportionate Impact of Everyday Problems",
    text: "Problems that may appear insignificant to others can turn into overwhelming crises for individuals. Everyday setbacks, disagreements and challenges can trigger emotional breakdowns, disturb peace of mind, damage relationships, disrupt lives and, at times, push individuals towards unhealthy coping mechanisms and addictions.",
  },
  {
    title: "Theoretical Education With Limited Practical Application",
    text: "Our education system is often criticised for being predominantly theoretical and book-oriented, imparting knowledge but failing to adequately equip individuals with the ability to put that knowledge into practice and apply it effectively in real-world situations.",
  },
  {
    title: "Degrees, Yet Struggling to Secure Meaningful Employment",
    text: "One of the most obvious objectives of modern education is to equip individuals to earn a livelihood and become economically independent. Yet, a troubling reality is that many individuals pursue higher degrees and academic qualifications, only to struggle to secure employment commensurate with their education, qualifications and expectations. What good is years of education and an impressive degree if they fail to translate into the ability to earn a decent livelihood?",
  },
  {
    title: "Insufficient Emphasis on Vocational, Technical and Practical Skills",
    text: "Vocational, technical, trade-based and practical skills continue to receive inadequate emphasis, recognition and development. As a result, countless opportunities for acquiring employable skills, building livelihoods, pursuing entrepreneurship and achieving economic independence remain inadequately explored, developed or accessible.",
  },
];

const problemCardThemes = [
  "border-[#f1d3d0] border-t-[#ef4444] from-[#fff2ef] via-white to-[#fff8f5] text-[#c73532]",
  "border-[#f1dfc3] border-t-[#f59e0b] from-[#fff8e8] via-white to-[#fffaf2] text-[#b66a08]",
  "border-[#d7e8c6] border-t-[#65a30d] from-[#f5faeb] via-white to-[#f8fbf3] text-[#4d7c0f]",
  "border-[#c8e8e8] border-t-[#14b8a6] from-[#eafaf8] via-white to-[#f3fcfb] text-[#0f8177]",
  "border-[#cfe0f5] border-t-[#3b82f6] from-[#eef5ff] via-white to-[#f6f9ff] text-[#2863b4]",
  "border-[#e5d2ef] border-t-[#a855f7] from-[#faf2ff] via-white to-[#fcf8ff] text-[#8541b8]",
];

const whyProblemDescription =
  "Why has this problem persisted for nearly eight decades since India's Independence? Why, despite successive developments in education, numerous reforms and changing times, do we continue to face these challenges? The reality is that this problem cannot be attributed to a single cause or even a handful of factors. It is rooted in multiple, interconnected factors, each contributing in its own way to the persistence of this problem. Some of the key reasons are:";

const whyProblemPoints = [
  {
    title: "Flawed Objectives and Priorities of Education",
    subsections: [
      {
        title: "Excessive Emphasis on Memorisation and Rote Learning",
        text: "Education continues to place disproportionate emphasis on memorising information, reproducing textbook content and recalling facts, despite the growing importance of critical thinking, comprehension, practical application, problem-solving and the ability to effectively use information in real-life situations.",
      },
      {
        title: "Learning What Matters Less, While Overlooking What Matters More",
        text: "Disproportionate importance is often assigned to memorising concepts, facts and information that have little relevance to the practical realities and everyday challenges of life. Meanwhile, knowledge, skills and competencies that individuals genuinely need to navigate life, make informed decisions and handle real-world situations are often missing from textbooks, inadequately covered or relegated to the periphery of the learning process.",
      },
    ],
  },
  {
    title: "Knowledge Is Tested, Its Application Is Not",
    text: "Knowing an answer and knowing how to use that knowledge in a real-life situation are two entirely different abilities. Yet, students are predominantly evaluated on what they know, rather than how effectively they can apply their knowledge to solve actual problems.",
  },
  {
    title: "Real-Life Case Studies and Experiential Learning Remain Undervalued",
    text: "Case studies, field-based learning, simulations, real-world challenges, practical assignments and experiential learning are not given the importance and systematic integration they deserve. Students are rarely required to engage with actual situations that demand practical thinking, analysis, decision-making and problem-solving.",
  },
  {
    title: "Individual Circumstances, Struggles and Achievements Are Rarely Accounted For",
    text: "Academic scores alone cannot reflect the complete journey of a student. The circumstances in which a student learns, the adversities they overcome, the resources available to them, the initiative they demonstrate and the results they achieve despite obstacles deserve meaningful recognition. Yet, conventional evaluation systems largely fail to account for these factors.",
  },
  {
    title: "The Real World Demands More Than Academic and Technical Knowledge",
    text: "Real life is not merely about possessing academic knowledge or technical expertise. It demands the ability to navigate complex situations, manage relationships, deal with conflicts, make difficult decisions, exercise sound judgement, confront ethical dilemmas, adapt to changing circumstances and respond effectively to unpredictable challenges. Yet, the development of these practical abilities, which are essential to successfully navigate the complexities of real life, remains inadequately emphasised in conventional learning and education.",
  },
  {
    title: "Schools and Educators Operate Within Systemic Constraints",
    text: "Schools and educators, even when willing to introduce innovative and practical learning approaches, are often bound by prescribed syllabi, examination systems, schedules, institutional requirements and expectations. These constraints make it difficult to consistently prioritise experiential, situational and application-oriented learning.",
  },
  {
    title: "Learning Priorities Have Not Kept Pace with a Changing World",
    text: "Technology, artificial intelligence, changing workplaces and evolving social realities have fundamentally transformed the way people access information, work, communicate and solve problems. Yet, learning priorities continue to devote disproportionate attention to conventional methods, without adequately adapting to the competencies and practical abilities increasingly demanded by the world today.",
  },
  {
    title: "No Structured Approach Exists to Systematically Prepare Individuals for Real-Life Situations",
    text: "Individuals are largely left to develop their ability to handle life's challenges through personal experiences, mistakes, family guidance, circumstances and trial and error. There remains a fundamental gap in the form of a structured, systematic and comprehensive approach that deliberately prepares individuals to understand, navigate and effectively handle the diverse situations they are likely to encounter in life.",
  },
];

const consequencesIntroduction = [
  "Do not underestimate the consequences of this problem. What may appear to be a gap in knowledge or an inability to handle certain real-life situations can gradually become a destructive force, affecting virtually every aspect of your life.",
  "Like termites silently eating away at the foundations of a building, the inability to navigate real-life situations can gradually erode the very foundations on which a fulfilling, successful and stable life is built. It can begin by affecting your professional growth, but its impact may not stop there. It can spill over into your personal life, physical and mental health, relationships, financial stability, social reputation, self-confidence and peace of mind.",
  "You may find yourself struggling with situations you never imagined would become so difficult, making decisions you later regret, losing opportunities you could have seized, damaging relationships you could have saved, or becoming trapped in circumstances you could have otherwise navigated successfully. Over time, the struggle may not just be with the world around you, but with yourself, your own choices, your frustrations, your insecurities and the inability to find a way forward.",
];

const consequencesLead =
  "The consequences can be far more serious, far more widespread and far more devastating than we often realise. And some of them are:";

const consequencesPoints = [
  {
    title: "A Generation Struggling to Stand on Its Own Feet",
    text: "Without the ability to independently assess situations, make decisions, solve problems and take responsibility, individuals can become excessively dependent on others even for challenges they ought to be capable of handling themselves. This can undermine confidence, independence, initiative and the ability to take charge of one's own life.",
  },
  {
    title: "Poor Decisions with Lasting Consequences",
    text: "Life constantly demands decisions, many of which carry consequences that cannot easily be reversed. Without sound judgement, critical thinking and the ability to assess risks, consequences and alternatives, individuals can make choices that jeopardise their education, careers, finances, relationships, reputation and future.",
  },
  {
    title: "Everyday Challenges Turning Into Overwhelming Crises",
    text: "When individuals lack the ability to manage difficult situations, setbacks, disappointments, conflicts and uncertainty, even relatively manageable challenges can become disproportionately overwhelming. The inability to cope, adapt and respond constructively can gradually erode confidence, emotional stability and peace of mind.",
  },
  {
    title: "Strained Relationships and the Breakdown of Human Connections",
    text: "Relationships require far more than affection or good intentions. They demand communication, empathy, patience, emotional maturity, boundaries, conflict resolution and mutual understanding. When these abilities are lacking, misunderstandings escalate, conflicts remain unresolved, trust erodes and relationships with parents, partners, friends, colleagues and others can suffer deeply.",
  },
  {
    title: "Vulnerability to Manipulation, Exploitation and Deception",
    text: "Individuals who lack critical thinking, situational awareness, judgement and the ability to independently evaluate information can become easier targets of manipulation, fraud, exploitation, misinformation, peer pressure and deceptive influences. In a world increasingly shaped by digital platforms, AI, information overload and sophisticated manipulation, these vulnerabilities can carry serious consequences.",
  },
  {
    title: "Reduced Employability, Career Growth and Economic Independence",
    text: "Academic qualifications alone cannot guarantee professional success. Individuals who struggle to communicate, solve practical problems, adapt, collaborate, exercise judgement, take initiative and respond to workplace challenges can find themselves disadvantaged in an increasingly competitive professional environment. This can affect their employability, career progression, earning potential and ability to achieve economic independence.",
  },
  {
    title: "Missed Opportunities, Wasted Potential and Unfulfilled Aspirations",
    text: "A lack of practical abilities, confidence, initiative and problem-solving capacity can prevent individuals from recognising, pursuing or capitalising on opportunities. Ideas may never translate into action, ambitions may remain unrealised, and talent and potential may remain underdeveloped, not because individuals lack intelligence or ability, but because they lack the competencies to navigate the path ahead.",
  },
  {
    title: "Compromised Ethical Judgement and Responsible Behaviour",
    text: "When individuals are inadequately equipped to recognise, assess and navigate ethical dilemmas, they may struggle to distinguish between what is convenient and what is right, between immediate gratification and long-term responsibility, or between personal interest and the larger good. This can have consequences for personal conduct, professional integrity, relationships, trust and social responsibility.",
  },
  {
    title: "A Society Less Equipped to Handle Its Collective Challenges",
    text: "The cumulative impact of these shortcomings extends beyond individual lives. A society comprising individuals who struggle with critical thinking, responsibility, practical problem-solving, constructive dialogue, independent judgement and the ability to navigate differences becomes less equipped to address collective challenges, resolve conflicts, make informed choices and contribute meaningfully to social progress.",
  },
];

const notProblemExIntroduction = [
  "We know the name might make you think of a few things. And you wouldn't be entirely wrong!",
  "ProblemEx may sound like a programme that belongs to one of several familiar categories of learning, training or development. But it isn't quite any of them. And yet, you'll find elements of many of them woven into what ProblemEx actually does.",
];

const notProblemExLead = "Let's clear up a few misconceptions.";

const notProblemExPoints = [
  {
    title: "We Are Not an Academic Teaching Programme",
    not: "ProblemEx is not designed to teach conventional academic subjects, prepare students for examinations or replace classroom education.",
    butLead: "But academic knowledge can certainly be a part of ProblemEx.",
    butText: "When real-life situations demand the understanding or application of academic concepts, relevant knowledge becomes an integral part of the learning experience. Our focus, however, is not merely on imparting knowledge, but on helping individuals understand when, why and how that knowledge can be put to practical use.",
  },
  {
    title: "We Are Not a Personality Development Programme",
    not: "ProblemEx is not a conventional personality development course centred around appearance, mannerisms, confidence-building exercises, etiquette or communication techniques in isolation.",
    butLead: "But personality development is an integral outcome of ProblemEx.",
    butText: "As individuals learn to handle situations, overcome challenges, communicate effectively, make decisions, manage conflicts, take responsibility and deal with uncertainty, they naturally develop many of the qualities that contribute to a stronger, more mature and well-rounded personality.",
  },
  {
    title: "We Are Not a Career Guidance or Career Counselling Institution",
    not: "ProblemEx is not a conventional career counselling programme that primarily identifies career options, administers aptitude tests or recommends professions.",
    butLead: "But ProblemEx can help individuals make better career choices.",
    butText: "By developing the ability to assess situations, understand their strengths, evaluate opportunities, analyse practical realities, make informed decisions and navigate challenges, individuals become better equipped to choose, pursue and manage their careers.",
  },
  {
    title: "We Are Not a Relationship Counselling Programme",
    not: "ProblemEx is not a specialised relationship counselling service designed to address specific marital, familial, interpersonal or psychological problems.",
    butLead: "But relationships are an important part of ProblemEx.",
    butText: "Understanding people, communicating effectively, resolving disagreements, managing expectations, recognising boundaries, dealing with misunderstandings and navigating interpersonal situations are practical abilities that form an important part of our learning approach.",
  },
  {
    title: "We Are Not a Mental Health Treatment or Therapy Programme",
    not: "ProblemEx is not a clinical, psychological or therapeutic programme designed to diagnose or treat mental health conditions.",
    butLead: "But mental well-being and emotional resilience matter in ProblemEx.",
    butText: "Learning to navigate stressful situations, deal with setbacks, manage difficult circumstances, respond constructively to challenges and make better decisions can contribute to one's emotional resilience and overall well-being. These learning outcomes, however, do not replace professional mental health care where it is needed.",
  },
  {
    title: "We Are Not a Conventional Life Skills Course",
    not: "ProblemEx is not merely a collection of isolated lessons on communication, time management, decision-making, leadership, financial awareness or other life skills.",
    butLead: "But life skills are very much a part of ProblemEx.",
    butText: "Rather than treating these skills as disconnected topics, ProblemEx brings them into the context of real-life situations, where individuals must understand, combine and apply multiple abilities to navigate challenges and find solutions.",
  },
  {
    title: "We Are Not a Vocational or Technical Training Institute",
    not: "ProblemEx is not designed to impart specialised trade skills, technical qualifications or occupational training for specific professions.",
    butLead: "But practical, vocational and livelihood-related situations can form part of ProblemEx.",
    butText: "Understanding workplace situations, dealing with professional challenges, making practical decisions, navigating responsibilities, evaluating opportunities and handling real-world problems can help individuals become better equipped for employment, entrepreneurship and economic independence.",
  },
  {
    title: "We Are Not a Conventional Coaching Programme",
    not: "ProblemEx is not simply a motivational, inspirational or coaching programme that relies on advice, encouragement, lectures or goal-setting exercises.",
    butLead: "But motivation, guidance, reflection and action can certainly be part of ProblemEx.",
    butText: "Our approach can inspire individuals, encourage reflection, challenge assumptions, guide thinking and help them translate insights into practical responses. The emphasis, however, remains on developing the ability to handle real-life situations rather than merely feeling motivated to do so.",
  },
];

const notProblemExConclusion = [
  "And this is precisely what makes ProblemEx different. It isn't confined to a single discipline, category, course or conventional label. It draws upon relevant knowledge, skills, abilities and insights from multiple domains, bringing them together in the context of real-life situations.",
  "We are not these programmes in their conventional, standalone form. But many of the valuable things they seek to accomplish are an integral part of ProblemEx.",
  "Now that we've clarified what ProblemEx is not, let's understand what ProblemEx actually is, what makes it different, and how it works.",
];

export async function generateMetadata({
  params,
}: ProblemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const problemIndex = getProblemIndex(slug);

  if (problemIndex === -1) {
    return { title: "Problem not found" };
  }

  const description =
    problemIndex === 0
      ? "Today, we are witnessing some striking paradoxes in the world of education, academic achievement and its actual application in real life."
      : problemIndex === 1
        ? "Explore how difficulty navigating real-life situations can affect independence, decisions, relationships, employability, financial stability and peace of mind."
        : problemIndex === 2
          ? "ProblemEx by TTT introduces situational knowledge and practical skills for navigating real-life problems and challenges."
          : problemIndex === 3
            ? "Learn what ProblemEx is not, and how it differs from academic teaching, personality development, career guidance, counselling, therapy and conventional life-skills courses."
            : `${getProblemTitle(slug)} — a ProblemEx learning section.`;
  const philosophyDescription =
    "Explore the core philosophy of ProblemEx: Situational Knowledge, the Situational Knowledge Quotient (SKQ), and the Situational Knowledge Index (SKI) for developing and measuring real-life abilities.";
  const pageDescription =
    problemIndex === 4
      ? philosophyDescription
      : problemIndex === 5
        ? twelvePillarDescription
        : description;
  const keywords =
    problemIndex === 0
      ? [
          "ProblemEx",
          "education and real-life application",
          "academic achievement",
          "self-reliance",
          "practical skills",
          "vocational and technical skills",
          "meaningful employment",
          "why education problems persist",
          "rote learning",
          "experiential learning",
          "real-life application of knowledge",
          "practical education",
        ]
      : problemIndex === 1
        ? [
            "ProblemEx",
            "consequences of poor problem-solving skills",
            "real-life problem-solving",
            "decision-making skills",
            "relationship challenges",
            "employability and career growth",
            "economic independence",
            "critical thinking",
            "life skills",
          ]
        : problemIndex === 2
          ? [
              "ProblemEx by TTT",
              "situational knowledge",
              "practical skills for real-life problems",
              "real-life problem-solving",
              "practical life skills",
              "decision-making skills",
              "real-life challenges",
            ]
          : problemIndex === 3
            ? [
                "ProblemEx by TTT",
                "what ProblemEx is not",
                "practical skills for real-life situations",
                "real-life problem-solving",
                "life skills education",
                "career guidance and life skills",
                "vocational and technical training",
                "decision-making and communication skills",
              ]
            : problemIndex === 4
              ? [
                  "ProblemEx core philosophy",
                  "situational knowledge",
                  "Situational Knowledge Quotient",
                  "SKQ framework",
                  "Situational Knowledge Index",
                  "SKI assessment",
                  "real-life problem-solving skills",
                  "practical decision-making",
                  "developing situational awareness",
                ]
                : problemIndex === 5
                  ? twelvePillarKeywords
                  : ["ProblemEx", getProblemTitle(slug), "real-life problems"];
  const pageTitle =
    problemIndex === 2 ? "Introducing ProblemEx" : getProblemTitle(slug);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    ...(problemIndex <= 5
      ? {
          openGraph: {
            title: pageTitle,
            description: pageDescription,
            type: "article" as const,
          },
        }
      : {}),
  };
}

export default function ProblemPage({ params }: ProblemPageProps) {
  return (
    <Suspense fallback={<ProblemPageFallback />}>
      <ProblemPageContent params={params} />
    </Suspense>
  );
}

function ProblemPageFallback() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading problem section"
      className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-6 pt-2 sm:px-6 sm:pb-12 sm:pt-3"
    >
      <Navbar />
      <div className="mx-auto mt-10 w-full max-w-7xl animate-pulse space-y-10 sm:mt-14">
        <div className="mx-auto h-12 max-w-md rounded-xl bg-[#dce6ed]" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="h-56 rounded-2xl bg-[#e7eef2]" />
          <div className="aspect-square w-full max-w-[min(62svh,44rem)] justify-self-center rounded-3xl bg-[#e7eef2]" />
        </div>
      </div>
    </main>
  );
}

async function ProblemPageContent({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problemIndex = getProblemIndex(slug);

  if (problemIndex === -1) {
    notFound();
  }

  if (/^\d+$/.test(slug)) {
    permanentRedirect(`/problem/${problemSectionSlugs[problemIndex]}`);
  }

  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-6 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <header className="px-2 py-7 text-center sm:py-10">
          <h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            {problemIndex === 2
              ? "Introducing ProblemEx"
              : getProblemTitle(slug)}
          </h1>
        </header>
        {problemIndex === 0 ? (
          <>
            <div className="mt-5 grid w-full min-w-0 items-center gap-5 sm:mt-7 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
              <div className="min-w-0 px-1 py-3 sm:px-2 sm:py-5 lg:pr-4">
                <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
                  {problemDescription}
                </p>
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
            <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 text-left sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {problemPoints.map((point, index) => (
                <ScrollReveal className="h-full" delay={(index % 3) * 70} key={point.title}>
                <article
                  className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-t-4 bg-gradient-to-br p-5 shadow-[0_10px_30px_rgba(16,43,80,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(16,43,80,0.12)] sm:rounded-3xl sm:p-6 ${problemCardThemes[index]}`}
                >
                  <p className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-xs font-extrabold tracking-[0.08em] ring-1 ring-black/5 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-sm ${problemCardThemes[index].split(" ").pop()}`}>
                    {String(index + 1).padStart(2, "0")}.
                  </p>
                  <div className="mt-5">
                    <h2 className="text-balance text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#102b50] sm:text-2xl">
                      {point.title}
                    </h2>
                    <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]" />
                    <p className="mt-3 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                      {point.text}
                    </p>
                  </div>
                </article>
                </ScrollReveal>
              ))}
            </div>
            <section className="relative isolate mx-auto mt-20 w-full max-w-5xl py-12 text-left sm:mt-28 sm:py-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#eaf3ef]">
              <h2 className="mx-auto block w-fit bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-center text-balance text-2xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                 Why Does This Problem Exist?
              </h2>
              <p className="mt-8 text-pretty text-[17px] leading-7 text-slate-700 sm:mt-10 sm:text-[19px] sm:leading-8">
                {whyProblemDescription}
              </p>
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
                      {"text" in point && (
                        <p className="mt-3 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                          {point.text}
                        </p>
                      )}
                      {Array.isArray(point.subsections) && (
                        <div className="mt-5 space-y-6 sm:mt-7 sm:space-y-8">
                          {point.subsections.map((subsection, subsectionIndex) => (
                            <section key={subsection.title}>
                              <h4 className="text-balance text-lg font-semibold leading-snug text-[#147b4b] sm:text-xl">
                                {String.fromCharCode(97 + subsectionIndex)}. {subsection.title}
                              </h4>
                              <p className="mt-2 text-pretty text-base leading-7 text-slate-600 sm:mt-3 sm:text-lg sm:leading-8">
                                {subsection.text}
                              </p>
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
        ) : problemIndex === 1 ? (
          <>
            <div className="mx-auto mt-5 max-w-6xl space-y-5 text-left sm:mt-7 sm:space-y-6">
              {consequencesIntroduction.map((paragraph) => (
                <p
                  className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <figure className="relative mx-auto my-7 aspect-[3/1] w-full max-w-5xl sm:my-9">
                <Image
                  alt="Wavy chain of consequences infographic"
                  className="object-contain drop-shadow-[0_12px_24px_rgba(16,43,80,0.08)]"
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  src="/Wavy%20Chain%20of%20Consequences%20Infographic%20(1).png"
                />
              </figure>
              <p className="pt-2 text-pretty text-lg font-semibold leading-7 text-[#102b50] sm:pt-4 sm:text-xl sm:leading-8">
                {consequencesLead}
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 text-left sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {consequencesPoints.map((point, index) => (
                <ScrollReveal className="h-full" delay={(index % 3) * 70} key={point.title}>
                <article
                  className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-t-4 bg-gradient-to-br p-5 shadow-[0_10px_30px_rgba(16,43,80,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(16,43,80,0.12)] sm:rounded-3xl sm:p-6 ${problemCardThemes[index % problemCardThemes.length]}`}
                >
                  <p className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-xs font-extrabold tracking-[0.08em] ring-1 ring-black/5 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-sm ${problemCardThemes[index % problemCardThemes.length].split(" ").pop()}`}>
                    {index + 1}.
                  </p>
                  <div className="mt-5">
                    <h2 className="text-balance text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#102b50] sm:text-2xl">
                      {point.title}
                    </h2>
                    <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]" />
                    <p className="mt-3 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                      {point.text}
                    </p>
                  </div>
                </article>
                </ScrollReveal>
              ))}
            </div>
          </>
        ) : problemIndex === 2 ? (
          <div className="mx-auto mt-5 w-full max-w-5xl space-y-12 text-left sm:mt-8 sm:space-y-16">
            <ScrollReveal delay={0}>
            <section>
              <div className="mt-8 text-center sm:mt-10">
                <h2 className="text-2xl font-bold tracking-tight text-[#102b50] sm:text-3xl">
                  ProblemEx by TTT
                </h2>
                <p className="mt-3 bg-gradient-to-r from-[#e11d48] via-[#c2410c] to-[#15803d] bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
                  Practical Skills to Exit Real-Life Problems
                </p>
              </div>
              <div className="mt-7 space-y-5 sm:mt-9 sm:space-y-6">
                <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
                  The real world presents us with countless practical problems, challenges, difficult situations and dilemmas. Navigating them requires more than merely possessing knowledge. It requires the ability to confront situations, think clearly, make appropriate choices and find a way forward. It requires what we term as the “Situational Knowledge”.
                </p>
                <p className="border-l-4 border-[#159447] pl-5 text-pretty text-lg font-semibold leading-8 text-[#183b61] sm:pl-7 sm:text-xl sm:leading-9">
                  ProblemEx by TTT is our initiative to help individuals develop the practical abilities to navigate these real-life challenges by providing them “Situational Knowledge”.
                </p>
              </div>
            </section>
            </ScrollReveal>

            <ScrollReveal delay={50}>
            <section className="border-t border-[#d4e0e8] pt-8 sm:pt-10">
              <h2 className="text-balance text-xl font-extrabold text-[#102b50] sm:text-2xl">
                Why the Name ProblemEx?
              </h2>
              <p className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-[#e8f0fa] to-[#e8f6ee] px-5 py-3 text-xl font-extrabold tracking-tight text-[#147b4b] sm:text-2xl">
                ProblemEx = Problems + Exit.
              </p>
              <p className="mt-5 text-pretty text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                The name ProblemEx embodies a simple yet powerful idea: equipping the individuals with the practical skills through which they can exit from the real-life problems, through which they can proudly say that this is my “Ex Problem”, which no longer exists in my life
              </p>
              <blockquote className="mt-6 border-l-4 border-[#ed1c24] pl-5 text-pretty text-lg italic leading-8 text-[#183b61] sm:mt-8 sm:pl-7 sm:text-xl sm:leading-9">
                Imagine being able to look back at the challenges that once troubled you and proudly say, &quot;These were the problems of my life. They are no longer problems in my life.&quot;
              </blockquote>
              <p className="mt-5 text-base font-semibold text-[#147b4b] sm:text-lg">
                That is the spirit behind ProblemEx.
              </p>
            </section>
            </ScrollReveal>

            <ScrollReveal delay={50}>
            <section className="border-t border-[#d4e0e8] pt-8 sm:pt-10">
              <h2 className="text-balance text-xl font-extrabold text-[#102b50] sm:text-2xl">
                Our Tagline: Practical Skills to Exit Real-Life Problems
              </h2>
              <div className="mt-5 space-y-5 text-pretty text-base leading-7 text-slate-700 sm:mt-6 sm:space-y-6 sm:text-lg sm:leading-8">
                <p>
                  Our tagline captures the essence of ProblemEx. The programme is centred around the practical skills and abilities required to navigate the problems, challenges, situations and dilemmas that individuals encounter in their everyday lives.
                </p>
                <p>
                  It is about equipping individuals not merely to know, but to handle. Not merely to understand problems, but to confront them, navigate them and find a way forward.
                </p>
              </div>
            </section>
            </ScrollReveal>

            <ScrollReveal delay={50}>
            <section className="border-t border-[#d4e0e8] pt-8 sm:pt-10">
              <h2 className="text-balance text-xl font-extrabold text-[#102b50] sm:text-2xl">
                But First, Let&apos;s Clear Something Up!
              </h2>
              <div className="mt-5 space-y-5 text-pretty text-base leading-7 text-slate-700 sm:mt-6 sm:space-y-6 sm:text-lg sm:leading-8">
                <p>
                  Before we explain what our program ProblemEx actually is and how it works, let&apos;s first clarify what it is <strong>not</strong>.
                </p>
                <p>
                  Because when we talk about practical skills, real-life learning and solving life&apos;s problems, people tend to associate them with all sorts of programmes, courses and initiatives. And we&apos;d rather clear up those misconceptions first than leave you guessing!
                </p>
              </div>
            </section>
            </ScrollReveal>
          </div>
        ) : problemIndex === 3 ? (
          <>
            <div className="mx-auto mt-5 max-w-6xl space-y-5 text-left sm:mt-7 sm:space-y-6">
              {notProblemExIntroduction.map((paragraph) => (
                <p
                  className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <p className="pt-2 text-pretty text-lg font-bold text-[#147b4b] sm:pt-4 sm:text-xl">
                {notProblemExLead}
              </p>
            </div>
            <div className="relative mx-auto mt-8 max-w-6xl text-left before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-gradient-to-b before:from-[#ed1c24]/70 before:via-[#159447]/50 before:to-transparent sm:mt-12 sm:before:left-6">
              {notProblemExPoints.map((point, index) => (
                <ScrollReveal delay={(index % 4) * 55} key={point.title}>
                <article
                  className={`relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-[#d4e0e8]/80 py-7 last:border-b-0 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-6 sm:py-9 ${index === 0 ? "pt-0" : ""}`}
                >
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#fff1ee] to-[#e6f5ed] text-xs font-extrabold text-[#147b4b] ring-1 ring-[#159447]/15 sm:h-12 sm:w-12 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-balance text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#102b50] sm:text-2xl">
                      {point.title}
                    </h2>
                    <p className="mt-4 border-l-2 border-[#ed1c24]/60 pl-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                      {point.not}
                    </p>
                    <p className="mt-5 border-l-2 border-[#159447]/60 pl-4 text-pretty text-base font-bold leading-7 text-[#147b4b] sm:text-lg sm:leading-8">
                      {point.butLead}
                    </p>
                    <p className="mt-2 pl-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                      {point.butText}
                    </p>
                  </div>
                </article>
                </ScrollReveal>
              ))}
            </div>
            <div className="mx-auto mt-14 max-w-6xl space-y-5 border-t border-[#d4e0e8] pt-8 text-left sm:mt-20 sm:space-y-6 sm:pt-12">
              {notProblemExConclusion.map((paragraph, index) => (
                <p
                  className={`text-pretty text-[17px] leading-7 sm:text-[19px] sm:leading-8 ${index === 2 ? "font-semibold text-[#183b61]" : "text-slate-700"}`}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </>
        ) : problemIndex === 4 ? (
          <CorePhilosophyContent />
        ) : problemIndex === 5 ? (
          <TwelvePillarFrameworkContent />
        ) : (
          <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-[#dce6ed] bg-white/85 px-6 py-8 text-center text-base leading-7 text-slate-600 sm:text-lg">
            This ProblemEx section is ready for its learning content.
          </p>
        )}
      </section>
    </main>
  );
}
