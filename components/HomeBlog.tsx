import Link from "next/link"
import { blogs } from "@/lib/blogs"

export default function HomeBlog() {

  const featuredBlogs = blogs.slice(0, 2)

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Latest Wellness Insights
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {featuredBlogs.map((blog) => (
          <div key={blog.slug} className="bg-white shadow rounded-lg p-6">

            <h3 className="text-xl font-semibold mb-2">
              {blog.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {blog.excerpt}
            </p>

            <Link
              href={`/blog/${blog.slug}`}
              className="text-green-600 font-medium"
            >
              Read more →
            </Link>

          </div>
        ))}

      </div>

    </section>
  )
}