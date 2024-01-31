import { initializeApp, getApps } from 'firebase/app'
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
// import { getAnalytics } from 'firebase/analytics'

export const createFirebaseApp = () => {
  const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  }

  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials)
    // const appCheck = initializeAppCheck(app, {
    //   provider: new ReCaptchaV3Provider('6LfodhEgAAAAAJicTrp0S03dy5vtbjrHnQOeJguU'),
    //   // Optional argument. If true, the SDK automatically refreshes App Check
    //   // tokens as needed.
    //   isTokenAutoRefreshEnabled: true
    // })

    // Check that `window` is in scope for the analytics module!
    // if (typeof window !== 'undefined') {
    //   // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    //   if ('measurementId' in clientCredentials) {
    //     getAnalytics()
    //   }
    // }

    return app
  }
}
