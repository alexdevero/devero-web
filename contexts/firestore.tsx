import { collection, getFirestore, setDoc, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { FC, ReactNode, createContext, useMemo, useCallback, useContext } from 'react'

import { useFirebase } from './firebase'

import { EmailRecord } from '@custom-types'

import { logger } from '@utils'

export interface FirestoreContext {
  createEmailDocument: (name: string, email: string, message?: string) => Promise<void>;
  deleteEmailDocument: (documentId: string) => Promise<boolean>;
  getAllEmails: () => Promise<EmailRecord[]>;
}

const ctx = createContext<FirestoreContext | undefined>(undefined)
ctx.displayName = 'Firestore'

export interface FirestoreProviderProps {
  children?: ReactNode;
}

export const FirestoreProvider: FC<FirestoreProviderProps> = (props) => {
  const { firebaseApp } = useFirebase()
  const db = getFirestore(firebaseApp)

  const createEmailDocument = useCallback(async (name: string, email: string, message?: string) => {
    try {
      await setDoc(doc(db, 'emails', nanoid()), {
        email: email,
        message: message,
        name: name,
      })

      logger('Document created.', 'log')
    } catch (e) {
      logger(e, 'log')
    }
  }, [db])

  const getAllEmails = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'emails'))
      const emails: EmailRecord[] = []

      querySnapshot.forEach((doc) => emails.push({ [doc.id]: doc.data() } as EmailRecord))
      return emails
    } catch (e) {
      logger(e, 'log')
    }
  }, [db])

  const deleteEmailDocument = useCallback(async (documentId: string) => {
    try {
      await deleteDoc(doc(db, 'emails', documentId))
      await getAllEmails()
      return true
    } catch (e) {
      logger(e, 'log')
      return false
    }
  }, [db, getAllEmails])

  const value: FirestoreContext = useMemo(
    () => ({
      createEmailDocument,
      deleteEmailDocument,
      getAllEmails,
    }),
    [createEmailDocument, getAllEmails, deleteEmailDocument]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirestore = () => useContext(ctx)
