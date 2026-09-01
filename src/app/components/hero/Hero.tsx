"use client";

import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Console grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
              Agent orchestration layer
            </p>
            <h1 className="mt-6 font-display text-display-xl sm:text-display-lg md:text-display-xl tracking-tight text-foreground leading-[1.05] text-balance">
              Orchestrate agents{" "}
              <span className="text-primary">above your tools</span>
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground max-w-xl leading-relaxed">
              Stop context-switching between Cursor, terminal, and chat. One
              orchestration layer to rule them all. Build, deploy, and manage AI
              agents from a single interface.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <CTAButton href="/docs#quickstart">Start Orchestrating</CTAButton>
              <CTAButton href="/docs" variant="outline">
                Read the Docs
              </CTAButton>
            </div>
          </div>

          {/* Visual: Instrument console */}
          <div className="relative">
            <div className="relative rounded-lg border border-border bg-elevated overflow-hidden shadow-rail">
              {/* Console header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" aria-hidden />
                  Agent network
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-led" aria-hidden />
                  online
                </span>
              </div>

              {/* Console body */}
              <div className="relative p-8 lg:p-10">
                {/* Grid background */}
                <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40" />

                {/* Central orchestration node */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[320px] lg:min-h-[360px]">
                  <div className="relative">
                    {/* Static rotated-square signal rings — geometric echo of the mark */}
                    <div className="absolute -inset-8 lg:-inset-10 rotate-45 border border-primary/25" aria-hidden />
                    <div className="absolute -inset-16 lg:-inset-20 rotate-45 border border-primary/10" aria-hidden />

                    {/* Central copper signal node */}
                    <div className="relative flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-md border border-primary/40 bg-primary/10">
                      <span className="block h-8 w-8 lg:h-10 lg:w-10 rotate-45 bg-primary" aria-hidden />
                    </div>
                  </div>
                  <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    Orchestrator
                  </p>
                </div>

                {/* Tool slots */}
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-8">
                  {["Cursor", "IDE", "CLI", "MCP"].map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 rounded border border-border bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-secondary-foreground"
                    >
                      <span className="inline-block h-1 w-1 rotate-45 bg-primary/70" aria-hidden />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Console status strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-background/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <span>4 agents online</span>
                <span className="hidden sm:inline">memory sync · ok</span>
                <span>cost · $0.00</span>
              </div>
            </div>

            {/* Corner labels */}
            <p className="absolute -top-3 -right-3 hidden lg:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 bg-background px-1">
              Orchestration layer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
