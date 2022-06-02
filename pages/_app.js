// pages/_app.js
import { FirestoreProvider } from '../contexts/firestore'
import { FirebaseProvider } from '../contexts/firebase'

import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <FirestoreProvider>
        <Component {...pageProps} />
      </FirestoreProvider>
    </FirebaseProvider>
  )
}
