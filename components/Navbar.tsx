import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b">

      <Link href="/" className="text-xl font-bold">
        HealthWell
      </Link>

      <div className="flex gap-6">

        <Link href="/products">Products</Link>

        <Link href="/pricing">Pricing</Link>

        <Link href="/blog">Blog</Link>

        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>

      </div>

    </nav>
  )
}