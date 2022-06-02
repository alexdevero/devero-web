// pages/_app.js
import { FirestoreProvider } from '../contexts/firestore'
import { FirebaseProvider } from '../contexts/firebase'
import { FirebaseAnalyticsProvider } from '../contexts/firebase-analytics'

import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <FirestoreProvider>
        <FirebaseAnalyticsProvider>
          <Component {...pageProps} />
        </FirebaseAnalyticsProvider>
      </FirestoreProvider>
    </FirebaseProvider>
  )
}
