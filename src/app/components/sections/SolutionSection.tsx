"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    index: "01",
    tag: "CORE.LAYER",
    title: "Single Orchestration Layer",
    description: "One interface to manage, monitor, and compose all your AI agents.",
  },
  {
    index: "02",
    tag: "MEM.PERSIST",
    title: "Persistent Memory",
    description: "Agents remember context across sessions. Build knowledge bases that grow with your projects.",
  },
  {
    index: "03",
    tag: "WF.COMPOSE",
    title: "Workflow Composition",
    description: "Chain agents into complex workflows with visual editing, error handling, and automatic retry.",
  },
];

const inputTools = ["Cursor", "VS Code", "Claude Code", "Devin", "Codex", "CLI"];
const outputStages = [
  { label: "Unified Output", tone: "text-primary border-primary/40 bg-primary/10" },
  { label: "Deployed Agents", tone: "text-success border-success/40 bg-success/10" },
  { label: "Workflows", tone: "text-warning border-warning/40 bg-warning/10" },
];

export function SolutionSection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

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

    tl.from(cardsRef.current?.children || [], {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
    }).from(
      diagramRef.current?.children || [],
      {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
      },
      "-=0.3"
    );
  }, [reducedMotion]);

  return (
    <section id="solution" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
            The solution
          </p>
          <h2 className="mt-4 font-display text-display-md sm:text-display-lg font-medium text-foreground text-balance">
            One layer. Every agent.
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-2xl mx-auto">
            AgentDesk sits above your tools — Cursor, Claude Code, Devin, Codex — integrating them into a single orchestration surface.
          </p>
        </div>

        {/* Orchestration Layer Diagram — rigid console schematic */}
        <div className="mb-16 lg:mb-20" ref={diagramRef}>
          <div className="max-w-4xl mx-auto rounded-sm border border-border-default bg-elevated overflow-hidden">
            {/* Console header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                <span className="inline-block h-2 w-2 bg-primary" aria-hidden />
                Orchestration pipeline
              </span>
              <span className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 bg-success animate-led" aria-hidden />
                Stable
              </span>
            </div>

            {/* Stage 01 — Input */}
            <div className="flex border-b border-border">
              <div className="w-10 sm:w-14 shrink-0 border-r border-border flex flex-col items-center justify-center gap-1 py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">01</span>
                <span className="font-mono text-[10px] text-muted-foreground" aria-hidden>↓</span>
              </div>
              <div className="flex-1 px-4 sm:px-6 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2.5">Input</p>
                <div className="flex flex-wrap gap-1.5">
                  {inputTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-sm border border-border-default bg-background px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex w-10 shrink-0 items-center justify-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                In
              </div>
            </div>

            {/* Stage 02 — Orchestrator */}
            <div className="flex border-b border-border">
              <div className="w-10 sm:w-14 shrink-0 border-r border-border flex flex-col items-center justify-center gap-1 py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">02</span>
                <span className="font-mono text-[10px] text-muted-foreground" aria-hidden>↓</span>
              </div>
              <div className="flex-1 px-4 sm:px-6 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2.5">Core</p>
                <div className="relative overflow-hidden rounded-sm border border-border-default bg-background">
                  <div
                    className="absolute inset-0"
                    aria-hidden
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                      opacity: 0.4,
                    }}
                  />
                  <div className="relative flex items-center justify-between gap-3 px-4 py-3">
                    <span className="inline-block h-2.5 w-2.5 bg-primary shrink-0" aria-hidden />
                    <div className="text-center">
                      <p className="font-display text-sm font-medium tracking-tight text-foreground">AgentDesk Orchestration</p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        Memory · Planning · Evaluation · MCP
                      </p>
                    </div>
                    <span className="inline-block h-2.5 w-2.5 bg-primary shrink-0" aria-hidden />
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex w-10 shrink-0 items-center justify-center font-mono text-[10px] uppercase tracking-[0.16em] text-success">
                Run
              </div>
            </div>

            {/* Stage 03 — Output */}
            <div className="flex">
              <div className="w-10 sm:w-14 shrink-0 border-r border-border flex flex-col items-center justify-center gap-1 py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">03</span>
              </div>
              <div className="flex-1 px-4 sm:px-6 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2.5">Output</p>
                <div className="flex flex-wrap gap-1.5">
                  {outputStages.map((stage) => (
                    <span
                      key={stage.label}
                      className={`rounded-sm border px-2.5 py-1 font-mono text-xs ${stage.tone}`}
                    >
                      {stage.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex w-10 shrink-0 items-center justify-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Out
              </div>
            </div>

            {/* Console footer */}
            <div className="flex items-center justify-between border-t border-border bg-background/60 px-4 py-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Status</span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                <span className="inline-block h-1.5 w-1.5 bg-success animate-led" aria-hidden />
                All systems operational
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" ref={cardsRef}>
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="bg-card border-border hover:border-primary/60 transition-colors duration-300 group rounded-sm"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center border border-border-default bg-background font-mono text-sm text-primary">
                    {solution.index}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {solution.tag}
                  </span>
                </div>
                <CardTitle className="font-display text-xl font-medium text-foreground">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border border-border bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 text-base h-11"
            >
              View on GitHub
            </a>
            <a
              href="/docs#quickstart"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-base h-11"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
