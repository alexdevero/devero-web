import { FC, ReactNode, createContext, useMemo, useContext, useEffect, useState } from 'react'
import { Analytics, getAnalytics } from 'firebase/analytics'

export interface FirebaseAnalyticsContext {
  analytics: Analytics;
}

const ctx = createContext<FirebaseAnalyticsContext | undefined>(undefined)
ctx.displayName = 'Firebase'

export interface FirebaseAnalyticsProviderProps {
  children?: ReactNode;
}

export const FirebaseAnalyticsProvider: FC<FirebaseAnalyticsProviderProps> = (props) => {
  const [analytics, setAnalytics] = useState<Analytics>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAnalytics(getAnalytics())
    }
  }, [])

  const value: FirebaseAnalyticsContext = useMemo(
    () => ({
      analytics,
    }),
    [analytics]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirebaseAnalytics = () => useContext(ctx)
