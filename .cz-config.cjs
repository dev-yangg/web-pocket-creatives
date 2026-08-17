module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    {
      value: "style",
      name: "style:    Code style & formatting only (no logic change)",
    },
    {
      value: "refactor",
      name: "refactor: Restructured code, no bug fix or feature added",
    },
    {
      value: "perf",
      name: "perf:     Improved performance, no behavior change",
    },
    {
      value: "test",
      name: "test:     Added or updated tests",
    },
    {
      value: "chore",
      name: "chore:    Build process, tooling, or dependency updates",
    },
    {
      value: "revert",
      name: "revert:   Reverted a previous commit",
    },
    {
      value: "WIP",
      name: "WIP:      Incomplete work, not ready for review",
    },
  ],
  scopes: [
    { name: "components" },
    { name: "layouts" },
    { name: "styles" },
    { name: "public" },
    { name: "config" },
    { name: "deps" },
    { name: "root" },
    { name: "types" },
    { name: "assets" },
    { name: "data" },
    { name: "lib" },
  ],
  usePreparedCommit: false,
  messages: {
    type: "Commit type:",
    scope: "\nScope (optional):",
    customScope: "Custom scope:",
    subject: "Short description (imperative tense):\n",
    body: 'Long description (optional). Use "|" for new line:\n',
    breaking: "Breaking changes (optional):\n",
    footer: "Closed issues (optional). E.g.: #31, #34:\n",
    confirmCommit: "Proceed with this commit?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  subjectLimit: 100,
};
