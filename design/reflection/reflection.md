## Project Reflection

### What was easy
- Styling the frontend to match the visual design study (layout and colors) and to keep the app easy to use.

### What was hard
- Keeping up with agent-generated code: large diffs arrived quickly. Verifying everything rigorously can erase the speed gains; not verifying enough risks shallow understanding and brittle fixes.
- Balancing speed and correctness required smaller, incremental changes with checkpoints.

### What went well
- Initial concept implementation and spec-driven design. With good context, agents produced working code and tests.
- Navigating generated code and tests to validate behavior was straightforward when the spec was tight.

### Mistakes and how I’d avoid them
- Stayed with one model too long. I primarily used GPT-5; switching later to Claude Sonnet 4.5 helped fix issues. Next time I’ll A/B models earlier on small “canary” tasks and keep an easy fallback path.
- Over-relying on speed without guardrails. I’ll add lightweight checklists (build, key tests, sanity run) before merging agent-created changes.

### Skills gained and to develop
- Gained: spec-first thinking; curating context for agents; frontend theming; reviewing and validating agent-written tests.
- To develop further: model evaluation discipline; systematic verification strategies; better observability/logging to catch regressions sooner.

### How I used the Context tool
- Used it for concept specs and early implementations.
- For frontend and backend sync work, I leaned less on Context and more on interacting with the UI to validate agent outputs quickly for incremental development.

### How I used agentic coding tools
- Primarily used GPT-5 to scaffold code and tests; later tried Claude Sonnet 4.5, which corrected some GPT-5 errors.
- Pattern that worked: provide clear, constrained context → generate → minimally verify → iterate.

### Conclusions on the role of LLMs
- LLMs are best as accelerators for scaffolding, refactors, and test drafting—when given tight specs and context.
- Humans should retain architectural control and system understanding; avoid “pure vibe coding.” Prefer incremental changes backed by basic tests and runtime checks.
- This gap is narrowing, but today a hybrid workflow (human intent + agent execution + human verification) produces the most reliable outcomes.
