"use client"

import { ReactNode, useEffect } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  // While redirecting, render nothing
  if (!user) return null

  return <>{children}</>
}