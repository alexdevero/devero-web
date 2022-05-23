// import { FirebaseApp } from 'firebase/app'
import { getFirestore, collection, getDocs, setDoc, doc, DocumentData } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { FC, ReactNode, createContext, useMemo, useCallback, useEffect, useState, useContext } from 'react'

import { createFirebaseApp } from '../firebase/firebase'

type Email = { [x: string]: DocumentData }

export interface FirebaseContext {
  fetchAllEmailDocuments: () => void;
  createEmailDocument: (name: string, email: string, message?: string) => Promise<void>;
}

const ctx = createContext<FirebaseContext | undefined>(undefined)
ctx.displayName = 'Firebase'

export interface FirebaseProviderProps {
  children?: ReactNode;
}

export const FirebaseProvider: FC<FirebaseProviderProps> = (props) => {
  const app = createFirebaseApp()
  const db = getFirestore(app)

  const [emails, setEmails] = useState<Email[] | null>(null)

  const getAllEmails = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'emails'))
      const emails: Email[] = []

      querySnapshot.forEach((doc) => emails.push({ [doc.id]: doc.data() }))
      setEmails(emails)
    } catch (e) {
      console.log(e)
    }
  }, [db])

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

  // TODO: only for debugging
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === 'd') {
  //       createEmailDocument('alex', 'alex@test.com', 'Hmmm, that\'s funny')
  //     }
  //   }

  //   if (window) {
  //     window.addEventListener('keydown', handleKeyDown)
  //   }

  //   return () => window.removeEventListener('keydown', handleKeyDown)
  // }, [])

  // TODO: only for debugging
  // useEffect(() => {
  //   if (db) {
  //     getAllEmails()
  //   }
  // }, [db])

  // TODO: only for debugging
  // useEffect(() => {
  //   if (emails) {
  //     console.log(emails)
  //   }
  // }, [emails])

  const fetchAllEmailDocuments = useCallback(() => {
    if (db) {
      getAllEmails()
    }
  }, [db, getAllEmails])

  const value: FirebaseContext = useMemo(
    () => ({
      createEmailDocument,
      fetchAllEmailDocuments
    }),
    [createEmailDocument, fetchAllEmailDocuments]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirebase = () => useContext(ctx)
