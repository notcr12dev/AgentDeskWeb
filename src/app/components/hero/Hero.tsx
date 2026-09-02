"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";

/** Max tilt in degrees when the panel "looks" at the pointer. */
const MAX_TILT = 6;

export function Hero() {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Pointer-follow tilt. Writes the transform straight to the DOM node on each
  // pointermove — no React state, no re-renders, no rAF loop — and lets a CSS
  // transition smooth it out. GPU-composited only, so it costs ~nothing.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 left .. 1 right
      const my = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 top .. 1 bottom
      const ry = (mx * MAX_TILT).toFixed(3);
      const rx = (-my * MAX_TILT).toFixed(3);
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`;
    };
    const onLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Console grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 lg:gap-14 xl:gap-16 items-center">
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

          {/* Visual: AgentDesk workbench screenshot — bigger on desktop, tilts to look at the pointer */}
          <div className="relative [perspective:1100px]">
            <div
              ref={panelRef}
              data-tilt-panel
              className="relative rounded-lg border border-border bg-elevated overflow-hidden shadow-rail will-change-transform transition-transform duration-200 ease-out"
            >
              <Image
                src="/docs/SSH1.png"
                alt="AgentDesk workbench: agent orchestration console"
                width={1426}
                height={938}
                priority
                quality={90}
                sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 46vw, 92vw"
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>

            {/* Corner label — stays flat while the panel tilts */}
            <p className="pointer-events-none absolute -top-3 -right-3 hidden lg:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 bg-background px-1">
              AgentDesk workbench
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
