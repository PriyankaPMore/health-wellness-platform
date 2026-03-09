"use client"

import ProtectedRoute from "@/components/ProtectedRoute"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <ProtectedRoute>
      <main>
        <Hero />
      </main>
    </ProtectedRoute>
  )
}