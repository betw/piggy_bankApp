[Requesting] Received request for path: /ProgressTracking/createPlan
Requesting.request {
trip: '019a6128-638f-79ab-aaa9-48c9d6438e1d',
paymentPeriod: 1,
amountPerPeriod: 250,
goalAmount: 5600,
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/ProgressTracking/createPlan'
} => { request: '019a6129-0ebd-71f5-9f63-35f6fe05be6b' }
ProgressTracking.createPlan {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
trip: '019a6128-638f-79ab-aaa9-48c9d6438e1d',
paymentPeriod: 1,
amountPerPeriod: 250,
goalAmount: 5600
} => {
plan: '019a6129-0f3d-7fb5-a936-0013c386350a',
paymentPeriod: 1,
amountPerPeriod: 250
}
Requesting.respond {
request: '019a6129-0ebd-71f5-9f63-35f6fe05be6b',
plan: '019a6129-0f3d-7fb5-a936-0013c386350a',
paymentPeriod: 1,
amountPerPeriod: 250
} => { request: '019a6129-0ebd-71f5-9f63-35f6fe05be6b' }
[Requesting] Received request for path: /Notification/createNotification
Requesting.request {
progress: '019a6129-0f3d-7fb5-a936-0013c386350a',
message: 'Savings reminder: set aside $250 every 1 months.',
frequency: 1,
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/createNotification'
} => { request: '019a6129-110f-7e78-95d9-41b1541c6513' }
Notification.createNotification {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
progress: '019a6129-0f3d-7fb5-a936-0013c386350a',
frequency: 1,
message: 'Savings reminder: set aside $250 every 1 months.'
} => { notification: '019a6129-118f-7f1a-ac08-c99a5cc53928' }
Requesting.respond {
request: '019a6129-110f-7e78-95d9-41b1541c6513',
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928'
} => { request: '019a6129-110f-7e78-95d9-41b1541c6513' }
[Requesting] Received request for path: /Notification/_getAllNotifications
Requesting.request {
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/_getAllNotifications'
} => { request: '019a6129-12ff-79a8-966c-a1a8467c37c4' }
Requesting.respond {
request: '019a6129-12ff-79a8-966c-a1a8467c37c4',
notifications: [ '019a6129-118f-7f1a-ac08-c99a5cc53928' ]
} => { request: '019a6129-12ff-79a8-966c-a1a8467c37c4' }
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
Requesting.request {
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a6129-157f-75a3-be8e-7f1f1f2cd6b1' }
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928'
} => {
message: 'Savings reminder: set aside $250 every 1 months.',
frequency: 1
}
Requesting.respond {
request: '019a6129-157f-75a3-be8e-7f1f1f2cd6b1',
frequency: 1,
message: 'Savings reminder: set aside $250 every 1 months.'
} => { request: '019a6129-157f-75a3-be8e-7f1f1f2cd6b1' }
[Requesting] Received request for path: /Notification/createNotification
Requesting.request {
progress: '019a6129-0f3d-7fb5-a936-0013c386350a',
message: 'You are halfway there!',
frequency: 1,
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/createNotification'
} => { request: '019a6129-802b-7f4b-a396-ae4c5cabaf04' }
Notification.createNotification {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
progress: '019a6129-0f3d-7fb5-a936-0013c386350a',
frequency: 1,
message: 'You are halfway there!'
} => { notification: '019a6129-80ab-7cb8-914c-41e30813bd07' }
Requesting.respond {
request: '019a6129-802b-7f4b-a396-ae4c5cabaf04',
notification: '019a6129-80ab-7cb8-914c-41e30813bd07'
} => { request: '019a6129-802b-7f4b-a396-ae4c5cabaf04' }
[Requesting] Received request for path: /Notification/_getAllNotifications
Requesting.request {
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/_getAllNotifications'
} => { request: '019a6129-8727-7c33-a8f8-8ac9d3fa6d92' }
Requesting.respond {
request: '019a6129-8727-7c33-a8f8-8ac9d3fa6d92',
notifications: [
'019a6129-118f-7f1a-ac08-c99a5cc53928',
'019a6129-80ab-7cb8-914c-41e30813bd07'
]
} => { request: '019a6129-8727-7c33-a8f8-8ac9d3fa6d92' }
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
Requesting.request {
notification: '019a6129-80ab-7cb8-914c-41e30813bd07',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a6129-898d-760a-83a3-6d32dd12b518' }
Requesting.request {
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a6129-89a1-7841-9545-da43f7e98960' }
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-80ab-7cb8-914c-41e30813bd07'
} => { message: 'You are halfway there!', frequency: 1 }
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928'
} => {
message: 'Savings reminder: set aside $250 every 1 months.',
frequency: 1
}
Requesting.respond {
request: '019a6129-898d-760a-83a3-6d32dd12b518',
frequency: 1,
message: 'You are halfway there!'
} => { request: '019a6129-898d-760a-83a3-6d32dd12b518' }
Requesting.respond {
request: '019a6129-89a1-7841-9545-da43f7e98960',
frequency: 1,
message: 'Savings reminder: set aside $250 every 1 months.'
} => { request: '019a6129-89a1-7841-9545-da43f7e98960' }
[Requesting] Received request for path: /Notification/createNotification
Requesting.request {
progress: '019a6129-0f3d-7fb5-a936-0013c386350a',
message: 'Goal completed!',
frequency: 1,
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/createNotification'
} => { request: '019a6129-d1b2-7744-8c5d-883bc6b1f2c6' }
Notification.createNotification {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
progress: '019a6129-0f3d-7fb5-a936-0013c386350a',
frequency: 1,
message: 'Goal completed!'
} => { notification: '019a6129-d232-73c8-93d3-6510ffc31ed5' }
Requesting.respond {
request: '019a6129-d1b2-7744-8c5d-883bc6b1f2c6',
notification: '019a6129-d232-73c8-93d3-6510ffc31ed5'
} => { request: '019a6129-d1b2-7744-8c5d-883bc6b1f2c6' }
[Requesting] Received request for path: /Notification/_getAllNotifications
Requesting.request {
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/_getAllNotifications'
} => { request: '019a6129-d70c-700d-985a-4e89db10cf6f' }
Requesting.respond {
request: '019a6129-d70c-700d-985a-4e89db10cf6f',
notifications: [
'019a6129-118f-7f1a-ac08-c99a5cc53928',
'019a6129-80ab-7cb8-914c-41e30813bd07',
'019a6129-d232-73c8-93d3-6510ffc31ed5'
]
} => { request: '019a6129-d70c-700d-985a-4e89db10cf6f' }
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
Requesting.request {
notification: '019a6129-d232-73c8-93d3-6510ffc31ed5',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a6129-d999-7d12-bb6c-a425ff07bad3' }
Requesting.request {
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a6129-d99a-7d61-894a-c22a119039c2' }
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-d232-73c8-93d3-6510ffc31ed5'
} => { message: 'Goal completed!', frequency: 1 }
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928'
} => {
message: 'Savings reminder: set aside $250 every 1 months.',
frequency: 1
}
Requesting.request {
notification: '019a6129-80ab-7cb8-914c-41e30813bd07',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a6129-da51-7c7a-8034-69e607a765e8' }
Requesting.respond {
request: '019a6129-d99a-7d61-894a-c22a119039c2',
frequency: 1,
message: 'Savings reminder: set aside $250 every 1 months.'
} => { request: '019a6129-d99a-7d61-894a-c22a119039c2' }
Requesting.respond {
request: '019a6129-d999-7d12-bb6c-a425ff07bad3',
frequency: 1,
message: 'Goal completed!'
} => { request: '019a6129-d999-7d12-bb6c-a425ff07bad3' }
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-80ab-7cb8-914c-41e30813bd07'
} => { message: 'You are halfway there!', frequency: 1 }
Requesting.respond {
request: '019a6129-da51-7c7a-8034-69e607a765e8',
frequency: 1,
message: 'You are halfway there!'
} => { request: '019a6129-da51-7c7a-8034-69e607a765e8' }
[Requesting] Received request for path: /Notification/_getAllNotifications
Requesting.request {
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/_getAllNotifications'
} => { request: '019a612a-7b50-72cf-96f0-52e64241b0eb' }
Requesting.respond {
request: '019a612a-7b50-72cf-96f0-52e64241b0eb',
notifications: [
'019a6129-118f-7f1a-ac08-c99a5cc53928',
'019a6129-80ab-7cb8-914c-41e30813bd07',
'019a6129-d232-73c8-93d3-6510ffc31ed5'
]
} => { request: '019a612a-7b50-72cf-96f0-52e64241b0eb' }
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
[Requesting] Received request for path: /Notification/getNotificationMessageAndFreq
Requesting.request {
notification: '019a6129-d232-73c8-93d3-6510ffc31ed5',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a612a-7ebe-7432-816e-556d8db59b6e' }
Requesting.request {
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a612a-7ec5-7995-a4bd-7b7da51e7477' }
Requesting.request {
notification: '019a6129-80ab-7cb8-914c-41e30813bd07',
session: '019a6120-412e-7125-9739-671549bf5681',
path: '/Notification/getNotificationMessageAndFreq'
} => { request: '019a612a-7ed1-7401-839c-deb07af8c6f1' }
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-d232-73c8-93d3-6510ffc31ed5'
} => { message: 'Goal completed!', frequency: 1 }
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-118f-7f1a-ac08-c99a5cc53928'
} => {
message: 'Savings reminder: set aside $250 every 1 months.',
frequency: 1
}
Notification.getNotificationMessageAndFreq {
user: '019a6120-3064-7811-8143-b59057f6c2ac',
notification: '019a6129-80ab-7cb8-914c-41e30813bd07'
} => { message: 'You are halfway there!', frequency: 1 }
Requesting.respond {
request: '019a612a-7ebe-7432-816e-556d8db59b6e',
frequency: 1,
message: 'Goal completed!'
} => { request: '019a612a-7ebe-7432-816e-556d8db59b6e' }
Requesting.respond {
request: '019a612a-7ec5-7995-a4bd-7b7da51e7477',
frequency: 1,
message: 'Savings reminder: set aside $250 every 1 months.'
} => { request: '019a612a-7ec5-7995-a4bd-7b7da51e7477' }
Requesting.respond {
request: '019a612a-7ed1-7401-839c-deb07af8c6f1',
frequency: 1,
message: 'You are halfway there!'
} => { request: '019a612a-7ed1-7401-839c-deb07af8c6f1' }
