import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";


const notProblemExIntroduction = [
  "We know the name might make you think of a few things. And you wouldn't be entirely wrong!",
  "Perhaps a Swiss Army Knife can help explain, to some extent, what ProblemEx is all about.",
  "At first glance, it looks like a knife. But open it up, and you discover that it is much more than that. Depending on the model, it may contain a blade, scissors, a screwdriver, a bottle opener, a corkscrew, a nail file, tweezers and several other tools, each designed to serve a different purpose.",
  "But even a Swiss Army Knife doesn't quite capture what ProblemEx is!",
  "A Swiss Army Knife may combine multiple tools into a single device, but each component largely performs its own distinct function. ProblemEx is different. Its various elements don't merely operate independently. They interact, complement and reinforce one another, creating a capability that is far greater than what any individual component could achieve on its own.",
  "The whole is greater than the sum of its parts!",
  "And that is precisely what makes ProblemEx different.",
];

const notProblemExLead = "Let's clear up a few misconceptions.";

const notProblemExPoints = [
  {
    title: "We are not just an Academic Teaching Programme",
    not: "ProblemEx is not designed to teach conventional academic subjects, prepare students for examinations or replace classroom education.",
    butLead: "But academic knowledge can certainly be a part of ProblemEx.",
    butText: "When real-life situations demand the understanding or application of academic concepts, relevant knowledge becomes an integral part of the learning experience. Our focus, however, is not merely on imparting knowledge, but on helping individuals understand when, why and how that knowledge can be put to practical use.",
  },
  {
    title: "We are not just a Personality Development Programme",
    not: "ProblemEx is not a conventional personality development course centred around appearance, mannerisms, confidence-building exercises, etiquette or communication techniques in isolation.",
    butLead: "But personality development is an integral outcome of ProblemEx.",
    butText: "As individuals learn to handle situations, overcome challenges, communicate effectively, make decisions, manage conflicts, take responsibility and deal with uncertainty, they naturally develop many of the qualities that contribute to a stronger, more mature and well-rounded personality.",
  },
  {
    title: "We are not just a Career Guidance or Career Counselling Institution",
    not: "ProblemEx is not a conventional career counselling programme that primarily identifies career options, administers aptitude tests or recommends professions.",
    butLead: "But ProblemEx can help individuals make better career choices.",
    butText: "By developing the ability to assess situations, understand their strengths, evaluate opportunities, analyse practical realities, make informed decisions and navigate challenges, individuals become better equipped to choose, pursue and manage their careers.",
  },
  {
    title: "We are not just a Relationship Counselling Programme",
    not: "ProblemEx is not a specialised relationship counselling service designed to address specific marital, familial, interpersonal or psychological problems.",
    butLead: "But relationships are an important part of ProblemEx.",
    butText: "Understanding people, communicating effectively, resolving disagreements, managing expectations, recognising boundaries, dealing with misunderstandings and navigating interpersonal situations are practical abilities that form an important part of our learning approach.",
  },
  {
    title: "We are not a Mental Health Treatment or Therapy Programme",
    not: "ProblemEx is not a clinical, psychological or therapeutic programme designed to diagnose or treat mental health conditions.",
    butLead: "But mental well-being and emotional resilience matter in ProblemEx.",
    butText: "Learning to navigate stressful situations, deal with setbacks, manage difficult circumstances, respond constructively to challenges and make better decisions can contribute to one's emotional resilience and overall well-being. These learning outcomes, however, do not replace professional mental health care where it is needed.",
  },
  {
    title: "We are not just a Conventional Life Skills Course",
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
    title: "We are not just a Conventional Coaching Programme",
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



export const metadata: Metadata = {
  title: "What ProblemEx Is Not",
  description: "Understand how ProblemEx differs from academic teaching, personality development, career guidance, counselling, therapy and vocational training.",
  alternates: { canonical: "/what-problemex-is-not" },
  openGraph: {
    siteName: "ProblemEx",
    title: "What ProblemEx Is Not | ProblemEx",
    description: "Understand how ProblemEx differs from academic teaching, personality development, career guidance, counselling, therapy and vocational training.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What ProblemEx Is Not | ProblemEx",
    description: "Understand how ProblemEx differs from academic teaching, personality development, career guidance, counselling, therapy and vocational training.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "What ProblemEx Is Not", item: siteUrl ? new URL("/what-problemex-is-not", siteUrl).toString() : undefined },
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
const problemIndex = 3;
function pathFor(slug: string) { return slug === "problem" ? "/problem" : "/" + slug; }

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-3 text-sm text-slate-500"><Link className="font-semibold text-[#147b4b] hover:underline" href="/">Home</Link><span className="mx-2">/</span><span aria-current="page">What ProblemEx Is Not</span></nav>
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">What ProblemEx Is Not</h1></header>
        {
          (
          <>
            <div className="mx-auto mt-5 max-w-7xl space-y-5 text-left sm:mt-7 sm:space-y-6">
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
            <div className="relative mx-auto mt-8 max-w-7xl text-left before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-gradient-to-b before:from-[#ed1c24]/70 before:via-[#159447]/50 before:to-transparent sm:mt-12 sm:before:left-6">
              {notProblemExPoints.map((point, index) => (
                <ScrollReveal delay={(index % 4) * 55} key={point.title}>
                <article
                  className={`relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-[#d4e0e8]/80 py-7 last:border-b-0 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-6 sm:py-9 ${index === 0 ? "pt-0" : ""}`}
                >
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#fff1ee] to-[#e6f5ed] text-xs font-extrabold text-[#147b4b] ring-1 ring-[#159447]/15 sm:h-12 sm:w-12 sm:text-sm">
                    {index + 1}.
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
            <div className="mx-auto mt-14 max-w-7xl space-y-5 border-t border-[#d4e0e8] pt-8 text-left sm:mt-20 sm:space-y-6 sm:pt-12">
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
        )
        }
        
      </section>
    </main>
  );
}
