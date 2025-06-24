"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const testimonials = [
    {
      quote:
        "I got 1,000 units of designer perfume directly from a UAE supplier at 60% less than my local wholesaler! The AI matching was incredibly accurate.",
      author: "Jide Okafor",
      location: "Lagos, Nigeria",
      business: "Luxury Fragrance Retailer",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      savings: "₦2.4M saved",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      quote:
        "The AI-sourced seller I got from Fusion shipped high-quality jewelry I now resell at double the profit. My customers love the authentic pieces!",
      author: "Sarah Mensah",
      location: "Accra, Ghana",
      business: "Jewelry Boutique Owner",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      savings: "300% ROI",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      quote:
        "Within 24 hours, I was connected to 3 verified clothing manufacturers in Turkey. The quality and pricing exceeded all my expectations.",
      author: "Amina Hassan",
      location: "Abuja, Nigeria",
      business: "Fashion Retailer",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      savings: "50% cost reduction",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      quote:
        "FusionAI transformed my sourcing process. I now have direct relationships with 5 factory suppliers across 3 countries. Game changer!",
      author: "Kwame Asante",
      location: "Kumasi, Ghana",
      business: "Electronics Importer",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      savings: "40% faster delivery",
      gradient: "from-orange-500 to-red-600",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-400/10 to-purple-600/10 blur-2xl"
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
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Success Stories</span> from
            <br />
            Smart Buyers
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied buyers who are already saving big with FusionAI's preorder network.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
          >
            {/* Quote icon */}
            <motion.div
              className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 rounded-full border-2 border-white/20"
                />
                <div>
                  <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-slate-300 text-sm">{testimonials[currentTestimonial].business}</div>
                  <div className="text-slate-400 text-sm">{testimonials[currentTestimonial].location}</div>
                </div>
              </div>

              {/* Savings badge */}
              <div
                className={`glassmorphism bg-gradient-to-r ${testimonials[currentTestimonial].gradient} text-white px-4 py-2 rounded-full font-bold text-sm`}
              >
                {testimonials[currentTestimonial].savings}
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glassmorphism border-white/20 text-white hover:bg-white/10 rounded-full w-12 h-12"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glassmorphism border-white/20 text-white hover:bg-white/10 rounded-full w-12 h-12"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: "10,000+", label: "Happy Buyers" },
            { value: "₦50B+", label: "Total Savings" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99%", label: "Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Thousands of <span className="gradient-text">Smart Buyers?</span>
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Fill the form and let FusionAI connect you to trusted manufacturers worldwide.
          </p>
          <PreorderFormDialog>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-lg animate-pulse-glow morph-button"
            >
              Join the Smart Buyer Network Now
            </Button>
          </PreorderFormDialog>
        </motion.div>
      </div>
    </section>
  )
}
