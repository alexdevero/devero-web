import { Auth, getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { FC, ReactNode, createContext, useMemo, useContext, useState, useCallback } from 'react'

export interface FirebaseAuthContext {
  firebaseAuth: Auth;
  authenticatedUser: User;
  handleSignIn: (username: string, password: string) => Promise<User | {
    code: number;
    message: string;
  }>;
  handleSignOut: () => Promise<boolean>;
}

const ctx = createContext<FirebaseAuthContext | undefined>(undefined)
ctx.displayName = 'Firebase'

export interface FirebaseAuthProviderProps {
  children?: ReactNode;
}

export const FirebaseAuthProvider: FC<FirebaseAuthProviderProps> = (props) => {
  const auth = getAuth()
  const [user, setUser] = useState(undefined)

  const handleSignIn = useCallback(async (username: string, password: string) => {
    if (auth) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password)
        setUser(userCredential.user)

        return userCredential.user
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.code, e.message)
        return {
          code: e.code,
          message: e.message
        }
      }
    }
  }, [auth])

  const handleSignOut = useCallback(async () => {
    try {
      await signOut(auth)
      return true
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e.code, e.message)
      return false
    }
  }, [auth])

  const value: FirebaseAuthContext = useMemo(
    () => ({
      authenticatedUser: user,
      firebaseAuth: auth,
      handleSignIn,
      handleSignOut,
    }),
    [auth, user, handleSignIn, handleSignOut]
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirebaseAuth = () => useContext(ctx)
