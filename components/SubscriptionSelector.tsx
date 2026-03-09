"use client"

import { useState } from "react"
import { Product } from "@/lib/products"

type Props = {
  product: Product
  onAddToCart: (product: Product, subscription: string, quantity: number) => void
}

export default function SubscriptionSelector({ product, onAddToCart }: Props) {

  const [subscription, setSubscription] = useState("One-time")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="mt-4 flex flex-col gap-3">

      <select
        value={subscription}
        onChange={(e) => setSubscription(e.target.value)}
        className="border rounded-md p-2 text-gray-700"
      >
        <option>One-time</option>
        <option>Monthly</option>
        <option>Every 3 months</option>
      </select>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border rounded-md p-2"
      />

      <button
        onClick={() => onAddToCart(product, subscription, quantity)}
        className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
      >
        Add to Cart
      </button>

    </div>
  )
}