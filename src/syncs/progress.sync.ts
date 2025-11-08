import { actions, Sync } from "@engine";
import { ProgressTracking, Requesting, Sessioning } from "@concepts";

// --- createPlan ---
// Request sync: authenticated via session -> user, then create the plan
export const CreatePlan: Sync = (
  { request, session, user, trip, paymentPeriod, amountPerPeriod, goalAmount },
) => ({
  when: actions([
    Requesting.request,
    {
      path: "/ProgressTracking/createPlan",
      session,
      trip,
      paymentPeriod,
      amountPerPeriod,
      goalAmount,
    },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([
    ProgressTracking.createPlan,
    { user, trip, paymentPeriod, amountPerPeriod, goalAmount },
  ]),
});

export const CreatePlanResponseSuccess: Sync = (
  { request, plan, paymentPeriod, amountPerPeriod },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/createPlan" }, { request }],
    [ProgressTracking.createPlan, {}, { plan, paymentPeriod, amountPerPeriod }],
  ),
  then: actions([Requesting.respond, {
    request,
    plan,
    paymentPeriod,
    amountPerPeriod,
  }]),
});

export const CreatePlanResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/createPlan" }, { request }],
    [ProgressTracking.createPlan, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- addAmount ---
export const AddAmount: Sync = (
  { request, session, user, plan, amount },
) => ({
  when: actions([
    Requesting.request,
    { path: "/ProgressTracking/addAmount", session, plan, amount },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([ProgressTracking.addAmount, { user, plan, amount }]),
});

export const AddAmountResponseSuccess: Sync = (
  { request, currentAmount },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/addAmount" }, { request }],
    [ProgressTracking.addAmount, {}, { currentAmount }],
  ),
  then: actions([Requesting.respond, { request, currentAmount }]),
});

export const AddAmountResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/addAmount" }, { request }],
    [ProgressTracking.addAmount, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- removeAmount ---
export const RemoveAmount: Sync = (
  { request, session, user, plan, amount },
) => ({
  when: actions([
    Requesting.request,
    { path: "/ProgressTracking/removeAmount", session, plan, amount },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([ProgressTracking.removeAmount, { user, plan, amount }]),
});

export const RemoveAmountResponseSuccess: Sync = (
  { request, currentAmount },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/removeAmount" }, {
      request,
    }],
    [ProgressTracking.removeAmount, {}, { currentAmount }],
  ),
  then: actions([Requesting.respond, { request, currentAmount }]),
});

export const RemoveAmountResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/removeAmount" }, {
      request,
    }],
    [ProgressTracking.removeAmount, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- deletePlan ---
export const DeletePlan: Sync = (
  { request, session, user, plan },
) => ({
  when: actions([
    Requesting.request,
    { path: "/ProgressTracking/deletePlan", session, plan },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([ProgressTracking.deletePlan, { user, plan }]),
});

export const DeletePlanResponseSuccess: Sync = (
  { request, plan },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/deletePlan", plan }, {
      request,
    }],
    [ProgressTracking.deletePlan, {}, {}],
  ),
  then: actions([Requesting.respond, { request, plan }]),
});

export const DeletePlanResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/deletePlan" }, { request }],
    [ProgressTracking.deletePlan, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- modifyPlan ---
export const ModifyPlan: Sync = (
  { request, session, user, plan, newPaymentPeriod, newAmountPerPeriod },
) => ({
  when: actions([
    Requesting.request,
    {
      path: "/ProgressTracking/modifyPlan",
      session,
      plan,
      newPaymentPeriod,
      newAmountPerPeriod,
    },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([
    ProgressTracking.modifyPlan,
    { user, plan, newPaymentPeriod, newAmountPerPeriod },
  ]),
});

export const ModifyPlanResponseSuccess: Sync = (
  { request, plan, newPaymentPeriod, newAmountPerPeriod },
) => ({
  when: actions(
    [Requesting.request, {
      path: "/ProgressTracking/modifyPlan",
      plan,
      newPaymentPeriod,
      newAmountPerPeriod,
    }, { request }],
    [ProgressTracking.modifyPlan, {}, {}],
  ),
  then: actions([Requesting.respond, { request }]),
});

export const ModifyPlanResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/modifyPlan" }, { request }],
    [ProgressTracking.modifyPlan, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- updateGoalStatus ---
export const UpdateGoalStatus: Sync = (
  { request, session, user, plan },
) => ({
  when: actions([
    Requesting.request,
    { path: "/ProgressTracking/updateGoalStatus", session, plan },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([ProgressTracking.updateGoalStatus, { user, plan }]),
});

export const UpdateGoalStatusResponseSuccess: Sync = (
  { request, goalReachedFlag },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/updateGoalStatus" }, {
      request,
    }],
    [ProgressTracking.updateGoalStatus, {}, { goalReachedFlag }],
  ),
  then: actions([Requesting.respond, { request, goalReachedFlag }]),
});

export const UpdateGoalStatusResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/ProgressTracking/updateGoalStatus" }, {
      request,
    }],
    [ProgressTracking.updateGoalStatus, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- _getPlans (query) ---
// Run the query after resolving session->user; filter success frames and respond.
export const GetPlansResponseSuccess: Sync = (
  { request, session, user, plans, error },
) => ({
  when: actions([
    Requesting.request,
    { path: "/ProgressTracking/_getPlans", session },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    frames = await frames.query(ProgressTracking._getPlans, { user }, {
      plans,
      error,
    });
    frames = frames.filter((f) =>
      (f as Record<symbol, unknown>)[plans] !== undefined
    );
    return frames;
  },
  then: actions([Requesting.respond, { request, plans }]),
});

export const GetPlansResponseError: Sync = (
  { request, session, user, plans, error },
) => ({
  when: actions([
    Requesting.request,
    { path: "/ProgressTracking/_getPlans", session },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    frames = await frames.query(ProgressTracking._getPlans, { user }, {
      plans,
      error,
    });
    frames = frames.filter((f) =>
      (f as Record<symbol, unknown>)[error] !== undefined
    );
    return frames;
  },
  then: actions([Requesting.respond, { request, error }]),
});

// --- Milestone Notifications on addAmount ---
// Create a "goal completed" notification when currentAmount >= goalAmount,
// using the goalAmount provided on the original createPlan request.
