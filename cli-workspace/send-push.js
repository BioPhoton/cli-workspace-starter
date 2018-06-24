const webpush = require('web-push')

const options = {
  vapidDetails: {
    subject: 'http://127.0.0.1:8080',
    publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
    privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
  },
  TTL: 5000
}

const pushSubscription = {
  'endpoint': 'https://fcm.googleapis.com/fcm/send/fWYIiHaa7X4:APA91bHyn5wWA12hGNjSYLiU0liBQukx7wPrEN04yHMopRcDttrSpXAdZOi3BP96fuilUrqTpXkf_JN9g4gmIvW7fB2AzqQroLjw9karM2eqFjkYYrMV3dH3HihB-bsvf4espsvjdeiD3lxrIXnZ2wMTbuG4DU1iQg',
  'expirationTime': null,
  'keys': {
    'p256dh': 'BE5h3kgi-sTZy9s259uWOwun6XC047_S0hgwszx-vWXruzsHQIa9x-5uyxzSe2lXxfq1HkjsFCuqZRruvXGgLT4',
    'auth': 'cLCTeZmrygYwOFh1Q0GM3Q'
  }
}

const payload = JSON.stringify({
  notification: {
    title: 'Your Gate Changed !!',
    body: 'Your Gate is now G62',
    icon: './assets/icons/icon-144x144.png',
    data: 'additional data'
  }
})

webpush.sendNotification(
  pushSubscription,
  payload,
  options
)
