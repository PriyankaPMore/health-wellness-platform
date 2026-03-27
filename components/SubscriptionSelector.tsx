"use client"

import { Product } from "@/types/product"
import { useState } from "react"

type Props = {
  product: Product
  onAddToCart: (product: Product, subscription: string, quantity: number) => void
}

export default function SubscriptionSelector({ product, onAddToCart }: Props) {
  const [subscription, setSubscription] = useState("One-time")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col gap-2 text-gray-700">
      <select
        value={subscription}
        onChange={(e) => setSubscription(e.target.value)}
        className="border rounded-md p-1"
      >
        <option value="One-time">One-time</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
      </select>

      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="border rounded-md p-1 w-20"
      />

      <button
        onClick={() => onAddToCart(product, subscription, quantity)}
        className="mt-2 bg-green-600 text-white py-1 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  )
}