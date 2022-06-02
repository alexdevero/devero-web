import { FC, ReactNode, createContext, useMemo, useContext, useEffect, useState, useCallback } from 'react'
import { Analytics, getAnalytics, logEvent } from 'firebase/analytics'

export interface FirebaseAnalyticsContext {
  analytics: Analytics;
  handleLogViewEvent: (screenName: string, componentName: string) => void;
}

const ctx = createContext<FirebaseAnalyticsContext | undefined>(undefined)
ctx.displayName = 'Firebase'

export interface FirebaseAnalyticsProviderProps {
  children?: ReactNode;
}

export const FirebaseAnalyticsProvider: FC<FirebaseAnalyticsProviderProps> = (props) => {
  const [analytics, setAnalytics] = useState<Analytics>()

  const handleLogViewEvent = useCallback((screenName: string, componentName: string) => {
    if (analytics) {
      logEvent(analytics, 'screen_view', {
        firebase_screen: screenName,
        firebase_screen_class: componentName
      })
    }
  }, [analytics])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAnalytics(getAnalytics())
    }
  }, [])

  const value: FirebaseAnalyticsContext = useMemo(
    () => ({
      analytics,
      handleLogViewEvent,
    }),
    [analytics, handleLogViewEvent]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirebaseAnalytics = () => useContext(ctx)
