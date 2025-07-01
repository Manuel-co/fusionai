"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { Zap, Bot, Users, Target, Shirt, Gem, Footprints, ShieldPlus, Factory, SprayCan } from "lucide-react"
import axiosInstance from "@/utils/axiosInstance"

interface PreorderFormDialogProps {
  children: React.ReactNode
}

export function PreorderFormDialog({ children }: PreorderFormDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    products: [] as string[],
    quantityRange: "",
    businessType: "",
    otherProduct: "",
  })
  const BUSINESS_TYPE_WORD_LIMIT = 6;
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Helper function to parse quantity range
  const parseQuantityRange = (rangeString: string) => {
    switch (rangeString) {
      case "1-50":
        return { min: 1, max: 50 }
      case "51-100":
        return { min: 51, max: 100 }
      case "101-500":
        return { min: 101, max: 500 }
      case "501-1000":
        return { min: 501, max: 1000 }
      case "1000+":
        return { min: 1000, max: null }
      default:
        return { min: 1, max: 50 }
    }
  }

  // Helper function to format products for backend
  const formatProductsForBackend = (products: string[], otherProduct: string) => {
    const productMap: { [key: string]: string } = {
      clothes: "Clothes",
      shoes: "Shoes", 
      accessories: "Accessories",
      perfumes: "Perfumes",
      jewelry: "Jewelry",
      housewares: "Housewares",
      others: otherProduct || "Others"
    }

    return products.map(product => productMap[product] || product)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      // Transform the form data to match backend API structure
      const backendPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone,
        whatsappNumber: formData.whatsapp,
        products: formatProductsForBackend(formData.products, formData.otherProduct),
        quantityRange: parseQuantityRange(formData.quantityRange),
        businessType: formData.businessType
      }

      console.log('Sending payload:', backendPayload) // Debug log

      const response = await axiosInstance.post("/api/preorder", backendPayload)
      
      console.log('Response:', response.data) // Debug log
      
      setIsSubmitted(true)
      
      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        whatsapp: "",
        products: [],
        quantityRange: "",
        businessType: "",
        otherProduct: "",
      })
      
      // Close dialog after 5 seconds
      setTimeout(() => {
        setIsOpen(false)
        setIsSubmitted(false)
        setCurrentStep(1)
      }, 9000)
      
    } catch (err: any) {
      console.error('Error submitting form:', err) // Debug log
      
      // Handle different error scenarios
      if (err.response) {
        // Server responded with error status
        setError(err.response.data?.message || `Server error: ${err.response.status}`)
      } else if (err.request) {
        // Request was made but no response received
        setError("Network error. Please check your connection and try again.")
      } else {
        // Something else happened
        setError("Something went wrong. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const productOptions = [
    { value: "clothes", label: "Clothes", icon: Shirt },
    { value: "shoes", label: "Shoes", icon: Footprints },
    { value: "accessories", label: "Accessories", icon: Gem },
    { value: "perfumes", label: "Perfumes", icon: SprayCan },
    { value: "jewelry", label: "Jewelry", icon: Gem },
    { value: "housewares", label: "Housewares", icon: Users },
    { value: "others", label: "Others", icon: ShieldPlus },
  ]

  const quantityRanges = [
    { value: "1-50", label: "1-50 units" },
    { value: "51-100", label: "51-100 units" },
    { value: "101-500", label: "101-500 units" },
    { value: "501-1000", label: "501-1,000 units" },
    { value: "1000+", label: "1,000+ units" },
  ]

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  // Validation helpers
  const isStep1Valid = () => {
    return formData.fullName.trim() && 
           formData.email.trim() && 
           formData.phone.trim() && 
           formData.whatsapp.trim()
  }

  const isStep2Valid = () => {
    return formData.products.length > 0 && 
           (!formData.products.includes("others") || formData.otherProduct.trim())
  }

  const isStep3Valid = () => {
    return formData.businessType.trim()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto glassmorphism-dark border-0 shadow-2xl rounded-xl">
        {!isSubmitted ? (
          <>
            <DialogHeader className="text-center pb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Bot className="w-8 h-8 text-white" />
              </motion.div>
              <DialogTitle className="text-2xl md:text-3xl font-bold gradient-text">
                Get Exclusive Access Now
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-base md:text-lg leading-relaxed">
                Join Africa's smartest preorder network and get connected to verified factory suppliers with AI-powered
                sourcing.
              </DialogDescription>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      step <= currentStep ? "bg-gradient-to-r from-cyan-500 to-blue-600" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Show error if exists */}
              {error && (
                <div className="bg-red-500/20 text-red-300 rounded-lg px-4 py-2 mb-2 text-center">
                  {error}
                </div>
              )}

              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-200">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="glassmorphism border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-200">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glassmorphism border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-200">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="glassmorphism border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        placeholder="+234 812 345 6789"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-200">
                        WhatsApp Number *
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="glassmorphism border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        placeholder="+234 812 345 6789"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Product Selection */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Product Preferences</h3>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-200">
                      What kind of products are you looking to preorder? *
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {productOptions.map((product) => (
                        <div key={product.value} className="flex items-center space-x-2">
                          <Checkbox
                            id={product.value}
                            checked={formData.products.includes(product.value)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  products: [...formData.products, product.value],
                                })
                              } else {
                                setFormData({
                                  ...formData,
                                  products: formData.products.filter((item) => item !== product.value),
                                  ...(product.value === "others" ? { otherProduct: "" } : {}),
                                })
                              }
                            }}
                            className="border-2 border-gray-400 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                          />
                          <Label htmlFor={product.value} className="text-sm text-gray-200 flex items-center gap-2">
                            <product.icon className="w-4 h-4 text-cyan-400" />
                            {product.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {formData.products.includes("others") && (
                      <div className="mt-2">
                        <Label htmlFor="otherProduct" className="text-sm font-medium text-gray-200">
                          Please specify other product(s): *
                        </Label>
                        <Input
                          id="otherProduct"
                          value={formData.otherProduct}
                          onChange={e => setFormData({ ...formData, otherProduct: e.target.value })}
                          className="glassmorphism border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 mt-1"
                          placeholder="Enter other product(s)"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantityRange" className="text-sm font-medium text-gray-200">
                      Preferred Quantity Range *
                    </Label>
                    <Select
                      value={formData.quantityRange}
                      onValueChange={(value) => setFormData({ ...formData, quantityRange: value })}
                      required
                    >
                      <SelectTrigger className="glassmorphism border-white/20 text-white focus:border-cyan-400">
                        <SelectValue placeholder="Select quantity range" />
                      </SelectTrigger>
                      <SelectContent className="glassmorphism-dark border-white/20">
                        {quantityRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value} className="text-white">
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Business Information */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Business Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-sm font-medium text-gray-200">
                      Your Business Type * <span className="text-xs text-gray-400">(max {BUSINESS_TYPE_WORD_LIMIT} words)</span>
                    </Label>
                    <Input
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => {
                        const words = e.target.value.split(/\s+/).filter(Boolean);
                        if (words.length <= BUSINESS_TYPE_WORD_LIMIT) {
                          setFormData({ ...formData, businessType: e.target.value });
                        } else {
                          // Only allow up to the word limit
                          setFormData({ ...formData, businessType: words.slice(0, BUSINESS_TYPE_WORD_LIMIT).join(" ") });
                        }
                      }}
                      className="glassmorphism border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      placeholder="e.g., reseller, boutique owner, personal shopper"
                      required
                    />
                    <div className="text-xs text-gray-400 mt-1">
                      {formData.businessType.trim() ? `${BUSINESS_TYPE_WORD_LIMIT - formData.businessType.trim().split(/\s+/).filter(Boolean).length} words left` : `${BUSINESS_TYPE_WORD_LIMIT} words left`}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="glassmorphism rounded-xl p-4 border border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-3">Summary</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>
                        <strong>Name:</strong> {formData.fullName}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Products:</strong> {formatProductsForBackend(formData.products, formData.otherProduct).join(", ")}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {formData.quantityRange}
                      </p>
                      <p>
                        <strong>Business:</strong> {formData.businessType}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="glassmorphism border-white/20 text-white hover:bg-white/10 rounded-xl"
                  >
                    Previous
                  </Button>
                )}

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 morph-button"
                    disabled={
                      (currentStep === 1 && !isStep1Valid()) ||
                      (currentStep === 2 && !isStep2Valid())
                    }
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 morph-button"
                    disabled={!isStep3Valid() || loading}
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-gray-600/50">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <span>AI-Powered Sourcing</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>Verified Suppliers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Factory className="w-4 h-4 text-cyan-400" />
                    <span>Factory Direct</span>
                  </div>
                </div>
              </div>
            </form>
          </>
        ) : (
          /* Success State */
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="text-white text-2xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                ✓
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">Welcome to Fusion AI!</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your request has been submitted successfully. Our AI agents are now searching for the best factory
              suppliers that match your requirements.
            </p>
            <div className="glassmorphism rounded-xl p-4 mb-6 border border-cyan-500/30">
              <p className="text-cyan-300 text-sm">
                <strong>What's Next?</strong> We'll contact you within 24 hours with verified supplier matches and
                exclusive preorder opportunities.
              </p>
            </div>

            {/* Confetti Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, -100],
                    rotate: [0, 360],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  )
}