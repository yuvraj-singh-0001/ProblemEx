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
    title: "The Struggle for Self-Reliance (आत्मनिर्भरता)",
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

type ConsequenceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; intro: string; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

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
      ? "Explore why education can leave a gap in real-life readiness, including rote learning, limited practical application, evaluation, changing priorities and experiential learning."
      : problemIndex === 1
        ? "Discover how gaps in situational knowledge and practical problem-solving can affect independence, decisions, relationships, career growth, opportunities, ethical judgement and society."
        : problemIndex === 2
          ? "Learn how ProblemEx by The True Topper (TTT) develops Situational Knowledge and practical abilities to navigate real-life problems, challenges and dilemmas."
          : problemIndex === 3
            ? "Understand what ProblemEx is not through the Swiss Army Knife analogy, and how its real-life learning approach differs from academic teaching, personality development, career guidance, counselling, therapy, life-skills courses and vocational training."
            : `${getProblemTitle(slug)} — a ProblemEx learning section.`;
  const philosophyDescription =
    "Explore ProblemEx's Situational Knowledge philosophy, SKQ framework and SKI assessment for developing practical skills to handle real-life situations.";
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
          "real-life problem-solving skills",
          "education and practical application",
          "self-reliance",
          "practical skills",
          "vocational and technical skills",
          "meaningful employment",
          "why education problems persist",
          "education and real-life readiness",
          "practical learning and experiential education",
          "rote learning and critical thinking",
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
            "real-life decision-making consequences",
            "relationship and communication challenges",
            "vulnerability to manipulation and deception",
            "employability and economic independence",
            "ethical judgement and responsible behaviour",
            "situational knowledge and practical abilities",
          ]
        : problemIndex === 2
          ? [
              "ProblemEx by TTT",
              "The True Topper TTT",
              "situational knowledge",
              "Situational Knowledge ProblemEx",
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
                "What ProblemEx is",
                "ProblemEx Swiss Army Knife analogy",
                "ProblemEx real-life learning approach",
                "practical skills for real-life situations",
                "real-life problem-solving",
                "life skills education",
                "career guidance and life skills",
                "academic teaching and practical learning",
                "personality development and life skills",
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
    problemIndex === 2
      ? "Introducing ProblemEx"
      : problemIndex === 1
        ? "Consequences of Poor Real-Life Problem-Solving | ProblemEx"
        : getProblemTitle(slug);

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
                    <div className="mt-3 space-y-4 text-pretty text-base leading-7 text-slate-600 sm:space-y-5 sm:text-lg sm:leading-8">
                      {point.paragraphs.map((paragraph, paragraphIndex) => (
                        <p className={paragraphIndex === point.paragraphs.length - 1 ? "font-semibold text-[#183b61]" : ""} key={paragraph}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
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
        ) : problemIndex === 1 ? (
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
        ) : problemIndex === 2 ? (
          <div className="mx-auto mt-5 w-full max-w-7xl space-y-12 text-left sm:mt-8 sm:space-y-16">
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
                  The real world presents us with countless practical problems, challenges, difficult situations and dilemmas. Navigating them requires more than merely possessing knowledge. It requires the ability to confront situations, think clearly, make appropriate choices and find a way forward. It requires what we term as the &ldquo;Situational Knowledge&rdquo;.
                </p>
                <p className="border-l-4 border-[#159447] pl-5 text-pretty text-lg font-semibold leading-8 text-[#183b61] sm:pl-7 sm:text-xl sm:leading-9">
                  ProblemEx by TTT is an initiative by The True Topper (TTT) to help individuals develop the practical abilities to navigate these real-life challenges by providing them &ldquo;Situational Knowledge&rdquo;.
                </p>
              </div>
            </section>
            </ScrollReveal>

            <ScrollReveal delay={50}>
            <section className="border-t border-[#d4e0e8] pt-8 sm:pt-10">
              <h2 className="text-balance text-xl font-extrabold text-[#102b50] sm:text-2xl">
                B. Why the Name ProblemEx?
              </h2>
              <p className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-[#e8f0fa] to-[#e8f6ee] px-5 py-3 text-xl font-extrabold tracking-tight text-[#147b4b] sm:text-2xl">
                ProblemEx = Problems + Exit.
              </p>
              <p className="mt-5 text-pretty text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                The name ProblemEx embodies a simple yet powerful idea: equipping the individuals with the practical skills through which they can exit from the real-life problems, through which they can proudly say that this is my &ldquo;Ex Problem&rdquo;, which no longer exists in my life
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
                C. Our Tagline: Practical Skills to Exit Real-Life Problems
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
                D. But First, Let&apos;s Clear Something Up!
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
