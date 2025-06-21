"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Monitor, Package, CheckCircle, Award } from "lucide-react"

export function VisualSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const visuals = [
    {
      title: "Smooth Dashboard UI",
      description: "Intuitive interface for managing your preorders",
      icon: Monitor,
      image: "/dash.jpg?height=300&width=400",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Buyer Unboxing Products",
      description: "Quality products delivered directly from factories",
      icon: Package,
      image: "/unboxing.png?height=300&width=400",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Preorder Confirmation",
      description: "Real-time updates on your order status",
      icon: CheckCircle,
      image: "/notification.png?height=300&width=400",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Factory Verified Badge",
      description: "Trusted suppliers with verified credentials",
      icon: Award,
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 px-2">
            See Fusion AI in Action
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Experience the power of AI-driven sourcing with our intuitive platform and verified supplier network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {visuals.map((visual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.6, delay: index * (isMobile ? 0.1 : 0.2) }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-cyan-200 h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={visual.image}
                    alt={visual.title}
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={isMobile ? {} : { scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.div
                    className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r ${visual.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={isMobile ? {} : { rotate: 5, scale: 1.1 }}
                  >
                    <visual.icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </motion.div>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {visual.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {visual.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
