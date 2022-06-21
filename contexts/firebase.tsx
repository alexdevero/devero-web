import { FirebaseApp } from 'firebase/app'
import { FC, ReactNode, createContext, useMemo } from 'react'

import { useContext } from '@hooks'

import { createFirebaseApp } from '../firebase/firebase'

export interface FirebaseContext {
  firebaseApp: FirebaseApp | undefined;
}

const ctx = createContext<FirebaseContext | undefined>(undefined)
ctx.displayName = 'Firebase'

export interface FirebaseProviderProps {
  children?: ReactNode;
}

export const FirebaseProvider: FC<FirebaseProviderProps> = (props) => {
  const app = createFirebaseApp()

  const value: FirebaseContext = useMemo(
    () => ({
      firebaseApp: app,
    }),
    [app]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirebase = () => useContext(ctx)
