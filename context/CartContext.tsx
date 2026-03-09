"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Product } from "@/lib/products"

export type CartItem = {
  product: Product
  quantity: number
  subscription: string
}

export type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product, subscription: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product, subscription: string, quantity: number) => {
    setCart((prev) => [...prev, { product, subscription, quantity }])
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const clearCart = () => {
    setCart([]) // clear the entire cart
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook to use cart in components
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}