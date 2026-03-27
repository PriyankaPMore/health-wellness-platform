// lib/cart.ts
import { Product } from "@/types/product"

export interface CartItem extends Product {
  isSubscription: boolean
}

export const addToCart = (product: Product, isSubscription: boolean) => {
  const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]")

  cart.push({
    ...product,
    isSubscription,
  })

  localStorage.setItem("cart", JSON.stringify(cart))
}