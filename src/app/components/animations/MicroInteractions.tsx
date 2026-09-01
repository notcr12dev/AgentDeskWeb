"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

export function MicroInteractions({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

    const buttons = containerRef.current.querySelectorAll('[data-micro-interaction]');

    buttons.forEach((btn) => {
      const el = btn as HTMLElement;

      const handleEnter = () => {
        gsap.to(el, { scale: 1.02, duration: 0.15, ease: "power2.out" });
      };
      const handleLeave = () => {
        gsap.to(el, { scale: 1, duration: 0.15, ease: "power2.out" });
      };
      const handleDown = () => {
        gsap.to(el, { scale: 0.98, duration: 0.1, ease: "power2.in" });
      };
      const handleUp = () => {
        gsap.to(el, { scale: 1.02, duration: 0.1, ease: "power2.out" });
      };

      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
      el.addEventListener("mousedown", handleDown);
      el.addEventListener("mouseup", handleUp);

      return () => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
        el.removeEventListener("mousedown", handleDown);
        el.removeEventListener("mouseup", handleUp);
      };
    });
  }, [reducedMotion]);

  return (
    <div ref={containerRef} data-micro-interaction-group>
      {children}
    </div>
  );
}
