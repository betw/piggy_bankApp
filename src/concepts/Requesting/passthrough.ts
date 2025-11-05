/**
 * The Requesting concept exposes passthrough routes by default,
 * which allow POSTs to the route:
 *
 * /{REQUESTING_BASE_URL}/{Concept name}/{action or query}
 *
 * to passthrough directly to the concept action or query.
 * This is a convenient and natural way to expose concepts to
 * the world, but should only be done intentionally for public
 * actions and queries.
 *
 * This file allows you to explicitly set inclusions and exclusions
 * for passthrough routes:
 * - inclusions: those that you can justify their inclusion
 * - exclusions: those to exclude, using Requesting routes instead
 */

/**
 * INCLUSIONS
 *
 * Each inclusion must include a justification for why you think
 * the passthrough is appropriate (e.g. public query).
 *
 * inclusions = {"route": "justification"}
 */

export const inclusions: Record<string, string> = {
  // PasswordAuthentication
  "/api/PasswordAuthentication/_getUserUsername": "",
  "/api/PasswordAuthentication/_getAllUsers": "",

  "/api/Notification/createNotification": "",
  "/api/Notification/deleteNotification": "",
  "/api/Notification/_getAllNotifications": "",
  "/api/Notification/getNotificationMessageAndFreq": "",

  "/api/ProgressTracking/createPlan": "",
  "/api/ProgressTracking/addAmount": "",
  "/api/ProgressTracking/removeAmount": "",
  "/api/ProgressTracking/deletePlan": "",
  "/api/ProgressTracking/modifyPlan": "",
  "/api/ProgressTracking/updateGoalStatus": "",
  "/api/ProgressTracking/_getPlans": "",

  "/api/TripCostEstimation/_parseLLMCostEstimate": "",
  "/api/TripCostEstimation/deleteTravelPlan": "",
  "/api/TripCostEstimation/updateNecessity": "",
  "/api/TripCostEstimation/resetNecessity": "",
  "/api/TripCostEstimation/generateAICostEstimate": "",
  "/api/TripCostEstimation/editEstimateCost": "",
  "/api/TripCostEstimation/deleteEstimateCost": "",
  "/api/TripCostEstimation/getTravelCities": "",
  "/api/TripCostEstimation/getTravelDates": "",
  "/api/TripCostEstimation/estimateCost": "",
  "/api/TripCostEstimation/_getAllTravelPlans": "",
};

/**
 * EXCLUSIONS
 *
 * Excluded routes fall back to the Requesting concept, and will
 * instead trigger the normal Requesting.request action. As this
 * is the intended behavior, no justification is necessary.
 *
 * exclusions = ["route"]
 */

export const exclusions: Array<string> = [
  // TripCostEstimation
  "/api/TripCostEstimation/createTravelPlan",

  // PasswordAuthentication
  "/api/PasswordAuthentication/register",
  "/api/PasswordAuthentication/authenticate",

  // Sessioning
  "/api/Sessioning/create",
  "/api/Sessioning/delete",
  "/api/Sessioning/_getUser",
];
