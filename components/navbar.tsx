"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Bot, Sparkles } from "lucide-react"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Track active section for mobile navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#how-it-works", "#categories", "#features", "#testimonials"]
      const scrollPosition = window.scrollY + 100

      if (scrollPosition < 200) {
        setActiveSection("")
        return
      }

      for (const section of sections) {
        const element = document.querySelector(section) as HTMLElement
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            return
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Categories", href: "#categories" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    
    // Small delay to allow menu close animation
    setTimeout(() => {
      if (href === "#") {
        window.scrollTo({ 
          top: 0, 
          behavior: "smooth" 
        })
      } else {
        const element = document.querySelector(href) as HTMLElement
        if (element) {
          // Get navbar height to offset scroll position
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      }
    }, 100)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Bot className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                FusionAI
              </div>
              <div className="text-xs text-cyan-400 font-medium">Preorder Network</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="relative text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <PreorderFormDialog>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-4 lg:px-6 py-2 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Get Access</span>
                  <span className="sm:hidden">Access</span>
                </Button>
              </motion.div>
            </PreorderFormDialog>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden border-t border-slate-800/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-4 space-y-1 bg-slate-900/95 backdrop-blur-sm rounded-b-xl mx-4 mb-4 px-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    className={`block w-full text-left transition-all duration-300 font-medium py-3 px-4 rounded-lg ${
                      activeSection === item.href 
                        ? "text-cyan-400 bg-slate-800/70" 
                        : "text-white hover:text-cyan-400 hover:bg-slate-800/50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      {item.name}
                      {activeSection === item.href && (
                        <motion.div
                          className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  </motion.button>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-slate-800/50">
                  <PreorderFormDialog>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Started Now
                      </Button>
                    </motion.div>
                  </PreorderFormDialog>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}