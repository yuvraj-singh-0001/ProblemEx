"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { problemSections } from "@/app/problem-sections";
const introLines = [
  "ProblemEx turns real-life challenges into practical, usable solutions.",
  "Explore everyday problems and discover ideas that can help solve them.",
];
const introCompleteKey = "problemex-intro-complete";

export default function HomeHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [typedLines, setTypedLines] = useState(["", ""]);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
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
    <main
      className={`relative flex min-h-[100svh] overflow-x-clip ${
        phase === "buttons"
          ? "items-stretch justify-start bg-[#f4f7fb] px-0"
          : "hero-background items-center justify-center px-4"
      }`}
    >
      {phase === "buttons" && (
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
      {phase !== "checking" && phase !== "buttons" && (
        <section
          aria-label="ProblemEx introduction"
          className={`${phase === "zooming" ? "intro-zoom-out " : ""}relative z-10 flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center text-center`}
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
          <div className="intro-lines absolute left-0 right-0 min-h-8 space-y-2 px-2 text-sm leading-6 sm:min-h-10 sm:text-lg sm:leading-8">
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

      {phase === "buttons" && (
        <nav
          aria-label="Problem pages"
          className="relative z-10 mx-auto flex h-[100svh] min-h-[100svh] w-full max-w-[1920px] flex-col px-2 pt-2 pb-6 sm:px-4 sm:pt-3 sm:pb-8 xl:px-6 xl:pt-4 xl:pb-10"
        >
          <header className="mb-2 flex shrink-0 justify-center sm:mb-3">
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
                  aria-busy={loadingIndex === index}
                  aria-label={
                    loadingIndex === index ? `Opening ${label}` : label
                  }
                  className={`group relative isolate flex h-full min-h-0 flex-col items-start overflow-hidden rounded-[1.15rem] p-[1.5px] text-left shadow-[0_8px_24px_rgba(16,43,80,0.08)] animate-[card-appear_600ms_cubic-bezier(0.16,1,0.3,1)_backwards] transition-shadow duration-200 hover:shadow-[0_12px_30px_rgba(16,43,80,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447] sm:rounded-[1.35rem] ${loadingIndex !== null && loadingIndex !== index ? "pointer-events-none opacity-55" : ""}`}
                  href={`/problem/${index + 1}`}
                  onNavigate={(event) => {
                    if (loadingIndex !== null) {
                      event.preventDefault();
                      return;
                    }

                    setLoadingIndex(index);
                  }}
                  style={{ animationDelay: `${index * 28}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-[spin_7s_linear_infinite] rounded-[inherit] bg-[conic-gradient(from_0deg,#102b50,#159447_25%,#ed1c24_48%,#159447_70%,#183052)] motion-reduce:animate-none"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-[1.5px] z-[1] rounded-[1.05rem] bg-[radial-gradient(ellipse_at_100%_100%,rgba(21,148,71,0.13),transparent_48%),radial-gradient(ellipse_at_0%_0%,rgba(237,28,36,0.08),transparent_48%),linear-gradient(135deg,#f1f4f8,#e4eaf1)] transition-[filter] duration-200 group-hover:brightness-[0.98] sm:rounded-[1.25rem]"
                  />
                  <span className="relative z-10 flex items-center gap-2 px-2.5 pt-2 text-[10px] font-extrabold tracking-[0.18em] text-[#159447] min-[430px]:text-xs sm:gap-3 sm:px-4 sm:pt-3 sm:text-sm xl:px-5 xl:pt-4">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span
                      aria-hidden="true"
                      className="h-0.5 w-5 bg-gradient-to-r from-[#ed1c24] to-[#159447] sm:w-8 xl:w-10"
                    />
                  </span>
                  <span className="absolute inset-x-3 top-[58%] z-10 -translate-y-1/2 text-center text-balance text-[10px] font-bold leading-tight text-[#102b50] min-[430px]:top-1/2 min-[430px]:text-xs sm:inset-x-5 sm:text-sm xl:text-base">
                    {loadingIndex === index ? "Opening..." : label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-2 top-2 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#102b50]/20 bg-white/70 text-sm text-[#102b50] transition-colors duration-200 group-hover:border-[#159447] group-hover:bg-[#159447] group-hover:text-white sm:right-3 sm:top-3 sm:h-8 sm:w-8 sm:text-base xl:h-10 xl:w-10"
                  >
                    {loadingIndex === index ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#102b50]/20 border-t-[#159447]" />
                    ) : (
                      "→"
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </main>
  );
}
