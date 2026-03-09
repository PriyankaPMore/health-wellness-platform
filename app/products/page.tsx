"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/ProductCard"
import { useCart } from "@/context/CartContext"

export default function ProductsPage() {
  const { addToCart } = useCart()

  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Products</h1>

      {/* Product Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart} // function from CartContext
          />
        ))}
      </div>
    </div>
  )
}