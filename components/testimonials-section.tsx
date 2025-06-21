"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const testimonials = [
    {
      quote: "I got 1,000 units of designer perfume directly from a UAE supplier at 60% less than my local wholesaler!",
      author: "Jide",
      location: "Lagos",
      rating: 5,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      quote: "The AI-sourced seller I got from Fusion shipped high-quality jewelry I now resell at double the profit.",
      author: "Sarah",
      location: "Ghana",
      rating: 5,
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 text-white overflow-hidden relative"
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl"
          animate={
            isMobile
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={
            isMobile
              ? {}
              : {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 px-2">
            👥 What Our Buyers Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Join thousands of satisfied buyers who are already saving big with Fusion AI's preorder network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.6, delay: index * (isMobile ? 0.1 : 0.2) }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -5, scale: 1.02 }}
              className="group cursor-pointer relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-cyan-400/50 h-full">
                <motion.div
                  className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r ${testimonial.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={isMobile ? {} : { rotate: 5, scale: 1.1 }}
                >
                  <Quote className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </motion.div>

                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0">
                    {testimonial.author[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white text-sm sm:text-base">– {testimonial.author}</div>
                    <div className="text-blue-200 text-xs sm:text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Ready to Preorder Smarter?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6">
            Fill the form and let Fusion AI connect you to trusted manufacturers.
          </p>
          <PreorderFormDialog>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg w-full sm:w-auto"
            >
              Join the Smart Buyer Network Now
            </Button>
          </PreorderFormDialog>
        </motion.div>
      </div>
    </section>
  )
}
