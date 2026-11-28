"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

const returnCardKey = "problemex-return-to-content-card";
const introCompleteKey = "problemex-intro-complete";
const returnToHomeCardsKey = "problemex-return-to-home-cards";

type ProblemCardReturnLinkProps = {
  href: string;
  targetId: string;
  className: string;
  children: ReactNode;
};

type ProblemCardNavigationLinkProps = ProblemCardReturnLinkProps & {
  ariaLabel?: string;
  id?: string;
};

type DetailBackButtonProps = { fallbackHref: string };

type ReturnCardTarget = { pathname: string; targetId: string };

function rememberReturnTarget(pathname: string, targetId: string) {
  window.sessionStorage.setItem(
    returnCardKey,
    JSON.stringify({ pathname, targetId } satisfies ReturnCardTarget),
  );
}

export function HomeCardsReturnMarker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;

    // Any section visit marks the intro as complete so returning home lands
    // on the section cards instead of replaying the full-screen animation.
    window.sessionStorage.setItem(introCompleteKey, "true");
    window.sessionStorage.setItem(returnToHomeCardsKey, "true");
  }, [pathname]);

  return null;
}

export function ProblemCardReturnLink({
  href,
  targetId,
  className,
  children,
}: ProblemCardReturnLinkProps) {
  const pathname = href.split("?")[0];

  return (
    <Link
      className={className}
      href={href}
      replace
      scroll={false}
      onClick={() => rememberReturnTarget(pathname, targetId)}
    >
      {children}
    </Link>
  );
}

export function ProblemCardNavigationLink({
  href,
  targetId,
  className,
  children,
  ariaLabel,
  id,
}: ProblemCardNavigationLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={className}
      href={href}
      aria-label={ariaLabel}
      id={id}
      onClick={() => rememberReturnTarget(pathname, targetId)}
    >
      {children}
    </Link>
  );
}

export function DetailBackButton({ fallbackHref }: DetailBackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallbackHref);
      }}
      className="inline-flex min-h-10 shrink-0 items-center gap-2 self-start rounded-full border border-[#d4e0e8] bg-white/90 px-4 py-2 text-sm font-semibold text-[#147b4b] shadow-[0_5px_14px_rgba(16,43,80,0.08)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#159447] hover:shadow-[0_9px_20px_rgba(16,43,80,0.14)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#159447]"
    >
      <span aria-hidden="true">&larr;</span>
      <span>Back</span>
    </button>
  );
}

export function ProblemCardScrollRestorer({ block = "start" }: { block?: ScrollLogicalPosition }) {
  const pathname = usePathname();

  useEffect(() => {
    const storedTarget = window.sessionStorage.getItem(returnCardKey);
    if (!storedTarget) return;

    let target: ReturnCardTarget;
    try {
      target = JSON.parse(storedTarget) as ReturnCardTarget;
    } catch {
      window.sessionStorage.removeItem(returnCardKey);
      return;
    }
    if (target.pathname !== pathname) return;

    const restoreTarget = () => {
      document.getElementById(target.targetId)?.scrollIntoView({
        block,
        behavior: "auto",
      });
    };

    // Reapply after the route transition settles so Next.js/browser scroll
    // restoration cannot pull the page back to the top afterward.
    const restoreTimers = [80, 320].map((delay) => window.setTimeout(restoreTarget, delay));
    const clearTargetTimer = window.setTimeout(() => {
      window.sessionStorage.removeItem(returnCardKey);
    }, 500);

    return () => {
      restoreTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(clearTargetTimer);
    };
  }, [block, pathname]);

  return null;
}
