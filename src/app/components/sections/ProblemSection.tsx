"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: AlertTriangle,
    title: "Context Switching",
    description: "Jumping between Cursor, terminal, and chat destroys flow state and costs hours per week.",
  },
  {
    icon: RefreshCw,
    title: "Lost Context",
    description: "Every new session means re-explaining your project. Memory shouldn't be ephemeral.",
  },
  {
    icon: Layers,
    title: "Fragmented Workflows",
    description: "No single view of your agents, tasks, and results. You need a dashboard, not a patchwork.",
  },
];

export function ProblemSection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(textRef.current, {
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: "power2.out",
    })
    .from(cardsRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
    }, "-=0.4");
  }, [reducedMotion]);

  return (
    <section id="problem" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.2]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <div  className="lg:pr-8 self-center">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
              The problem
            </p>
            <h2 className="mt-4 font-display text-display-md sm:text-display-lg font-medium text-foreground text-balance">
              Stop context-switching
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-xl">
              The tools you use today were never designed to work together.
            </p>
          </div>

          {/* Right: Bento Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {problems.map((problem) => (
              <Card key={problem.title} className="bg-card border-border hover:border-primary/60 transition-colors duration-300 group rounded-sm">
                <CardContent className="p-6 lg:p-8 h-full">
                  <div className="mb-4">
                    <problem.icon className="h-10 w-10 text-destructive transition-colors duration-300 group-hover:text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2 text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}