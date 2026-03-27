import { supabase } from "@/lib/supabase"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single()

  if (!data) return <div>Product not found</div>

  return (
    <div className="container mx-auto py-12">
      <img src={data.image} className="w-96 mb-6" />

      <h1 className="text-3xl font-bold">{data.name}</h1>

      <p className="text-gray-600 mt-2">
        {data.description}
      </p>

      <p className="text-2xl font-semibold mt-4">
        ${data.price}
      </p>
    </div>
  )
}