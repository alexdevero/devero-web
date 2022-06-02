import { Auth, getAuth, signInWithEmailAndPassword, User } from 'firebase/auth'
import { FC, ReactNode, createContext, useMemo, useContext, useEffect, useState } from 'react'

export interface FirebaseAuthContext {
  firebaseAuth: Auth;
  authenticatedUser: User;
}

const ctx = createContext<FirebaseAuthContext | undefined>(undefined)
ctx.displayName = 'Firebase'

export interface FirebaseAuthProviderProps {
  children?: ReactNode;
}

export const FirebaseAuthProvider: FC<FirebaseAuthProviderProps> = (props) => {
  const auth = getAuth()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    if (auth) {
      signInWithEmailAndPassword(auth, 'root@devero.io', 'top-secret')
        .then(userCredential => {
          setUser(userCredential.user)
        }).catch(e => {
          // eslint-disable-next-line no-console
          console.log(e.code, e.message)
        })
    }
  }, [auth])

  const value: FirebaseAuthContext = useMemo(
    () => ({
      authenticatedUser: user,
      firebaseAuth: auth,
    }),
    [auth, user]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirebaseAuth = () => useContext(ctx)
