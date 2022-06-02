// pages/_app.js
import { FirestoreProvider } from '../contexts/firestore'
import { FirebaseProvider } from '../contexts/firebase'
import { FirebaseAnalyticsProvider } from '../contexts/firebase-analytics'
import { FirebaseAuthProvider } from '../contexts/firebase-auth'
import { StorageProvider } from '../contexts/storage'

import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <StorageProvider>
      <FirebaseProvider>
        <FirebaseAuthProvider>
          <FirestoreProvider>
            <FirebaseAnalyticsProvider>
              <Component {...pageProps} />
            </FirebaseAnalyticsProvider>
          </FirestoreProvider>
        </FirebaseAuthProvider>
      </FirebaseProvider>
    </StorageProvider>
  )
}
