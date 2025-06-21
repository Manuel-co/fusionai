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
import { Zap, Bot, Users, Target, Shirt, Gem, AlertCircle } from "lucide-react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

interface PreorderFormDialogProps {
  children: React.ReactNode
}

interface FormValues {
  fullName: string
  email: string
  phone: string
  whatsapp: string
  products: string[]
  quantityRange: string
  businessType: string
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces")
    .required("Full name is required"),

  email: Yup.string().email("Please enter a valid email address").required("Email address is required"),

  phone: Yup.string()
    .matches(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),

  whatsapp: Yup.string()
    .matches(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid WhatsApp number")
    .min(10, "WhatsApp number must be at least 10 digits")
    .required("WhatsApp number is required"),

  products: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one product category")
    .required("Product selection is required"),

  quantityRange: Yup.string(),

  businessType: Yup.string()
    .min(2, "Business type must be at least 2 characters")
    .required("Business type is required"),
})

export function PreorderFormDialog({ children }: PreorderFormDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const initialValues: FormValues = {
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    products: [],
    quantityRange: "",
    businessType: "",
  }

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", values)
      setIsSubmitted(true)

      // Close dialog after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
        setIsSubmitted(false)
        setSubmitting(false)
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitting(false)
    }
  }

  const productOptions = [
    { value: "clothes", label: "Clothes", icon: Shirt },
    { value: "shoes", label: "Shoes", icon: Target },
    { value: "accessories", label: "Accessories", icon: Gem },
    { value: "perfumes", label: "Perfumes", icon: Bot },
    { value: "jewelry", label: "Jewelry", icon: Gem },
    { value: "housewares", label: "Housewares", icon: Users },
    { value: "others", label: "Others", icon: Target },
  ]

  const quantityRanges = [
    { value: "1-50", label: "1-50 units" },
    { value: "51-100", label: "51-100 units" },
    { value: "101-500", label: "101-500 units" },
    { value: "501-1000", label: "501-1,000 units" },
    { value: "1000+", label: "1,000+ units" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white border-0 shadow-2xl">
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
              <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Get Exclusive Access Now
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-base md:text-lg leading-relaxed">
                Join Africa's smartest preorder network and get connected to verified factory suppliers with AI-powered
                sourcing.
              </DialogDescription>
            </DialogHeader>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting, setFieldValue, values, errors, touched }) => (
                <Form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-slate-900">
                      Full Name *
                    </Label>
                    <Field
                      as={Input}
                      id="fullName"
                      name="fullName"
                      className={`border-2 rounded-xl transition-colors duration-200 ${
                        errors.fullName && touched.fullName
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-cyan-500"
                      }`}
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage name="fullName">
                      {(msg) => (
                        <motion.div
                          className="flex items-center gap-1 text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {msg}
                        </motion.div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-900">
                      Email Address *
                    </Label>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      className={`border-2 rounded-xl transition-colors duration-200 ${
                        errors.email && touched.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-cyan-500"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <motion.div
                          className="flex items-center gap-1 text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {msg}
                        </motion.div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-slate-900">
                        Phone Number *
                      </Label>
                      <Field
                        as={Input}
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`border-2 rounded-xl transition-colors duration-200 ${
                          errors.phone && touched.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-cyan-500"
                        }`}
                        placeholder="+234 812 345 6789"
                      />
                      <ErrorMessage name="phone">
                        {(msg) => (
                          <motion.div
                            className="flex items-center gap-1 text-red-500 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            {msg}
                          </motion.div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-sm font-medium text-slate-900">
                        WhatsApp Number *
                      </Label>
                      <Field
                        as={Input}
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        className={`border-2 rounded-xl transition-colors duration-200 ${
                          errors.whatsapp && touched.whatsapp
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-cyan-500"
                        }`}
                        placeholder="+234 812 345 6789"
                      />
                      <ErrorMessage name="whatsapp">
                        {(msg) => (
                          <motion.div
                            className="flex items-center gap-1 text-red-500 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            {msg}
                          </motion.div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-slate-900">
                      What kind of products are you looking to preorder? *
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {productOptions.map((product) => (
                        <div key={product.value} className="flex items-center space-x-2">
                          <Field name="products">
                            {({ field }: any) => (
                              <Checkbox
                                id={product.value}
                                checked={field.value.includes(product.value)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setFieldValue("products", [...field.value, product.value])
                                  } else {
                                    setFieldValue(
                                      "products",
                                      field.value.filter((item: string) => item !== product.value),
                                    )
                                  }
                                }}
                                className="border-2 border-gray-300 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                              />
                            )}
                          </Field>
                          <Label htmlFor={product.value} className="text-sm text-gray-700 flex items-center gap-2">
                            <product.icon className="w-4 h-4 text-cyan-600" />
                            {product.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <ErrorMessage name="products">
                      {(msg) => (
                        <motion.div
                          className="flex items-center gap-1 text-red-500 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {msg}
                        </motion.div>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Business Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantityRange" className="text-sm font-medium text-slate-900">
                        Preferred Quantity Range (Optional)
                      </Label>
                      <Select
                        value={values.quantityRange}
                        onValueChange={(value) => setFieldValue("quantityRange", value)}
                      >
                        <SelectTrigger className="border-2 border-gray-200 focus:border-cyan-500 rounded-xl">
                          <SelectValue placeholder="Select quantity range" />
                        </SelectTrigger>
                        <SelectContent>
                          {quantityRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType" className="text-sm font-medium text-slate-900">
                        Your Business Type *
                      </Label>
                      <Field
                        as={Input}
                        id="businessType"
                        name="businessType"
                        className={`border-2 rounded-xl transition-colors duration-200 ${
                          errors.businessType && touched.businessType
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-cyan-500"
                        }`}
                        placeholder="e.g., reseller, boutique owner, personal shopper"
                      />
                      <ErrorMessage name="businessType">
                        {(msg) => (
                          <motion.div
                            className="flex items-center gap-1 text-red-500 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            {msg}
                          </motion.div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          Processing Request...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5" />🔓 Unlock My Deals Now
                        </div>
                      )}
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Bot className="w-4 h-4 text-cyan-500" />
                        <span>AI-Powered Sourcing</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-cyan-500" />
                        <span>Verified Suppliers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4 text-cyan-500" />
                        <span>Factory Direct</span>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Welcome to Fusion AI!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your request has been submitted successfully. Our AI agents are now searching for the best factory
              suppliers that match your requirements.
            </p>
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 mb-6">
              <p className="text-cyan-800 text-sm">
                <strong>What's Next?</strong> We'll contact you within 24 hours with verified supplier matches and
                exclusive preorder opportunities.
              </p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-blue-800 to-indigo-900 hover:from-blue-900 hover:to-indigo-800 text-white px-8 py-3 rounded-xl"
            >
              Close
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  )
}
