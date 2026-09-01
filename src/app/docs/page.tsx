import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const quickstartSteps = [
  {
    index: "01",
    title: "Install the orchestrator",
    command: "npm install -g agentdesk",
    note: "Requires Node.js 18+ and an MCP-capable agent runtime.",
  },
  {
    index: "02",
    title: "Connect your agents",
    command: "agentdesk connect cursor --memory on",
    note: "AgentDesk discovers Cursor, Claude Code, Devin, and Codex on your machine.",
  },
  {
    index: "03",
    title: "Deploy your first workflow",
    command: "agentdesk deploy workflow build.spec.json",
    note: "The pipeline routes through the orchestration layer — memory, planning, and evaluation built in.",
  },
];

const endpoints = [
  { method: "GET", path: "/v1/agents", description: "List every agent on your network." },
  { method: "POST", path: "/v1/agents", description: "Register a new agent runtime." },
  { method: "GET", path: "/v1/memory", description: "Read the persistent memory store." },
  { method: "POST", path: "/v1/workflows", description: "Deploy a composed workflow." },
  { method: "PUT", path: "/v1/sessions", description: "Resume or fork an agent session." },
];

const methodTone: Record<string, string> = {
  GET: "text-info border-info/40 bg-info/10",
  POST: "text-success border-success/40 bg-success/10",
  PUT: "text-warning border-warning/40 bg-warning/10",
};

export const metadata = {
  title: "Documentation — AgentDesk",
  description:
    "Install AgentDesk, connect your first agent, and deploy a workflow in minutes. API reference and quickstart for the orchestration layer.",
};

export default function DocsPage() {
  return (
    <main className="relative pt-24 pb-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.25]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
          Documentation
        </p>
        <h1 className="mt-4 font-display text-display-lg font-medium tracking-tight text-foreground text-balance">
          Read the manual
        </h1>
        <p className="mt-4 text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
          Install AgentDesk, connect your first agent, and deploy a workflow. The
          orchestration layer sits above your tools — no setup beyond a single
          CLI command.
        </p>

        {/* Anchor nav */}
        <nav className="mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.16em]">
          <Link href="#quickstart" className="rounded-sm border border-border bg-elevated px-3 py-1.5 text-secondary-foreground hover:border-primary/60 hover:text-primary transition-colors">
            Quickstart
          </Link>
          <Link href="#api" className="rounded-sm border border-border bg-elevated px-3 py-1.5 text-secondary-foreground hover:border-primary/60 hover:text-primary transition-colors">
            API Reference
          </Link>
          <Link href="/" className="rounded-sm border border-border bg-elevated px-3 py-1.5 text-secondary-foreground hover:border-primary/60 hover:text-primary transition-colors">
            ← Back home
          </Link>
        </nav>

        {/* Quickstart */}
        <section id="quickstart" className="mt-16 lg:mt-20 scroll-mt-24">
          <h2 className="font-display text-display-sm font-medium tracking-tight text-foreground text-balance">
            Quickstart
          </h2>
          <div className="mt-6 space-y-4">
            {quickstartSteps.map((step) => (
              <Card key={step.index} className="bg-card border-border rounded-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 p-5 lg:p-6">
                    <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{step.index}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-medium text-foreground">{step.title}</h3>
                      <div className="mt-3 rounded-sm border border-border-default bg-background px-4 py-3 overflow-x-auto">
                        <code className="font-mono text-sm text-foreground">$ {step.command}</code>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.note}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* API Reference */}
        <section id="api" className="mt-16 lg:mt-20 scroll-mt-24">
          <h2 className="font-display text-display-sm font-medium tracking-tight text-foreground text-balance">
            API reference
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
            The orchestration API is a thin REST surface over the agent network.
            Every call returns JSON with the same envelope.
          </p>
          <div className="mt-6 rounded-sm border border-border-default bg-elevated overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                <span className="inline-block h-2 w-2 bg-primary" aria-hidden />
                /v1 endpoints
              </span>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">json</span>
            </div>
            <ul className="divide-y divide-border">
              {endpoints.map((endpoint) => (
                <li key={endpoint.path} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-3">
                  <span className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] w-fit ${methodTone[endpoint.method]}`}>
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-sm text-foreground">{endpoint.path}</code>
                  <span className="sm:ml-auto text-sm text-muted-foreground">{endpoint.description}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border bg-background/60 px-4 py-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                auth · bearer token from `agentdesk auth`
              </span>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-16 lg:mt-20 rounded-sm border border-border-default bg-elevated p-6 lg:p-8">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
            Ready
          </p>
          <h2 className="mt-3 font-display text-display-sm font-medium tracking-tight text-foreground text-balance">
            Start orchestrating in 5 minutes
          </h2>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 h-11"
            >
              Install AgentDesk
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border border-border bg-background hover:bg-hover hover:text-foreground px-6 py-3 h-11"
            >
              View the console
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
