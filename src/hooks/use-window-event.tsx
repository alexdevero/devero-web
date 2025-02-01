import { useEffect } from 'react'

export function useWindowEvent<K extends string>(
  type: K,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    window.addEventListener(type, listener, options)

    return () => window.removeEventListener(type, listener, options)
  }, [listener, options, type])
}
