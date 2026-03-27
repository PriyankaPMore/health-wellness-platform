import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const { cart } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.product.name },
        unit_amount: item.product.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
  })

  return Response.json({ url: session.url })
}