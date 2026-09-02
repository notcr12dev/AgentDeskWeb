import Image from "next/image";
import { solutions } from "@/lib/landing-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/** Solution hero — heading + live workbench screenshot. First used as the
 *  second panel of the horizontal corridor, and stacked vertically on small
 *  screens. The three cards + CTA live in <SolutionTail /> right after. */
export function SolutionHeroPanel({ screen = false }: { screen?: boolean }) {
  return (
    <section
      id="solution"
      className={
        screen
          ? "journey-panel relative flex items-center overflow-hidden bg-background"
          : "journey-panel relative py-24 lg:py-32 bg-background"
      }
    >
      <div className={`relative mx-auto w-full ${screen ? "max-w-5xl px-5 sm:px-8" : "max-w-7xl px-4 sm:px-6 lg:px-8"}`}>
        <div className="text-center mb-8 lg:mb-10">
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

        {/* Workbench screenshot — the real orchestration surface */}
        <div className="relative">
          <div
            className={`screenshot-frame relative mx-auto overflow-hidden rounded-sm border border-border-default bg-elevated shadow-rail ${
              screen ? "max-w-2xl" : "max-w-4xl"
            }`}
          >
            <Image
              src="/docs/SSH2.png"
              alt="AgentDesk workbench: three-panel console with agent workflow, sessions and live chat"
              width={1392}
              height={910}
              quality={90}
              sizes="(min-width: 1024px) 60vw, 92vw"
              className="h-auto w-full select-none"
              draggable={false}
            />

            {/* Electric charge — copper sparks race along the frame edge on hover */}
            <svg
              aria-hidden
              className="electric-charge absolute inset-0 h-full w-full"
              viewBox="0 0 1392 910"
              preserveAspectRatio="none"
            >
              <rect className="electric-rim" x="2" y="2" width="1388" height="906" rx="4" />
              <rect className="electric-arc-fwd" x="2" y="2" width="1388" height="906" rx="4" pathLength={1000} />
              <rect className="electric-arc-rev" x="2" y="2" width="1388" height="906" rx="4" pathLength={1000} />
            </svg>
          </div>

          {/* Corner label */}
          <p className="pointer-events-none absolute -top-3 right-3 lg:right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 bg-background px-1">
            Agent console · live session
          </p>
        </div>
      </div>
    </section>
  );
}

/** The three capability cards + secondary CTA. Flows vertically right after the
 *  horizontal corridor (before Features), and after the hero on small screens. */
export function SolutionTail() {
  return (
    <section className="bg-background pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
