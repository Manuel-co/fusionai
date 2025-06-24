"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Bot, ShoppingCart, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      step: "01",
      title: "Tell Us What You Want",
      description: "Submit your product requirements, quantities, and preferences through our intelligent form.",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-600",
      features: ["Product specifications", "Quantity requirements", "Budget preferences", "Quality standards"],
      delay: 0,
    },
    {
      step: "02",
      title: "AI Matches Verified Suppliers",
      description:
        "Our advanced AI scans thousands of verified factories across multiple countries to find perfect matches.",
      icon: Bot,
      gradient: "from-purple-500 to-indigo-600",
      features: ["Global supplier network", "Real-time verification", "Quality assessment", "Price comparison"],
      delay: 0.2,
    },
    {
      step: "03",
      title: "Get Factory-Direct Pricing",
      description: "Access exclusive wholesale deals with zero middlemen markup and transparent pricing.",
      icon: ShoppingCart,
      gradient: "from-green-500 to-emerald-600",
      features: ["No middlemen fees", "Bulk discounts", "Secure payments", "Quality guarantee"],
      delay: 0.4,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 blur-3xl opacity-60"></div>
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full font-semibold mb-6 card-lift"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5" />
            How It Works
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="gradient-text">3 Simple Steps</span> to
            <br />
            Factory-Direct Sourcing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform streamlines the entire sourcing process, connecting you with verified suppliers in
            minutes, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 perspective-1000">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: step.delay }}
              className="group relative transform-gpu"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: step.delay + 0.3 }}
                  >
                    <motion.div
                      className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-600"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: step.delay + 0.5 }}
                    />
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-6 h-6 text-indigo-500 ml-2" />
                    </motion.div>
                  </motion.div>
                </div>
              )}

              <motion.div
                className="glassmorphism-card rounded-3xl p-8 h-full shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-slate-200 group-hover:border-indigo-300 card-3d"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 glow-purple`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: step.delay + 0.2 + featureIndex * 0.1 }}
                    >
                      <motion.div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center`}
                        whileHover={{ scale: 1.2, rotate: 180 }}
                      >
                        <CheckCircle className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-sm text-slate-600 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect indicator */}
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${step.gradient} rounded-full origin-left`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-slate-600 mb-6">Ready to experience the future of sourcing?</p>
          <motion.div
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold cursor-pointer card-lift"
            whileHover={{ x: 5, scale: 1.05 }}
            onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Product Categories
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
