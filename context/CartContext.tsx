"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Product } from "@/types/product"

// Cart item type
export type CartItem = {
  product: Product
  quantity: number
  subscription: string
}

// Context type
type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product, quantity: number, subscription: string) => void
  removeFromCart: (productId: string, subscription: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  // Add or update cart item
  const addToCart = (product: Product, quantity: number, subscription: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.subscription === subscription
      )

      if (existing) {
        // Increment quantity
        return prev.map((item) =>
          item.product.id === product.id && item.subscription === subscription
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prev, { product, quantity, subscription }]
      }
    })
  }

  // Remove a specific item
  const removeFromCart = (productId: string, subscription: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.subscription === subscription))
    )
  }

  // Clear all items
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook for consuming cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}