"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, GitBranch, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Bot,
    title: "Agent Registry",
    description: "Register, manage, and orchestrate multiple AI agents from a single dashboard. Version control your agents like code.",
  },
  {
    icon: Database,
    title: "Persistent Memory",
    description: "Agents remember context across sessions. Build knowledge bases that persist and grow with your projects.",
  },
  {
    icon: GitBranch,
    title: "Workflow Orchestration",
    description: "Chain agents into complex workflows. Visualize execution paths, handle failures, and retry automatically.",
  },
  {
    icon: Shield,
    title: "Evaluation & Testing",
    description: "Test agents against benchmarks. Track performance over time. Catch regressions before they reach production.",
  },
];

export function Features() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !cardsRef.current) return;

    gsap.from(cardsRef.current.children, {
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
      stagger: 0.15,
    });
  }, [reducedMotion]);

  return (
    <section id="features"  className="py-24 lg:py-32 bg-background border-y border-border/50">
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
            One platform to orchestrate your AI agents. No more switching between tools, losing context, or managing disconnected workflows.
          </p>
        </div>

        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border hover:border-primary/60 transition-colors duration-300 group rounded-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-sm border border-primary/40 bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/15">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl font-medium text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}