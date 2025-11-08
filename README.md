# Piggy Bank App

A session-authenticated savings & travel planning assistant with notifications, progress tracking, and AI trip cost estimation.

## Table of Contents
- Overview
- Core Concepts
- Architecture at a Glance
- Data & Session Model
- AI (LLM) Integration
- Development Workflow & Agents
- Key Design Principles
- Project Artifacts
- Quick Start (Local)
- Future Improvements

## Overview
Piggy Bank helps a user plan a trip, estimate costs with an LLM, set a savings goal, track incremental progress, and receive reminder & milestone notifications. The backend enforces session-based access; the frontend orchestrates concept actions and composes results into a guided savings experience.

## Core Concepts
Each concept encapsulates a domain slice with actions (state change) and queries (ID-returning frames for representation independence):

- Notification: Create, delete, and retrieve notification messages & frequencies for user progress and milestones.
- ProgressTracking: Create savings plans tied to trips, mutate contributed amount, update goal status, list plans.
- TripCostEstimation: Create travel plans, manage necessities, generate/edit/delete AI cost estimates, and query cities/dates.
- PasswordAuthentication: Registration, login/logout, user retrieval (`_getAllUsers` gated by session).
- Sessioning: Maps a `session` token to a user identity; used in `where` clauses for request gating.
- Requesting (infra): Normalized request/response framing; enables correlating concept actions with external API paths.

## Architecture at a Glance
- Boundary: API requests first enter `Requesting.request` with a path like `/Notification/createNotification`.
- Gating: `when` checks for required fields; `where` resolves `session` → `user` (`Sessioning._getUser`) before calling concept action.
- Action: Concept executes domain logic and returns minimal shaped data (e.g., `{ plan }`, `{ notification }`).
- Response: `Requesting.respond` publishes a correlated frame; frontend consumes it via path + emitted identifiers.
- Queries: Performed in `where` before responding (e.g., `_getAllNotifications`) returning only IDs to enforce abstraction.

## Data & Session Model
- All user-scoped requests send `session` only; backend derives `user`.
- Queries return arrays of IDs (e.g., `notifications`, `plans`, `travelPlans`). Follow-up detail requests fetch per-ID metadata when needed.
- Minimizing payload surface reduces implicit coupling and makes test isolation simpler.

## AI (LLM) Integration
- Trip cost estimation uses a lean, outcome-focused prompt: specify required JSON schema, omit verbose tool instructions.
- Parsing is structural (presence/shape) rather than semantic/numeric validation for resilience to model variability.
- Design trade-off: city existence not validated server-side—delegated to model reasoning for speed and simplicity.

## Development Workflow & Agents
- Spec-first: Concepts defined with clear action/query contracts → agents generate code & tests → human verification.
- Multi-model insight: Primary early use of GPT-5; later Claude Sonnet 4.5 corrected edge cases—suggests early A/B can reduce downstream friction.
- Incremental agent usage: Frontend interactions served as fast behavioral checks in place of heavier context injection for sync additions.

## Key Design Principles
- Representation Independence: Queries return only IDs; detail fetched on demand.
- Session Centralization: Avoid passing `user` through every action, reduce surface area.
- Correlation Tightening: Responders match on unique identifiers (e.g., notification ID) to avoid cross-join timeouts.
- Minimalism Over Defensive Guessing: Removed polymorphic field fallbacks (`planId`, `planID`, …) for clarity.
- Outcome-Centric LLM Prompts: Focus on required JSON result; reduce brittleness.

## Project Artifacts
| Artifact | Purpose |
|----------|---------|
| [`design/reflection/DesignDocument.md`](design/reflection/DesignDocument.md) | Full evolution narrative & design decisions |
| [`design/reflection/reflection.md`](design/reflection/reflection.md) | Personal project reflection per assignment prompt |
| [`design/reflection/RENDER_LOG_OUTPUT.md`](design/reflection/RENDER_LOG_OUTPUT.md) | Sample execution log showing request→action→response frames |
| [`design/reflection/finalVideo.md`](design/reflection/finalVideo.md) | Link to final demonstration video |

## Quick Start (Local)
```powershell
# (Assuming Deno is installed)
deno task start   # If a start task exists; otherwise:
deno run -A src/concept_server.ts
```
Then interact with endpoints (e.g., `POST /Notification/createNotification`) sending a `session` token.

## Future Improvements
- Add per-notification read/unread states for richer UX.
- Integrate more robust cost verification (e.g., external price APIs) post-LLM estimate.
- Implement optimistic UI and reconciliation logic for notification deletes to further reduce latency edge cases.
- Add structured observability (trace IDs correlated with `request`) for debugging.
- Earlier multi-model “canary” workflow for agent output validation.

## License
Internal academic project; no explicit license file included. Add one (e.g., MIT) if open-sourcing.

---
Piggy Bank emphasizes a hybrid human + agent workflow: humans steer architecture and constraints; agents accelerate well-scoped implementation. IDs-first queries, session-only gating, and lean prompts collectively keep the system reliable and adaptable.
