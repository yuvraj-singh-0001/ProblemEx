import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import ScrollReveal from "@/app/components/scroll-reveal/scroll-reveal";

type ConsequenceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro: string; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

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

const problemCardThemes = [
  "border-[#f1d3d0] border-t-[#ef4444] from-[#fff2ef] via-white to-[#fff8f5] text-[#c73532]",
  "border-[#f1dfc3] border-t-[#f59e0b] from-[#fff8e8] via-white to-[#fffaf2] text-[#b66a08]",
  "border-[#d7e8c6] border-t-[#65a30d] from-[#f5faeb] via-white to-[#f8fbf3] text-[#4d7c0f]",
  "border-[#c8e8e8] border-t-[#14b8a6] from-[#eafaf8] via-white to-[#f3fcfb] text-[#0f8177]",
  "border-[#cfe0f5] border-t-[#3b82f6] from-[#eef5ff] via-white to-[#f6f9ff] text-[#2863b4]",
  "border-[#e5d2ef] border-t-[#a855f7] from-[#faf2ff] via-white to-[#fcf8ff] text-[#8541b8]",
];

const consequencesPoints: { title: string; blocks: ConsequenceBlock[] }[] = [
  {
    title: "A Generation Struggling to Stand on Its Own Feet",
    blocks: [
      { type: "paragraph", text: "Imagine a person who needs a crutch to walk, a hearing aid to hear, a machine to speak, glasses to see, assistance to eat and a pacemaker to keep the heart functioning. With all these devices and support systems in place, the individual may still manage to function remarkably well. But would we consider such a situation the ideal state of functioning, if these dependencies were avoidable?" },
      { type: "paragraph", text: "Unfortunately, a similar paradox is emerging among today's generation. We are producing individuals who may appear exceptionally capable, scoring impressive marks, acquiring degrees, using sophisticated technology and demonstrating academic brilliance, yet struggling to handle some of the most basic situations of everyday life independently." },
      { type: "paragraph", text: "A small electrical repair at home, filling out a routine form, managing an unfamiliar situation, handling a practical setback or making a simple decision can leave them dependent on parents, teachers, friends or even people with considerably less formal education but far greater practical understanding." },
      { type: "paragraph", text: "An individual who appears efficient only because an extensive support system is constantly compensating for their limitations may not be genuinely efficient at all. If even one or two critical elements of that support system disappear, that apparent efficiency can collapse. True efficiency lies in being capable of handling most situations independently, while recognising that certain assistance and support may inevitably be necessary." },
      { type: "paragraph", text: "When the ability to independently navigate life's ordinary challenges is missing, the consequences extend far beyond inconvenience. They affect confidence, initiative, judgement, responsibility and ultimately, the ability to stand on one's own feet." },
    ],
  },
  {
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
  },
  {
    title: "Everyday Challenges Turning into Overwhelming Crises",
    blocks: [
      { type: "paragraph", text: "Not every problem in life is a catastrophe. Not every disagreement is a disaster. Not every setback is the end of the world. Yet, for individuals inadequately equipped to handle difficult situations, even relatively manageable problems can become disproportionately overwhelming." },
      { type: "paragraph", text: "A minor disagreement with a friend may turn into a bitter conflict. A disappointing examination result may trigger prolonged distress. A rejection at work may be perceived as a personal failure. A financial setback may lead to panic. A criticism may become an assault on one's self-esteem. An unexpected change may leave someone completely disoriented. Sometimes, the problem itself is not particularly difficult. It is the inability to deal with the problem that makes it difficult." },
      { type: "paragraph", text: "Consider two individuals facing the same setback. One analyses the situation, accepts what cannot be changed, identifies what can be done and begins working towards a solution. The other becomes overwhelmed, repeatedly revisits what went wrong, blames circumstances, loses confidence and struggles to move forward." },
      { type: "paragraph", text: "The situation may be identical. Their responses, however, can produce entirely different outcomes." },
      { type: "paragraph", text: "This is where practical abilities such as emotional regulation, resilience, adaptability, problem-solving, perspective-taking and the ability to respond rather than react become critically important." },
      { type: "quote", text: "As the familiar expression goes, \"When life gives you lemons, make lemonade.\" But perhaps the more practical question is: Do you know how to make lemonade, or are you still arguing with life about why it gave you lemons?" },
      { type: "paragraph", text: "A problem does not always become bigger because it is difficult. Sometimes, it becomes bigger because we are not equipped to handle it." },
    ],
  },
  {
    title: "Strained Relationships and the Breakdown of Human Connections",
    blocks: [
      { type: "paragraph", text: "Relationships are among the most valuable aspects of human life. They can provide companionship, support, belonging, security, happiness and meaning. But they can also become sources of frustration, conflict, disappointment, misunderstanding and distress when we lack the abilities required to navigate them." },
      { type: "paragraph", text: "Love alone is not always enough. Good intentions alone are not always enough. Even people who genuinely care about each other can hurt one another, misunderstand one another, develop resentment, cross boundaries, communicate poorly and struggle to resolve conflicts." },
      { type: "paragraph", text: "How many relationships have suffered because someone could not control their anger? How many friendships have ended because of an unnecessary misunderstanding? How many marriages have deteriorated because two individuals could not communicate effectively, manage expectations or resolve disagreements constructively? How many parents and children have drifted apart because neither knows how to navigate the differences between them?" },
      { type: "paragraph", text: "A person may know the importance of respecting others but still struggle to demonstrate respect when angry. Someone may understand the value of communication but become defensive whenever confronted. Another may genuinely love their family yet repeatedly make decisions that create unnecessary conflict." },
      { type: "paragraph", text: "The irony is that we often expect relationships to function on the basis of love, loyalty and good intentions, while overlooking the practical abilities required to sustain them." },
      { type: "paragraph", text: "Communication, empathy, patience, emotional maturity, conflict resolution, boundary-setting, listening, negotiation, understanding perspectives and knowing when to speak, when to remain silent and when to walk away are not merely desirable qualities. They are practical abilities that can significantly influence the quality of our relationships." },
      { type: "paragraph", text: "Sometimes, relationships do not break because people stop caring. They break because people do not know how to care, communicate and coexist effectively." },
    ],
  },
  {
    title: "Vulnerability to Manipulation, Exploitation and Deception",
    blocks: [
      { type: "paragraph", text: "The world is not always a fair, honest or straightforward place. Unfortunately, not everyone we encounter has our best interests at heart." },
      { type: "paragraph", text: "People can be manipulated, deceived, exploited, pressured, misled or taken advantage of in countless ways. And those who lack situational awareness, critical thinking, independent judgement, practical knowledge and the ability to recognise warning signs may become particularly vulnerable." },
      { type: "list", intro: "Consider some of these examples:", items: [
        "An employee who impulsively quits a job without considering financial commitments or alternatives because his so-called friends and well-wishers incorrectly made him think that getting an alternative job is very easy.",
        "The student who chooses a course or career merely because friends are pursuing it without understanding whether it suits their interests or abilities.",
        "The individual who signs a contract or an agreement without reading the fine print, only to discover the consequences months later.",
        "Someone who posts an angry message on social media in the heat of the moment, damaging a relationship, reputation or career.",
        "A person who ignores repeated warning signs in a relationship until the situation becomes emotionally or financially destructive.",
        "The motorist who does dangerous stunts with his bike because his so-called friends have brainwashed him that this makes him cool.",
        "The individual who makes an important medical or financial decision based solely on a viral WhatsApp message because a certain pharma company wants him to take that dangerous medicine, irrespective of the fact whether he requires it or not.",
      ] },
      { type: "paragraph", text: "In all these examples, the individuals are not necessarily illiterate, uneducated or graduates of mediocre institutions. Many may be highly educated and academically accomplished. Yet, they lack the Situational Knowledge required to assess circumstances, distinguish manipulation from genuine advice, question assumptions, evaluate consequences and make sound decisions." },
      { type: "paragraph", text: "In today's world, deception is not necessarily crude or obvious. It can be sophisticated, psychologically engineered, technologically enabled and carefully designed to exploit human emotions, vulnerabilities, fears, greed, insecurities and trust." },
      { type: "paragraph", text: "AI-generated content, deepfakes, misinformation, digital fraud, phishing, social engineering, fake identities and increasingly sophisticated online manipulation have made the ability to independently evaluate information and recognise suspicious situations even more important." },
      { type: "paragraph", text: "There is a difference between being trusting and being gullible, between being kind and being easily manipulated, between being open-minded and being incapable of questioning what you are told." },
      { type: "paragraph", text: "In a world where almost anyone can attempt to influence you, the ability to think for yourself is no longer merely an advantage. It is a form of protection." },
    ],
  },
  {
    title: "Reduced Employability, Career Growth and Economic Independence",
    blocks: [
      { type: "paragraph", text: "Academic qualifications, degrees, certificates and technical expertise can certainly open doors. But entering a workplace is not the same as succeeding in one." },
      { type: "paragraph", text: "Professional life demands much more than knowledge of a subject. It requires the ability to communicate, collaborate, take initiative, manage responsibilities, solve problems, deal with people, adapt to changing circumstances, make decisions, handle disagreements, meet expectations and respond to situations that rarely follow a textbook." },
      { type: "paragraph", text: "Imagine two candidates with comparable qualifications and technical knowledge." },
      { type: "paragraph", text: "One can communicate effectively, understand instructions, take initiative, handle unexpected challenges, work with others, accept feedback and find solutions when things go wrong." },
      { type: "paragraph", text: "The other struggles to communicate, avoids responsibility, becomes defensive when criticised, waits to be told what to do, cannot independently resolve practical problems and finds it difficult to adapt." },
      { type: "paragraph", text: "Their academic qualifications may be comparable. Their effectiveness in the workplace may not be." },
      { type: "paragraph", text: "And in an increasingly competitive world, the difference between knowing your job and being able to perform effectively when circumstances demand it can have a profound impact on employability, professional growth, leadership opportunities, earning potential and economic independence." },
      { type: "paragraph", text: "The challenge becomes even greater as workplaces evolve, technology advances, artificial intelligence transforms industries and employers increasingly expect individuals to demonstrate initiative, adaptability, judgement and problem-solving abilities." },
      { type: "paragraph", text: "Your qualifications may help you get noticed. Your ability to handle situations may determine how far you go." },
    ],
  },
  {
    title: "Missed Opportunities, Wasted Potential and Unfulfilled Aspirations",
    blocks: [
      { type: "paragraph", text: "How many people possess remarkable talent, intelligence, ideas, ambition and potential, yet fail to translate them into meaningful achievements?" },
      { type: "paragraph", text: "How many opportunities are lost because someone lacks the confidence to act? How many promising ideas remain confined to conversations because their creators cannot turn them into reality? How many individuals abandon ambitions because they cannot navigate the challenges, uncertainties, setbacks and practical obstacles that inevitably accompany any meaningful pursuit?" },
      { type: "paragraph", text: "A person may have an excellent business idea but lack the ability to evaluate its feasibility, negotiate, manage finances, build relationships, market a product or handle setbacks." },
      { type: "paragraph", text: "Someone may possess extraordinary talent but struggle to present themselves, communicate their strengths or recognise opportunities." },
      { type: "paragraph", text: "Another may want to pursue a particular career, start a business, travel independently, learn a skill or accomplish something meaningful, but remain paralysed by uncertainty, fear, practical difficulties or the inability to figure out what to do next." },
      { type: "paragraph", text: "Potential is important. But potential alone does not guarantee achievement." },
      { type: "paragraph", text: "An idea without execution remains an idea. An opportunity without action remains an opportunity missed. An ambition without the ability to navigate the path ahead can remain an aspiration for years." },
      { type: "paragraph", text: "The world is full of people who could have done something remarkable, had they been better equipped, better prepared or more capable of navigating the challenges standing between them and their goals." },
      { type: "paragraph", text: "Talent may give you the potential to achieve something. Your ability to navigate the journey determines whether that potential gets a chance to become reality." },
    ],
  },
  {
    title: "Compromised Ethical Judgement and Responsible Behaviour",
    blocks: [
      { type: "paragraph", text: "Ethical judgement is perhaps one of the most difficult aspects of navigating real life. The challenge is not always distinguishing between something obviously right and obviously wrong. It is often deciding what to do when two responsibilities conflict, when every available option carries a cost, when personal interests collide with fairness or when the consequences of a decision are difficult to foresee." },
      { type: "list", intro: "Consider the following situations:", items: [
        "Imagine a young aspirant preparing for a competitive examination in Delhi. His father falls seriously ill in their hometown, and his family desperately needs him back. Yet, leaving Delhi could jeopardise years of preparation and his chances of securing the career for which he has worked so hard. What should he do?",
        "A student discovers that a close friend has cheated in an examination. Reporting the incident may jeopardise the friend's future, but remaining silent would mean condoning dishonesty. What is the right course of action?",
        "A young professional discovers that a decision taken by his team could seriously harm a client. Speaking up may put his own position at risk, particularly when his seniors are involved. Should he challenge the decision or remain silent?",
        "Imagine a family living in a city to provide their children with better educational opportunities, while their ageing parents, living alone in their hometown, increasingly need their care and support. Should they prioritise their children's future or their parents' present needs?",
        "A parent discovers that their child has been bullying another student. Should they instinctively defend their own child, or confront an uncomfortable truth and hold the child accountable?",
        "A person is offered a lucrative opportunity that could significantly improve their family's financial circumstances, but the arrangement involves a questionable practice that could disadvantage others. Do the circumstances justify accepting it?",
      ] },
      { type: "paragraph", text: "These are not merely questions of morality. They are dilemmas involving competing duties, relationships, consequences, personal interests, fairness, responsibility and judgement. In many such situations, there may not be an answer that leaves everyone satisfied." },
      { type: "paragraph", text: "Navigating such situations requires more than knowing what is written in a rulebook or remembering moral teachings. It requires विवेक (wisdom), the ability to examine a situation from multiple perspectives, recognise competing responsibilities, question one's own biases, anticipate consequences and arrive at a considered decision." },
      { type: "paragraph", text: "Ethical judgement is not merely the ability to know what is right. It is the ability to discern what is right when the answer is not obvious, the choices are difficult and the consequences matter." },
    ],
  },
  {
    title: "A Society Less Equipped to Handle Its Collective Challenges",
    blocks: [
      { type: "paragraph", text: "The consequences of this problem do not end with individuals. They can extend to families, institutions, communities and society at large." },
      { type: "paragraph", text: "A society is ultimately made up of individuals. Their ability to think critically, make informed decisions, solve problems, communicate constructively, exercise responsibility, navigate differences and respond effectively to challenges influences the quality of the society they collectively create." },
      { type: "paragraph", text: "When individuals lack these abilities, the consequences can manifest in numerous ways." },
      { type: "paragraph", text: "Misunderstandings can escalate into conflicts. Differences of opinion can become hostility. Misinformation can influence collective decisions. People may become increasingly vulnerable to manipulation, prejudice, propaganda and divisive narratives. Everyday disagreements may become unnecessarily polarised. Citizens may struggle to evaluate public issues independently, exercise responsible judgement or engage constructively with others." },
      { type: "paragraph", text: "Families, workplaces, institutions and communities can all suffer when people lack the abilities to cooperate, resolve conflicts, exercise responsibility, respect differences and find practical solutions to shared challenges." },
      { type: "paragraph", text: "India, with its extraordinary diversity of languages, cultures, beliefs, traditions, economic circumstances and social realities, particularly requires individuals who can think independently, engage constructively, understand differing perspectives and navigate complex situations without allowing every difference to become a confrontation." },
      { type: "paragraph", text: "The challenges of society cannot be solved by individuals who are inadequately equipped to handle the challenges of their own lives." },
      { type: "paragraph", text: "And perhaps that is the larger consequence we must recognise: when we fail to systematically equip individuals to navigate real-life situations, we are not merely leaving gaps in their personal development. We may also be leaving gaps in the collective capability of the society they will eventually shape." },
    ],
  },
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
const problemIndex = 1;
function pathFor(slug: string) { return slug === "problem" ? "/problem" : "/" + slug; }

export default function Page() {
  return (
    <main className="relative min-h-[100svh] overflow-x-clip bg-[#f3f7fa] px-4 pb-8 pt-2 sm:px-6 sm:pb-12 sm:pt-3">
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
              <figure className="relative mx-auto my-7 aspect-[3/1] w-full max-w-7xl sm:my-9">
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
            <div className="mx-auto mt-8 max-w-7xl space-y-6 text-left sm:mt-12 sm:space-y-8">
              {consequencesPoints.map((point, index) => (
                <ScrollReveal delay={(index % 3) * 65} key={point.title}>
                <article className={`group min-w-0 rounded-2xl border border-t-4 bg-gradient-to-br p-5 shadow-[0_10px_30px_rgba(16,43,80,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(16,43,80,0.13)] sm:rounded-3xl sm:p-7 lg:p-9 ${problemCardThemes[index % problemCardThemes.length]}`}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <p className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/90 text-xs font-extrabold tracking-[0.08em] ring-1 ring-black/5 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-sm ${problemCardThemes[index % problemCardThemes.length].split(" ").pop()}`}>
                      {index + 1}.
                    </p>
                    <div className="min-w-0 flex-1 pt-1">
                      <h2 className="text-balance text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#102b50] sm:text-2xl">
                        {point.title}
                      </h2>
                      <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[#ed1c24] to-[#159447]" />
                    </div>
                  </div>
                  <div className="mt-5 space-y-4 text-pretty text-base leading-7 text-slate-600 sm:mt-7 sm:space-y-5 sm:text-lg sm:leading-8">
                    {point.blocks.map((block, blockIndex) => (
                      block.type === "paragraph" ? (
                        <p key={`${block.type}-${blockIndex}`}>{block.text}</p>
                      ) : block.type === "list" ? (
                        <div key={`${block.type}-${blockIndex}`}>
                          <p>{block.intro}</p>
                          <ul className="mt-3 list-disc space-y-3 pl-6 marker:text-[#147b4b] sm:pl-8">
                            {block.items.map((item) => <li className="pl-1" key={item}>{item}</li>)}
                          </ul>
                        </div>
                      ) : (
                        <blockquote className="rounded-2xl border-l-4 border-[#159447] bg-white/75 px-4 py-4 text-[#183b61] shadow-sm sm:px-6 sm:py-5" key={`${block.type}-${blockIndex}`}>
                          <p className="whitespace-pre-line font-medium">{block.text}</p>
                          {block.attribution && <cite className="mt-3 block text-sm font-semibold not-italic text-[#147b4b]">{block.attribution}</cite>}
                        </blockquote>
                      )
                    ))}
                  </div>
                </article>
                </ScrollReveal>
              ))}
            </div>
          </>
        )
        }
        <nav aria-label="Explore more ProblemEx sections" className="mx-auto mt-16 max-w-6xl border-t border-[#d4e0e8] pt-7 sm:mt-20 sm:pt-9"><p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#147b4b]">Continue exploring</p><div className="grid gap-3 sm:grid-cols-2">
          {problemIndex > 0 && <Link className="rounded-2xl border border-[#d4e0e8] bg-white/80 p-4 transition hover:border-[#159447] hover:shadow-md" href={pathFor(sections[problemIndex - 1].slug)}><span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Previous section</span><span className="mt-1 block font-semibold text-[#102b50]">← {sections[problemIndex - 1].title}</span></Link>}
          {problemIndex < sections.length - 1 && <Link className="rounded-2xl border border-[#d4e0e8] bg-white/80 p-4 transition hover:border-[#159447] hover:shadow-md sm:text-right" href={pathFor(sections[problemIndex + 1].slug)}><span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Next section</span><span className="mt-1 block font-semibold text-[#102b50]">{sections[problemIndex + 1].title} →</span></Link>}
        </div></nav>
      </section>
    </main>
  );
}
