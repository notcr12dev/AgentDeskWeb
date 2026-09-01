"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Active Users", value: "12,480+" },
  { label: "Agents Deployed", value: "47,392+" },
  { label: "GitHub Stars", value: "6,812+" },
  { label: "Community Members", value: "3,206+" },
];

export function Stats() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !statsRef.current) return;

    const items = statsRef.current.children;

    gsap.from(items, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, [reducedMotion]);

  return (
    <section className="py-24 lg:py-32 bg-background border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div  className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}