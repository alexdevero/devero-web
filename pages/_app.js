// pages/_app.js

import '../styles/styles.css'
import { FirebaseProvider } from '../contexts/firebase'

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
  )
}
