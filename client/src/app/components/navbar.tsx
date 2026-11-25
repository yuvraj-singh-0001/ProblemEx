"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { problemSections } from "@/app/problem-sections";
import { problemSectionSlugs } from "@/app/problem-section-slugs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto w-full max-w-none px-0">
      <nav aria-label="Main navigation" className="flex items-center justify-between">
        <Link
          aria-label="ProblemEx home"
          className="relative block aspect-[7.55] w-[min(70vw,24rem)] transition-transform hover:scale-[1.02]"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            alt="ProblemEx"
            className="object-cover object-[50%_49%]"
            fill
            priority
            sizes="(max-width: 640px) 70vw, 384px"
            src="/problemEx.png"
          />
        </Link>
        <button
          aria-controls="problem-navigation-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close page menu" : "Open page menu"}
          className="group flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#d6e2e9] bg-white/90 shadow-[0_8px_24px_rgba(16,43,80,0.08)] transition hover:border-[#159447]/40 hover:bg-[#eff8f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447] sm:h-14 sm:w-14"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className={`h-0.5 w-5 rounded-full bg-[#102b50] transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-[#159447] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-[#102b50] transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {menuOpen && (
        <>
          <button
            aria-label="Close page menu"
            className="fixed inset-0 z-[-1] cursor-default"
            onClick={() => setMenuOpen(false)}
            tabIndex={-1}
            type="button"
          />
          <div
            className="absolute right-4 top-[calc(100%+0.75rem)] max-h-[min(75svh,42rem)] w-[min(24rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-[#dce6ed] bg-white/95 p-2 shadow-[0_24px_70px_rgba(16,43,80,0.18)] backdrop-blur-xl sm:right-6 sm:top-[calc(100%+1rem)] sm:rounded-3xl sm:p-3"
            id="problem-navigation-menu"
          >
            <ul className="grid gap-1">
              {problemSections.map((label, index) => (
                <li key={label}>
                  <Link
                    className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#183b61] transition hover:bg-gradient-to-r hover:from-[#edf5fb] hover:to-[#edf8f0] hover:text-[#117541] focus-visible:outline-2 focus-visible:outline-[#159447]"
                    href={`/problem/${problemSectionSlugs[index]}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#edf5ef] text-[10px] font-extrabold tracking-wide text-[#159447]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
