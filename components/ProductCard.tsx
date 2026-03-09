"use client"

import Image from "next/image"
import { Product } from "@/lib/products"
import SubscriptionSelector from "./SubscriptionSelector"

type Props = {
  product: Product
  onAddToCart: (product: Product, subscription: string, quantity: number) => void
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-5">
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-md object-cover mb-4"
      />

      {/* Product Info */}
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
      <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>

      {/* Subscription + Add to Cart */}
      <SubscriptionSelector
        product={product}
        onAddToCart={onAddToCart}
      />
    </div>
  )
}