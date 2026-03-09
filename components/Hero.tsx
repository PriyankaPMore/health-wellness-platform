import Link from "next/link"

export default function Hero() {

  return (
    <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-24">

      <div className="max-w-6xl mx-auto text-center px-6">

        <h1 className="text-5xl font-bold mb-6">
          Personalized Health & Wellness
        </h1>

        <p className="text-xl mb-10">
          Discover the right supplements for your lifestyle
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <Link
            href="/products"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Products
          </Link>

          <Link
            href="/quiz"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-green-600 transition-colors"
          >
            Take Wellness Quiz
          </Link>

        </div>

      </div>

    </section>
  )
}