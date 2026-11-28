import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";
import {
  ProblemCardNavigationLink,
  ProblemCardScrollRestorer,
} from "@/app/components/problem-card-navigation/problem-card-navigation";



const consequencesIntroduction = [
  "Do not underestimate the consequences of this problem. What may appear to be a simple gap in knowledge, a lack of practical abilities or an inability to handle certain real-life situations can gradually become a serious impediment to one's growth, success, happiness and overall quality of life.",
  "Imagine a magnificent building with beautifully designed interiors, impressive architecture and an attractive façade. Yet, beneath the surface, termites are silently eating away at its foundations. The building may continue to stand for years, giving the impression that everything is perfectly fine. But when the damage eventually becomes visible, it may already be too late to repair it without significant consequences.",
  "Something similar can happen in our lives.",
  "The inability to handle real-life situations may not always manifest itself dramatically or immediately. Sometimes, it begins with a small mistake, an avoidable conflict, a poor decision, an opportunity missed, an unnecessary dependency or an inability to cope with a difficult situation. But when these shortcomings repeatedly go unaddressed, their consequences can accumulate, gradually affecting one's confidence, independence, relationships, career, finances, health, reputation, happiness and peace of mind.",
  "And the unfortunate part? Many of these consequences are not inevitable. Some could have been prevented. Some could have been handled better. Some could have been avoided altogether, had the individual possessed the appropriate knowledge, skills, judgement and abilities to navigate the situation.",
  "The problem is not that life presents us with challenges. The problem is when we are inadequately equipped to deal with them.",
];

const consequencesLead =
  "And the consequences can extend far beyond what we often imagine.";

const consequenceCards: {
  title: string;
  slug: string;
  image: string;
}[] = [
  {
    title: "A Generation Struggling to Stand on Its Own Feet",
    slug: "a-generation-struggling-to-stand-on-its-own-feet",
    image: "/a-generation-struggling-to-stand-on-its-own-feet.png",
  },
  {
    title: "Poor Decisions with Lasting Consequences",
    slug: "poor-decisions-with-lasting-consequences",
    image: "/poor-decisions-with-lasting-consequences.png",
  },
  {
    title: "Everyday Challenges Turning into Overwhelming Crises",
    slug: "everyday-challenges-turning-into-overwhelming-crises",
    image: "/everyday-challenges-turning-into-overwhelming-crises.png",
  },
  {
    title: "Strained Relationships and the Breakdown of Human Connections",
    slug: "strained-relationships-and-the-breakdown-of-human-connections",
    image: "/strained-relationships-and-the-breakdown-of-human-connections.png",
  },
  {
    title: "Vulnerability to Manipulation, Exploitation and Deception",
    slug: "vulnerability-to-manipulation-exploitation-and-deception",
    image: "/vulnerability-to-manipulation-exploitation-and-deception.png",
  },
  {
    title: "Reduced Employability, Career Growth and Economic Independence",
    slug: "reduced-employability-career-growth-and-economic-independence",
    image: "/reduced-employability-career-growth-and-economic-independence.png",
  },
  {
    title: "Missed Opportunities, Wasted Potential and Unfulfilled Aspirations",
    slug: "missed-opportunities-wasted-potential-and-unfulfilled-aspirations",
    image: "/missed-opportunities-wasted-potential-and-unfulfilled-aspirations.png",
  },
  {
    title: "Compromised Ethical Judgement and Responsible Behaviour",
    slug: "compromised-ethical-judgement-and-responsible-behaviour",
    image: "/compromised-ethical-judgement-and-responsible-behaviour.png",
  },
  {
    title: "A Society Less Equipped to Handle Its Collective Challenges",
    slug: "a-society-less-equipped-to-handle-its-collective-challenges",
    image: "/a-society-less-equipped-to-handle-its-collective-challenges.png",
  },
];

const consequenceCardThemes = [
  { side: "border-x-[#f2bd9f] group-hover:border-x-[#e88955]", bottom: "border-b-[#e88955]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(232,137,85,0.2),0_16px_36px_rgba(232,137,85,0.15)]", icon: "border-[#e88955] bg-[#fff2e8] text-[#c66735]", button: "border-[#f1c1a5] bg-[#fff5ee] text-[#a85830] hover:bg-[#fff0e4]" },
  { side: "border-x-[#add8e5] group-hover:border-x-[#57a8c4]", bottom: "border-b-[#57a8c4]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(87,168,196,0.2),0_16px_36px_rgba(87,168,196,0.15)]", icon: "border-[#57a8c4] bg-[#eaf8fc] text-[#287c98]", button: "border-[#b5dfe9] bg-[#effafd] text-[#236f88] hover:bg-[#e3f6fb]" },
  { side: "border-x-[#b8d8b0] group-hover:border-x-[#7ebc79]", bottom: "border-b-[#7ebc79]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(126,188,121,0.2),0_16px_36px_rgba(126,188,121,0.15)]", icon: "border-[#7ebc79] bg-[#eff9ed] text-[#4c9349]", button: "border-[#c9e2c1] bg-[#f4fbf2] text-[#417d3e] hover:bg-[#eaf6e7]" },
  { side: "border-x-[#cec0e5] group-hover:border-x-[#a58ad4]", bottom: "border-b-[#a58ad4]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(165,138,212,0.2),0_16px_36px_rgba(165,138,212,0.15)]", icon: "border-[#a58ad4] bg-[#f4effc] text-[#7555ac]", button: "border-[#d8cbed] bg-[#f8f5fd] text-[#684999] hover:bg-[#f1eafa]" },
  { side: "border-x-[#e7d39e] group-hover:border-x-[#dfa94b]", bottom: "border-b-[#dfa94b]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(223,169,75,0.2),0_16px_36px_rgba(223,169,75,0.15)]", icon: "border-[#dfa94b] bg-[#fff7e5] text-[#a7771e]", button: "border-[#ead9ad] bg-[#fffaed] text-[#8f681a] hover:bg-[#fff5dc]" },
  { side: "border-x-[#a8d5d0] group-hover:border-x-[#55aaa4]", bottom: "border-b-[#55aaa4]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(85,170,164,0.2),0_16px_36px_rgba(85,170,164,0.15)]", icon: "border-[#55aaa4] bg-[#eaf8f6] text-[#287e79]", button: "border-[#b9dfdc] bg-[#f0faf9] text-[#246f6b] hover:bg-[#e5f6f4]" },
  { side: "border-x-[#e3b5c0] group-hover:border-x-[#dd8297]", bottom: "border-b-[#dd8297]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(221,130,151,0.2),0_16px_36px_rgba(221,130,151,0.15)]", icon: "border-[#dd8297] bg-[#fff0f3] text-[#b34c67]", button: "border-[#ecc7d0] bg-[#fff6f8] text-[#9c4059] hover:bg-[#ffedf2]" },
  { side: "border-x-[#b6c6e6] group-hover:border-x-[#7195d4]", bottom: "border-b-[#7195d4]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(113,149,212,0.2),0_16px_36px_rgba(113,149,212,0.15)]", icon: "border-[#7195d4] bg-[#eef3ff] text-[#426bab]", button: "border-[#c7d2ec] bg-[#f4f6ff] text-[#3c5e9c] hover:bg-[#e9efff]" },
  { side: "border-x-[#c6d3a1] group-hover:border-x-[#8caa56]", bottom: "border-b-[#8caa56]", hoverShadow: "hover:shadow-[0_0_0_2px_rgba(140,170,86,0.2),0_16px_36px_rgba(140,170,86,0.15)]", icon: "border-[#8caa56] bg-[#f3f7e9] text-[#647d32]", button: "border-[#d7e0bc] bg-[#f8faef] text-[#596f2d] hover:bg-[#eff5df]" },
];









export const metadata: Metadata = {
  title: "Consequences of Poor Problem-Solving",
  description: "Discover how gaps in situational knowledge and practical problem-solving can affect independence, decisions, relationships, career growth and opportunities.",
  alternates: { canonical: "/consequences-of-the-problem" },
  openGraph: {
    siteName: "ProblemEx",
    title: "Consequences of Poor Problem-Solving | ProblemEx",
    description: "Discover how gaps in situational knowledge and practical problem-solving can affect independence, decisions, relationships, career growth and opportunities.",
    type: "article",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consequences of Poor Problem-Solving | ProblemEx",
    description: "Discover how gaps in situational knowledge and practical problem-solving can affect independence, decisions, relationships, career growth and opportunities.",
    images: ["/problemEx.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl ? new URL("/", siteUrl).toString() : undefined },
    { "@type": "ListItem", position: 2, name: "Consequences of Poor Problem-Solving", item: siteUrl ? new URL("/consequences-of-the-problem", siteUrl).toString() : undefined },
  ],
};

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
      <ProblemCardScrollRestorer block="center" />
      {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[100px]" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-7xl py-2 sm:py-4">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-2 pt-3 text-sm text-slate-500"><Link className="font-semibold text-[#147b4b] hover:underline" href="/">Home</Link><span className="mx-2">/</span><span aria-current="page">The Consequences of the Problem</span></nav>
        <header className="px-2 py-7 text-center sm:py-10"><h1 className="mx-auto inline-block bg-gradient-to-r from-[#102b50] via-[#147b4b] to-[#159447] bg-clip-text text-balance text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">The Consequences of the Problem</h1></header>
        {
          (
            <>
              <div className="mx-auto mt-5 max-w-7xl space-y-5 text-left sm:mt-7 sm:space-y-6">
                {consequencesIntroduction.map((paragraph) => (
                  <p
                    className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="pt-2 text-pretty text-lg font-semibold leading-7 text-[#102b50] sm:pt-4 sm:text-xl sm:leading-8">
                  {consequencesLead}
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-7xl auto-rows-[24rem] grid-cols-1 gap-x-6 gap-y-10 sm:mt-16 sm:auto-rows-[25rem] sm:grid-cols-2 sm:gap-x-7 sm:gap-y-12 xl:grid-cols-3">
                {consequenceCards.map((card, index) => {
                  const theme = consequenceCardThemes[index];
                  return (
                    <ScrollReveal className="h-full" delay={(index % 3) * 70} key={card.slug}>
                      <div className="perspective-midrange h-full pt-[clamp(5rem,27.5%,7rem)]">
                        <ProblemCardNavigationLink
                          ariaLabel={`Read ${card.title}`}
                          className={`group relative isolate flex h-full w-full scroll-mt-28 flex-col items-center rounded-[1.8rem] border-x-2 border-b-[3px] border-t-0 bg-white px-6 pb-4 text-center shadow-[0_0_0_1px_rgba(125,211,252,0.08),0_10px_28px_rgba(39,155,195,0.1)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147b4b] motion-reduce:transition-none sm:rounded-[2rem] sm:px-7 ${theme.side} ${theme.bottom} ${theme.hoverShadow}`}
                          href={`/consequences-of-the-problem/${card.slug}`}
                          targetId={`consequence-${card.slug}`}
                          id={`consequence-${card.slug}`}
                        >
                          <span className={`absolute left-1/2 top-0 z-10 flex aspect-square w-1/2 max-w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-2 shadow-[0_10px_30px_rgba(55,185,225,0.24)] transition-all duration-300 group-hover:shadow-[0_14px_38px_rgba(55,185,225,0.35)] ${theme.icon}`}>
                            <Image
                              alt={card.title}
                              className="h-full w-full scale-[1.24] object-cover transition-transform duration-300 group-hover:scale-[1.30]"
                              height={256}
                              src={card.image}
                              width={256}
                            />
                          </span>
                          <h2 className="mt-[7.5rem] w-full text-center text-balance text-lg font-extrabold leading-tight tracking-[-0.025em] text-[#102b50] sm:mt-[7.5rem] sm:text-xl lg:mt-[8.5rem]">
                            {card.title}
                          </h2>
                          <span className={`mt-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-[0_5px_12px_rgba(16,43,80,0.12)] ${theme.button}`}>
                            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                          </span>
                        </ProblemCardNavigationLink>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </>
          )
        }

      </section>
    </main>
  );
}
