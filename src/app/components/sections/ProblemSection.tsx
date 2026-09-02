import { problems } from "@/lib/landing-data";

/** Problem panel. Used inside the horizontal corridor on desktop and stacked
 *  (vertical fallback) on small screens — no ScrollTrigger reveals here so the
 *  pinned corridor owns all scroll animation. */
export function ProblemPanel({ screen = false }: { screen?: boolean }) {
  return (
    <section
      id="problem"
      className={
        screen
          ? "journey-panel relative flex items-center overflow-hidden bg-background"
          : "journey-panel relative py-24 lg:py-32 bg-background overflow-hidden"
      }
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.2]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div
        className={`relative mx-auto w-full ${
          screen ? "max-w-6xl px-5 sm:px-8" : "max-w-7xl px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text Content */}
          <div className={screen ? "lg:pr-6" : "lg:pr-8"}>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="inline-block h-3 w-0.5 bg-destructive" aria-hidden />
              The problem
            </p>
            <h2 className="mt-4 font-display text-display-md sm:text-display-lg font-medium text-foreground text-balance">
              Stop context-switching
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-xl leading-relaxed">
              The tools you use today were never designed to work together. Every hand-off
              leaks context, and the overhead compounds with every agent you add.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 bg-danger" aria-hidden />
                tool juggling
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 bg-danger" aria-hidden />
                re-explaining
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 bg-danger" aria-hidden />
                no single view
              </span>
            </div>
          </div>

          {/* Right: Fault log — console panel of unresolved issues */}
          <div className="overflow-hidden rounded-sm border border-border-default bg-elevated">
            {/* Console header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5 sm:px-5">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                <span className="inline-block h-2 w-2 bg-danger" aria-hidden />
                Diagnostic log
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-danger">
                <span className="inline-block h-1.5 w-1.5 bg-danger animate-led" aria-hidden />
                3 unresolved
              </span>
            </div>

            {/* Rows */}
            <div>
              {problems.map((problem) => (
                <div
                  key={problem.code}
                  className="group flex items-start gap-4 border-b border-border px-4 py-5 transition-colors duration-300 last:border-b-0 hover:bg-background/40 sm:gap-5 sm:px-5 sm:py-6"
                >
                  {/* Code */}
                  <span className="w-10 shrink-0 pt-0.5 font-mono text-xs text-danger">
                    {problem.code}
                  </span>

                  {/* LED */}
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 bg-danger animate-led" aria-hidden />

                  {/* Copy */}
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      err.{problem.tag}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-medium tracking-tight text-foreground sm:text-xl">
                      {problem.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>

                  {/* State — hidden on small screens */}
                  <div className="hidden shrink-0 pt-1 lg:block">
                    <span className="inline-flex items-center gap-1.5 rounded-sm border border-danger/40 bg-danger/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-danger">
                      <span className="inline-block h-1.5 w-1.5 bg-danger animate-led" aria-hidden />
                      {problem.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Console footer */}
            <div className="flex items-center justify-between border-t border-border bg-background/60 px-4 py-2 sm:px-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                root cause
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                no orchestration layer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
