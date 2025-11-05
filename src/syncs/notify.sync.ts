// import { actions, Sync } from "@engine";
// import { Requesting, Sessioning, TripCostEstimation } from "@concepts";

// // When a client requests creating a travel plan and a valid session maps to a user,
// // call TripCostEstimation.createTravelPlan with the corresponding inputs.
// export const CreateTravelPlan: Sync = (
//   { request, session, user, fromCity, toCity, fromDate, toDate },
// ) => ({
//   when: actions([
//     Requesting.request,
//     {
//       session,
//       path: "/TripCostEstimation/createTravelPlan",
//       fromCity,
//       toCity,
//       fromDate,
//       toDate,
//     },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([
//     TripCostEstimation.createTravelPlan,
//     { user, fromCity, toCity, fromDate, toDate },
//   ]),
// });

// // Respond with the created travelPlan on success
// export const CreateTravelPlanResponseSuccess: Sync = (
//   { request, session, user: _user, travelPlan },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/createTravelPlan",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.createTravelPlan, {}, { travelPlan }],
//   ),
//   then: actions([Requesting.respond, { request, travelPlan }]),
// });

// // Respond with error when createTravelPlan fails
// export const CreateTravelPlanResponseError: Sync = (
//   { request, session, user: _user, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/createTravelPlan",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.createTravelPlan, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });
// // --- deleteTravelPlan ---
// export const DeleteTravelPlan: Sync = (
//   { request, session, user, travelPlan },
// ) => ({
//   when: actions([
//     Requesting.request,
//     { path: "/TripCostEstimation/deleteTravelPlan", session, travelPlan },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([TripCostEstimation.deleteTravelPlan, { user, travelPlan }]),
// });

// export const DeleteTravelPlanResponseSuccess: Sync = (
//   { request, session, user: _user, travelPlan },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/deleteTravelPlan",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.deleteTravelPlan, {}, { travelPlan }],
//   ),
//   then: actions([Requesting.respond, { request, travelPlan }]),
// });

// export const DeleteTravelPlanResponseError: Sync = (
//   { request, session, user: _user, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/deleteTravelPlan",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.deleteTravelPlan, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- updateNecessity ---
// export const UpdateNecessity: Sync = (
//   { request, session, user, travelPlan, accommodation, diningFlag },
// ) => ({
//   when: actions([
//     Requesting.request,
//     {
//       path: "/TripCostEstimation/updateNecessity",
//       session,
//       travelPlan,
//       accommodation,
//       diningFlag,
//     },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([
//     TripCostEstimation.updateNecessity,
//     { user, travelPlan, accommodation, diningFlag },
//   ]),
// });

// export const UpdateNecessityResponseSuccess: Sync = (
//   { request, travelPlan, necessity },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/updateNecessity",
//     }, {
//       request,
//     }],
//     [TripCostEstimation.updateNecessity, {}, { travelPlan, necessity }],
//   ),
//   then: actions([Requesting.respond, { request, travelPlan, necessity }]),
// });

// export const UpdateNecessityResponseError: Sync = (
//   { request, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/updateNecessity",
//     }, {
//       request,
//     }],
//     [TripCostEstimation.updateNecessity, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- resetNecessity ---
// export const ResetNecessity: Sync = (
//   { request, session, user, travelPlan },
// ) => ({
//   when: actions([
//     Requesting.request,
//     { path: "/TripCostEstimation/resetNecessity", session, travelPlan },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([TripCostEstimation.resetNecessity, { user, travelPlan }]),
// });

// export const ResetNecessityResponseSuccess: Sync = (
//   { request, session, user: _user, necessity },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/resetNecessity",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.resetNecessity, {}, { necessity }],
//   ),
//   then: actions([Requesting.respond, { request, necessity }]),
// });

// export const ResetNecessityResponseError: Sync = (
//   { request, session, user: _user, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/resetNecessity",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.resetNecessity, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- estimateCost (direct) ---
// export const EstimateCost: Sync = (
//   { request, session, user, travelPlan },
// ) => ({
//   when: actions([
//     Requesting.request,
//     { path: "/TripCostEstimation/estimateCost", session, travelPlan },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([TripCostEstimation.estimateCost, { user, travelPlan }]),
// });

// export const EstimateCostResponseSuccess: Sync = (
//   { request, totalCost },
// ) => ({
//   when: actions(
//     [Requesting.request, { path: "/TripCostEstimation/estimateCost" }, {
//       request,
//     }],
//     [TripCostEstimation.estimateCost, {}, { totalCost }],
//   ),
//   then: actions([Requesting.respond, { request, totalCost }]),
// });

// export const EstimateCostResponseError: Sync = (
//   { request, error },
// ) => ({
//   when: actions(
//     [Requesting.request, { path: "/TripCostEstimation/estimateCost" }, {
//       request,
//     }],
//     [TripCostEstimation.estimateCost, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- generateAICostEstimate ---
// export const GenerateAICostEstimate: Sync = (
//   { request, session, user, travelPlan },
// ) => ({
//   when: actions([
//     Requesting.request,
//     { path: "/TripCostEstimation/generateAICostEstimate", session, travelPlan },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([TripCostEstimation.generateAICostEstimate, {
//     user,
//     travelPlan,
//   }]),
// });

// // Chain: after AI estimate is created, compute total cost
// // export const GenerateAICostEstimateAutoEstimate: Sync = (
// //   { user, travelPlan },
// // ) => ({
// //   when: actions(
// //     [TripCostEstimation.generateAICostEstimate, { user, travelPlan }],
// //   ),
// //   then: actions([TripCostEstimation.estimateCost, { user, travelPlan }]),
// // });

// // Respond only after auto-estimate has computed total cost
// export const GenerateAICostEstimateResponseSuccess: Sync = (
//   { request, session, user, travelPlan, costEstimate },
// ) => ({
//   when: actions(
//     [
//       Requesting.request,
//       { path: "/TripCostEstimation/generateAICostEstimate", session },
//       { request },
//     ],
//     // The AI estimate must have been created for this user/plan
//     [TripCostEstimation.generateAICostEstimate, { user, travelPlan }, {
//       costEstimate,
//     }],
//   ),
//   then: actions([Requesting.respond, { request, costEstimate }]),
// });

// export const GenerateAICostEstimateResponseError: Sync = (
//   { request, session, error },
// ) => ({
//   when: actions(
//     [
//       Requesting.request,
//       { path: "/TripCostEstimation/generateAICostEstimate", session },
//       { request },
//     ],
//     [TripCostEstimation.generateAICostEstimate, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- editEstimateCost ---
// export const EditEstimateCost: Sync = (
//   { request, session, user, travelPlan, flight, roomsPerNight, foodDaily },
// ) => ({
//   when: actions([
//     Requesting.request,
//     {
//       path: "/TripCostEstimation/editEstimateCost",
//       session,
//       travelPlan,
//       flight,
//       roomsPerNight,
//       foodDaily,
//     },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([
//     TripCostEstimation.editEstimateCost,
//     { user, travelPlan, flight, roomsPerNight, foodDaily },
//   ]),
// });

// // Chain: after manual edit, compute total cost
// // export const EditEstimateCostAutoEstimate: Sync = ({ user, travelPlan }) => ({
// //   when: actions(
// //     [TripCostEstimation.editEstimateCost, { user, travelPlan }],
// //   ),
// //   then: actions([TripCostEstimation.estimateCost, { user, travelPlan }]),
// // });

// // Respond only after auto-estimate has computed total cost
// export const EditEstimateCostAutoEstimateResponseSuccess: Sync = (
//   { request, session, user, travelPlan, costEstimate },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/editEstimateCost",
//       session,
//     }, {
//       request,
//     }],
//     // The edit must have been applied for this user/plan
//     [TripCostEstimation.editEstimateCost, { user, travelPlan }, {
//       costEstimate,
//     }],
//   ),
//   then: actions([Requesting.respond, { request, costEstimate }]),
// });

// // If the chained total estimate fails, surface that error
// // export const EditEstimateCostAutoEstimateResponseError: Sync = (
// //   { request, session, user, travelPlan, error },
// // ) => ({
// //   when: actions(
// //     [Requesting.request, {
// //       path: "/TripCostEstimation/editEstimateCost",
// //       session,
// //     }, {
// //       request,
// //     }],
// //     [TripCostEstimation.editEstimateCost, { user, travelPlan }, {}],
// //     [TripCostEstimation.estimateCost, { user, travelPlan }, { error }],
// //   ),
// //   then: actions([Requesting.respond, { request, error }]),
// // });

// export const EditEstimateCostResponseError: Sync = (
//   { request, session, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/editEstimateCost",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.editEstimateCost, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- deleteEstimateCost ---
// export const DeleteEstimateCost: Sync = (
//   { request, session, user, costEstimate },
// ) => ({
//   when: actions([
//     Requesting.request,
//     { path: "/TripCostEstimation/deleteEstimateCost", session, costEstimate },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([TripCostEstimation.deleteEstimateCost, {
//     user,
//     costEstimate,
//   }]),
// });

// export const DeleteEstimateCostResponseSuccess: Sync = (
//   { request, session, costEstimate },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/deleteEstimateCost",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.deleteEstimateCost, {}, { costEstimate }],
//   ),
//   then: actions([Requesting.respond, { request, costEstimate }]),
// });

// export const DeleteEstimateCostResponseError: Sync = (
//   { request, session, user: _user, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/deleteEstimateCost",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.deleteEstimateCost, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- getTravelCities ---
// export const GetTravelCities: Sync = (
//   { request, session, user, travelPlan },
// ) => ({
//   when: actions([
//     Requesting.request,
//     { path: "/TripCostEstimation/getTravelCities", session, travelPlan },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([TripCostEstimation.getTravelCities, { user, travelPlan }]),
// });

// export const GetTravelCitiesResponseSuccess: Sync = (
//   { request, session, user: _user, fromCity, toCity },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/getTravelCities",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.getTravelCities, {}, { fromCity, toCity }],
//   ),
//   then: actions([Requesting.respond, { request, fromCity, toCity }]),
// });

// export const GetTravelCitiesResponseError: Sync = (
//   { request, session, user: _user, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/getTravelCities",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.getTravelCities, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });

// // --- getTravelDates ---
// export const GetTravelDates: Sync = (
//   { request, session, user, travelPlan },
// ) => ({
//   when: actions([
//     Requesting.request,
//     { path: "/TripCostEstimation/getTravelDates", session, travelPlan },
//     { request },
//   ]),
//   where: async (frames) => {
//     frames = await frames.query(Sessioning._getUser, { session }, { user });
//     return frames;
//   },
//   then: actions([TripCostEstimation.getTravelDates, { user, travelPlan }]),
// });

// export const GetTravelDatesResponseSuccess: Sync = (
//   { request, session, user: _user, fromDate, toDate },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/getTravelDates",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.getTravelDates, {}, { fromDate, toDate }],
//   ),
//   then: actions([Requesting.respond, { request, fromDate, toDate }]),
// });

// export const GetTravelDatesResponseError: Sync = (
//   { request, session, user: _user, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/getTravelDates",
//       session,
//     }, {
//       request,
//     }],
//     [TripCostEstimation.getTravelDates, {}, { error }],
//   ),
//   then: actions([Requesting.respond, { request, error }]),
// });
// // --- _getAllTravelPlans ---
// // NOTE: _getAllTravelPlans is a query (prefixed with `_`), so we invoke it in `where`
// // and only perform Requesting.respond in `then`.
// export const GetAllTravelPlansResponseSuccess: Sync = (
//   { request, session, user, travelPlans, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/_getAllTravelPlans",
//       session,
//     }, {
//       request,
//     }],
//   ),
//   where: async (frames) => {
//     // Run the query to fetch plans; bind both shapes and filter to success frames
//     frames = await frames.query(
//       TripCostEstimation._getAllTravelPlans,
//       { user },
//       { travelPlans, error },
//     );
//     frames = frames.filter((f) =>
//       (f as Record<symbol, unknown>)[travelPlans] !== undefined
//     );
//     return frames;
//   },
//   then: actions([Requesting.respond, { request, travelPlans }]),
// });

// export const GetAllTravelPlansResponseError: Sync = (
//   { request, session, user, travelPlans, error },
// ) => ({
//   when: actions(
//     [Requesting.request, {
//       path: "/TripCostEstimation/_getAllTravelPlans",
//       session,
//     }, {
//       request,
//     }],
//   ),
//   where: async (frames) => {
//     // Run the query to fetch plans and filter to error frames
//     frames = await frames.query(
//       TripCostEstimation._getAllTravelPlans,
//       { user },
//       { travelPlans, error },
//     );
//     frames = frames.filter((f) =>
//       (f as Record<symbol, unknown>)[error] !== undefined
//     );
//     return frames;
//   },
//   then: actions([Requesting.respond, { request, error }]),
// });
// //
