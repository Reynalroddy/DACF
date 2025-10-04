import { Users, Building2, GraduationCap, MapPin } from "lucide-react"

export function StatsSection() {
  const stats = [
    { icon: Users, label: "TRAINEES", value: "5,000+" },
    { icon: MapPin, label: "STATES", value: "32" },
    { icon: Building2, label: "HOSPITALS", value: "100+" },
    { icon: GraduationCap, label: "STUDENTS TRAINED", value: "100+" },
  ]

  return (
    <section
      className="py-16 md:py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/medical-professionals-healthcare-training-nigeria.jpg')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-teal-600 p-4 md:p-8 text-center text-white">
              <stat.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4" />
              <h3 className="text-xs md:text-sm font-semibold mb-1 md:mb-2">{stat.label}</h3>
              <p className="text-2xl md:text-4xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
