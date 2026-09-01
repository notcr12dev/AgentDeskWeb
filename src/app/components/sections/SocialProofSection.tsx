"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "AgentDesk eliminated our context-switching overhead entirely.",
    author: "Jane Doe",
    role: "Staff Engineer at TechCorp",
  },
  {
    text: "One interface for all our agents. Productivity up 40%.",
    author: "John Smith",
    role: "CTO at ScaleOps",
  },
  {
    text: "The orchestration layer is a game-changer for our team.",
    author: "Alex Chen",
    role: "Lead, AI Platform",
  },
];

export function SocialProofSection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !quotesRef.current) return;

    gsap.from(quotesRef.current.children, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, [reducedMotion]);

  return (
    <section id="social-proof" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
            The signal
          </p>
          <h2 className="mt-4 font-display text-display-md sm:text-display-lg font-medium text-foreground text-balance">
            Trusted by builders
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Teams and individuals across the industry rely on AgentDesk.
          </p>
        </div>

        <div  className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-card border border-border rounded-lg p-6 lg:p-8">
              <p className="text-body-lg text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-medium text-foreground">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-card border border-border rounded-lg">
            <div className="text-3xl lg:text-4xl font-display font-medium text-primary">10,000+</div>
            <div className="text-muted-foreground text-sm">Active agents deployed</div>
          </div>
        </div>
      </div>
    </section>
  );
}