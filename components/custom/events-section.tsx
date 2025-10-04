import { Calendar } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      date: "15 SEP 2017",
      image: "/placeholder-4w5i8.png",
      title: "Community Outreach Program",
    },
    {
      date: "25 SEP 2017",
      image: "/placeholder-586rn.png",
      title: "Educational Support Initiative",
    },
    {
      date: "20 SEP 2017",
      image: "/placeholder-mvfsv.png",
      title: "Free Hugs Campaign",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Upcoming <span className="text-teal-600">Events</span>
          </h2>
          <p className="text-gray-600 text-pretty">Social Services community settlement houses provide integrated.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4">
                <div className="bg-teal-600 text-white px-3 py-1 rounded flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
