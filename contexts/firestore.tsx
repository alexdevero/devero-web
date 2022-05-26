// import { FirebaseApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { FC, ReactNode, createContext, useMemo, useCallback, useContext } from 'react'

import { createFirebaseApp } from '../firebase/firebase'

export interface FirestoreContext {
  createEmailDocument: (name: string, email: string, message?: string) => Promise<void>;
}

const ctx = createContext<FirestoreContext | undefined>(undefined)
ctx.displayName = 'Firestore'

export interface FirestoreProviderProps {
  children?: ReactNode;
}

export const FirestoreProvider: FC<FirestoreProviderProps> = (props) => {
  const app = createFirebaseApp()
  const db = getFirestore(app)

  const createEmailDocument = useCallback(async (name: string, email: string, message?: string) => {
    try {
      await setDoc(doc(db, 'emails', nanoid()), {
        email: email,
        message: message,
        name: name,
      })

      console.log('Document created.')
    } catch (e) {
      console.log(e)
    }
  }, [db])

  const value: FirestoreContext = useMemo(
    () => ({
      createEmailDocument,
    }),
    [createEmailDocument]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirestore = () => useContext(ctx)
