"use client"

import { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus(data.message)
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus(data.error)
      }
    } catch (err) {
      setStatus("Something went wrong.")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="border p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    required
  />
  <input
    type="email"
    placeholder="Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="border p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    required
  />
  <textarea
    placeholder="Your Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="border p-3 rounded-md shadow-sm h-36 focus:outline-none focus:ring-2 focus:ring-green-500"
    required
  />
  <button
    type="submit"
    disabled={loading}
    className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700 transition-colors"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>
  {status && <p className="text-sm mt-2 text-center text-gray-700">{status}</p>}
</form>
  )
}