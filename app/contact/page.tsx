"use client"

import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-20 px-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-center text-gray-700 mb-12">
        Have questions or feedback? Fill out the form below and we’ll get back to you.
      </p>
      <ContactForm />
    </div>
  )
}