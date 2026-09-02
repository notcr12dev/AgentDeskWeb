"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { Bot, Database, GitBranch, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Bot,
    code: "registry",
    title: "Agent Registry",
    state: "ready",
    description:
      "Register, manage, and orchestrate multiple AI agents from a single dashboard. Version control your agents like code.",
  },
  {
    icon: Database,
    code: "memory",
    title: "Persistent Memory",
    state: "synced",
    description:
      "Agents remember context across sessions. Build knowledge bases that persist and grow with your projects.",
  },
  {
    icon: GitBranch,
    code: "workflow",
    title: "Workflow Orchestration",
    state: "running",
    description:
      "Chain agents into complex workflows. Visualize execution paths, handle failures, and retry automatically.",
  },
  {
    icon: Shield,
    code: "eval",
    title: "Evaluation & Testing",
    state: "green",
    description:
      "Test agents against benchmarks. Track performance over time. Catch regressions before they reach production.",
  },
];

/** LED + mono status chip for each module row. */
function ModuleState({ state }: { state: string }) {
  const tones: Record<string, string> = {
    ready: "text-primary border-primary/40 bg-primary/10",
    synced: "text-success border-success/40 bg-success/10",
    running: "text-warning border-warning/40 bg-warning/10",
    green: "text-success border-success/40 bg-success/10",
  };
  const leds: Record<string, string> = {
    ready: "bg-primary",
    synced: "bg-success",
    running: "bg-warning animate-led",
    green: "bg-success",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
        tones[state] ?? tones.ready
      }`}
    >
      <span className={`inline-block h-1.5 w-1.5 ${leds[state] ?? leds.ready}`} aria-hidden />
      {state}
    </span>
  );
}

export function Features() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !rowsRef.current) return;

    gsap.from(rowsRef.current.children, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, [reducedMotion]);

  return (
    <section id="features" className="py-24 lg:py-32 bg-background border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
            The console
          </p>
          <h2 className="mt-4 font-display text-display-md sm:text-display-lg font-medium text-foreground text-balance">
            What AgentDesk replaces
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-2xl mx-auto">
            One platform to orchestrate your AI agents. No more switching between tools, losing
            context, or managing disconnected workflows.
          </p>
        </div>

        {/* Module registry — console panel with hairline rows, like the app's session list */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-sm border border-border-default bg-elevated">
          {/* Console header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5 sm:px-5">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
              <span className="inline-block h-2 w-2 bg-primary" aria-hidden />
              Module registry
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 bg-success" aria-hidden />
              4 loaded
            </span>
          </div>

          {/* Rows */}
          <div ref={rowsRef}>
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group flex items-start gap-4 border-b border-border px-4 py-5 transition-[background-color,box-shadow] duration-300 last:border-b-0 hover:bg-background/40 hover:shadow-rail sm:gap-5 sm:px-5 sm:py-6"
              >
                {/* Index */}
                <span className="w-7 shrink-0 pt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary sm:w-9">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon chip */}
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <feature.icon className="h-5 w-5" />
                </span>

                {/* Copy */}
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    mod.{feature.code}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-body-sm">
                    {feature.description}
                  </p>
                </div>

                {/* State — right rail, hidden on small screens */}
                <div className="hidden shrink-0 pt-1 lg:block">
                  <ModuleState state={feature.state} />
                </div>
              </div>
            ))}
          </div>

          {/* Console footer */}
          <div className="flex items-center justify-between border-t border-border bg-background/60 px-4 py-2 sm:px-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              status
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
              <span className="inline-block h-1.5 w-1.5 bg-success animate-led" aria-hidden />
              All modules operational
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
