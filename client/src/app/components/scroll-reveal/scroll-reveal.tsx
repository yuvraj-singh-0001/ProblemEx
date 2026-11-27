"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    element.classList.add("scroll-reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("scroll-reveal-visible");
        observer.unobserve(element);
      },
      // Large sections can be taller than the viewport; reveal them as soon
      // as any part enters view instead of waiting for an unreachable ratio.
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`.trim()}
      style={{ "--scroll-reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
