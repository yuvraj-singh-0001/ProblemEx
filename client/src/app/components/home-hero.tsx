"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const buttonLabels = [
  "The Problem",
  "The Consequences of the Problem",
  "The Solution: ProblemEx",
  "What ProblemEx Is Not",
  "The Core Philosophy of ProblemEx",
  "The 12-Pillar Framework",
  "The ProblemEx Learning Approach and Methodologies",
  "The Outcomes and Benefits",
  "How ProblemEx Is Different",
  "The Structure and Delivery of ProblemEx",
  "The Advantages of ProblemEx for Schools",
];
const introLines = [
  "ProblemEx turns real-life challenges into practical, usable solutions.",
  "Explore everyday problems and discover ideas that can help solve them.",
];
const introCompleteKey = "problemex-intro-complete";

export default function HomeHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [typedLines, setTypedLines] = useState(["", ""]);
  const [phase, setPhase] = useState<
    "checking" | "entering" | "typing" | "zooming" | "buttons"
  >("checking");

  useEffect(() => {
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type === "reload") {
      window.sessionStorage.removeItem(introCompleteKey);
    }

    setPhase(
      window.sessionStorage.getItem(introCompleteKey) === "true"
        ? "buttons"
        : "entering",
    );
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
    <main className="hero-background relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4">
      {phase !== "checking" && phase !== "buttons" && <section
        aria-label="ProblemEx introduction"
        aria-hidden={phase === "buttons"}
        className={`${phase === "zooming" ? "intro-zoom-out " : ""}relative z-10 flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center text-center`}
      >
        <h1
          className="intro-title absolute left-1/2 top-1/2 bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text font-bold tracking-[-0.06em] text-transparent"
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
        <div className="intro-lines absolute left-0 right-0 min-h-8 space-y-2 px-2 text-sm leading-6 sm:min-h-10 sm:text-lg sm:leading-8">
          {typedLines.map((line, index) =>
            line ? (
              <p
                className={
                  index === 0
                    ? "font-medium tracking-wide text-cyan-100"
                    : "text-slate-200"
                }
                key={introLines[index]}
              >
                {line}
              </p>
            ) : null,
          )}
        </div>
      </section>}

      {phase === "buttons" && (
        <nav
          aria-label="Problem pages"
          className="button-grid relative z-10 w-full max-w-4xl"
        >
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {buttonLabels.map((label, index) => (
              <li key={label}>
                <Link
                  className="problem-button flex min-h-16 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 px-4 py-3 text-center text-sm font-semibold text-slate-100 shadow-lg shadow-black/10 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:min-h-20 sm:rounded-2xl sm:text-base"
                  href={`/problem/${index + 1}`}
                  style={{ animationDelay: `${index * 28}ms` }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </main>
  );
}
