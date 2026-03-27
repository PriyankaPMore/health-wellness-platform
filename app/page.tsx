"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/types/product"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState<string>("All")
  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    setLoading(true)

    const { data, error } = await supabase
      .from("products")
      .select("*")

    if (error) {
      console.error("Supabase error:", error)
    } else {
      console.log("Fetched products:", data) // 🔥 DEBUG
      setProducts(data as Product[])
    }

    setLoading(false)
  }

  // ✅ CLIENT-SIDE FILTERING (more reliable)
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const categories: string[] = [
    "All",
    "Protein",
    "Vitamins",
    "Minerals",
    "Probiotics",
    "Herbal Supplements",
    "Performance",
    "Hydration",
    "Weight Management",
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Health Store</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 border rounded-lg mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Categories */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && <p>Loading products...</p>}

      {/* Empty State */}
      {!loading && filteredProducts.length === 0 && (
        <p>No products found.</p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}