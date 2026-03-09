"use client"

import { useCart } from "@/context/CartContext"
import Link from "next/link"

export default function CartPage() {
  const { cart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.product.price,
    0
  )

  return (
    <div className="container mx-auto px-6 py-20 max-w-xl">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Cart Summary
      </h1>

      <ul className="space-y-4">

        {cart.map((item, index) => (
          <li
            key={index}
            className="flex justify-between border-b pb-3"
          >
            <span>
              {item.product.name} ({item.subscription})
            </span>

            <span>
              ${item.product.price.toFixed(2)}
            </span>
          </li>
        ))}

      </ul>

      <div className="mt-8 flex justify-between font-semibold">

        <span>Total</span>
        <span>${total.toFixed(2)}</span>

      </div>

      <Link
        href="/checkout"
        className="block mt-8 bg-green-600 text-white text-center py-3 rounded-md hover:bg-green-700"
      >
        Proceed to Checkout
      </Link>

    </div>
  )
}