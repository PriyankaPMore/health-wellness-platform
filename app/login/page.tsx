"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"

export default function LoginPage() {

  const { login } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    login(email)

    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
          Login
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Access your health and wellness dashboard
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 text-gray-500">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors shadow-sm"
          >
            Login
          </button>

        </form>

        {/* Browse products without login */}
        <div className="text-center mt-6">

          <Link
            href="/products"
            className="text-green-600 hover:underline"
          >
            Browse Products
          </Link>

        </div>

      </div>

    </div>
  )
}