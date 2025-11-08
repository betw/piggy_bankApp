# Piggy Bank – Final Design Document

This document summarizes how the final Piggy Bank design evolved from the initial Assignment 2 concept specification and the later visual design study (Assignment 4b). It highlights conceptual shifts, architectural refinements, data/API changes, notification logic evolution, and visual/UX adjustments. Snapshot references include direct links to immutable design/test moments in this workspace.

## 1. Identity & Access Model Evolution

- Shift from explicit user passing to session-based authentication.
- Initial spec (Assignment 2): All concept actions take `user: User`.
- Final implementation: Endpoints and frontend send `session` only; specs updated accordingly.
- Motivation: Reduce payload redundancy, centralize auth, simplify API surface.
- Impact: Eliminated `user` field propagation through Notification, ProgressTracking, TripCostEstimation flows.

## 2. Representation Independence & Query Discipline

- Early concepts written by LLM returned rich objects (risk of leaking internal structure).
- Final approach: Queries return only IDs (Notification `_getAllNotifications`, ProgressTracking `_getPlans`, TripCostEstimation `_getAllTravelPlans`).
- Snapshot references:
	- Notification restructuring: [20251015_203844.06aca8e2](../../context/design/concepts/Notification/testing.md/20251015_203844.06aca8e2.md)
	- ProgressTracking query correction: [20251015_224640.92baf8e4](../../context/design/concepts/ProgressTracking/implementation.md/20251015_224640.92baf8e4.md), [20251016_095310.3a9e2088](../../context/design/concepts/ProgressTracking/ProgressTrackingSpec.md/20251016_095310.3a9e2088.md)
	- TripCostEstimation projection & ID returns: [20251016_133650.417c74c9](../../context/design/concepts/TripCostEstimation/comparison-two-implementations.md/20251016_133650.417c74c9.md)
- Benefit: Test isolation, modularity, minimized coupling, cleaner frontend normalization.

## 3. Notification System Changes

- Initial concept: Basic create/delete with user ownership.
- Final design additions:
	- Savings reminder notifications are manually created after plan creation (backend doesn’t auto-create).
    - Initially, I implemented sync so that when progressTracking.createPlan was called for a user session, a notification was created and a response sync was sent. However, since the frontend “Notifications” page displays more information than the backend provides, it was more effective to handle notification creation in the frontend, allowing necessary data to flow between Vue components.
	

## 4. ProgressTracking Evolution

- Initial: Pure savings logic tied to user explicitly.
- Final:
	- Removed redundant LLM checks for backend parameters (.planID, .planId, .plan_id). GPT-5 exhibited this issue, but Claude Sonnet 4.5, with the proper API spec context, resolved the redundancy
	- Notification creation synchronized manually post-plan creation.
	- Added milestone detection logic (halfway, goal completion) with explicit triggers.

## 5. TripCostEstimation & LLM Integration

- Early approach: Highly prescriptive prompt design (tool instructions, verbose constraints).
- Final approach:
	- Outcome-focused prompt specifying required JSON schema only ([20251016_133650.417c74c9](../../context/design/concepts/TripCostEstimation/comparison-two-implementations.md/20251016_133650.417c74c9.md)).
	- Simplified parsing: Basic structural checks rather than layered semantic validation.
- Reasoning: Reliability improved; reduced maintenance overhead.
- Design decision: Did not validate city existence server-side—delegated feasibility to LLM, but this provided the benefit of not having to store in a text file or database a list of most cities in the world (design note #7).

## 6. Testing & Architecture Improvements
- Representation independence enforced across concepts (IDs only).
- Action return signatures refined to confirm effects without exposing internal docs (ProgressTracking spec refinement [20251016_095310.3a9e2088](../../context/design/concepts/ProgressTracking/ProgressTrackingSpec.md/20251016_095310.3a9e2088.md)).
- Error handling hardened (unknown → guarded extraction).

## 7. API Surface Consolidation

- Removed polymorphic/legacy field fallbacks (`planId`, `planID`, `progressTrackingId`, nested `plan.id` variants).
- Deprecated user-based payload parameters in favor of session; specs updated consistently.

## 8. Frontend Logic & UX Adjustments

- Plan creation flow now:
	- Create plan (capture plan ID).
	- Derive savings summary (paymentPeriod, amountPerPeriod).
	- Create savings reminder notification (session-based).
	- Refetch notifications—preserve local if backend latency/delay.
- Refactored normalization layers to trust spec-defined fields only.
- Removed frequency rendering from milestone notifications; streamlined card headings.

## 9. Visual Design Adaptations (Assignment 4b Influence)
- I mostly stuck with my initial Visual Design Study but found that agentic coding tools were better able to implement my vision when I provided them with real apps that closely followed my design study:
- Typography: Clean sans-serif (Inter/Roboto/Open Sans) prioritizing numerical clarity and trust. Although a study mentioned in class showed no significant difference in readability between serif and sans-serif fonts, I personally found sans-serif more appealing.
- Color palette:
	- Primary (teal/green palette) for success & progress reinforcement.
	- Accent pink for notifications to draw attention and provide color variability within the app.
	- High-contrast choices for accessibility (goal progress & monetary figures).
- Behavioral intent: Green reinforces steady growth; orange reserved for warnings; minimal noise (removed extraneous section labels like “Necessity”).
  

## 10. Divergences from Original Concept Spec

- Authentication model: User → Session (systemic change).
- Queries: Full object returns by LLM → ID-only, enforcing independence and specific parameters returned when needed.
- Notification lifecycle: Added milestone + savings reminder mechanics absent in initial spec.
- City validation dropped (delegated to LLM logic).
- Separation of AI estimate vs total cost retained, despite LLM being capable of computing total costs of trips across multiple nights, but could be unreliable in those instances.
- Refined synchronization semantics by avoiding intra-concept auto-chaining with syncs, as it didn’t align with the intended purpose of syncs, facilitating synchronization between different concepts.


## 11. Key Design Lessons Incorporated

- Continuous spec alignment prevents drift (representation independence).
- Session centralization simplifies payload contracts and increases the security of the application.
- Preservation strategies needed when backend eventual consistency or delayed visibility occurs.

## Snapshot References (Immutable Moments)

- Notification concept restructuring: [20251015_203844.06aca8e2](../../context/design/concepts/Notification/testing.md/20251015_203844.06aca8e2.md)
- PasswordAuthentication constraints & inconsistency: [20251015_220736.ead8cc82](../../context/src/concepts/PasswordAuthentication/PasswordAuthenticationConcept.test.ts/20251015_220736.ead8cc82.md)
- ProgressTracking implementation + spec refinement: [20251015_224640.92baf8e4](../../context/design/concepts/ProgressTracking/implementation.md/20251015_224640.92baf8e4.md) / [20251016_095310.3a9e2088](../../context/design/concepts/ProgressTracking/ProgressTrackingSpec.md/20251016_095310.3a9e2088.md)
- TripCostEstimation LLM prompt evolution: [20251016_133650.417c74c9](../../context/design/concepts/TripCostEstimation/comparison-two-implementations.md/20251016_133650.417c74c9.md)
- Parsing reliability test (LLM variability): [20251017_184647.70888acc](../../context/src/concepts/TripCostEstimation/TripCostEstimationConcept.test.ts/20251017_184647.70888acc.md)

## Final Summary

- Auth: Session-only unifies flows.
- Data: ID-return queries enforce abstraction.
- Notifications: Expanded logic, milestone handling, reliable persistence.
- ProgressTracking: Cleaner ID handling; manual notification orchestration.
- LLM Integration: Prompt simplified; parsing lean.
- Visual Design: Trust + clarity + motivation; reduced cognitive load.
