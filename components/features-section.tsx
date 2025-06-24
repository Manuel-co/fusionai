"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Monitor, Package, CheckCircle, Award, Shield, Zap, Users, TrendingUp } from "lucide-react"

export function FeaturesSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const features = [
    {
      title: "Intuitive Preorder Management",
      description:
        "Streamlined dashboard for tracking orders, managing suppliers, and monitoring deliveries in real-time.",
      icon: Monitor,
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-blue-500 to-cyan-600",
      benefits: ["Real-time tracking", "Order management", "Supplier communication", "Analytics dashboard"],
    },
    {
      title: "Quality Products from Verified Factories",
      description:
        "Every supplier undergoes rigorous verification to ensure authentic, high-quality products direct from manufacturers.",
      icon: Package,
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-green-500 to-emerald-600",
      benefits: ["Factory verification", "Quality assurance", "Authentic products", "Direct sourcing"],
    },
    {
      title: "Real-time Order Tracking",
      description:
        "Stay informed with instant updates on your preorders, from confirmation to delivery at your doorstep.",
      icon: CheckCircle,
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-purple-500 to-indigo-600",
      benefits: ["Live updates", "Delivery tracking", "Status notifications", "Timeline visibility"],
    },
    {
      title: "Trusted Supplier Network",
      description: "Access our curated network of verified suppliers with proven track records and excellent ratings.",
      icon: Award,
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-orange-500 to-red-600",
      benefits: ["Verified suppliers", "Rating system", "Performance tracking", "Trust badges"],
    },
  ]

  const additionalFeatures = [
    { icon: Shield, title: "Secure Payments", description: "Bank-level security for all transactions" },
    { icon: Zap, title: "Lightning Fast", description: "AI matches suppliers in under 60 seconds" },
    { icon: Users, title: "24/7 Support", description: "Dedicated support team always available" },
    { icon: TrendingUp, title: "Best Prices", description: "Guaranteed lowest factory-direct pricing" },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 blur-3xl opacity-60"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="gradient-text">Powerful Features</span> for
            <br />
            Smart Sourcing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of B2B sourcing with our comprehensive platform designed for modern businesses.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-20 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <motion.div
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${feature.gradient} text-white px-6 py-3 rounded-2xl font-semibold shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-6 h-6" />
                  Feature Highlight
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{feature.title}</h3>

                <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>

                {/* Benefits list */}
                <div className="grid grid-cols-2 gap-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating icon */}
                  <motion.div
                    className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="glassmorphism-dark rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-indigo-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
