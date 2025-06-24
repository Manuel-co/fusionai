import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FusionAI - Africa's Smartest Preorder Network",
  description:
    "Connect with verified factory suppliers worldwide through AI-powered sourcing. Get factory-direct pricing with zero middlemen markup.",
  keywords: "preorder, factory suppliers, AI sourcing, wholesale, bulk orders, Africa, Nigeria, Ghana, Kenya",
  authors: [{ name: "FusionAI Team" }],
  creator: "FusionAI",
  publisher: "FusionAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fusionai.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FusionAI - Africa's Smartest Preorder Network",
    description:
      "Connect with verified factory suppliers worldwide through AI-powered sourcing. Get factory-direct pricing with zero middlemen markup.",
    url: "https://fusionai.ng",
    siteName: "FusionAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FusionAI - AI-Powered Preorder Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FusionAI - Africa's Smartest Preorder Network",
    description: "Connect with verified factory suppliers worldwide through AI-powered sourcing.",
    images: ["/og-image.jpg"],
    creator: "@fusionai_ng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
