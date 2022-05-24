// import { FirebaseApp } from 'firebase/app'
import { getFirestore, collection, getDocs, setDoc, doc, DocumentData } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { FC, ReactNode, createContext, useMemo, useCallback, useEffect, useState, useContext } from 'react'

import { createFirebaseApp } from '../firebase/firebase'

type Email = { [x: string]: DocumentData }

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

  const [emails, setEmails] = useState<Email[] | null>(null)

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
