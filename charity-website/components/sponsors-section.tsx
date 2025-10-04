export function SponsorsSection() {
  const sponsors = [
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Our <span className="text-teal-600">Sponsors</span>
          </h2>
          <p className="text-gray-600 text-pretty">
            Human service organizations promote volunteerism and provide wide range of direct services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <img
                src={sponsor || "/placeholder.svg"}
                alt={`Sponsor ${index + 1}`}
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
