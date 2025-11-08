# Piggy Bank – Final Design Document

This document summarizes how the final Piggy Bank design evolved from the initial Assignment 2 concept specification and the later visual design study (Assignment 4b). It highlights conceptual shifts, architectural refinements, data/API changes, notification logic evolution, and visual/UX adjustments. Snapshot references include direct links to immutable design/test moments in this workspace.

## 1. Identity & Access Model Evolution

- Shift from explicit user passing to session-based authentication.
- Initial spec (Assignment 2): All concept actions take `user: User`.
- Final implementation: Endpoints and frontend send `session` only; specs updated accordingly.
- Motivation: Reduce payload redundancy, centralize auth, simplify API surface.
- Impact: Eliminated `user` field propagation through Notification, ProgressTracking, TripCostEstimation flows.

## 2. Representation Independence & Query Discipline

- Early concepts returned rich objects (risk of leaking internal structure).
- Final approach: Queries return only IDs (Notification `_getAllNotifications`, ProgressTracking `_getPlans`, TripCostEstimation `_getAllTravelPlans`).
- Snapshot references:
	- Notification restructuring: [20251015_203844.06aca8e2](../context/design/concepts/Notification/testing.md/20251015_203844.06aca8e2.md)
	- ProgressTracking query correction: [20251015_224640.92baf8e4](../context/design/concepts/ProgressTracking/implementation.md/20251015_224640.92baf8e4.md), [20251016_095310.3a9e2088](../context/design/concepts/ProgressTracking/ProgressTrackingSpec.md/20251016_095310.3a9e2088.md)
	- TripCostEstimation projection & ID returns: [20251016_133650.417c74c9](../context/design/concepts/TripCostEstimation/comparison-two-implementations.md/20251016_133650.417c74c9.md)
- Benefit: Test isolation, modularity, minimized coupling, cleaner frontend normalization.

## 3. Notification System Changes

- Initial concept: Basic create/delete with user ownership.
- Final design additions:
	- Savings reminder notifications are manually created after plan creation (backend doesn’t auto-create).
	- Milestone notifications (halfway, goal complete) added—frequency line suppressed for these.
	- Local preservation logic when backend returns empty (avoids data loss).
	- Dropped “Necessity” label in cards for cleaner UI.
	- Removed frequency display for milestone types for clarity.
- Technical refinements: Synthetic/local vs fetched sets merged safely; removal of redundant field probing; session-only payloads.

## 4. ProgressTracking Evolution

- Initial: Pure savings logic tied to user explicitly.
- Final:
	- Plan creation response simplified—trusts `{ plan }` ID (removed multi-key fallback chains).
	- Notification creation synchronized manually post-plan creation (see synchronization rationale divergence from original implicit expectations).
	- Added milestone detection logic (halfway, goal completion) with explicit triggers.
	- Reduced defensive ID parsing to spec-based single-field extraction.
- Lesson: Overly defensive normalization replaced with spec-grounded minimal parsing for maintainability.

## 5. TripCostEstimation & LLM Integration

- Early approach: Highly prescriptive prompt design (tool instructions, verbose constraints).
- Final approach:
	- Outcome-focused prompt specifying required JSON schema only ([20251016_133650.417c74c9](../context/design/concepts/TripCostEstimation/comparison-two-implementations.md/20251016_133650.417c74c9.md)).
	- Simplified parsing: Basic structural checks rather than layered semantic validation.
- Reasoning: Reliability improved; reduced maintenance overhead.
- Design decision: Did not validate city existence server-side—delegated feasibility to LLM (design note #7).

## 6. Testing & Architecture Improvements

- Test isolation: Each scenario uses fresh database/context ([20251015_203844.06aca8e2](../context/design/concepts/Notification/testing.md/20251015_203844.06aca8e2.md)).
- Representation independence enforced across concepts (IDs only).
- Action return signatures refined to confirm effects without exposing internal docs (ProgressTracking spec refinement [20251016_095310.3a9e2088](../context/design/concepts/ProgressTracking/ProgressTrackingSpec.md/20251016_095310.3a9e2088.md)).
- Error handling hardened (unknown → guarded extraction).

## 7. API Surface Consolidation

- Removed polymorphic/legacy field fallbacks (`planId`, `planID`, `progressTrackingId`, nested `plan.id` variants).
- Standardized endpoint usage with leading slashes.
- Deprecated user-based payload parameters in favor of session; specs updated consistently.
- Frontend refactors eliminated redundant console logging for production readiness.

## 8. Frontend Logic & UX Adjustments

- Plan creation flow now:
	- Create plan (capture plan ID).
	- Derive savings summary (paymentPeriod, amountPerPeriod).
	- Create savings reminder notification (session-based).
	- Refetch notifications—preserve local if backend latency/delay.
- Refactored normalization layers to trust spec-defined fields only.
- Removed frequency rendering from milestone notifications; streamlined card headings.

## 9. Visual Design Adaptations (Assignment 4b Influence)

- Typography: Clean sans-serif (Inter/Roboto/Open Sans) prioritizing numerical clarity and trust.
- Personality fonts (Lora, Playfair, Poppins) limited to accent/emphasis—balance between aspiration and clarity.
- Color palette:
	- Primary (teal/green palette) for success & progress reinforcement.
	- Accent amber/purple sparingly for callouts and motivational cues.
	- High-contrast choices for accessibility (goal progress & monetary figures).
- Behavioral intent: Green reinforces steady growth; orange reserved for warnings; minimal noise (removed extraneous section labels like “Necessity”).
- Alignment with product pitch: Motivating, low-friction, clarity-first presentations of savings trajectory.

## 10. Divergences from Original Concept Spec

- Authentication model: User → Session (systemic change).
- Queries: Full object returns → ID-only, enforcing independence.
- Notification lifecycle: Added milestone + savings reminder mechanics absent in initial spec.
- City validation dropped (delegated to LLM logic).
- Separation of AI estimate vs total cost retained (design note #9) despite potential sync consolidation—in service of future daily cost display extensibility.
- Refined synchronization semantics: Avoided intra-concept auto-chaining where frontend control yields better UX flexibility.
- Reduced defensive normalization—pruned speculative field matching.

## 11. Key Design Lessons Incorporated

- Continuous spec alignment prevents drift (representation independence).
- Outcome-centric LLM prompting lowers parsing burden.
- Session centralization simplifies payload contracts and reduces leakage risk.
- Preservation strategies needed when backend eventual consistency or delayed visibility occurs.
- Refactoring for minimalism improved reliability and onboarding velocity.

## Snapshot References (Immutable Moments)

- Notification concept restructuring: [20251015_203844.06aca8e2](../context/design/concepts/Notification/testing.md/20251015_203844.06aca8e2.md)
- PasswordAuthentication constraints & inconsistency: [20251015_220736.ead8cc82](../context/src/concepts/PasswordAuthentication/PasswordAuthenticationConcept.test.ts/20251015_220736.ead8cc82.md)
- ProgressTracking implementation + spec refinement: [20251015_224640.92baf8e4](../context/design/concepts/ProgressTracking/implementation.md/20251015_224640.92baf8e4.md) / [20251016_095310.3a9e2088](../context/design/concepts/ProgressTracking/ProgressTrackingSpec.md/20251016_095310.3a9e2088.md)
- TripCostEstimation LLM prompt evolution: [20251016_133650.417c74c9](../context/design/concepts/TripCostEstimation/comparison-two-implementations.md/20251016_133650.417c74c9.md)
- Parsing reliability test (LLM variability): [20251017_184647.70888acc](../context/src/concepts/TripCostEstimation/TripCostEstimationConcept.test.ts/20251017_184647.70888acc.md)

## Final Summary (At a Glance)

- Auth: Session-only unifies flows.
- Data: ID-return queries enforce abstraction.
- Notifications: Expanded logic, milestone handling, reliable persistence.
- ProgressTracking: Cleaner ID handling; manual notification orchestration.
- LLM Integration: Prompt simplified; parsing lean.
- Visual Design: Trust + clarity + motivation; reduced cognitive load.
- Architecture: Less redundancy, stronger isolation, spec-aligned simplicity.
