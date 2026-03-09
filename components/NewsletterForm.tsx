"use client"

import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage(data.message)
        setEmail("")
      } else {
        setMessage(data.error)
      }
    } catch (err) {
      setMessage("Something went wrong.")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 rounded-md shadow-sm flex-1 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
    <button
      type="submit"
      disabled={loading}
      className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700 transition-colors w-full sm:w-auto"
    >
      {loading ? "Submitting..." : "Subscribe"}
    </button>
    {message && <p className="mt-2 text-sm text-gray-700 text-center sm:text-left">{message}</p>}
    </form>
  )
}