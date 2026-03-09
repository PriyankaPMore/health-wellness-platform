export default function Features() {

  const features = [
    {
      title: "Practitioner Grade Supplements",
      description: "High quality supplements recommended by professionals."
    },
    {
      title: "Auto Refill Subscriptions",
      description: "Never miss your supplements with automated refills."
    },
    {
      title: "Expert Wellness Content",
      description: "Read blogs and research-backed wellness advice."
    }
  ]

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div key={index} className="p-6 border rounded-lg">

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}