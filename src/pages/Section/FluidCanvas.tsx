import { useRef, useEffect } from 'react'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

export default function FluidCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    webGLFluidEnhanced.simulation(canvasRef.current, {
      COLOR_PALETTE: [],
      HOVER: true,
      BACK_COLOR: '#0e0f1a',
      SPLAT_KEY: 'MOUSE',
      SUNRAYS: false,
      COLORFUL: true,
      SHADING: false,
      BLOOM: true,
      DYE_RESOLUTION: 256,
      VELOCITY_DISSIPATION: 0.6,
    })
  }, [])

  return (
    <div className='fixed left-0 top-0 z-[1] h-screen w-screen bg-transparent'>
      <canvas ref={canvasRef} className='h-screen w-screen max-w-[100vw]' />
    </div>
  )
}
