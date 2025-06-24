"use client"

import { Button } from "@/components/ui/button"
import { Bot, Zap, Shield, TrendingUp, Sparkles, ArrowRight, Users } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedCounter } from "@/components/animated-counter"

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentSlots, setCurrentSlots] = useState(297)
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const fullText = "Connect with verified factory suppliers worldwide"

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setTypedText(fullText)
      return
    }

    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [isMobile])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlots < 300) {
        setCurrentSlots((prev) => prev + 1)
      }
    }, 120000) // 2 minutes

    return () => clearInterval(interval)
  }, [currentSlots])

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        {/* Floating elements */}
        <FloatingElements />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* AI Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 glassmorphism rounded-full px-6 py-3 text-cyan-400 font-medium mb-6 glow-cyan"
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center animate-pulse-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Bot className="w-4 h-4 text-white" />
            </motion.div>
            <span className="tracking-wide text-sm md:text-base">🚀 Powered by Advanced AI Technology</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
              <motion.span
                className="block text-white text-shadow"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Preorder Factory-Priced
              </motion.span>
              <motion.span
                className="block text-white text-shadow"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Products with
              </motion.span>
              <motion.span
                className="block gradient-text text-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                AI-Sourced Sellers
              </motion.span>
            </h1>

            {/* Animated Subtitle */}
            <motion.div
              className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className={!isMobile ? "animate-typing" : ""}>{typedText}</span>
              {!isMobile && <span className="animate-pulse">|</span>}
            </motion.div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              { icon: Shield, text: "No Middlemen", gradient: "from-green-500 to-emerald-600" },
              { icon: TrendingUp, text: "Cheapest Bulk Deals", gradient: "from-blue-500 to-cyan-600" },
              { icon: Bot, text: "AI-Verified Sellers", gradient: "from-purple-500 to-indigo-600" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`glassmorphism bg-gradient-to-r ${feature.gradient} text-white px-4 md:px-6 py-3 rounded-full font-semibold shadow-lg text-sm md:text-base flex items-center gap-2 card-lift`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div
                  // animate={{ rotate: [0, 360] }}
                  // transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <feature.icon className="w-4 h-4" />
                </motion.div>
                ✅ {feature.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <PreorderFormDialog>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg animate-pulse-glow btn-ripple morph-button"
                >
                  <span className="flex items-center justify-center gap-3">
                    <motion.div
                      // animate={{ rotate: [0, 360] }}
                      // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5" />
                    </motion.div>
                    Get Started Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </PreorderFormDialog>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="glassmorphism border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 rounded-2xl transition-all duration-300 text-lg font-semibold backdrop-blur-strong morph-button"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex items-center justify-center gap-8 md:gap-12 pt-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            {[
              {
                value: 300,
                label: "Monthly Slots",
                icon: Shield,
                gradient: "from-green-500 to-emerald-600",
                suffix: "+",
              },
              {
                value: 60,
                label: "Average Savings",
                icon: TrendingUp,
                gradient: "from-blue-500 to-cyan-600",
                suffix: "%",
              },
              { value: 24, label: "AI Sourcing", icon: Bot, gradient: "from-purple-500 to-indigo-600", suffix: "/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer card-lift"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <motion.div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg glow-purple`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    <AnimatedCounter from={0} to={stat.value} duration={2} />
                    {stat.suffix}
                  </div>
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Limited Slots Warning */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            className="inline-flex items-center gap-2 glassmorphism rounded-full px-4 py-2 glow-orange"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(239, 68, 68, 0.4)",
                  "0 0 0 10px rgba(239, 68, 68, 0)",
                  "0 0 0 0 rgba(239, 68, 68, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Users className="w-3 h-3 text-white" />
            </motion.div>
            <div className="text-white">
              <span className="font-bold text-lg">
                <AnimatedCounter from={243} to={currentSlots} duration={1} />
              </span>
              <span className="text-red-200 text-sm ml-1">/ 300 slots filled</span>
            </div>
          </motion.div>

          <motion.p
            className="text-sm md:text-base font-bold leading-tight text-center"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            ⚠️ <span className="gradient-text-orange">LIMITED SLOTS:</span> We only approve 300 preorders monthly to
            maintain quality. <span className="underline animate-pulse">Submit your request now!</span>
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  )
}
