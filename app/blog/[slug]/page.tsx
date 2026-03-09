type Props = {
  params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Blog Post</h1>

      <p className="text-gray-600 mb-4">
        Viewing article:
      </p>

      <div className="text-xl font-semibold text-green-700">
        {params.slug}
      </div>
    </div>
  )
}