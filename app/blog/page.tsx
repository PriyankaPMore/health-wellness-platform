"use client"

import Link from "next/link"
import Image from "next/image"
import { blogs } from "@/lib/blogs"

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Wellness Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">

              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={300}
                className="object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {blog.excerpt}
                </p>
              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  )
}