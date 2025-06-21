"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FileText, Bot, ShoppingCart } from "lucide-react"

export function HowItWorksSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const steps = [
    {
      step: "Step 1",
      title: "Submit Your Needs",
      description: "Tell us the type of products you want and how much you intend to buy.",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      step: "Step 2",
      title: "AI Finds the Perfect Seller",
      description: "Our AI agents scan verified factories & sellers across multiple countries to match your request.",
      icon: Bot,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      step: "Step 3",
      title: "You Preorder & Save Big",
      description:
        "You get access to exclusive factory deals. Preorder and enjoy wholesale pricing with zero middlemen.",
      icon: ShoppingCart,
      gradient: "from-indigo-500 to-purple-600",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 px-2">
            📊 How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Get connected to verified factory suppliers in just 3 simple steps with our AI-powered sourcing network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.6, delay: index * (isMobile ? 0.1 : 0.2) }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -10, scale: 1.02 }}
              className="group cursor-pointer relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-cyan-200 p-4 sm:p-6 md:p-8 text-center h-full">
                {/* Step Number */}
                <motion.div
                  className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className={`w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-r ${step.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={isMobile ? {} : { rotate: 5, scale: 1.1 }}
                >
                  <step.icon className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-slate-800 transition-colors duration-300 px-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 px-2">
                  {step.description}
                </p>

                {/* Connector Arrow (Desktop only) */}
                {!isMobile && index < steps.length - 1 && (
                  <motion.div
                    className="absolute top-1/2 -right-5 md:-right-6 transform -translate-y-1/2 hidden md:block z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
