"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"

export function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const footerSections = [
    {
      title: "Product Categories",
      links: [
        { name: "Clothes & Fashion", href: "#" },
        { name: "Shoes & Footwear", href: "#" },
        { name: "Jewelry & Accessories", href: "#" },
        { name: "Perfumes & Cosmetics", href: "#" },
        { name: "Housewares & Electronics", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "AI Sourcing", href: "#" },
        { name: "Factory Verification", href: "#" },
        { name: "Bulk Preorders", href: "#" },
        { name: "Quality Assurance", href: "#" },
        { name: "Shipping Support", href: "#" },
      ],
    },
  ]

  const contactInfo = [
    { icon: Phone, text: "+234 (0) 812-345-6789" },
    { icon: Mail, text: "support@fusionai.ng" },
    { icon: MapPin, text: "123 Victoria Island, Lagos" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", gradient: "from-blue-500 to-blue-600" },
    { icon: Instagram, href: "#", gradient: "from-pink-500 to-purple-600" },
    { icon: Twitter, href: "#", gradient: "from-blue-400 to-blue-500" },
  ]

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-800 text-white overflow-hidden"
    >
      {/* Background animation - reduced for mobile */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 md:top-20 right-10 md:right-20 w-32 sm:w-48 md:w-96 h-32 sm:h-48 md:h-96 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl"
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
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8 text-center sm:text-left w-full sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center sm:justify-start gap-2 md:gap-3"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0">
                FA
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent truncate">
                  FUSION AI
                </div>
                <div className="text-xs text-cyan-400 font-medium truncate">Preorder Network</div>
              </div>
            </motion.div>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base px-2 sm:px-0">
              Africa's smartest preorder network connecting buyers with verified factory suppliers through AI-powered
              sourcing technology.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={isMobile ? {} : { scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${social.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                  >
                    <social.icon className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="space-y-3 sm:space-y-4 md:space-y-6 text-center sm:text-left w-full"
              initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.6, delay: (sectionIndex + 1) * (isMobile ? 0.05 : 0.1) }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group text-xs sm:text-sm md:text-base leading-tight"
                    whileHover={isMobile ? {} : { x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            className="space-y-3 sm:space-y-4 md:space-y-6 text-center sm:text-left w-full"
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.6, delay: isMobile ? 0.2 : 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Get Started
            </h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group cursor-pointer w-full"
                  whileHover={isMobile ? {} : { x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300 flex-shrink-0"
                    whileHover={isMobile ? {} : { scale: 1.1 }}
                  >
                    <contact.icon className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-cyan-400" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base truncate min-w-0">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={isMobile ? {} : { scale: 1.02 }} transition={{ duration: 0.2 }}>
              <PreorderFormDialog>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold w-full py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base">
                  <Bot className="w-3 sm:w-4 h-3 sm:h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">🔓 Join Network</span>
                </Button>
              </PreorderFormDialog>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700/50 mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-10 text-center text-gray-400 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.2 : 0.6, delay: isMobile ? 0.3 : 0.5 }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed text-xs sm:text-sm md:text-base px-2">
            &copy; 2024 Fusion AI Preorder Network. All rights reserved. | Privacy Policy | Terms of Service | AI Ethics
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
