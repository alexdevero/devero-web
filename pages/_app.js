// pages/_app.js
import { FirestoreProvider } from '../contexts/firestore'

import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <FirestoreProvider>
      <Component {...pageProps} />
    </FirestoreProvider>
  )
}
