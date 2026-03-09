import "./globals.css"
import { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { AuthProvider } from "@/context/AuthContext"
import { CartProvider } from "@/context/CartContext"

export const metadata = {
  title: "Health & Wellness Platform",
  description:
    "Fullscript-style marketing platform built with Next.js, React, and Tailwind CSS",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        {/* Wrap entire app with providers */}
        <AuthProvider>
          <CartProvider>
            <Navbar />

            <main className="container mx-auto px-6 py-10">{children}</main>

            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}