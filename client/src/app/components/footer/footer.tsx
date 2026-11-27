import Link from "next/link";
import type { ReactNode } from "react";

const COPYRIGHT_YEAR = 2026;

const exploreLinks = [
  { label: "What Is the Problem?", href: "/problem" },
  { label: "Consequences of the Problem", href: "/consequences-of-the-problem" },
  { label: "The ProblemEx Solution", href: "/solution" },
  { label: "What ProblemEx Is Not", href: "/what-problemex-is-not" },
  { label: "Core Philosophy", href: "/core-philosophy-of-problemex" },
  { label: "12-Pillar Framework", href: "/12-pillar-framework" },
];

const moreLinks = [
  { label: "Learning Approach", href: "/problemex-learning-approach-and-methodologies" },
  { label: "Outcomes and Benefits", href: "/outcomes-and-benefits" },
  { label: "How ProblemEx Is Different", href: "/how-problemex-is-different" },
  { label: "Structure and Delivery", href: "/structure-and-delivery-of-problemex" },
  { label: "For Schools", href: "/advantages-of-problemex-for-schools" },
  { label: "Get in Touch", href: "/get-in-touch" },
];

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex min-h-8 items-center text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#102b4e]"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#102b4e] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 sm:pt-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-12">
          <div className="max-w-sm">
            <Link href="/" aria-label="ProblemEx home" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              <span className="grid size-11 place-items-center rounded-xl bg-cyan-300 text-lg font-black text-[#102b4e]">P</span>
              <span className="text-2xl font-extrabold tracking-tight">ProblemEx</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Practical learning for understanding real-life challenges and building useful ways to respond.
            </p>
            <Link
              href="/get-in-touch"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-300/60 px-5 text-sm font-semibold text-cyan-200 transition-colors hover:border-cyan-200 hover:bg-cyan-300 hover:text-[#102b4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#102b4e]"
            >
              Get in touch <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>

          <nav aria-label="ProblemEx pages">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Explore</h2>
            <ul className="mt-4 space-y-1">
              {exploreLinks.map((link) => <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>)}
            </ul>
          </nav>

          <nav aria-label="More ProblemEx pages">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">More to explore</h2>
            <ul className="mt-4 space-y-1">
              {moreLinks.map((link) => <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>)}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Connect</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Follow ProblemEx and The True Topper on LinkedIn for updates and ideas.
            </p>
            <a
              href="https://www.linkedin.com/company/thetruetopper/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The True Topper on LinkedIn (opens in a new tab)"
              className="mt-5 inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-slate-100 transition-colors hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#102b4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#102b4e]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.23a1.55 1.55 0 1 1 .02-3.1 1.55 1.55 0 0 1-.02 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22V18H10V9.4h2.56v1.18h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.09Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {COPYRIGHT_YEAR} ProblemEx by The True Topper. All rights reserved.</p>
          <Link href="/" className="w-fit transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            Back to home
          </Link>
        </div>
      </div>
    </footer>
  );
}
