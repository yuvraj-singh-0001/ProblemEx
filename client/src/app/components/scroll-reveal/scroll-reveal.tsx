"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateOnReveal?: boolean;
  duration?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animateOnReveal = false,
  duration = 620,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    let motionTimer: number | undefined;

    const reveal = (playMotion = true) => {
      element.classList.add("scroll-reveal-visible");
      if (!animateOnReveal || !playMotion) return;

      motionTimer = window.setTimeout(() => {
        element.classList.add("scroll-reveal-animations-started");
        element.querySelectorAll<SVGAnimationElement>("[data-reveal-motion]").forEach((animation) => {
          animation.beginElement();
        });
      }, delay + duration);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal(false);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      reveal();
      return () => {
        if (motionTimer !== undefined) window.clearTimeout(motionTimer);
      };
    }

    element.classList.add("scroll-reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.unobserve(element);
      },
      // Large sections can be taller than the viewport; reveal them as soon
      // as any part enters view instead of waiting for an unreachable ratio.
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (motionTimer !== undefined) window.clearTimeout(motionTimer);
    };
  }, [animateOnReveal, delay, duration]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`.trim()}
      style={{
        "--scroll-reveal-delay": `${delay}ms`,
        "--scroll-reveal-duration": `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
