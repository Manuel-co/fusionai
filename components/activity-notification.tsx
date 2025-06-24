"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, MapPin, Package, X } from "lucide-react"

export function ActivityNotification() {
  const [notifications, setNotifications] = useState<
    Array<{
      id: number
      message: string
      location: string
      time: string
      icon: any
    }>
  >([])

  const activities = [
    {
      message: "Sarah just joined and connected with a verified electronics supplier",
      location: "Kenya",
      icon: Package,
    },
    {
      message: "Ahmed joined and secured 40% savings on bulk jewelry order",
      location: "Egypt",
      icon: Users,
    },
    {
      message: "Fatima joined and found a reliable fashion supplier",
      location: "Morocco",
      icon: Package,
    },
    {
      message: "John joined and completed preorder for 500 units",
      location: "Nigeria",
      icon: Users,
    },
  ]

  useEffect(() => {
    const showNotification = () => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)]
      const newNotification = {
        id: Date.now(),
        ...randomActivity,
        time: "just now",
      }

      setNotifications((prev) => [newNotification, ...prev.slice(0, 2)])

      // Auto remove after 5 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id))
      }, 5000)
    }

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000)

    // Then show notifications every 15 seconds
    const interval = setInterval(showNotification, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <div className="fixed top-20 right-4 z-40 space-y-3 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glassmorphism-dark rounded-xl p-4 shadow-2xl border border-white/10 max-w-sm"
          >
            <div className="flex items-start gap-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <notification.icon className="w-5 h-5 text-white" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium leading-tight">🎉 {notification.message}</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400 text-xs">{notification.location}</span>
                  <span className="text-gray-500 text-xs">• {notification.time}</span>
                </div>
              </div>

              <button
                onClick={() => removeNotification(notification.id)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
