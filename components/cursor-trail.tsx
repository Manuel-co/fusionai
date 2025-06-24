"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add new trail point
      setTrails((prev) => [
        ...prev.slice(-10), // Keep only last 10 points
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ])
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <>
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-50 w-2 h-2 rounded-full"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            background: `radial-gradient(circle, rgba(99, 102, 241, ${0.8 - index * 0.08}), transparent)`,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </>
  )
}
