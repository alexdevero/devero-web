import {
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Editor, { EditorProps } from '@monaco-editor/react'

import { useWindowEvent } from '@hooks'

interface SplitScreenProps extends EditorProps {
  children?: ReactNode
}

const headerHeight = 58
const footerHeight = 234

const content = `
import { DragEvent, memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Editor, { EditorProps } from '@monaco-editor/react'

interface SplitScreenProps extends EditorProps {
  children?: ReactNode;
}

const headerHeight = 58
const footerHeight = 234

export const SplitScreen = memo((props: SplitScreenProps) => {
  const { children, ...rest } = props

  const [splitScreenHeight, setSplitScreenHeight] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [editorWidth, setEditorWidth] = useState(0)
  const dragLineRef = useRef<HTMLDivElement | null>(null)
  const editorRef = useRef<HTMLDivElement | null>(null)

  const calculateEditorWidth = useCallback(() => {
    return (window.innerWidth - mouseX)
  }, [mouseX])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setEditorWidth(calculateEditorWidth())
    }
  }, [calculateEditorWidth])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSplitScreenHeight(window.innerHeight - (headerHeight + footerHeight))
      setMouseX((80 / 100) * window.innerWidth)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dragLineRef.current.style.left = 65 / 100 * window.innerWidth
      editorRef.current.style.left = 65 / 100 * window.innerWidth

      setMouseX(65 / 100 * window.innerWidth)
    }
  }, [])

  const mouseMoveHandler = useCallback((e) => {
    const dragLineEl = dragLineRef.current
    const editorEl = editorRef.current

    let newPosition: number
    if (e.clientX < 0) {
      newPosition = 0
    } else if (e.clientX > window.innerWidth) {
      newPosition = window.innerWidth - 10
    } else {
      newPosition = e.clientX
    }

    dragLineEl.style.left = newPosition - 20px
    editorEl.style.left = newPosition - 20px

    setMouseX(newPosition)
  }, [])

  const mouseUpHandler = useCallback(() => {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }, [mouseMoveHandler])

  const mouseDownHandler = useCallback((e) => {
    setMouseX(e.clientX)

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }, [mouseMoveHandler, mouseUpHandler])

  useEffect(() => {
    const el = dragLineRef.current
    if (el) {
      el.addEventListener('mousedown', mouseDownHandler)
    }

    return () => el.removeEventListener('mousedown', mouseDownHandler)
  }, [mouseDownHandler])

  useWindowEvent('resize', () => {
    dragLineRef.current.style.left = 65 / 100 * window.innerWidth
    editorRef.current.style.left = 65 / 100 * window.innerWidth

    setMouseX(65 / 100 * window.innerWidth)
    setEditorWidth(calculateEditorWidth())
  })

  return (
    <div className="split-screen-wrapper">
      <div className="split-screen-content">
        {children}
      </div>

      <div
        ref={dragLineRef}
        className="split-screen-drag-line"
        draggable
      />

      <div
        ref={editorRef}
        className="split-screen-editor"
        style={{
          width: editorWidth,
        }}
      >
        <Editor
          {...rest}
          width={editorWidth}
          height={splitScreenHeight}
          defaultLanguage="TypeScript"
          defaultValue={content}
        />
      </div>
    </div>
  )
})

SplitScreen.displayName = 'SplitScreen'
`

export const SplitScreen = memo((props: SplitScreenProps) => {
  const { children, ...rest } = props

  const [splitScreenHeight, setSplitScreenHeight] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [editorWidth, setEditorWidth] = useState(0)
  const dragLineRef = useRef<HTMLDivElement | null>(null)
  const editorRef = useRef<HTMLDivElement | null>(null)

  const calculateEditorWidth = useCallback(() => {
    return window.innerWidth - mouseX
  }, [mouseX])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setEditorWidth(calculateEditorWidth())
    }
  }, [calculateEditorWidth])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSplitScreenHeight(window.innerHeight - (headerHeight + footerHeight))
      setMouseX((80 / 100) * window.innerWidth)
    }
  }, [])

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      dragLineRef.current &&
      editorRef.current
    ) {
      dragLineRef.current.style.left = `${(65 / 100) * window.innerWidth}px`
      editorRef.current.style.left = `${(65 / 100) * window.innerWidth}px`

      setMouseX((65 / 100) * window.innerWidth)
    }
  }, [])

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    const dragLineEl = dragLineRef.current
    const editorEl = editorRef.current

    if (!(dragLineEl && editorEl)) return

    let newPosition: number
    if (e.clientX < 0) {
      newPosition = 0
    } else if (e.clientX > window.innerWidth) {
      newPosition = window.innerWidth - 10
    } else {
      newPosition = e.clientX
    }

    dragLineEl.style.left = `${newPosition - 20}px`
    editorEl.style.left = `${newPosition - 20}px`

    setMouseX(newPosition)
  }, [])

  const mouseUpHandler = useCallback(() => {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }, [mouseMoveHandler])

  const mouseDownHandler = useCallback(
    (e: MouseEvent) => {
      setMouseX(e.clientX)

      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    },
    [mouseMoveHandler, mouseUpHandler],
  )

  useEffect(() => {
    const el = dragLineRef.current
    if (el) {
      el.addEventListener('mousedown', mouseDownHandler)
    }

    return () => el?.removeEventListener('mousedown', mouseDownHandler)
  }, [mouseDownHandler])

  useWindowEvent('resize', () => {
    if (dragLineRef.current && editorRef.current) {
      dragLineRef.current.style.left = `${(65 / 100) * window.innerWidth}px`
      editorRef.current.style.left = `${(65 / 100) * window.innerWidth}px`

      setMouseX((65 / 100) * window.innerWidth)
      setEditorWidth(calculateEditorWidth())
    }
  })

  return (
    <div className="split-screen-wrapper">
      <div className="split-screen-content">{children}</div>

      <div ref={dragLineRef} className="split-screen-drag-line" draggable />

      <div
        ref={editorRef}
        className="split-screen-editor"
        style={{
          width: editorWidth,
        }}
      >
        <Editor
          {...rest}
          width={editorWidth}
          height={splitScreenHeight}
          language="typescript"
          value={content}
          options={{
            domReadOnly: true,
            readOnly: true,
          }}
        />
      </div>
    </div>
  )
})

SplitScreen.displayName = 'SplitScreen'
