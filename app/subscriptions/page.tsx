export default function SubscriptionsPage() {

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-6 text-center">
        Subscription Wellness Plans
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Maintain your wellness routine with flexible supplement
        subscriptions. Choose monthly or quarterly deliveries to ensure
        you never run out of essential nutrients.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">
            Monthly Wellness
          </h3>
          <p className="text-gray-600">
            Receive supplements every month with a small discount.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">
            Quarterly Delivery
          </h3>
          <p className="text-gray-600">
            Ideal for maintaining long-term wellness routines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">
            Personalized Plans
          </h3>
          <p className="text-gray-600">
            Combine quiz results with recurring supplement deliveries.
          </p>
        </div>

      </div>

    </div>
  )
}