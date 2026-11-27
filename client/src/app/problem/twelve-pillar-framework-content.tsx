import ScrollReveal from "@/app/components/scroll-reveal";

export const twelvePillarDescription =
  "Explore the ProblemEx 12-Pillar Framework: how its student pillars organise real-life situations, and the framework's scope, limitations and sub-pillars.";

export const twelvePillarKeywords = [
  "ProblemEx 12-Pillar Framework",
  "12 pillars of ProblemEx",
  "Understanding the 12-Pillar Framework",
  "scope and limitations of the 12-Pillar Framework",
  "real-life situations framework",
  "ProblemEx pillars",
  "situational knowledge framework",
  "real-life challenges and dilemmas",
  "ProblemEx student framework",
  "Student Framework SKQ pillars",
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
  { gradient: "from-[#176d88] to-[#1b788b]", accent: "#147b94" },
  { gradient: "from-[#147b4b] to-[#168356]", accent: "#147b4b" },
  { gradient: "from-[#126a80] to-[#176f80]", accent: "#126a80" },
  { gradient: "from-[#117b68] to-[#16806f]", accent: "#117b68" },
  { gradient: "from-[#87540c] to-[#95600f]", accent: "#87540c" },
  { gradient: "from-[#9d392d] to-[#a84334]", accent: "#9d392d" },
];

type PillarInfographicProps = {
  title: string;
  subPillars: { title: string; detail?: string }[];
  index: number;
  delay?: number;
};

function PillarIcon({ label, className = "" }: { label: string; className?: string }) {
  const text = label.toLowerCase();
  const kind = text.includes("financial") || text.includes("banking") || text.includes("finance")
      ? "bank"
      : text.includes("consumer") || text.includes("marketplace")
        ? "cart"
      : text.includes("contract") || text.includes("notice") || text.includes("procedure")
        ? "document"
        : text.includes("legal") || text.includes("rights") || text.includes("law enforcement")
          ? "scales"
          : text.includes("cybersecurity") || text.includes("fraud") || text.includes("protection") || text.includes("security")
            ? "shield"
            : text.includes("digital") || text.includes("technology") || text.includes("gadget") || text.includes("ai usage")
              ? "device"
              : text.includes("mental") || text.includes("psychological") || text.includes("addiction") || text.includes("emotional")
                ? "mind"
                : text.includes("medical") || text.includes("health") || text.includes("nutrition") || text.includes("illness")
                  ? "medical"
                  : text.includes("accident") || text.includes("disaster") || text.includes("emergency") || text.includes("harassment")
                    ? "shield"
                    : text.includes("cultural") || text.includes("religious") || text.includes("social") || text.includes("interpersonal")
                      ? "people"
                      : text.includes("government") || text.includes("public service") || text.includes("institution") || text.includes("organisation")
                        ? "building"
                        : text.includes("home") || text.includes("property") || text.includes("household")
                          ? "home"
                          : text.includes("travel") || text.includes("transport") || text.includes("mobility")
                            ? "travel"
                            : text.includes("communication") || text.includes("speaking") || text.includes("presentation")
                              ? "speech"
                              : text.includes("personality") || text.includes("self-awareness") || text.includes("self-esteem") || text.includes("peer")
                                ? "person"
                                : text.includes("academic") || text.includes("student") || text.includes("career") || text.includes("skill development")
                                  ? "book"
                                  : text.includes("workplace") || text.includes("employment") || text.includes("professional")
                                    ? "briefcase"
                                    : text.includes("family") || text.includes("marriage") || text.includes("partner")
                                      ? "family"
                                      : "people";

  const common = { stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.7 };

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" {...common}>
      {kind === "cart" && <><path d="M3 4h2l2.2 11.5h11L21 8H6M9 19.5h.01M18 19.5h.01" /><circle cx="9" cy="19.5" r="1.5" /><circle cx="18" cy="19.5" r="1.5" /><path d="M8 11h11M11 8.5l1 7M16 8.5l-1 7" /></>}
      {kind === "bank" && <path d="M3 8h18M5 8v10m4-10v10m6-10v10m4-10v10M3 19h18M2 21h20M4 6l8-4 8 4" />}
      {kind === "building" && <><path d="M3 21h18M5 21V8h14v13M5 8l7-5 7 5M8 11h2m4 0h2m-8 4h2m4 0h2" /><path d="M12 3V1m0 0h4l-1.5 2" /></>}
      {kind === "scales" && <path d="M12 3v18M5 6h14M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM5 21h14" />}
      {kind === "document" && <><path d="M7 3h7l4 4v14H7zM14 3v5h5M10 12h5M10 16h5" /></>}
      {kind === "device" && <><rect x="4" y="3" width="16" height="14" rx="2" /><path d="M2 21h20M9 17v4m6-4v4" /><circle cx="12" cy="10" r="2.5" /></>}
      {kind === "shield" && <><path d="M12 2 20 5v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>}
      {kind === "medical" && <><path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z" /><path d="M12 9v6m-3-3h6" /></>}
      {kind === "people" && <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.3-3.5 2.3-5.5 6-5.5s5.7 2 6 5.5M15 15c3.6-.5 5.7 1.3 6 4" /></>}
      {kind === "mind" && <><path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z" /><path d="M8.5 12h2l1.2-2.5 1.5 5 1.1-2.5h1.2" /></>}
      {kind === "home" && <><path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7" /></>}
      {kind === "travel" && <><path d="M3 15h18l-2-6H6l-3 6Zm2 0v3h14v-3M7 18v2m10-2v2" /><circle cx="7" cy="15" r="1" /><circle cx="17" cy="15" r="1" /></>}
      {kind === "speech" && <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 9h8M8 12h5" /></>}
      {kind === "person" && <><circle cx="12" cy="7" r="4" /><path d="M4 21c.5-5 3.2-7.5 8-7.5s7.5 2.5 8 7.5" /></>}
      {kind === "book" && <><path d="M3 5.5c3.5-1.5 6.5-.8 9 1.5v14c-2.5-2.3-5.5-3-9-1.5v-14Zm18 0c-3.5-1.5-6.5-.8-9 1.5v14c2.5-2.3 5.5-3 9-1.5v-14Z" /></>}
      {kind === "briefcase" && <><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M8 8V5h8v3M3 13h18m-11 0v2h4v-2" /></>}
      {kind === "family" && <><circle cx="8" cy="8" r="3" /><circle cx="16" cy="8" r="3" /><path d="M2.5 20c.3-4 2.2-6 5.5-6s5.2 2 5.5 6m-1 0c.3-4 2.2-6 5.5-6s5.2 2 5.5 6" /></>}
    </svg>
  );
}

function PillarInfographic({ title, subPillars, index, delay = 0 }: PillarInfographicProps) {
  const theme = pillarThemes[index % pillarThemes.length];
  const displayTitle = title.replace(/^Pillar \d+\.\s*/, "");

  return (
    <ScrollReveal className="min-w-0" delay={delay}>
      <section aria-label={displayTitle} className="relative mx-auto w-full max-w-2xl pb-8 pt-2">
        <h3 className="mb-4 text-center text-balance text-lg font-extrabold leading-snug text-[#102b50] sm:text-xl">{displayTitle}</h3>
        <div className="relative mx-auto h-44 w-full sm:h-48">
          <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-8 w-full overflow-visible lg:block" preserveAspectRatio="none" viewBox="0 0 1200 80">
            {subPillars.length === 3 ? (
              <>
                <path d="M478 0 C420 12 354 36 300 72 L288 52 C348 24 411 4 478 -8 Z M600 0 C600 24 600 48 600 72 L584 72 C584 45 584 20 584 -2 Z M722 0 C780 12 846 36 900 72 L912 52 C852 24 789 4 722 -8 Z" fill="#dce8ed" />
                <path d="M478 0 C420 10 354 33 300 68 L294 57 C352 29 414 9 478 -3 Z M600 0 C600 24 600 48 600 68 L592 68 C592 45 592 20 592 -2 Z M722 0 C780 10 846 33 900 68 L906 57 C848 29 786 9 722 -3 Z" fill={theme.accent} />
              </>
            ) : (
              <>
                <path d="M478 2 C420 12 354 36 300 72 L288 52 C348 24 411 4 478 -8 Z" fill="#dce8ed" />
                <path d="M478 0 C420 10 354 33 300 68 L294 57 C352 29 414 9 478 -3 Z" fill={theme.accent} />
                <path d="M722 2 C780 12 846 36 900 72 L912 52 C852 24 789 4 722 -8 Z" fill="#dce8ed" />
                <path d="M722 0 C780 10 846 33 900 68 L906 57 C848 29 786 9 722 -3 Z" fill={theme.accent} />
              </>
            )}
          </svg>
          <div className="group absolute left-1/2 top-0 z-10 flex h-40 w-40 -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-[#365b6b] bg-white p-2.5 shadow-[0_12px_24px_rgba(16,43,80,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_30px_rgba(16,43,80,0.28)] motion-reduce:transform-none sm:h-44 sm:w-44 sm:border-[7px]">
            <div aria-hidden="true" className="flex h-full w-full items-center justify-center rounded-full border border-[#e3e9ec] bg-gradient-to-br from-white to-[#f4f7f9] text-[color:var(--pillar-accent)] shadow-inner" style={{ "--pillar-accent": theme.accent } as React.CSSProperties}>
              <PillarIcon className="h-12 w-12 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-14 sm:w-14" label={displayTitle} />
            </div>
          </div>
        </div>

        <div className={`relative z-10 mx-auto -mt-1 grid w-full min-w-0 grid-cols-1 gap-x-4 gap-y-10 px-2 sm:max-w-xl sm:px-3 lg:max-w-2xl lg:gap-x-5 ${subPillars.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {subPillars.map((subPillar, subIndex) => {
            const subNumber = String(subIndex + 1).padStart(2, "0");
            const subTitle = subPillar.title.replace(/^\d+(?:\.\d+)+\s*/, "");
            return (
              <div className={subPillars.length === 3 && subIndex === 1 ? "lg:mt-10" : ""} key={subPillar.title}>
                <article className={`group relative flex h-full min-h-64 min-w-0 flex-col items-center rounded-b-[4rem] rounded-t-[3.5rem] bg-gradient-to-br ${theme.gradient} px-3 pb-4 pt-20 text-center text-white shadow-[0_12px_24px_rgba(16,43,80,0.17)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(16,43,80,0.22)] sm:min-h-72 sm:px-4 sm:pb-5 sm:pt-24`}>
                  <div aria-hidden="true" className="absolute -top-3 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-white bg-gradient-to-br from-white to-[#eef4f6] text-[color:var(--pillar-accent)] shadow-[0_8px_18px_rgba(16,43,80,0.2)] sm:-top-4 sm:h-24 sm:w-24" style={{ "--pillar-accent": theme.accent } as React.CSSProperties}>
                    <PillarIcon className="h-10 w-10 sm:h-12 sm:w-12" label={subPillar.title} />
                  </div>
                  <h4 className="mx-auto w-full max-w-xs break-words text-pretty text-xs font-bold leading-snug sm:text-sm sm:leading-5">{subTitle}</h4>
                  {subPillar.detail && <p className="mt-2 text-xs leading-5 text-white/95 sm:text-sm">{subPillar.detail}</p>}
                  <span aria-hidden="true" className="mt-auto pt-5 text-4xl font-black tracking-tight text-white/75 sm:text-5xl">{subNumber}</span>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}

const frameworkLimitations = [
  {
    title: "1. The Framework Is Not Exhaustive",
    paragraphs: [
      "The 12 pillars are not intended to represent an exhaustive list of every situation, problem, challenge or dilemma that an individual may encounter in real life. The real world is far too diverse and dynamic for any framework to capture every conceivable situation.",
      "ProblemEx is a foundational programme and these 12 pillars represent a carefully organised framework within the scope and objectives of the programme.",
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
          <h2 className={sectionHeading}>Understanding the 12-Pillar Framework</h2>
          <div className="mt-6 space-y-5">
            <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
              Real-life situations, problems, challenges and dilemmas come in all shapes and forms. Each situation may demand a different combination of knowledge, skills, abilities, judgement and responses. The requirements of one situation may be entirely different from those of another.
            </p>
            <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
              For the ease of understanding, systematic learning and programme development, <strong className="font-extrabold text-[#147b4b]">The True Topper (TTT) has organised these diverse real-life situations into 12 broad groupings</strong>, which form the foundation of the ProblemEx framework. We term them as Pillars.
            </p>
            <p className="text-pretty text-[17px] leading-7 text-slate-700 sm:text-[19px] sm:leading-8">
              These 12 pillars represent broad areas of life within which individuals encounter different kinds of situations, challenges, problems and dilemmas, and develop the abilities required to navigate them effectively.
            </p>
          </div>

        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <h2 className={sectionHeading}>Understanding the Scope and Limitations of the Framework</h2>
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
          <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center rounded-2xl border border-[#d5e6df] bg-gradient-to-br from-white via-[#f5faf7] to-[#eaf4ef] px-5 py-6 text-center shadow-[0_12px_28px_rgba(16,43,80,0.08)] sm:mt-10 sm:rounded-3xl sm:px-8 sm:py-8">
            <span aria-hidden="true" className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#159497] to-[#159447]" />
            <h3 className="text-2xl font-extrabold tracking-tight text-[#102b50] sm:text-3xl">1. Student Framework</h3>
            <p className="mt-3 text-base font-semibold text-[#147b4b] sm:text-lg">
              Nomenclature of 12 SKQ Pillars and 30 Sub-Pillars
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-20 sm:mt-16 sm:gap-y-24 lg:grid-cols-2 2xl:grid-cols-3">
            {studentPillars.map((pillar, index) => (
              <PillarInfographic
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
          <div className="mt-14">
            <PillarInfographic index={10} subPillars={professionalPillar.subPillars} title={professionalPillar.title} />
          </div>
          <p className="mt-7 text-pretty text-base font-bold leading-7 text-[#102b50] sm:text-lg sm:leading-8">
            So this is the final version of the decided nomenclature of 12 pillars and 30 sub-pillars for students and of 12 pillars and 31 sub-pillars for the teachers or professionals. Pillar number 11 will be replaced.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
