"use client"

import { Phone, Mail, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <motion.header
      className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white sticky top-0 z-50 backdrop-blur-lg border-b border-white/10"
      initial={{ y: isMobile ? 0 : -100 }}
      animate={{ y: 0 }}
      transition={{ duration: isMobile ? 0.2 : 0.6, ease: "easeOut" }}
    >
      {/* Top contact bar - hidden on mobile */}
      <div className="bg-blue-800/50 backdrop-blur-sm py-2 md:py-3 px-4 sm:px-6 lg:px-8 border-b border-white/5 hidden md:block overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs lg:text-sm">
          <motion.div
            className="flex items-center gap-2 md:gap-4 lg:gap-8 overflow-hidden"
            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, delay: isMobile ? 0 : 0.2 }}
          >
            <div className="flex items-center gap-1 md:gap-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              <Phone className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
              <span className="hidden lg:inline truncate">+234 (0) 812-345-6789</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              <Mail className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
              <span className="hidden lg:inline truncate">support@fusionai.ng</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              <MapPin className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
              <span className="hidden xl:inline truncate">123 Victoria Island, Lagos</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-3 md:py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink-0"
            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, delay: isMobile ? 0 : 0.3 }}
            whileHover={isMobile ? {} : { scale: 1.05 }}
          >
            <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0">
              FA
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent truncate">
                FUSION AI
              </div>
              <div className="text-xs text-cyan-400 font-medium hidden sm:block truncate">Preorder Network</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-10 overflow-hidden"
            initial={{ opacity: 0, y: isMobile ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, delay: isMobile ? 0 : 0.4 }}
          >
            {[
              { name: "HOME", href: "#" },
              { name: "HOW IT WORKS", href: "#how-it-works" },
              { name: "TESTIMONIALS", href: "#testimonials" },
              { name: "CONTACT", href: "#contact" },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative font-medium hover:text-cyan-400 transition-all duration-300 py-2 px-1 text-sm xl:text-base whitespace-nowrap"
                whileHover={isMobile ? {} : { scale: 1.05 }}
                initial={{ opacity: 0, y: isMobile ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.1 : 0.3, delay: 0.1 * index }}
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
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            className="flex items-center gap-2 md:gap-4 flex-shrink-0"
            initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, delay: isMobile ? 0 : 0.5 }}
          >
            <PreorderFormDialog>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-2 sm:px-3 md:px-6 py-2 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base whitespace-nowrap">
                <span className="hidden sm:inline">🔓 GET ACCESS</span>
                <span className="sm:hidden">ACCESS</span>
              </Button>
            </PreorderFormDialog>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover:bg-white/10 rounded-lg sm:rounded-xl flex-shrink-0"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white border-l border-white/10 w-[280px] sm:w-[320px] overflow-y-auto"
              >
                <nav className="flex flex-col gap-6 mt-12">
                  {[
                    { name: "HOME", href: "#" },
                    { name: "HOW IT WORKS", href: "#how-it-works" },
                    { name: "TESTIMONIALS", href: "#testimonials" },
                    { name: "CONTACT", href: "#contact" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-cyan-400 transition-colors duration-300 py-2 truncate"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
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
                    </motion.a>
                  ))}

                  {/* Mobile contact info */}
                  <div className="border-t border-white/20 pt-6 mt-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">+234 (0) 812-345-6789</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">support@fusionai.ng</span>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
