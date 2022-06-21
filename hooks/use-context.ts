import {
  Context,
  useContext as useContextReact
} from 'react'

export const useContext = <T>(context: Context<T | undefined>): T => {
  const result = useContextReact(context)

  if (!result) {
    throw new Error(context.displayName || 'ctx')
  }

  return result
}
