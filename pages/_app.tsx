import { NextComponentType, GetStaticProps } from 'next'
import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'
import { Analytics } from '@vercel/analytics/react'

import {
  FirestoreProvider,
  FirebaseProvider,
  FirebaseAnalyticsProvider,
  FirebaseAuthProvider,
  StorageProvider,
  ToastProvider,
} from '@contexts'

import English from '../content/compiled-locales/en.json'

import '@styles/styles.scss'

export default function MyApp({ Component, pageProps }: { Component: NextComponentType; pageProps: GetStaticProps }) {
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={English}>
      <ToastProvider>
        <StorageProvider>
          <FirebaseProvider>
            <FirebaseAuthProvider>
              <FirestoreProvider>
                <FirebaseAnalyticsProvider>
                  <Toaster />
                  <Component {...pageProps} />
                  <Analytics />
                </FirebaseAnalyticsProvider>
              </FirestoreProvider>
            </FirebaseAuthProvider>
          </FirebaseProvider>
        </StorageProvider>
      </ToastProvider>
    </IntlProvider>
  )
}
