import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import {
  FC,
  ReactNode,
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { CustomError } from '@custom-types'
import { useContext } from '@hooks'
import { logger } from '@utils'

import { useStorage } from './storage'

export interface FirebaseAuthContext {
  firebaseAuth: Auth
  authenticatedUser: User | undefined
  handleSignIn: (
    username: string,
    password: string,
  ) => Promise<
  | User
  | undefined
  | {
    code: number
    message: string
  }
  >
  handleSignOut: () => Promise<boolean>
}

const ctx = createContext<FirebaseAuthContext | undefined>(undefined)
ctx.displayName = 'FirebaseAuth'

export interface FirebaseAuthProviderProps {
  children?: ReactNode
}

export const FirebaseAuthProvider: FC<FirebaseAuthProviderProps> = (props) => {
  const auth = getAuth()
  const { getStorageItem, deleteStorageItem, setStorageItem } = useStorage()

  const [user, setUser] = useState<User | undefined>(undefined)

  const handleSignIn = useCallback(
    async (username: string, password: string) => {
      if (auth) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            username,
            password,
          )
          setUser(userCredential.user)
          setStorageItem('auth', JSON.stringify(userCredential.user), 'local')

          return userCredential.user
        } catch (e) {
          const err = e as CustomError

          logger(`${err.code}, ${err.message}`, 'log')
          return {
            code: err.code,
            message: err.message,
          }
        }
      }
    },
    [auth, setStorageItem],
  )

  const handleSignOut = useCallback(async () => {
    try {
      await signOut(auth)
      deleteStorageItem('auth', 'local')
      return true
    } catch (e) {
      const err = e as CustomError

      logger(`${err.code}, ${err.message}`, 'log')

      return false
    }
  }, [auth, deleteStorageItem])

  useEffect(() => {
    const loadUserData = async () => {
      const user = await getStorageItem('auth', 'local')
      if (user) setUser(JSON.parse(user as string))
    }
    if (!user) {
      loadUserData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value: FirebaseAuthContext = useMemo(
    () => ({
      authenticatedUser: user,
      firebaseAuth: auth,
      handleSignIn,
      handleSignOut,
    }),
    [auth, user, handleSignIn, handleSignOut],
  )
  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useFirebaseAuth = () => useContext(ctx)
