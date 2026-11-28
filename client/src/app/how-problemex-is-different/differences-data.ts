export interface DifferencePoint {
  slug: string;
  number: string;
  index: number;
  title: string;
  badgeBg: string;
  glowTheme: string;
  paragraphs: string[];
  hasMethodologiesLink?: boolean;
  hasPillarsLink?: boolean;
}

export const differencesData: DifferencePoint[] = [
  {
    slug: "a-different-learning-approach",
    number: "01",
    index: 1,
    title: "A Different Learning Approach: From just Knowledge Acquisition to real time Knowledge Application",
    badgeBg: "from-[#ef4444] to-[#b91c1c]",
    glowTheme: "shadow-[0_12px_28px_rgba(239,68,68,0.22)]",
    paragraphs: [
      "Most conventional educational programmes focus primarily on imparting knowledge, teaching concepts and helping individuals acquire information. While knowledge acquisition is undoubtedly important, we believe that knowing something and being able to use it effectively when a real-life situation demands it are two entirely different things.",
      "At ProblemEx, the objective of The True Topper (TTT) is not merely to impart knowledge, but to help individuals develop the ability to put knowledge, skills, understanding and judgement to practical use. We focus on what individuals can actually do when confronted with a situation, challenge, problem or dilemma.",
      "Whether it is managing a conflict, making a difficult decision, dealing with a financial situation, responding to an emergency, navigating a relationship or handling an unexpected challenge, we want individuals to be better equipped to apply what they know and figure out what needs to be done.",
      "Because knowing the answer and knowing what to do when life puts you to the test are two very different things!",
    ],
  },
  {
    slug: "a-different-learning-experience",
    number: "02",
    index: 2,
    title: "A Different Learning Experience: From just Textbooks and classroom lectures to Real-Life Situations, Challenges and Problem-Solving",
    badgeBg: "from-[#f97316] to-[#c2410c]",
    glowTheme: "shadow-[0_12px_28px_rgba(249,115,22,0.22)]",
    paragraphs: [
      "Learning about something and actually experiencing it, engaging with it or practising it can be very different experiences.",
      "At ProblemEx, The True Topper (TTT) doesn’t want learning to be restricted to lectures, textbooks, presentations or theoretical explanations. We incorporate a wide range of learning methodologies, including real-life stories, case studies, discussions, debates, role plays, simulations, practical exercises, challenges, games, group activities and experiential learning.",
      "The True Topper (TTT) wants participants to actively engage with the learning process, rather than simply sit back, listen, take notes and memorise information. Depending upon the subject and learning objectives, participants may be required to analyse situations, participate in activities, perform tasks, explore alternatives, collaborate, experiment and learn through doing.",
      "We don't believe that learning about life should be confined to sitting in a classroom and listening to someone talk about it!",
    ],
    hasMethodologiesLink: true,
  },
  {
    slug: "a-different-curriculum",
    number: "03",
    index: 3,
    title: "A Different Curriculum: Built Around Real-Life Situations, Not Just Subjects",
    badgeBg: "from-[#eab308] to-[#a16207]",
    glowTheme: "shadow-[0_12px_28px_rgba(234,179,8,0.22)]",
    paragraphs: [
      "Conventional learning is generally organised around subjects, chapters, concepts and predefined syllabi. ProblemEx takes a different perspective.",
      "Our programme is organised around the broad areas of life, conceptualised as 12 Pillars in ProblemEx Program, in which individuals actually encounter problems, challenges, situations and dilemmas. Rather than restricting learning to conventional subjects or isolated topics, we focus on the situations individuals may encounter in their student life, personal life, professional life, relationships, society and other spheres of life.",
      "For instance, instead of merely teaching a concept such as communication, financial awareness, emotional regulation or critical thinking in isolation, we explore the situations in which these abilities become relevant, the challenges individuals may encounter, the mistakes they may make and the ways in which these situations can be navigated.",
      "This makes learning more relatable, contextual and connected to the practical realities of life.",
      "At ProblemEx, we don't just ask what you need to learn. We also ask what you need to be prepared for!",
    ],
    hasPillarsLink: true,
  },
  {
    slug: "a-different-approach-to-developing-abilities",
    number: "04",
    index: 4,
    title: "A Different Approach to Developing Abilities: Integrated, Not Isolated",
    badgeBg: "from-[#16a34a] to-[#15803d]",
    glowTheme: "shadow-[0_12px_28px_rgba(22,163,74,0.22)]",
    paragraphs: [
      "Real-life situations rarely require just one skill. A seemingly simple situation may require you to think critically, understand people, manage emotions, communicate effectively, exercise judgement, apply knowledge and make decisions, sometimes all at once.",
      "ProblemEx recognises that these abilities don't operate in isolation. Our 12-pillar framework brings together diverse areas of real-life knowledge, skills and abilities, helping individuals understand and develop the combination of capabilities required to navigate different situations.",
      "We focus on developing these abilities in a manner that reflects how they are actually required and used in real life, where multiple competencies often come into play simultaneously.",
      "Because life doesn't test your abilities one subject at a time!",
    ],
  },
  {
    slug: "a-different-approach-to-preparation",
    number: "05",
    index: 5,
    title: "A Different Approach to Preparation: Learn and Practise Before the Stakes Are Real",
    badgeBg: "from-[#0d9488] to-[#0f766e]",
    glowTheme: "shadow-[0_12px_28px_rgba(13,148,136,0.22)]",
    paragraphs: [
      "Many of life's most important lessons are learnt through mistakes, difficult experiences, failures, conflicts and sometimes painful consequences. Experience is certainly a powerful teacher, but not every lesson needs to come at a heavy price.",
      "ProblemEx provides a structured opportunity to explore situations, practise techniques, experiment with approaches, make mistakes, receive feedback and learn from different experiences within a learning environment.",
      "Through simulations, role plays, exercises, challenges, case studies and other activities, participants get opportunities to engage with situations, test their responses and discover what works, what doesn't and what they could do differently.",
      "We endeavour to help participants develop and strengthen relevant abilities before they have to rely entirely upon them in the real world.",
      "Learning to handle a difficult situation in a learning environment is considerably better than learning the same lesson after the situation has gone wrong!",
    ],
  },
  {
    slug: "a-different-perspective-on-problem-solving",
    number: "06",
    index: 6,
    title: "A Different Perspective on Problem-Solving: Prevent Problems, Not Just Solve Them",
    badgeBg: "from-[#2563eb] to-[#1d4ed8]",
    glowTheme: "shadow-[0_12px_28px_rgba(37,99,235,0.22)]",
    paragraphs: [
      "Most people think about problem-solving only after a problem has arisen. But sometimes, the smartest way to handle a problem is to recognise the warning signs and prevent it from happening in the first place.",
      "ProblemEx also focuses on helping individuals become more alert, aware and discerning, enabling them to recognise risks, identify potentially harmful situations, question suspicious circumstances, resist manipulation, anticipate consequences and avoid mistakes, exploitation and unnecessary trouble.",
      "We believe that being equipped to handle life is not merely about finding solutions after things go wrong. It is also about developing the awareness, judgement and ability to recognise situations that could potentially go wrong and take appropriate steps beforehand.",
      "Because sometimes, the best solution to a problem is to ensure that it never becomes a problem in the first place!",
    ],
  },
  {
    slug: "a-different-delivery-approach",
    number: "07",
    index: 7,
    title: "A Different Delivery Approach: Relevant, Flexible and Tailored to Your Needs",
    badgeBg: "from-[#4f46e5] to-[#3730a3]",
    glowTheme: "shadow-[0_12px_28px_rgba(79,70,229,0.22)]",
    paragraphs: [
      "A school student, a college graduate, a working professional and a parent may all encounter real-life problems, but their situations, priorities, experiences and requirements are certainly not the same.",
      "ProblemEx is built around a broad framework, but we don't believe that every individual must necessarily undergo an identical programme. We endeavour to adapt the programme, its focus, emphasis, delivery and learning experiences according to the participant's age, requirements, circumstances and objectives.",
      "This flexibility also enables us to work with schools, institutions, organisations and other stakeholders to develop programmes that address their specific requirements, while retaining the fundamental objectives of ProblemEx.",
      "Because what you need to learn, how you need to learn it and the situations you need to prepare for may not be the same as everyone else's.",
    ],
  },
  {
    slug: "a-different-and-proprietary-framework",
    number: "08",
    index: 8,
    title: "A Different and Proprietary Framework: Built Around Situational Knowledge, SKQ and SKI",
    badgeBg: "from-[#9333ea] to-[#6b21a8]",
    glowTheme: "shadow-[0_12px_28px_rgba(147,51,234,0.22)]",
    paragraphs: [
      "ProblemEx is not simply a collection of activities, topics or life skills assembled into a course. We have conceptualised and developed an overarching framework centred around Situational Knowledge, its development through the Situational Knowledge Quotient (SKQ) and its assessment through the Situational Knowledge Index (SKI).",
      "This framework represents the conceptual foundation, structure and assessment architecture of ProblemEx. It brings together the different dimensions of Situational Knowledge, organises them into a structured framework of pillars and sub-pillars, and provides a basis for developing, assessing and progressively strengthening an individual's ability to navigate real-life situations.",
      "We have invested considerable thought, effort and work in developing this framework because we believe that preparing individuals for real life deserves more than an ad hoc collection of lessons or activities. It deserves a structured, thoughtfully designed and comprehensive approach.",
      "Our vision extends beyond individual participants. Through our proposed ProblemEx Certified Schools initiative, we also aim to recognise schools that make a conscious commitment to developing their students not only academically, but also in Situational Knowledge. The certification is intended to represent a school's commitment to integrating the development of practical abilities required to navigate real-life situations into the broader educational journey of its students.",
      "ProblemEx is built around a proprietary conceptual and developmental framework that we have designed to make the development of Situational Knowledge more structured, purposeful and measurable.",
    ],
  },
];
