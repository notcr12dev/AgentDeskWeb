"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-in" | "slide-left" | "stagger";
  className?: string;
}

export function ScrollReveal({ children, variant = "fade-up", className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    const element = ref.current;
    const defaults = {
      trigger: element,
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play none none reverse" as const,
    };

    if (variant === "fade-up") {
      gsap.from(element.children, {
        scrollTrigger: defaults,
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      });
    } else if (variant === "fade-in") {
      gsap.from(element.children, {
        scrollTrigger: defaults,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      });
    } else if (variant === "slide-left") {
      gsap.from(element.children, {
        scrollTrigger: defaults,
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      });
    } else if (variant === "stagger") {
      gsap.from(element.children, {
        scrollTrigger: defaults,
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      });
    }
  }, [variant, reducedMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
