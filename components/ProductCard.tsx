"use client"

import { useState } from "react"
import Image from "next/image"
import { Product } from "@/types/product"
import { addToCart } from "@/lib/cart"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const [isSubscription, setIsSubscription] = useState(false)

  const discount = product.subscriptionDiscount || 0.1
  const finalPrice = isSubscription
    ? product.price * (1 - discount)
    : product.price

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col text-black">
      
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <h2 className="mt-3 font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>

      {/* Subscription Toggle */}
      <div className="mt-3 flex flex-col gap-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            checked={!isSubscription}
            onChange={() => setIsSubscription(false)}
          />
          One-time purchase
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            checked={isSubscription}
            onChange={() => setIsSubscription(true)}
          />
          Subscribe & save {discount * 100}%
        </label>
      </div>

      {/* Price */}
      <p className="mt-2 font-bold text-blue-600">
        ${finalPrice.toFixed(2)}
      </p>

      {/* Button */}
      <button
        onClick={() => addToCart(product, isSubscription)}
        className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  )
}