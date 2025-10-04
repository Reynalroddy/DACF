import { Button } from "@/components/ui/button";

export function UrgentCauseSection() {
  return (
    <section id="causes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Our Urgent <span className="text-teal-600">Causes</span>
          </h2>
          <p className="text-gray-600 text-pretty">
            At Damilola Adeyemo Cardiovascular Foundation, we believe that every
            second counts when a life is at risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-600">
                URGENT
              </span>
              <span className="text-teal-600 font-semibold ml-2">CAUSE</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">1. Save, Not Snap</h3>
            <p className="text-gray-600 mb-6 text-pretty">
              In critical moments, many young people respond by snapping
              pictures, pouring water, or attempting ineffective remedies. With
              the right knowledge, they can instead act with confidence and save
              lives.
            </p>
            <p className="text-gray-600 mb-6 text-pretty">
              Through this initiative, we are committed to training{" "}
              <strong>50,000 secondary and university students</strong> in
              hands-only CPR by December 2027.
            </p>
            <p className="text-teal-600 font-semibold mb-6">
              👉 Together, we can turn bystanders into lifesavers.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-600">
                URGENT
              </span>
              <span className="text-teal-600 font-semibold ml-2">CAUSE</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              2. Response with Confidence
            </h3>
            <p className="text-gray-600 mb-6 text-pretty">
              Healthcare professionals are often the first point of contact for
              emergencies, yet many lack formal training in Basic Life Support
              (BLS), Advanced Cardiovascular Life Support (ACLS), and Pediatric
              Advanced Life Support (PALS).
            </p>
            <p className="text-gray-600 mb-6 text-pretty">
              Our goal is to train{" "}
              <strong>30,000 healthcare professionals</strong> across Nigeria by
              January 2027.
            </p>
            <p className="text-teal-600 font-semibold mb-6">
              👉 Every trained professional means countless lives saved.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800 mb-6">
            💙 These causes are urgent. These causes are life-saving. And with
            your support, these goals are possible.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
              DONATE NOW
            </Button>
            <Button
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 bg-transparent"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
