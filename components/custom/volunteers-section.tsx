import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function VolunteersSection() {
  const volunteers = [
    {
      name: "JHON DOE",
      title: "FOUNDER",
      image: "/professional-young-man-volunteer.jpg",
    },
    {
      name: "JACK SMITH",
      title: "FOUNDER",
      image: "/professional-young-woman-volunteer.jpg",
    },
    {
      name: "JAMES LORA",
      title: "FOUNDER",
      image: "/professional-middle-aged-man-volunteer.jpg",
    },
    {
      name: "JHON DOE",
      title: "FOUNDER",
      image: "/professional-young-woman-volunteer-smiling.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="inline-block border border-teal-600 text-teal-600 px-4 py-2 rounded text-sm font-semibold mb-8">
            - LOAD ALL EVENTS -
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Our <span className="text-teal-600">Volunteer</span>
          </h2>
          <p className="text-gray-600 text-pretty">
            Volunteer also include community centers and settlement houses that provide integrated services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative">
                <img
                  src={volunteer.image || "/placeholder.svg"}
                  alt={volunteer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Facebook className="w-6 h-6 text-white hover:text-teal-400 cursor-pointer" />
                    <Twitter className="w-6 h-6 text-white hover:text-teal-400 cursor-pointer" />
                    <Instagram className="w-6 h-6 text-white hover:text-teal-400 cursor-pointer" />
                    <Linkedin className="w-6 h-6 text-white hover:text-teal-400 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-800 mb-1">{volunteer.name}</h3>
                <p className="text-gray-600 text-sm">{volunteer.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
