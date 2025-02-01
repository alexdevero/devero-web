'use client'

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

import { FC, PropsWithChildren } from 'react'

export const AppContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={English}>
      <ToastProvider>
        <StorageProvider>
          <FirebaseProvider>
            <FirebaseAuthProvider>
              <FirestoreProvider>
                <FirebaseAnalyticsProvider>
                  <Toaster />
                  {children}
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
