import { NextComponentType, GetStaticProps } from 'next'
import { Toaster } from 'react-hot-toast'

import { FirestoreProvider } from '../contexts/firestore'
import { FirebaseProvider } from '../contexts/firebase'
import { FirebaseAnalyticsProvider } from '../contexts/firebase-analytics'
import { FirebaseAuthProvider } from '../contexts/firebase-auth'
import { StorageProvider } from '../contexts/storage'
import { ToastProvider } from '../contexts/toasts'

import '../styles/styles.scss'

export default function MyApp({ Component, pageProps }: { Component: NextComponentType; pageProps: GetStaticProps }) {
  return (
    <ToastProvider>
      <StorageProvider>
        <FirebaseProvider>
          <FirebaseAuthProvider>
            <FirestoreProvider>
              <FirebaseAnalyticsProvider>
                <Toaster />
                <Component {...pageProps} />
              </FirebaseAnalyticsProvider>
            </FirestoreProvider>
          </FirebaseAuthProvider>
        </FirebaseProvider>
      </StorageProvider>
    </ToastProvider>
  )
}
