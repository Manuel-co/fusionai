"use client"

import type React from "react"

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Bot, DollarSign, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { PreorderFormDialog } from "@/components/preorder-form-dialog"
import { CurrencyNgn } from "@phosphor-icons/react";

export function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Product Categories", href: "#categories" },
        { name: "Pricing", href: "#pricing" },
        { name: "Success Stories", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact Support", href: "#contact" },
      ],
    },
    {
      title: "Product Categories",
      links: [
        { name: "Fashion & Apparel", href: "#", icon: "👗" },
        { name: "Electronics & Gadgets", href: "#", icon: "📱" },
        { name: "Home & Kitchen", href: "#", icon: "🏠" },
        { name: "Beauty & Personal Care", href: "#", icon: "💄" },
        { name: "Jewelry & Accessories", href: "#", icon: "💎" },
        { name: "Musical Instruments", href: "#", icon: "🎵" },
      ],
    },
  ]

  const contactInfo = [
    { icon: Mail, text: "support@fusionai.ng", action: "copy" },
    { icon: Phone, text: "+234 (0) 812-345-6789", action: "call" },
    { icon: MapPin, text: "123 Victoria Island, Lagos", action: "map" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", gradient: "from-pink-500 to-purple-600", name: "Instagram" },
    { icon: Twitter, href: "#", gradient: "from-blue-400 to-blue-500", name: "Twitter" },
    { icon: Facebook, href: "#", gradient: "from-blue-500 to-blue-600", name: "Facebook" },
  ]

  const trustBadges = [
    { icon: Shield, text: "Verified Suppliers" },
    { icon: CurrencyNgn, text: "Secure Payments" },
    { icon: Clock, text: "Quality Guaranteed" },
  ]

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-800 text-white overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 md:top-20 right-10 md:right-20 w-32 sm:w-48 md:w-96 h-32 sm:h-48 md:h-96 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="space-y-6 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg animate-breathing">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  FUSION AI
                </div>
                <div className="text-sm text-cyan-400 font-medium">Preorder Network</div>
              </div>
            </motion.div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Africa's smartest preorder network connecting buyers with verified factory suppliers through AI-powered
              sourcing technology.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Why Choose Us</h4>
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <badge.icon className="w-4 h-4 text-cyan-400" />
                  {badge.text}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} transition={{ duration: 0.2 }}>
                  <Button
                    size="icon"
                    variant="ghost"
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.preventDefault()
                      if (link.href.startsWith("#")) {
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {link.icon && <span>{link.icon}</span>}
                      {link.name}
                    </span>
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

          {/* Contact & Newsletter */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Get Started
            </h3>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Get Exclusive Factory Deals</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glassmorphism border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 morph-button"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                      ✅ Subscribed!
                    </motion.span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <PreorderFormDialog>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 morph-button">
                  <Bot className="w-4 h-4 mr-2" />
                  Join Network
                </Button>
              </PreorderFormDialog>
            </motion.div>
          </motion.div>
        </div>

        {/* Real-time Activity Feed */}
        <motion.div
          className="glassmorphism rounded-2xl p-6 mb-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">Join 10,000+ Smart Buyers</h4>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live Activity
            </div>
          </div>
          <motion.div
            className="text-sm text-gray-300"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            🎉 Sarah from Kenya just connected with a verified electronics supplier • 2 min ago
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700/50 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Supplier Guidelines
              </a>
            </div>

            {/* <div className="flex items-center gap-4 text-sm">
              <select className="bg-transparent border border-gray-600 rounded px-2 py-1 text-gray-300">
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
              <select className="bg-transparent border border-gray-600 rounded px-2 py-1 text-gray-300">
                <option value="usd">USD</option>
                <option value="ngn">NGN</option>
                <option value="ghs">GHS</option>
                <option value="kes">KES</option>
              </select>
            </div> */}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <p className="text-sm">
              &copy; 2024 Fusion AI Preorder Network. All rights reserved. | Made with AI ❤️ in Lagos, Nigeria
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Secure & Trusted Since 2024 • SSL Certified • Quality Guaranteed
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
