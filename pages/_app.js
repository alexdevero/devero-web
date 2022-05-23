// pages/_app.js

import '../styles/styles.css'
import { FirestoreProvider } from '../contexts/firestore'

export default function MyApp({ Component, pageProps }) {
  return (
    <FirestoreProvider>
      <Component {...pageProps} />
    </FirestoreProvider>
  )
}
