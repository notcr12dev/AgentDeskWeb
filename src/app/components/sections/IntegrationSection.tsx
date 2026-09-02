"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { CTAButton } from "../hero/CTAButton";
import { Code, Terminal, Plug, Puzzle, Layout, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  { name: "VS Code", tag: "editor", description: "Edit with full agent context", icon: Code },
  { name: "Cursor", tag: "ai.editor", description: "AI-native code editor", icon: Layout },
  { name: "CLI", tag: "terminal", description: "Terminal-first workflows", icon: Terminal },
  { name: "MCP", tag: "protocol", description: "Model Context Protocol", icon: Plug },
  { name: "Extensions", tag: "plugin", description: "Extend with plugins", icon: Puzzle },
];

// Duplicate items for infinite loop effect (3 sets)
const duplicatedIntegrations = [...integrations, ...integrations, ...integrations];

export function IntegrationSection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Scroll reveal animation for section content
  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.from(sectionRef.current.querySelectorAll(".reveal-item"), {
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

  // Initial transform setup - runs before paint
  useLayoutEffect(() => {
    if (reducedMotion || !trackRef.current) return;
    const track = trackRef.current;
    const centerPosition = 288 * integrations.length;
    gsap.set(track, { x: -centerPosition, force3D: true });
  }, [reducedMotion]);

  // Auto-scroll carousel with recursive GSAP animation
  useEffect(() => {
    if (reducedMotion || !trackRef.current) return;

    const track = trackRef.current;
    const itemWidth = 288;
    let isAnimating = true;

    const animate = () => {
      if (!isAnimating || reducedMotion || isHovering) return;

      animationRef.current = gsap.to(track, {
        x: `-=${288}`,
        duration: 0.7,
        ease: "power2.out",
        onComplete: () => {
          if (!isAnimating) return;

          const currentX = Math.abs(parseFloat(gsap.getProperty(track, "x") as string));
          const maxX = 288 * integrations.length * 3;

          if (currentX >= maxX) {
            gsap.set(track, { x: -288 * integrations.length, force3D: true });
          }

          animate();
        },
      });
    };

    const timer = setTimeout(() => {
      if (isAnimating) animate();
    }, 50);

    return () => {
      isAnimating = false;
      animationRef.current?.kill();
      clearTimeout(timer);
    };
  }, [reducedMotion, isHovering]);

  const scrollToPrev = () => {
    if (!trackRef.current) return;
    gsap.to(trackRef.current, { x: "+=288", duration: 0.6, ease: "power2.out" });
  };

  const scrollToNext = () => {
    if (!trackRef.current) return;
    gsap.to(trackRef.current, {
      x: `-=288`,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        const currentX = Math.abs(parseFloat(gsap.getProperty(trackRef.current!, "x") as string));
        if (currentX >= 288 * integrations.length * 3) {
          gsap.set(trackRef.current!, { x: -288 * integrations.length, force3D: true });
        }
      },
    });
  };

  return (
    <section id="integrations" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
            The stack
          </p>
          <h2 className="mt-4 font-display text-display-md sm:text-display-lg font-medium text-foreground text-balance">
            Works with your stack
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-2xl mx-auto">
            AgentDesk integrates with the tools you already use. No replacement — orchestration.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 rounded-sm bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto"
            aria-label="Previous integration"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-4 lg:gap-5" style={{ willChange: "transform" }}>
              {duplicatedIntegrations.map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0 w-72 lg:w-80 reveal-item overflow-hidden rounded-sm border border-border bg-elevated transition-colors duration-300 hover:border-primary/60"
                >
                  {/* Slot header */}
                  <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      slot.{String((index % integrations.length) + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-success">
                      <span className="inline-block h-1.5 w-1.5 bg-success animate-led" aria-hidden />
                      linked
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex items-start gap-4 p-4 lg:p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                      <integration.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {integration.tag}
                      </p>
                      <h3 className="mt-0.5 font-display text-lg font-medium tracking-tight text-foreground">
                        {integration.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 rounded-sm bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto"
            aria-label="Next integration"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {integrations.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-sm transition-all duration-300 ${
                i === 0 ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to integration ${i + 1}`}
            />
          ))}
        </div>

        {/* Tertiary CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <CTAButton href="/docs#quickstart">Get Started Free</CTAButton>
        </div>
      </div>
    </section>
  );
}
