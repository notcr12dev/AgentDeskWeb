import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fair Terms for Builders — AgentDesk",
  description:
    "Terms of service for AgentDesk, the AI agent orchestration layer.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
        Terms
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight">Fair Terms for Builders</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        These terms govern your use of AgentDesk. Read them carefully.
      </p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-medium">Service Definition</h2>
          <p className="mt-2 text-muted-foreground">
            AgentDesk is an AI agent orchestration layer. It coordinates multiple
            AI agents, manages their memory, and composes their outputs into
            workflows. It does not replace your editor or AI model — it
            orchestrates them.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Bring-Your-Own-Keys</h2>
          <p className="mt-2 text-muted-foreground">
            AgentDesk requires no subscription to AI model providers. You bring
            your own API keys. AgentDesk never bills you for AI usage and never
            takes a cut of your API spend.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">No Lock-In</h2>
          <p className="mt-2 text-muted-foreground">
            Your agents, workflows, and memory are stored locally. You can
            export everything at any time. AgentDesk is designed so you can
            stop using it and keep everything you built.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Liability</h2>
          <p className="mt-2 text-muted-foreground">
            AgentDesk is provided as-is. You are responsible for reviewing agent
            outputs before deploying or publishing them. AgentDesk is not liable
            for actions taken based on agent-generated content.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Termination</h2>
          <p className="mt-2 text-muted-foreground">
            You may stop using AgentDesk at any time without notice. The software
            remains available as open-source. Your local data persists independently.
          </p>
        </div>
      </section>
    </main>
  );
}
