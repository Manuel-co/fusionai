"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Bot, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const fabItems = [
    {
      icon: Bot,
      label: "Get AI Sourcing",
      action: "form",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      action: "chat",
      gradient: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-16 right-0 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                {fabItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="glassmorphism text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </div>
                    {item.action === "form" ? (
                      <PreorderFormDialog>
                        <Button
                          size="icon"
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <item.icon className="w-5 h-5 text-white" />
                        </Button>
                      </PreorderFormDialog>
                    ) : (
                      <Button
                        size="icon"
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300`}
                        onClick={() => {
                          // Handle chat action
                          console.log("Opening chat...")
                        }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </Button>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              size="icon"
              className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 animate-pulse-glow"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.2 }}>
                {isExpanded ? <X className="w-6 h-6 text-white" /> : <Zap className="w-6 h-6 text-white" />}
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
