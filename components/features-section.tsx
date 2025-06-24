"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Bot, Sparkles } from "lucide-react"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Categories", href: "#categories" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism-dark backdrop-blur-strong" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg glow-purple animate-breathing"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <Bot className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <div className="font-bold text-xl gradient-text">FusionAI</div>
                <div className="text-xs text-cyan-400 font-medium">Preorder Network</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.preventDefault()
                    if (item.href === "#") {
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <PreorderFormDialog>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 btn-ripple morph-button">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get Access
                  </Button>
                </motion.div>
              </PreorderFormDialog>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ overflow: "hidden" }}
          >
            <div className="glassmorphism-card mt-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-cyan-400/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      x: isOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      if (item.href === "#") {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      } else {
                        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-0"
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.a>
                ))}

                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-white/10">
                  <PreorderFormDialog>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 btn-ripple">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Access
                      </Button>
                    </motion.div>
                  </PreorderFormDialog>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    </motion.nav>
  )
}
