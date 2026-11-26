import ScrollReveal from "@/app/components/scroll-reveal";

export const twelvePillarDescription =
  "Explore the ProblemEx Student Framework: the final nomenclature of 12 SKQ pillars and 30 sub-pillars, with a Pillar 11 replacement for teachers or professionals.";

export const twelvePillarKeywords = [
  "ProblemEx 12-Pillar Framework",
  "12 pillars of ProblemEx",
  "real-life situations framework",
  "ProblemEx pillars",
  "situational knowledge framework",
  "real-life challenges and dilemmas",
  "ProblemEx student framework",
  "30 SKQ sub-pillars",
  "ProblemEx framework for teachers and professionals",
  "31 professional framework sub-pillars",
];

const studentPillars = [
  { title: "Pillar 1. Financial, Banking & Consumer Situations", subPillars: ["1.1 Financial & Banking Situations", "1.2 Consumer Rights & Marketplace Situations"] },
  { title: "Pillar 2. Legal & Rights-Related Situations", subPillars: ["2.1 Legal Rights, Law Enforcement & Statutory Obligations Situations", "2.2 Contracts, Notices, Disputes & Legal Procedure Situations"] },
  { title: "Pillar 3. Digital, Technology, AI & Online Conduct Situations", subPillars: ["3.1 Digital, Technology, Gadget & AI Usage Situations", "3.2 Cybersecurity, Digital Safety & Fraud Situations", "3.3 Digital Conduct, Social Media Behaviour & Online Etiquette Situations"] },
  { title: "Pillar 4. Health & Medical Emergency Situations", subPillars: ["4.1 Medical Emergencies, Illness & First Response Situations", "4.2 Healthcare Decisions, Prescriptions & Health Insurance Situations", "4.3 Nutrition, Alternative Medical Systems & Self-Medication Situations"] },
  { title: "Pillar 5. Personal Safety, Security & Emergency Situations", subPillars: ["5.1 Interpersonal Threats, Harassment & Personal Protection Situations", "5.2 Accidents, Man-Made Hazards & Natural Disaster Situations"] },
  { title: "Pillar 6. Cultural, Social & Interpersonal Situations", subPillars: ["6.1 Cultural & Religious Sensitivity Situations", "6.2 Social & Interpersonal Situations"] },
  { title: "Pillar 7. Mental Health, Personal Behaviour & Life-Management Situations", subPillars: ["7.1 Mental Health, Psychological Distress & Help-Seeking Situations", "7.2 Addictions, Behavioural and Emotional Regulation, Stigma & Crisis Coping Situations"] },
  { title: "Pillar 8. Government, Public Services & Institutional Situations", subPillars: ["8.1 Government, Public Service Systems & Grievance Redressal Situations", "8.2 Private Organisations, Institutional Processes & Escalation Situations"] },
  { title: "Pillar 9. Everyday Living & Mobility Situations", subPillars: ["9.1 Home, Property, Household & Everyday Living Situations", "9.2 Travel, Transport & Mobility Situations"] },
  { title: "Pillar 10. Personality Development, Self-Awareness & Self-Presentation Situations", subPillars: ["10.1 Self-Awareness, Self-Esteem, Personality Traits & Habit Formation Situations", "10.2 Communication, Public Speaking & Self-Presentation Situations", "10.3 Peer Influence, Self-Doubt, Inferiority Complex Situations"] },
  { title: "Pillar 11. Academics, Student-Life & Career Readiness Situations", subPillars: ["11.1 Academic Navigation, Skill Development, Academic-Extracurricular Balance & Career Readiness Situations", "11.2 Student-Life Challenges, Developmental Transitions & Value Conflict Situations"] },
  { title: "Pillar 12. Family Life & Dynamics Situations", subPillars: ["12.1 Family and Extended Family Relationships & Roles Situations", "12.2 Marriage, Partner & In-Law Situations", "12.3 Family Dynamics, Responsibilities, Decisions, Family Finance, Property & Succession Situations", "12.4 Family Conflict, Communication & Reconciliation Situations", "12.5 Family Transitions, Caregiving, Ageing, Illness & Bereavement Situations"] },
];

const professionalPillar = {
  title: "Pillar 11. Employment, Workplace & Professional Situations",
  subPillars: [
    {
      title: "11.1 Workplace Relationships, Interactions & Professional Conduct Situations",
      detail: "(Interpersonal relations at the workplace with colleagues, seniors, juniors, clients, competitors, general public, etc.)",
    },
    {
      title: "11.2 Professional Performance, Career & Professional Transitions Situations",
      detail: "(Including transition from one position to another, from one job to another, and from one place/location to another.)",
    },
    {
      title: "11.3 Workplace Ethics, Value Conflicts & Professional Dilemmas Situations",
      detail: "(Handling different ethical dilemmas at the workplace and conflict in the personal and professional value systems)",
    },
  ],
};

const pillarThemes = [
  { ring: "border-[#227f99]", soft: "bg-[#edf4f8]", mark: "text-[#176d88]", color: "#176d88", line: "from-[#176d88] to-[#176d88]/15" },
  { ring: "border-[#268a62]", soft: "bg-[#edf8f2]", mark: "text-[#147b4b]", color: "#147b4b", line: "from-[#147b4b] to-[#147b4b]/15" },
  { ring: "border-[#348ca0]", soft: "bg-[#edf7f8]", mark: "text-[#16768b]", color: "#16768b", line: "from-[#16768b] to-[#16768b]/15" },
  { ring: "border-[#278e7c]", soft: "bg-[#eef8f5]", mark: "text-[#117b68]", color: "#117b68", line: "from-[#117b68] to-[#117b68]/15" },
  { ring: "border-[#c08a24]", soft: "bg-[#fff8e9]", mark: "text-[#a86a11]", color: "#a86a11", line: "from-[#a86a11] to-[#a86a11]/15" },
  { ring: "border-[#c95545]", soft: "bg-[#fff2ee]", mark: "text-[#b54437]", color: "#b54437", line: "from-[#b54437] to-[#b54437]/15" },
];

type PillarColumnProps = {
  title: string;
  subPillars: { title: string; detail?: string }[];
  index: number;
  delay?: number;
};

function PillarColumn({ title, subPillars, index, delay = 0 }: PillarColumnProps) {
  const theme = pillarThemes[index % pillarThemes.length];
  const displayTitle = title.replace(/^Pillar \d+\.\s*/, "");

  return (
    <ScrollReveal className="h-full min-w-0" delay={delay}>
      <article className="group flex h-full min-w-0 flex-col items-center px-1 text-center">
        <div className={`relative flex h-24 w-24 items-center justify-center rounded-full border-[5px] bg-white p-2 shadow-[0_12px_28px_rgba(16,43,80,0.14)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_36px_rgba(16,43,80,0.2)] sm:h-28 sm:w-28 ${theme.ring}`}>
          <span className={`flex h-full w-full items-center justify-center rounded-full ${theme.soft} ${theme.mark}`}>
            <svg aria-hidden="true" className="h-9 w-9 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24">
              <path d="M5 6h14M7 6v12m10-12v12M5 18h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </span>
        </div>
        <h3 className="mt-4 break-words text-balance text-lg font-extrabold leading-snug text-[#102b50] sm:text-xl">
            {displayTitle}
        </h3>
        <div aria-hidden="true" className="relative mt-3 h-6 w-full">
          <span className={`absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b ${theme.line}`} />
          <span className={`absolute bottom-0 left-2 right-1/2 h-0.5 bg-gradient-to-r ${theme.line}`} />
        </div>
        <ul className="relative w-full space-y-2.5 pl-5 before:absolute before:bottom-3 before:left-2 before:top-0 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-[#b8cbd5] before:to-transparent">
            {subPillars.map((subPillar) => (
              <li className="relative min-w-0 rounded-xl border border-[#dce6ed] bg-white/90 px-3 py-3 text-left text-sm leading-6 text-slate-600 shadow-[0_5px_15px_rgba(16,43,80,0.055)] before:absolute before:-left-3 before:top-[1.15rem] before:h-0.5 before:w-3 before:bg-[#b8cbd5] sm:px-4 sm:text-base sm:leading-7" key={subPillar.title}>
                <span aria-hidden="true" className="absolute -left-4 top-[0.9rem] h-2.5 w-2.5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: theme.color }} />
                <span className="min-w-0 break-words">
                  <span>
                  {subPillar.title}
                  {subPillar.detail && <span className="mt-1 block text-[13px] italic leading-5 text-slate-500 sm:text-sm sm:leading-6">{subPillar.detail}</span>}
                  </span>
                </span>
              </li>
            ))}
        </ul>
      </article>
    </ScrollReveal>
  );
}

const frameworkLimitations = [
  {
    title: "1. The Framework Is Not Exhaustive",
    paragraphs: [
      "The 12 pillars are not intended to represent an exhaustive list of every situation, problem, challenge or dilemma that an individual may encounter in real life. The real world is far too diverse and dynamic for any framework to capture every conceivable situation.",
      "ProblemEx is a foundational programme, and these 12 pillars represent a carefully organised framework within the scope and objectives of the programme.",
    ],
  },
  {
    title: "2. The Pillars Are Not Mutually Exclusive",
    paragraphs: [
      "Real-life situations do not necessarily fall neatly into a single category. A particular situation may involve elements belonging to multiple pillars, and the knowledge, skills and abilities required to navigate it may overlap across several areas.",
      "The pillars are therefore broad organising categories, rather than rigid or mutually exclusive compartments.",
    ],
  },
  {
    title: "3. Why We Call Them Pillars",
    paragraphs: [
      <>We have deliberately chosen the term <em>Pillars</em> to describe these 12 broad groupings because they form the foundational building blocks of ProblemEx.</>,
      "Each pillar represents a fundamental area around which the framework, learning experiences and developmental objectives of ProblemEx are structured. Together, they provide the foundation upon which the broader ProblemEx programme is built.",
    ],
  },
];

const frameworkSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The 12-Pillar Framework",
  description: twelvePillarDescription,
  inLanguage: "en",
  about: [
    "ProblemEx 12-Pillar Framework",
    "real-life situations, challenges and dilemmas",
    "situational knowledge",
  ],
  hasPart: [
    {
      "@type": "ItemList",
      name: "Student Framework: Nomenclature of 12 SKQ Pillars and 30 Sub-Pillars",
      numberOfItems: studentPillars.length,
      itemListElement: studentPillars.map((pillar, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: pillar.title,
        description: pillar.subPillars.join("; "),
      })),
    },
    {
      "@type": "ItemList",
      name: "Teachers or Professionals Pillar 11 replacement",
      numberOfItems: professionalPillar.subPillars.length,
      itemListElement: professionalPillar.subPillars.map((subPillar, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: subPillar.title,
        description: subPillar.detail,
      })),
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "ProblemEx by TTT",
  },
};

const sectionHeading =
  "text-balance text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl";

export default function TwelvePillarFrameworkContent() {
  return (
    <div className="mx-auto mt-5 w-full max-w-7xl space-y-14 text-left sm:mt-8 sm:space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(frameworkSchema) }}
      />

      <ScrollReveal>
        <section className="relative isolate py-8 sm:py-12 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-gradient-to-r before:from-[#eaf3ef] before:via-[#f3f7fa] before:to-[#eef5f7]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-0 -z-10 h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl sm:h-72 sm:w-72" />
          <h2 className={sectionHeading}>A. Understanding the 12-Pillar Framework</h2>
          <div className="mt-6 space-y-5">
            <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
              Real-life situations, problems, challenges and dilemmas come in all shapes and forms. Each situation may demand a different combination of knowledge, skills, abilities, judgement and responses. The requirements of one situation may be entirely different from those of another.
            </p>
            <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
              For the ease of understanding, systematic learning and programme development, <strong className="font-extrabold text-[#147b4b]">we have organised these diverse real-life situations into 12 broad groupings</strong>, which form the foundation of the ProblemEx framework. We term them as Pillars.
            </p>
            <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
              These 12 pillars represent broad areas of life within which individuals encounter different kinds of situations, challenges, problems and dilemmas, and develop the abilities required to navigate them effectively.
            </p>
          </div>

        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <h2 className={sectionHeading}>B. Understanding the Scope and Limitations of the Framework</h2>
          <div className="mt-7 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10">
            {frameworkLimitations.map((item, index) => (
              <ScrollReveal className="border-t-2 border-[#159447]/70 pt-5 sm:pt-6" delay={(index % 3) * 70} key={item.title}>
                <article>
                  <h3 className="text-balance text-xl font-extrabold leading-snug text-[#102b50] sm:text-2xl">
                    {item.title}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {item.paragraphs.map((paragraph) => (
                      <p className="text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8" key={typeof paragraph === "string" ? paragraph : "pillars-term"}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <h2 className={sectionHeading}>The ProblemEx Pillars and Sub-Pillars</h2>
          <div className="mt-6 border-l-4 border-[#159447] pl-4 sm:pl-6">
            <h3 className="text-xl font-extrabold text-[#102b50] sm:text-2xl">1. Student Framework</h3>
            <p className="mt-2 text-base font-semibold text-[#147b4b] sm:text-lg">
              Nomenclature of 12 SKQ Pillars and 30 Sub-Pillars
            </p>
          </div>

          <div className="mt-7 grid w-full min-w-0 grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-9 lg:gap-x-8">
            {studentPillars.map((pillar, index) => (
              <PillarColumn
                delay={(index % 3) * 55}
                index={index}
                key={pillar.title}
                subPillars={pillar.subPillars.map((title) => ({ title }))}
                title={pillar.title}
              />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative isolate border-y border-[#dce8e8] py-8 sm:py-10 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-gradient-to-r before:from-[#fff6f3] before:via-[#f7f8f9] before:to-[#eef7f1]">
          <h2 className="text-balance text-xl font-extrabold leading-snug text-[#102b50] sm:text-2xl">
            This Pillar will substitute “Pillar 11. Academics, Student-Life &amp; Career Readiness Situations” when the program is pitched for the working professionals instead of students:
          </h2>
          <div className="mx-auto mt-7 w-full max-w-3xl">
            <PillarColumn
              index={5}
              subPillars={professionalPillar.subPillars}
              title={professionalPillar.title}
            />
          </div>
          <p className="mt-7 text-pretty text-base font-bold leading-7 text-[#102b50] sm:text-lg sm:leading-8">
            So this is the final version of the decided nomenclature of 12 pillars and 30 sub-pillars for students and of 12 pillars and 31 sub-pillars for the teachers or professionals. Pillar number 11 will be replaced.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
