import { memo, useEffect, useRef } from 'react'

import { initCanvas } from '../data/canvas-meta-balls'

export const Canvas = memo(() => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      initCanvas(canvasRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="canvas canvas-fullscreen"
    />
  )
})

Canvas.displayName = 'Canvas'
