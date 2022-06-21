import { createContext, FC, ReactNode, useCallback, useMemo } from 'react'
import { Toast, useToaster, toast, ToastOptions } from 'react-hot-toast'

import { toastIcons } from '@data'
import { useContext } from '@hooks'

import { ToastIcons } from '@custom-types'

export interface ToastsContext {
  toasts: Toast[];
  handleEndPauseToast: () => void;
  handleStartPauseToast: () => void;
  handleToastShow: (text: string, icon?: ToastIcons, duration?: ToastOptions['duration'], options?: ToastOptions) => void;
}

const ctx = createContext<ToastsContext | undefined>(undefined)

export interface ToastsProviderProps {
  children?: ReactNode;
}

export const ToastProvider: FC<ToastsProviderProps> = (props) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause } = handlers

  const handleToastShow = useCallback((text: string, icon?: ToastIcons, duration?: ToastOptions['duration'], options?: ToastOptions) => {
    const toastOptions: ToastOptions = {
      position: 'top-right',
      ...(icon ? { icon: toastIcons[icon] } : {}),
      ...(duration ? { duration: duration } : {}),
      ...options,
    }
    toast((t) => (
      <span className="toast-wrapper">
        <span className="toast-text">{text}</span>
        <button className="toast-cancel-icon" onClick={() => toast.dismiss(t.id)}>
          &times;
        </button>
      </span>
    ), toastOptions)
  }, [])

  const value: ToastsContext = useMemo(() => ({
    toasts,
    handleEndPauseToast: endPause,
    handleStartPauseToast: startPause,
    handleToastShow,
  }), [endPause, handleToastShow, startPause, toasts])

  return <ctx.Provider value={value}>{props.children}</ctx.Provider>
}

export const useToast = () => useContext(ctx)
