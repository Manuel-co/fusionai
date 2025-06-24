"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Shirt, Gem, Sparkles, Music, Home, Utensils, Watch, Palette } from "lucide-react"

export function ProductCategoriesSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const categories = [
    {
      name: "Fashion & Clothes",
      description: "Designer wear, casual clothing, traditional attire",
      icon: Shirt,
      gradient: "from-pink-500 to-rose-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "1000+ Suppliers",
    },
    {
      name: "Shoes & Footwear",
      description: "Sneakers, formal shoes, sandals, boots",
      icon: Gem,
      gradient: "from-blue-500 to-cyan-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "800+ Suppliers",
    },
    {
      name: "Perfumes & Cosmetics",
      description: "Fragrances, skincare, makeup, beauty products",
      icon: Sparkles,
      gradient: "from-purple-500 to-indigo-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "600+ Suppliers",
    },
    {
      name: "Jewelry & Accessories",
      description: "Watches, necklaces, rings, fashion accessories",
      icon: Watch,
      gradient: "from-yellow-500 to-orange-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "500+ Suppliers",
    },
    {
      name: "Housewares & Electronics",
      description: "Home appliances, gadgets, smart devices",
      icon: Home,
      gradient: "from-green-500 to-emerald-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "700+ Suppliers",
    },
    {
      name: "Kitchenwares",
      description: "Cookware, utensils, dining accessories",
      icon: Utensils,
      gradient: "from-red-500 to-pink-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "400+ Suppliers",
    },
    {
      name: "Musical Accessories",
      description: "Instruments, audio equipment, music gear",
      icon: Music,
      gradient: "from-indigo-500 to-purple-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "300+ Suppliers",
    },
    {
      name: "Art & Crafts",
      description: "Handmade items, decorative pieces, artwork",
      icon: Palette,
      gradient: "from-teal-500 to-cyan-600",
      image: "/placeholder.svg?height=200&width=300",
      stats: "250+ Suppliers",
    },
  ]

  return (
    <section
      id="categories"
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-600/10 blur-3xl"
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
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-2xl"
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
          <motion.div
            className="inline-flex items-center gap-2 glassmorphism text-cyan-400 px-6 py-3 rounded-full font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5" />
            Product Categories
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Thousands of Products</span>
            <br />
            Across Every Category
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From fashion to electronics, our AI connects you with verified suppliers across all major product
            categories.
          </p>
        </motion.div>

        <div className="masonry">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="masonry-item group cursor-pointer"
            >
              <motion.div
                className="glassmorphism rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 border border-white/10 group-hover:border-indigo-400/50 h-full"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Icon */}
                  <motion.div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Stats badge */}
                  <div className="absolute top-4 right-4 glassmorphism text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {category.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {category.description}
                  </p>

                  {/* Hover effect indicator */}
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${category.gradient} rounded-full origin-left`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4,500+", label: "Verified Suppliers" },
              { value: "50+", label: "Countries" },
              { value: "1M+", label: "Products Available" },
              { value: "99.9%", label: "Quality Guarantee" },
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
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
