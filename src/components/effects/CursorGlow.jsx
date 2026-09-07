import React, { useEffect, useRef } from 'react'

/**
 * CursorGlow — a soft, performant radial-gradient glow that follows the
 * user's cursor across the entire page. Skipped automatically on touch
 * devices since there's no cursor to track.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (raf.current) return
      raf.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform =
            `translate3d(${pos.current.x - 250}px, ${pos.current.y - 250}px, 0)`
        }
        raf.current = null
      })
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow"
    />
  )
}
