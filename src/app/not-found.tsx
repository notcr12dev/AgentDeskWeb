import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404 — Route Not Found | AgentDesk",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
      {/* Console grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.25]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="relative mx-auto w-full max-w-xl px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
          Error · Route not found
        </p>

        {/* Big display */}
        <h1 className="mt-6 font-display text-8xl sm:text-9xl font-medium tracking-tight text-foreground leading-none">
          4<span className="text-primary">0</span>4
        </h1>

        {/* Terminal panel — a failed route resolution */}
        <div className="mt-10 rounded-sm border border-border-default bg-elevated text-left overflow-hidden shadow-rail">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
              <span className="inline-block h-2 w-2 bg-primary" aria-hidden />
              AgentDesk console
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-danger animate-led" aria-hidden />
              signal lost
            </span>
          </div>
          <div className="px-4 py-4 font-mono text-sm leading-7">
            <p className="text-foreground">
              <span className="text-muted-foreground">$</span> agentdesk resolve{" "}
              <span className="text-secondary-foreground">/route</span>
            </p>
            <p className="text-danger">&gt; exit code 404</p>
            <p className="text-muted-foreground">
              &gt; route not found on this console
            </p>
          </div>
        </div>

        <p className="mt-6 text-muted-foreground text-body-lg leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" asChild>
            <Link href="/">Back to console</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs">Read the docs</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
