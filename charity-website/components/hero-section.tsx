import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/healthcare-professional-training-cpr-medical-emerg.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            From Heartbeat to Hope: <span className="text-teal-400">Reducing Cardiovascular Deaths</span> with Life
            Support Training in Nigeria
          </h1>
          <p className="text-lg sm:text-xl mb-4 text-pretty">
            Every Naira Counts: Help Reduce Preventable Cardiac Deaths in Nigeria.
          </p>
          <p className="text-base sm:text-lg mb-8 text-pretty">
            Be the Difference Between Life and Death—Sponsor Critical Care Training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:space-y-0">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
              LEARN MORE
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent w-full sm:w-auto"
            >
              DONATE NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
