export const problems = [
  {
    code: "E.01",
    tag: "ctx.switch",
    title: "Context Switching",
    description:
      "Jumping between Cursor, terminal, and chat destroys flow state and costs hours per week.",
    state: "active",
  },
  {
    code: "E.02",
    tag: "mem.volatile",
    title: "Lost Context",
    description:
      "Every new session means re-explaining your project. Memory shouldn't be ephemeral.",
    state: "active",
  },
  {
    code: "E.03",
    tag: "flow.fragment",
    title: "Fragmented Workflows",
    description:
      "No single view of your agents, tasks, and results. You need a dashboard, not a patchwork.",
    state: "active",
  },
];

export const solutions = [
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
    description:
      "Agents remember context across sessions. Build knowledge bases that grow with your projects.",
  },
  {
    index: "03",
    tag: "WF.COMPOSE",
    title: "Workflow Composition",
    description:
      "Chain agents into complex workflows with visual editing, error handling, and automatic retry.",
  },
];
