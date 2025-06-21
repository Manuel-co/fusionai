"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Bot, DollarSign, Shield, Clock, Package, Users } from "lucide-react"

export function WhyBuyersSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const features = [
    {
      icon: Bot,
      title: "AI-sourced bulk sellers",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: DollarSign,
      title: "Factory-direct pricing",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Verified manufacturers",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Real-time preorder system",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Package,
      title: "Wide range of products",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Personalized sourcing",
      gradient: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 px-2">
            🎯 Why Buyers Are Joining
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Join thousands of smart buyers who are already saving big with our AI-powered preorder network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.6, delay: index * (isMobile ? 0.05 : 0.1) }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-cyan-200 text-center h-full flex flex-col items-center justify-center">
                <motion.div
                  className={`w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={isMobile ? {} : { rotate: 5, scale: 1.1 }}
                >
                  <feature.icon className="w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 text-white" />
                </motion.div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-300 px-2 text-center leading-tight">
                  ✅ {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
