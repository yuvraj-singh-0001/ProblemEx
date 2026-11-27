import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";





const outcomesDescription =
  "Explore the outcomes and benefits ProblemEx aims to develop: practical problem-solving, independence, confidence, academic and professional growth, stronger relationships, risk awareness, opportunity recognition and greater mental clarity.";

const outcomesKeywords = [
  "ProblemEx outcomes and benefits",
  "real-life problem-solving abilities",
  "independence and self-reliance",
  "confidence and self-belief",
  "academic focus and performance",
  "professional effectiveness and career prospects",
  "healthier relationships and interpersonal skills",
  "risk awareness and personal safety",
  "personality development and sound judgement",
  "recognising and seizing opportunities",
  "mental clarity and spiritual growth",
  "Situational Knowledge benefits",
];

const introduction = [
  "ProblemEx is designed to help you become better equipped for life, not merely better prepared for a particular examination!",
  "Imagine being able to handle difficult situations with greater confidence, make more informed decisions, avoid unnecessary mistakes, deal with people more effectively, recognise potential risks, take responsibility for yourself and identify opportunities that you might otherwise have missed.",
  "Imagine no longer feeling helpless every time life throws something unexpected your way. Instead of panicking, blindly depending on others or simply hoping things will work out, you begin to understand situations, think things through and find your own way forward.",
  "That is the kind of transformation ProblemEx aspires to bring about.",
  "It may not give you superhuman powers. But it can help you develop some of the abilities that will make you remarkably capable in the real world. And as these abilities develop, they can positively influence virtually every aspect of your life. For the people around you, this will be nothing less than a superhuman.",
];

const outcomes = [
  {
    title: "1. Greater Ability to Handle Real-Life Problems and Situations",
    paragraphs: [
      "You will become better equipped to handle the real-life problems, challenges, situations and dilemmas that life throws your way. You will be better positioned to understand situations, assess your options, make appropriate decisions and find effective ways forward.",
      "Instead of feeling overwhelmed by every unfamiliar situation, you may gradually develop the ability to approach challenges with greater clarity, composure, confidence and resourcefulness.",
      "Not only will you be able to handle the real-life situations in a better way, but over a period of time you will see that even the number of real-life problems that are arising will come down because now you have that ability to take actions in such a way that their unintended consequences get reduced.",
      "And this improvement in your ability to navigate life's challenges can have a positive cascading impact on virtually every other aspect of your life.",
    ],
  },
  {
    title: "2. Greater Independence, Self-Reliance and Personal Responsibility",
    paragraphs: [
      "You will become more capable of handling things on your own, rather than having to depend upon others for every small problem, decision or challenge.",
      "ProblemEx aims to help you develop the confidence and ability to stand on your own feet, take responsibility for your decisions and actions, manage everyday situations and become more self-reliant in life.",
      "Because there is a difference between having people who can help you and being unable to function without them!",
    ],
  },
  {
    title: "3. Greater Confidence and Self-Belief",
    paragraphs: [
      "As you become better equipped to handle situations, make decisions, deal with challenges and find solutions, your confidence in your own abilities is likely to grow.",
      "Instead of constantly worrying about what might go wrong, feeling helpless when faced with unfamiliar circumstances or wondering whether you will be able to handle something, you may gradually develop a greater sense of assurance in your ability to face situations and figure things out.",
      "Confidence doesn't necessarily come from knowing all the answers. Sometimes, it comes from knowing that even when you don't have the answers, you can work your way towards finding them!",
    ],
  },
  {
    title: "4. Better Academic Focus, Growth and Performance",
    paragraphs: [
      "Academic performance is not influenced by intelligence, hard work and study habits alone. Distractions, conflicts, stress, poor time management, unhealthy relationships, lack of discipline, confusion and numerous other real-life circumstances can affect a student's ability to learn and perform.",
      "As you learn to deal with these practical challenges more effectively, you may find yourself better able to concentrate on academics, make productive use of your time, manage distractions, maintain greater emotional stability and perform closer to your potential.",
      "ProblemEx can therefore complement your academic journey by helping you deal with many of the real-life factors that may otherwise interfere with your learning and academic growth.",
    ],
  },
  {
    title: "5. Enhanced Professional Effectiveness and Career Prospects",
    paragraphs: [
      "The ability to deal with workplace situations, take sound decisions, handle responsibilities, interact with people, adapt to challenges, manage conflicts, recognise opportunities and find solutions is invaluable in professional life.",
      "Situational Knowledge can complement your academic qualifications and technical expertise, helping you become better equipped to navigate the practical realities of the workplace, improve your professional effectiveness, earn greater trust, seize opportunities and progress in your career.",
      "Your qualifications may help you get the opportunity. What you do when you get there may determine how far you go!",
    ],
  },
  {
    title: "6. Healthier Relationships and Stronger Interpersonal Connections",
    paragraphs: [
      "Relationships are not sustained merely by knowing what is right. They require the ability to understand people, navigate differences, communicate appropriately, manage disagreements, handle conflicts, recognise boundaries, demonstrate empathy and respond sensibly to situations.",
      "Whether it is dealing with parents, siblings, friends, classmates, colleagues, spouses, children or people you may not particularly like, the ability to understand and navigate interpersonal situations can make a tremendous difference.",
      "ProblemEx can help you become better equipped to navigate the practical complexities of human relationships, potentially leading to healthier, more meaningful and more harmonious interpersonal connections.",
    ],
  },
  {
    title: "7. Greater Awareness, Discernment and Protection from Potential Risks",
    paragraphs: [
      "Life is not just about solving problems after they arise. It is equally important to recognise situations that could potentially lead to problems, identify warning signs, exercise caution and avoid unnecessary risks.",
      "As you develop your Situational Knowledge, you may become better equipped to recognise misleading information, spot potential scams, identify manipulative behaviour, resist undue pressure, question suspicious circumstances, distinguish genuine advice from misinformation and protect yourself from situations that could otherwise result in harm, exploitation, loss or regret.",
      "ProblemEx aims to help you become more aware, alert and discerning, so that you are not merely better equipped to deal with problems, but also better positioned to prevent certain problems from arising in the first place.",
      "Sometimes, the smartest solution to a problem is not to let it become a problem in the first place!",
    ],
  },
  {
    title: "8. A More Mature, Balanced and Impactful Personality",
    paragraphs: [
      "Your personality is not merely about how you look, how you speak or how you present yourself. It is also reflected in how you think, how you behave, how you handle situations, how you treat people, how you respond to challenges and how others experience your presence.",
      "As you develop greater maturity, sound judgement, self-assurance, awareness, empathy, composure, responsibility and the ability to navigate situations effectively, these qualities can contribute to the development of a more balanced, positive, pleasing and impactful personality.",
      "You may gradually become someone whom others respect, trust, feel comfortable around and turn to for guidance, support or perspective.",
      "A truly impressive personality is not merely one that makes an impression. It is one that makes a difference!",
    ],
  },
  {
    title: "9. A Greater Ability to Recognise and Seize Opportunities",
    paragraphs: [
      "Life doesn't only present us with problems to solve. It also presents us with opportunities to learn, grow, progress, create, achieve and transform our circumstances.",
      "But opportunities are not always obvious. Some arrive disguised as challenges, some require us to take calculated risks, some demand timely decisions, and some disappear simply because we failed to recognise their potential.",
      "As you develop your Situational Knowledge, you may become better equipped to identify opportunities, assess their potential, recognise what they require, make informed choices and take timely action.",
      "Whether it is an academic opportunity, a career advancement, a business possibility, a personal initiative, an important relationship or a chance to make a meaningful contribution, your ability to recognise and respond to opportunities can make a significant difference.",
      "Because life isn't just about escaping problems. It's also about recognising the opportunities that can take you somewhere you never imagined!",
    ],
  },
  {
    title: "10. Greater Mental Clarity, Peace and Space for Spiritual Growth",
    paragraphs: [
      "When a significant portion of your time, energy and mental space is constantly consumed by unresolved problems, unnecessary conflicts, confusion, avoidable mistakes and situations you struggle to handle, it can become difficult to focus on deeper aspects of life.",
      "As you become better equipped to navigate these practical challenges, you may find yourself with greater mental peace, more time, better clarity and the freedom to devote yourself to pursuits that go beyond everyday struggles, including spiritual growth, self-exploration, contemplation and the deeper purpose of life.",
      "Sometimes, learning to handle the chaos of everyday life is what allows us to explore the deeper dimensions of life!",
    ],
  },
];

const accentColors = ["#159497", "#147b4b", "#ed1c24", "#d99b16", "#147b4b", "#159497", "#ed1c24", "#d99b16", "#147b4b", "#159497"];
const sectionHeading = "text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl";

function SectionContent() {
  return (
    <div className="mx-auto mt-5 w-full max-w-7xl space-y-12 text-left sm:mt-8 sm:space-y-16">
      <ScrollReveal>
        <section className="relative isolate border-b border-[#d7e4e8] pb-8 sm:pb-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 -z-10 h-56 w-56 rounded-full bg-[#159497]/[0.08] blur-3xl sm:h-72 sm:w-72" />
          <div className="space-y-5 text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
            {introduction.map((paragraph, index) => (
              <p className={index === 3 ? "border-l-4 border-[#159447] py-1 pl-5 text-lg font-extrabold text-[#147b4b] sm:text-xl" : ""} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-7 border-l-[3px] border-[#ed1c24] py-1 pl-5 text-lg font-extrabold leading-8 text-[#102b50] sm:text-xl sm:leading-9">
            Following are some of the most important outcomes and benefits of ProblemEx:
          </p>
        </section>
      </ScrollReveal>

      <section aria-label="Outcomes and benefits of ProblemEx" className="grid gap-x-10 gap-y-10 md:grid-cols-2 md:gap-y-12 xl:gap-x-14">
        {outcomes.map((outcome, index) => {
          const accent = accentColors[index];
          return (
            <ScrollReveal className="h-full" delay={(index % 2) * 65} key={outcome.title}>
              <article className="group relative h-full border-t-2 border-[#d7e4e8] pt-5 transition-colors duration-300 hover:border-[color:var(--outcome-accent)] sm:pt-6" style={{ "--outcome-accent": accent } as React.CSSProperties}>
                <div className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-5">
                  <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white text-sm font-extrabold text-white shadow-[0_7px_18px_rgba(16,43,80,0.16)] ring-2 ring-[color:var(--outcome-accent)]/35 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_13px_24px_rgba(16,43,80,0.22)] sm:h-14 sm:w-14 sm:text-base" style={{ backgroundColor: accent }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-balance text-lg font-extrabold leading-snug text-[#102b50] sm:text-xl">{outcome.title}</h2>
                    <div className="mt-4 space-y-3.5 text-pretty text-base leading-7 text-slate-600">
                      {outcome.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </section>
    </div>
  );
}


export const metadata: Metadata = {
  title: "Outcomes and Benefits",
  description: outcomesDescription,
  alternates: { canonical: "/outcomes-and-benefits" },
  openGraph: {
    siteName: "ProblemEx",
    title: "Outcomes and Benefits | ProblemEx",
    description: outcomesDescription,
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outcomes and Benefits | ProblemEx",
    description: outcomesDescription,
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "ProblemEx Outcomes and Benefits", item: siteUrl ? new URL("/outcomes-and-benefits", siteUrl).toString() : undefined },
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
const problemIndex = 7;
function pathFor(slug: string) { return slug === "problem" ? "/problem" : "/" + slug; }

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-3 text-sm text-slate-500"><Link className="font-semibold text-[#147b4b] hover:underline" href="/">Home</Link><span className="mx-2">/</span><span aria-current="page">The Outcomes and Benefits</span></nav>
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">The Outcomes and Benefits</h1></header>
        {
          <SectionContent />
        }
        <nav aria-label="Explore more ProblemEx sections" className="mx-auto mt-16 max-w-6xl border-t border-[#d4e0e8] pt-7 sm:mt-20 sm:pt-9"><p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#147b4b]">Continue exploring</p><div className="grid gap-3 sm:grid-cols-2">
          {problemIndex > 0 && <Link className="rounded-2xl border border-[#d4e0e8] bg-white/80 p-4 transition hover:border-[#159447] hover:shadow-md" href={pathFor(sections[problemIndex - 1].slug)}><span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Previous section</span><span className="mt-1 block font-semibold text-[#102b50]">← {sections[problemIndex - 1].title}</span></Link>}
          {problemIndex < sections.length - 1 && <Link className="rounded-2xl border border-[#d4e0e8] bg-white/80 p-4 transition hover:border-[#159447] hover:shadow-md sm:text-right" href={pathFor(sections[problemIndex + 1].slug)}><span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Next section</span><span className="mt-1 block font-semibold text-[#102b50]">{sections[problemIndex + 1].title} →</span></Link>}
        </div></nav>
      </section>
    </main>
  );
}
