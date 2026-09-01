import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Data, Your Control — AgentDesk",
  description:
    "Detailed information about how AgentDesk collects, processes, and stores your data.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
        Privacy
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight">Your Data, Your Control</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Your privacy is foundational to how AgentDesk is built. This policy describes
        exactly what data we collect, how we use it, and how you remain in full control.
      </p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-medium">Local-First Processing</h2>
          <p className="mt-2 text-muted-foreground">
            AgentDesk runs AI models and agent logic locally on your machine by default.
            Your code, prompts, and agent outputs never leave your hardware unless you
            explicitly choose to use a remote API.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">API Keys and BYOK Model</h2>
          <p className="mt-2 text-muted-foreground">
            AgentDesk follows a Bring-Your-Own-Keys model. You provide your own API keys
            (Anthropic, OpenAI, local model runners). Keys are stored securely in your
            system keychain and are never transmitted to AgentDesk servers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Analytics (Opt-In)</h2>
          <p className="mt-2 text-muted-foreground">
            Anonymous usage telemetry is disabled by default. If you choose to enable it,
            only aggregated, non-personally-identifiable data is collected to help us
            improve the product. You can revoke consent at any time.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Data Retention</h2>
          <p className="mt-2 text-muted-foreground">
            AgentDesk retains agent execution logs and memory data only on your local
            machine. We do not store, back up, or analyze your data on our infrastructure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Your Rights</h2>
          <p className="mt-2 text-muted-foreground">
            You have full access to, control over, and the ability to delete all data
            stored by AgentDesk at any time. Export your data in standard formats.
            No data is shared with third parties for advertising or profiling.
          </p>
        </div>
      </section>
    </main>
  );
}
