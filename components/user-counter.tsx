"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Users } from "lucide-react"
import { toast } from "sonner"

interface UserCounterProps {
  startCount?: number
  endCount?: number
  duration?: number
  className?: string
}

const randomNames = [
  "Adebayo from Lagos",
  "Fatima from Abuja",
  "Kwame from Accra",
  "Amina from Kano",
  "Chidi from Port Harcourt",
  "Aisha from Kaduna",
  "Kofi from Kumasi",
  "Ngozi from Enugu",
  "Ibrahim from Maiduguri",
  "Kemi from Ibadan",
  "Yusuf from Sokoto",
  "Blessing from Warri",
  "Abdul from Tamale",
  "Grace from Calabar",
  "Musa from Jos",
  "Chioma from Owerri",
  "Segun from Abeokuta",
  "Hauwa from Bauchi",
  "Emeka from Onitsha",
  "Zainab from Ilorin",
  "Tunde from Osogbo",
  "Mercy from Benin City",
  "Aliyu from Gombe",
  "Folake from Akure",
  "Bashir from Katsina",
  "Ama from Cape Coast",
  "Biodun from Ado-Ekiti",
  "Chinwe from Awka",
  "Dauda from Dutse",
  "Efua from Takoradi",
  "Funmi from Ogbomoso",
  "Garba from Kebbi",
  "Hannah from Umuahia",
  "Isioma from Asaba",
  "Jude from Makurdi",
  "Khadija from Bida",
  "Lola from Ondo",
  "Mohammed from Birnin Kebbi",
  "Nneka from Nsukka",
  "Obinna from Uyo",
  "Patience from Yenagoa",
  "Quadri from Ijebu-Ode",
  "Rashida from Minna",
  "Samuel from Lokoja",
  "Titilayo from Ife",
  "Usman from Gusau",
  "Victoria from Asaba",
  "Wasiu from Oyo",
  "Yemi from Sagamu",
  "Zara from Abuja",
  "Abena from Ho",
  "Bright from Tema",
  "Clara from Sunyani",
  "Daniel from Bolgatanga",
  "Esther from Wa",
  "Francis from Koforidua",
  "Gloria from Tarkwa",
  "Henry from Techiman",
  "Irene from Hohoe",
  "Joseph from Tamale",
  "Kwaku from Sekondi",
  "Linda from Ejisu",
  "Michael from Nkawkaw",
  "Nancy from Winneba",
  "Oscar from Dunkwa",
  "Precious from Dormaa",
  "Queen from Kintampo",
  "Robert from Kpando",
  "Sarah from Berekum",
  "Thomas from Axim",
  "Unity from Goaso",
  "Vincent from Prestea",
  "Wisdom from Nkronza",
  "Xylia from Ejura",
  "Yaw from Saltpond",
  "Zelia from Agona",
  "Ahmed from Zaria",
  "Bukola from Ogbomoso",
  "Chidinma from Orlu",
  "Damilola from Ile-Ife",
  "Ebere from Aba",
  "Femi from Ikeja",
  "Goodness from Umuahia",
  "Habiba from Katsina",
  "Ikechukwu from Nnewi",
  "Joy from Akwa Ibom",
  "Kelechi from Abia",
  "Ladi from Plateau",
  "Mustapha from Bauchi",
  "Nnenna from Anambra",
  "Olumide from Ogun",
  "Princess from Delta",
  "Qasim from Niger",
  "Rita from Cross River",
  "Sani from Jigawa",
  "Temitope from Ekiti",
  "Uche from Imo",
  "Vivian from Rivers",
  "Waheed from Kwara",
  "Ximena from FCT",
  "Yakubu from Adamawa",
  "Zenith from Edo"
]

const businessTypes = [
  "Boutique Owner",
  "Fashion Reseller",
  "Online Store Owner",
  "Wholesale Buyer",
  "Personal Shopper",
  "Market Trader",
  "E-commerce Entrepreneur",
  "Fashion Retailer",
  "Bulk Buyer",
  "Style Consultant",
  "Fashion Blogger",
  "Clothing Distributor",
  "Accessories Seller",
  "Fashion Designer",
  "Shoe Retailer",
  "Bag Seller",
  "Jewelry Trader",
  "Beauty Product Seller",
  "Fashion Influencer",
  "Vintage Clothing Seller"
]

export function UserCounter({ startCount = 243, endCount = 300, duration = 180000, className = "" }: UserCounterProps) {
  const [count, setCount] = useState(startCount)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const totalIncrements = endCount - startCount
    const baseInterval = duration / totalIncrements

    let currentCount = startCount
    let timeoutId: NodeJS.Timeout

    const scheduleNextIncrement = () => {
      if (currentCount >= endCount) return

      // Add randomness to make it feel more natural (±30% variation)
      const randomVariation = (Math.random() - 0.5) * 0.6
      const interval = baseInterval * (1 + randomVariation)

      timeoutId = setTimeout(() => {
        currentCount += 1
        setCount(currentCount)

        // Show toast notification for new user
        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)]
        const randomBusiness = businessTypes[Math.floor(Math.random() * businessTypes.length)]

        toast.success(`🎉 ${randomName} just joined!`, {
          description: `${randomBusiness} • Slot ${currentCount}/300`,
          duration: 3000,
          style: {
            background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          },
        })

        scheduleNextIncrement()
      }, interval)
    }

    scheduleNextIncrement()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isVisible, startCount, endCount, duration])

  return (
    <motion.div
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0 0 rgba(239, 68, 68, 0.4)",
            "0 0 0 10px rgba(239, 68, 68, 0)",
            "0 0 0 0 rgba(239, 68, 68, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Users className="w-3 h-3 text-white" />
      </motion.div>
      <div className="text-white">
        <span className="font-bold text-lg">{count}</span>
        <span className="text-red-200 text-sm ml-1">/ {endCount} slots filled</span>
      </div>
    </motion.div>
  )
}