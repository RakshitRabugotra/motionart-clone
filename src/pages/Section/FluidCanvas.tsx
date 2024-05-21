import { useRef, useEffect } from 'react'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

export default function FluidCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    webGLFluidEnhanced.simulation(canvasRef.current, {
      COLOR_PALETTE: [],
      HOVER: true,
      BACK_COLOR: '#0e101b',
      SPLAT_KEY: undefined,
      SUNRAYS: false,
      COLORFUL: true,
      SHADING: false,
      BLOOM: true,
    })
  }, [])

  return (
    <canvas ref={canvasRef} className='fixed left-0 top-0 h-screen w-screen' />
  )
}
