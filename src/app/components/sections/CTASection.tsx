"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { CTAButton } from "../hero/CTAButton";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !contentRef.current) return;

    gsap.from(contentRef.current, {
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
    });

    // Sticky CTA trigger
    ScrollTrigger.create({
      trigger: "#features",
      start: "bottom 80%",
      onEnter: () => setShowSticky(true),
      onLeaveBack: () => setShowSticky(false),
    });
  }, [reducedMotion]);

  return (
    <>
      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.2]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={contentRef} className="text-center">
            <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
              Get started
            </p>
            <h2 className="mt-4 font-display text-display-md sm:text-display-lg font-medium text-foreground text-balance">
              Start orchestrating in 5 minutes
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Install AgentDesk, connect your first agent, and see the difference.
              No complex setup, no vendor lock-in.
            </p>
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/docs#quickstart">Get Started Free</CTAButton>
              <CTAButton href="/docs" variant="outline">
                Read the Docs
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA on scroll */}
      {showSticky && (
        <div
          className="fixed bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up"
          role="region"
          aria-label="Call to action"
        >
          <CTAButton href="/docs#quickstart" className="w-auto px-8 py-3">
            Start Orchestrating
          </CTAButton>
        </div>
      )}
    </>
  );
}