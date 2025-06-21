"use client"

import { Button } from "@/components/ui/button"
import { Bot, Zap, Shield, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const animationProps = isMobile
    ? { initial: {}, animate: {}, transition: {} }
    : {
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        },
        transition: {
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* <motion.div
          className="absolute top-10 md:top-20 right-10 md:right-20 w-32 sm:w-48 md:w-96 h-32 sm:h-48 md:h-96 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-3xl"
          {...animationProps}
        /> */}
        <motion.div
          className="absolute bottom-20 md:bottom-32 left-10 md:left-20 w-24 sm:w-32 md:w-64 h-24 sm:h-32 md:h-64 rounded-full bg-gradient-to-r from-blue-300/20 to-cyan-500/20 blur-2xl"
          {...(isMobile
            ? {}
            : {
                animate: {
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.6, 0.4],
                },
                transition: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                },
              })}
        />

        {/* Floating particles - only on desktop */}
        {!isMobile &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32 overflow-hidden">
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, delay: isMobile ? 0 : 0.2 }}
            className="flex items-center justify-center gap-2 sm:gap-3 text-cyan-400 font-medium mb-4 sm:mb-6"
          >
            <div className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 rounded-full bg-cyan-400/20 flex items-center justify-center backdrop-blur-sm">
              <Bot className="w-2.5 sm:w-3 md:w-4 h-2.5 sm:h-3 md:h-4" />
            </div>
            <span className="tracking-wide text-xs sm:text-sm md:text-base">🔥 Fusion AI Preorder Network</span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight px-2"
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.1 : 0.3 }}
          >
            <span className="block">Preorder Factory-Priced</span>
            <span className="block">Products with</span>
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.2 : 0.5 }}
            >
              AI-Sourced Sellers
            </motion.span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.2 : 0.6 }}
          >
            {["✅ No Middlemen", "✅ Cheapest Bulk Deals", "✅ Verified Sellers Only"].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold shadow-lg text-xs sm:text-sm md:text-base whitespace-nowrap"
                whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.3 : 0.7 }}
          >
            Join Africa's smartest preorder network. Our AI agents connect you with genuine factory suppliers of
            clothes, shoes, perfumes, jewelry, housewares, and more.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-6"
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.4 : 0.8 }}
          >
            <PreorderFormDialog>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  🔓 UNLOCK MY DEALS NOW
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </PreorderFormDialog>
            <Button
              size="lg"
              // variant="outline"
              className="border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              HOW IT WORKS
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 flex-wrap px-2"
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.5 : 1 }}
          >
            {[
              { value: "300+", label: "Monthly Slots", icon: Shield },
              { value: "60%", label: "Average Savings", icon: TrendingDown },
              { value: "24/7", label: "AI Sourcing", icon: Bot },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer flex-1 sm:flex-none min-w-0"
                whileHover={isMobile ? {} : { scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <stat.icon className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-cyan-400 flex-shrink-0" />
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-blue-200 truncate">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Limited Slots Warning */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 sm:py-3 px-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm md:text-base font-semibold leading-tight">
            ⚠️ Limited Slots Open for Serious Buyers - We only approve 300 preorders monthly to maintain quality.{" "}
            <span className="underline">Don't miss out. Submit your request now.</span>
          </p>
        </div>
      </motion.div>
    </section>
  )
}
