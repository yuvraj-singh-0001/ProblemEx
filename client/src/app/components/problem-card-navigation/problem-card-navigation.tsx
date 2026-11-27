"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

const returnCardKey = "problemex-return-to-content-card";

type ProblemCardReturnLinkProps = {
  href: string;
  targetId: string;
  className: string;
  children: ReactNode;
};

type ReturnCardTarget = { pathname: string; targetId: string };

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
      onClick={() =>
        window.sessionStorage.setItem(
          returnCardKey,
          JSON.stringify({ pathname, targetId } satisfies ReturnCardTarget),
        )
      }
    >
      {children}
    </Link>
  );
}

export function ProblemCardScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/problem") return;

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

    window.sessionStorage.removeItem(returnCardKey);
    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(target.targetId)?.scrollIntoView({
          block: "start",
          behavior: "auto",
        });
      });
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [pathname]);

  return null;
}
