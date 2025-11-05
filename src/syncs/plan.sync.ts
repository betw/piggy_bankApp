import { actions, Sync } from "@engine";
import { Requesting, Sessioning, TripCostEstimation } from "@concepts";

// When a client requests creating a travel plan and a valid session maps to a user,
// call TripCostEstimation.createTravelPlan with the corresponding inputs.
export const CreateTravelPlan: Sync = (
  { request, session, user, fromCity, toCity, fromDate, toDate },
) => ({
  when: actions([
    Requesting.request,
    {
      user,
      session,
      path: "/TripCostEstimation/createTravelPlan",
      fromCity,
      toCity,
      fromDate,
      toDate,
    },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([
    TripCostEstimation.createTravelPlan,
    { user, fromCity, toCity, fromDate, toDate },
  ]),
});

// Respond with the created travelPlan on success
export const CreateTravelPlanResponseSuccess: Sync = (
  { request, travelPlan },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/createTravelPlan" }, {
      request,
    }],
    [TripCostEstimation.createTravelPlan, {}, { travelPlan }],
  ),
  then: actions([Requesting.respond, { request, travelPlan }]),
});

// Respond with error when createTravelPlan fails
export const CreateTravelPlanResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/createTravelPlan" }, {
      request,
    }],
    [TripCostEstimation.createTravelPlan, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});
// --- deleteTravelPlan ---
export const DeleteTravelPlan: Sync = (
  { request, session, user, travelPlan },
) => ({
  when: actions([
    Requesting.request,
    { path: "/TripCostEstimation/deleteTravelPlan", session, travelPlan },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([TripCostEstimation.deleteTravelPlan, { user, travelPlan }]),
});

export const DeleteTravelPlanResponseSuccess: Sync = (
  { request, travelPlan },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/deleteTravelPlan" }, {
      request,
    }],
    [TripCostEstimation.deleteTravelPlan, {}, { travelPlan }],
  ),
  then: actions([Requesting.respond, { request, travelPlan }]),
});

export const DeleteTravelPlanResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/deleteTravelPlan" }, {
      request,
    }],
    [TripCostEstimation.deleteTravelPlan, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- updateNecessity ---
export const UpdateNecessity: Sync = (
  { request, session, user, travelPlan, accommodation, diningFlag },
) => ({
  when: actions([
    Requesting.request,
    {
      path: "/TripCostEstimation/updateNecessity",
      session,
      travelPlan,
      accommodation,
      diningFlag,
    },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([
    TripCostEstimation.updateNecessity,
    { user, travelPlan, accommodation, diningFlag },
  ]),
});

export const UpdateNecessityResponseSuccess: Sync = (
  { request, travelPlan, necessity },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/updateNecessity" }, {
      request,
    }],
    [TripCostEstimation.updateNecessity, {}, { travelPlan, necessity }],
  ),
  then: actions([Requesting.respond, { request, travelPlan, necessity }]),
});

export const UpdateNecessityResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/updateNecessity" }, {
      request,
    }],
    [TripCostEstimation.updateNecessity, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- resetNecessity ---
export const ResetNecessity: Sync = (
  { request, session, user, travelPlan },
) => ({
  when: actions([
    Requesting.request,
    { path: "/TripCostEstimation/resetNecessity", session, travelPlan },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([TripCostEstimation.resetNecessity, { user, travelPlan }]),
});

export const ResetNecessityResponseSuccess: Sync = (
  { request, necessity },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/resetNecessity" }, {
      request,
    }],
    [TripCostEstimation.resetNecessity, {}, { necessity }],
  ),
  then: actions([Requesting.respond, { request, necessity }]),
});

export const ResetNecessityResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/resetNecessity" }, {
      request,
    }],
    [TripCostEstimation.resetNecessity, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- generateAICostEstimate ---
export const GenerateAICostEstimate: Sync = (
  { request, session, user, travelPlan },
) => ({
  when: actions([
    Requesting.request,
    { path: "/TripCostEstimation/generateAICostEstimate", session, travelPlan },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([TripCostEstimation.generateAICostEstimate, {
    user,
    travelPlan,
  }]),
});

export const GenerateAICostEstimateResponseSuccess: Sync = (
  { request, costEstimate },
) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/TripCostEstimation/generateAICostEstimate" },
      { request },
    ],
    [TripCostEstimation.generateAICostEstimate, {}, { costEstimate }],
  ),
  then: actions([Requesting.respond, { request, costEstimate }]),
});

export const GenerateAICostEstimateResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [
      Requesting.request,
      { path: "/TripCostEstimation/generateAICostEstimate" },
      { request },
    ],
    [TripCostEstimation.generateAICostEstimate, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- editEstimateCost ---
export const EditEstimateCost: Sync = (
  { request, session, user, travelPlan, flight, roomsPerNight, foodDaily },
) => ({
  when: actions([
    Requesting.request,
    {
      path: "/TripCostEstimation/editEstimateCost",
      session,
      travelPlan,
      flight,
      roomsPerNight,
      foodDaily,
    },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([
    TripCostEstimation.editEstimateCost,
    { user, travelPlan, flight, roomsPerNight, foodDaily },
  ]),
});

export const EditEstimateCostResponseSuccess: Sync = (
  { request, costEstimate },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/editEstimateCost" }, {
      request,
    }],
    [TripCostEstimation.editEstimateCost, {}, { costEstimate }],
  ),
  then: actions([Requesting.respond, { request, costEstimate }]),
});

export const EditEstimateCostResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/editEstimateCost" }, {
      request,
    }],
    [TripCostEstimation.editEstimateCost, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- deleteEstimateCost ---
export const DeleteEstimateCost: Sync = (
  { request, session, user, costEstimate },
) => ({
  when: actions([
    Requesting.request,
    { path: "/TripCostEstimation/deleteEstimateCost", session, costEstimate },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([TripCostEstimation.deleteEstimateCost, {
    user,
    costEstimate,
  }]),
});

export const DeleteEstimateCostResponseSuccess: Sync = (
  { request, costEstimate },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/deleteEstimateCost" }, {
      request,
    }],
    [TripCostEstimation.deleteEstimateCost, {}, { costEstimate }],
  ),
  then: actions([Requesting.respond, { request, costEstimate }]),
});

export const DeleteEstimateCostResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/deleteEstimateCost" }, {
      request,
    }],
    [TripCostEstimation.deleteEstimateCost, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- getTravelCities ---
export const GetTravelCities: Sync = (
  { request, session, user, travelPlan },
) => ({
  when: actions([
    Requesting.request,
    { path: "/TripCostEstimation/getTravelCities", session, travelPlan },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([TripCostEstimation.getTravelCities, { user, travelPlan }]),
});

export const GetTravelCitiesResponseSuccess: Sync = (
  { request, fromCity, toCity },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/getTravelCities" }, {
      request,
    }],
    [TripCostEstimation.getTravelCities, {}, { fromCity, toCity }],
  ),
  then: actions([Requesting.respond, { request, fromCity, toCity }]),
});

export const GetTravelCitiesResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/getTravelCities" }, {
      request,
    }],
    [TripCostEstimation.getTravelCities, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- getTravelDates ---
export const GetTravelDates: Sync = (
  { request, session, user, travelPlan },
) => ({
  when: actions([
    Requesting.request,
    { path: "/TripCostEstimation/getTravelDates", session, travelPlan },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([TripCostEstimation.getTravelDates, { user, travelPlan }]),
});

export const GetTravelDatesResponseSuccess: Sync = (
  { request, fromDate, toDate },
) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/getTravelDates" }, {
      request,
    }],
    [TripCostEstimation.getTravelDates, {}, { fromDate, toDate }],
  ),
  then: actions([Requesting.respond, { request, fromDate, toDate }]),
});

export const GetTravelDatesResponseError: Sync = ({ request, error }) => ({
  when: actions(
    [Requesting.request, { path: "/TripCostEstimation/getTravelDates" }, {
      request,
    }],
    [TripCostEstimation.getTravelDates, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});
// --- _getAllTravelPlans ---
// NOTE: _getAllTravelPlans is a query (prefixed with `_`), so we invoke it in `where`
// and only perform Requesting.respond in `then`.
export const GetAllTravelPlansResponseSuccess: Sync = (
  { request, session, user, travelPlans, error },
) => ({
  when: actions(
    [Requesting.request, {
      path: "/TripCostEstimation/_getAllTravelPlans",
      session,
    }, {
      request,
    }],
  ),
  where: async (frames) => {
    // Authenticate session -> user
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    // Run the query to fetch plans; bind both shapes and filter to success frames
    frames = await frames.query(
      TripCostEstimation._getAllTravelPlans,
      { user },
      { travelPlans, error },
    );
    frames = frames.filter((f) =>
      (f as Record<symbol, unknown>)[travelPlans] !== undefined
    );
    return frames;
  },
  then: actions([Requesting.respond, { request, travelPlans }]),
});

export const GetAllTravelPlansResponseError: Sync = (
  { request, session, user, travelPlans, error },
) => ({
  when: actions(
    [Requesting.request, {
      path: "/TripCostEstimation/_getAllTravelPlans",
      session,
    }, {
      request,
    }],
  ),
  where: async (frames) => {
    // Authenticate session -> user
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    // Run the query to fetch plans and filter to error frames
    frames = await frames.query(
      TripCostEstimation._getAllTravelPlans,
      { user },
      { travelPlans, error },
    );
    frames = frames.filter((f) =>
      (f as Record<symbol, unknown>)[error] !== undefined
    );
    return frames;
  },
  then: actions([Requesting.respond, { request, error }]),
});

// --- Chain edits/AI estimate to compute total cost automatically ---
export const EditEstimateCostAutoEstimate: Sync = ({ user, travelPlan }) => ({
  when: actions(
    [TripCostEstimation.editEstimateCost, { user, travelPlan }],
  ),
  then: actions([TripCostEstimation.estimateCost, { user, travelPlan }]),
});

export const GenerateAICostEstimateAutoEstimate: Sync = (
  { user, travelPlan },
) => ({
  when: actions(
    [TripCostEstimation.generateAICostEstimate, { user, travelPlan }],
  ),
  then: actions([TripCostEstimation.estimateCost, { user, travelPlan }]),
});
