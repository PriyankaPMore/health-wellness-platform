"use client"

import { useState } from "react"
import { useCart } from "@/context/CartContext"
import CheckoutSteps from "@/components/CheckoutSteps"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [step, setStep] = useState(1)

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })

  const [delivery, setDelivery] = useState("standard")

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = () => {
    alert("Order placed successfully!")
    clearCart() // clear the cart
    setStep(1) // reset steps to 1
  }

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      {/* Step Indicator */}
      <CheckoutSteps step={step} />

      {cart.length === 0 ? (
        <p className="text-center mt-6">Your cart is empty.</p>
      ) : (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-gray-700">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
              <ul className="space-y-2">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between border-b pb-2">
                    <span>
                      {item.product.name} x {item.quantity}{" "}
                      {item.subscription !== "One-time" && `(${item.subscription})`}
                    </span>
                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={shipping.name}
                  onChange={handleShippingChange}
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={shipping.address}
                  onChange={handleShippingChange}
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={shipping.city}
                  onChange={handleShippingChange}
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={shipping.postalCode}
                  onChange={handleShippingChange}
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={shipping.country}
                  onChange={handleShippingChange}
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Delivery Method</h2>
              <select
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full border rounded-md p-2"
              >
                <option value="standard">Standard Shipping</option>
                <option value="express">Express Shipping</option>
                <option value="overnight">Overnight Shipping</option>
              </select>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={nextStep}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handlePlaceOrder}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ml-auto"
              >
                Place Order
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}