import { collection, getFirestore, setDoc, doc, getDocs } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { FC, ReactNode, createContext, useMemo, useCallback, useContext } from 'react'

import { createFirebaseApp } from '../firebase/firebase'

import { EmailRecord } from '../types/firestore'

export interface FirestoreContext {
  createEmailDocument: (name: string, email: string, message?: string) => Promise<void>;
  getAllEmails: () => Promise<EmailRecord[]>;
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

      // eslint-disable-next-line no-console
      console.log('Document created.')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }, [db])

  const getAllEmails = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'emails'))
      const emails: EmailRecord[] = []

      querySnapshot.forEach((doc) => emails.push({ [doc.id]: doc.data() } as EmailRecord))
      return emails
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }, [db])

  const value: FirestoreContext = useMemo(
    () => ({
      createEmailDocument,
      getAllEmails,
    }),
    [createEmailDocument, getAllEmails]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirestore = () => useContext(ctx)
