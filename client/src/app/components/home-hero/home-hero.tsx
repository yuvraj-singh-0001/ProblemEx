"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const problemSections = [
  "What Is the Problem?", "The Consequences of the Problem", "The Solution: ProblemEx",
  "What ProblemEx Is Not", "The Core Philosophy of ProblemEx", "The 12-Pillar Framework",
  "The ProblemEx Learning Approach and Methodologies", "The Outcomes and Benefits",
  "How ProblemEx Is Different", "The Structure and Delivery of ProblemEx",
  "The Advantages of ProblemEx for Schools", "Get in Touch",
];
const problemSectionSlugs = [
  "problem", "consequences-of-the-problem", "solution", "what-problemex-is-not",
  "core-philosophy-of-problemex", "12-pillar-framework",
  "problemex-learning-approach-and-methodologies", "outcomes-and-benefits",
  "how-problemex-is-different", "structure-and-delivery-of-problemex",
  "advantages-of-problemex-for-schools", "get-in-touch",
];
const getProblemSectionPath = (slug: string) => slug === "problem" ? "/problem" : `/${slug}`;
const introLines = [
  "ProblemEx turns real-life challenges into practical, usable solutions.",
  "Explore everyday problems and discover ideas that can help solve them.",
];
const introCompleteKey = "problemex-intro-complete";
const handledDocumentKey = "problemex-intro-handled-document";

export default function HomeHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [typedLines, setTypedLines] = useState(["", ""]);
  const [phase, setPhase] = useState<
    "checking" | "entering" | "typing" | "zooming" | "buttons" | "buttons-static"
  >("checking");
  const showButtons = phase === "buttons" || phase === "buttons-static";

  useEffect(() => {
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    const documentToken = String(performance.timeOrigin);
    const reloadAlreadyHandled =
      window.sessionStorage.getItem(handledDocumentKey) === documentToken;

    if (navigation?.type === "reload" && !reloadAlreadyHandled) {
      window.sessionStorage.removeItem(introCompleteKey);
    }
    window.sessionStorage.setItem(handledDocumentKey, documentToken);

    const introComplete =
      window.sessionStorage.getItem(introCompleteKey) === "true";
    const initialPhaseFrame = window.requestAnimationFrame(() => {
      setPhase(introComplete ? "buttons-static" : "entering");
    });

    return () => window.cancelAnimationFrame(initialPhaseFrame);
  }, []);

  useEffect(() => {
    if (phase !== "typing") {
      return;
    }

    let timeout: number;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      timeout = window.setTimeout(() => {
        setTypedLines(introLines);
        window.sessionStorage.setItem(introCompleteKey, "true");
        setPhase("buttons");
      }, 0);

      return () => window.clearTimeout(timeout);
    }

    let lineIndex = 0;
    let characterIndex = 0;

    const zoomOutHeading = () => {
      const heading = headingRef.current;

      if (heading) {
        const { width, height } = heading.getBoundingClientRect();
        const zoomScale = Math.max(
          window.innerWidth / Math.max(width, 1),
          window.innerHeight / Math.max(height, 1),
        );
        heading.style.setProperty("--heading-zoom-scale", String(zoomScale));
      }

      setPhase("zooming");
    };

    const typeNextCharacter = () => {
      const currentLine = introLines[lineIndex];
      characterIndex += 1;
      setTypedLines((lines) =>
        lines.map((line, index) =>
          index === lineIndex
            ? currentLine.slice(0, characterIndex)
            : line,
        ),
      );

      if (characterIndex === currentLine.length) {
        lineIndex += 1;
        characterIndex = 0;
        timeout = window.setTimeout(
          () => {
            if (lineIndex === introLines.length) {
              zoomOutHeading();
            } else {
              typeNextCharacter();
            }
          },
          lineIndex === introLines.length ? 400 : 240,
        );
        return;
      }

      timeout = window.setTimeout(typeNextCharacter, 22);
    };

    timeout = window.setTimeout(typeNextCharacter, 1600);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  return (
    <main
      className={`relative flex min-h-[100svh] overflow-x-clip ${
        showButtons
          ? "items-stretch justify-start bg-[#f4f7fb] px-0"
          : "hero-background items-center justify-center px-4"
      }`}
    >
      {showButtons && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-48 -top-64 z-0 h-[36rem] w-[36rem] rounded-full bg-emerald-500/[0.08] blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-56 -bottom-72 z-0 h-[42rem] w-[42rem] rounded-full bg-red-500/[0.05] blur-[110px]"
          />
        </>
      )}
      {phase !== "checking" && !showButtons && (
        <section
          aria-label="ProblemEx introduction"
          className={`${phase === "zooming" ? "intro-zoom-out " : ""}fixed inset-0 z-10 flex min-h-[100svh] w-full flex-col items-center justify-center text-center`}
        >
          <h1
            className="intro-title absolute left-1/2 top-1/2 bg-gradient-to-r from-[#102b50] via-[#183b61] to-[#159447] bg-clip-text font-bold tracking-[-0.06em] text-transparent"
            onAnimationEnd={(event) => {
              if (event.animationName === "intro-title-arrive") {
                setPhase("typing");
              } else if (event.animationName === "heading-zoom-out") {
                window.sessionStorage.setItem(introCompleteKey, "true");
                setPhase("buttons");
              }
            }}
            ref={headingRef}
          >
            ProblemEx
          </h1>
          <div className="intro-lines absolute min-h-8 space-y-2 px-2 text-center text-sm leading-6 sm:min-h-10 sm:text-lg sm:leading-8">
            {typedLines.map((line, index) =>
              line ? (
                <p
                  className={
                    index === 0
                      ? "font-medium tracking-wide text-[#193c60]"
                      : "text-slate-600"
                  }
                  key={introLines[index]}
                >
                  {line}
                </p>
              ) : null,
            )}
          </div>
        </section>
      )}

      <nav
          aria-label="Problem pages"
          className={`relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1920px] flex-col px-2 pt-2 pb-6 sm:px-4 sm:pt-3 sm:pb-8 xl:px-6 xl:pt-4 xl:pb-10 ${showButtons ? "" : "pointer-events-none absolute inset-0 opacity-0"}`}
        >
          <header className="mb-2 flex shrink-0 justify-center sm:mb-3">
            <h1 className="sr-only">ProblemEx: Practical Skills for Real-Life Problems</h1>
            <div className="relative aspect-[7.55] w-[min(92vw,48rem)]">
              <Image
                alt="ProblemEx"
                className="object-cover object-[50%_54%] drop-shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                fill
                priority
                sizes="(max-width: 640px) 92vw, 768px"
                src="/problemEx.png"
              />
            </div>
          </header>
          <ul className="grid min-h-0 flex-1 grid-cols-2 grid-rows-6 gap-2 sm:gap-3 md:grid-cols-3 md:grid-rows-4 lg:gap-4 2xl:grid-cols-4 2xl:grid-rows-3">
            {problemSections.map((label, index) => (
              <li key={label}>
                <Link
                  aria-label={label}
                  className={`group relative isolate flex h-full min-h-0 flex-col items-start overflow-hidden rounded-[1.15rem] bg-[#c6d1dd] p-[1.5px] text-left shadow-[0_8px_24px_rgba(16,43,80,0.08)] ${phase === "buttons" ? "animate-[card-appear_600ms_cubic-bezier(0.16,1,0.3,1)_backwards]" : ""} transition-shadow duration-200 hover:shadow-[0_12px_30px_rgba(16,43,80,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447] sm:rounded-[1.35rem]`}
                  href={getProblemSectionPath(problemSectionSlugs[index])}
                  onNavigate={() => {
                    window.sessionStorage.setItem(introCompleteKey, "true");
                    setPhase("buttons-static");
                  }}
                  style={{ animationDelay: `${index * 28}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-[1.5px] z-[1] rounded-[1.05rem] bg-[radial-gradient(ellipse_at_100%_100%,rgba(21,148,71,0.08),transparent_48%),radial-gradient(ellipse_at_0%_0%,rgba(237,28,36,0.05),transparent_48%),linear-gradient(135deg,#e2ebf4,#cbd9e8)] transition-[filter] duration-200 group-hover:brightness-[0.98] sm:rounded-[1.25rem]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 scale-150 animate-[spin_5s_linear_infinite] rounded-[inherit] bg-[conic-gradient(from_0deg,transparent_0deg_285deg,rgba(153,27,27,0.25)_310deg,#b91c1c_330deg,#ef4444_345deg,#b91c1c_358deg,#991b1b_360deg)] motion-reduce:animate-none"
                  />
                  <span className="relative z-10 flex items-center gap-2 px-2.5 pt-2 text-[10px] font-extrabold tracking-[0.18em] text-[#159447] min-[430px]:text-xs sm:gap-3 sm:px-4 sm:pt-3 sm:text-sm xl:px-5 xl:pt-4">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span
                      aria-hidden="true"
                      className="h-0.5 w-5 bg-gradient-to-r from-[#ed1c24] to-[#159447] sm:w-8 xl:w-10"
                    />
                  </span>
                  <span className="absolute inset-x-3 top-[58%] z-10 -translate-y-1/2 text-center text-balance text-[10px] font-bold leading-tight text-[#102b50] min-[430px]:top-1/2 min-[430px]:text-xs sm:inset-x-5 sm:text-sm xl:text-base">
                    {label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-2 top-2 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#102b50]/20 bg-white/70 text-sm text-[#102b50] transition-colors duration-200 group-hover:border-[#159447] group-hover:bg-[#159447] group-hover:text-white sm:right-3 sm:top-3 sm:h-8 sm:w-8 sm:text-base xl:h-10 xl:w-10"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
    </main>
  );
}
