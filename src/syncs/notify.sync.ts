import { actions, Sync } from "@engine";
import { Notification, Requesting, Sessioning } from "@concepts";

// --- createNotification (standalone) ---
export const CreateNotification: Sync = (
  { request, session, user, progress, frequency, message },
) => ({
  when: actions([
    Requesting.request,
    {
      path: "/Notification/createNotification",
      session,
      progress,
      frequency,
      message,
    },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([
    Notification.createNotification,
    { user, progress, frequency, message },
  ]),
});

export const CreateNotificationResponseSuccess: Sync = (
  { request, notification },
) => ({
  when: actions(
    [Requesting.request, { path: "/Notification/createNotification" }, {
      request,
    }],
    [Notification.createNotification, {}, { notification }],
  ),
  then: actions([Requesting.respond, { request, notification }]),
});

export const CreateNotificationResponseError: Sync = (
  { request, error },
) => ({
  when: actions(
    [Requesting.request, { path: "/Notification/createNotification" }, {
      request,
    }],
    [Notification.createNotification, {}, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});

// --- getNotificationMessageAndFreq ---
// Assumption: Notification.getNotificationMessageAndFreq takes (user, notification) and
// returns (frequency, message) or (error). Adjust inputs if the underlying concept differs.
// Request sync: session validated via Sessioning._getUser in where.
export const GetNotificationMessageAndFreq: Sync = (
  { request, user, session, notification },
) => ({
  when: actions([
    Requesting.request,
    {
      path: "/Notification/getNotificationMessageAndFreq",
      session,
      notification,
    },
    { request },
  ]),
  where: async (frames) => {
    frames = await frames.query(Sessioning._getUser, { session }, { user });
    return frames;
  },
  then: actions([
    Notification.getNotificationMessageAndFreq,
    { user, notification },
  ]),
});

export const GetNotificationMessageAndFreqResponseSuccess: Sync = (
  { request, notification, frequency, message },
) => ({
  when: actions(
    [Requesting.request, {
      path: "/Notification/getNotificationMessageAndFreq",
      notification,
    }, { request }],
    [Notification.getNotificationMessageAndFreq, { notification }, {
      frequency,
      message,
    }],
  ),
  then: actions([Requesting.respond, { request, frequency, message }]),
});

// Error response
export const GetNotificationMessageAndFreqResponseError: Sync = (
  { request, notification, error },
) => ({
  when: actions(
    [Requesting.request, {
      path: "/Notification/getNotificationMessageAndFreq",
      notification,
    }, { request }],
    [Notification.getNotificationMessageAndFreq, { notification }, { error }],
  ),
  then: actions([Requesting.respond, { request, error }]),
});
