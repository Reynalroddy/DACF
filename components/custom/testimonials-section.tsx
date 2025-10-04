import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeeze us in without any issues. Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!",
      name: "SUNNYBROOK CHURCH",
      title: "CEO, HW TECH INC",
    },
    {
      quote:
        "Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeeze us in without any issues. Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!",
      name: "BRANDON MUNSON",
      title: "CTO, FULCRUM DESIGN",
    },
  ]

  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/diverse-group-of-people-volunteering-together.jpg')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white text-balance">
            Donors <span className="text-teal-400">Feedbacks</span>
          </h2>
          <p className="text-gray-200 text-pretty">Human Rights charities support the passage and enforcement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg">
              <Quote className="w-8 h-8 text-teal-600 mb-4" />
              <p className="text-gray-600 italic mb-6 text-pretty">{testimonial.quote}</p>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
