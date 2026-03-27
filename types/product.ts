// types/product.ts
export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  brand: string
  stock: number

  // NEW
  subscriptionDiscount?: number // e.g. 0.1 for 10%
}