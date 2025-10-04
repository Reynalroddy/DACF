import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function CausesSection() {
  return (
    <section id="training" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-teal-600">Training Programs</span>
          </h2>
          <p className="text-gray-600 text-pretty">
            Free training for public healthcare providers across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/doctor.jpg"
              alt="Basic Life Support Training"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <span className="text-sm font-semibold">TARGET: 30,000</span>
                <div className="flex items-center">
                  <div className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full mr-2">
                    17%
                  </div>
                  <span className="text-teal-600 font-semibold text-sm">
                    TRAINED: 5,000+
                  </span>
                </div>
              </div>
              <Progress value={17} className="h-2 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">
                Healthcare Professional Training
              </h3>
              <p className="text-gray-600 mb-6 text-pretty text-sm md:text-base">
                Training healthcare professionals in Basic Life Support (BLS),
                Advanced Cardiovascular Life Support (ACLS), and Pediatric
                Advanced Life Support (PALS) across Nigeria.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                SUPPORT TRAINING
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/students.jpg"
              alt="Student CPR Training"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <span className="text-sm font-semibold">TARGET: 50,000</span>
                <div className="flex items-center">
                  <div className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full mr-2">
                    2%
                  </div>
                  <span className="text-teal-600 font-semibold text-sm">
                    TRAINED: 100+
                  </span>
                </div>
              </div>
              <Progress value={2} className="h-2 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">
                Student CPR Training
              </h3>
              <p className="text-gray-600 mb-6 text-pretty text-sm md:text-base">
                Training secondary and university students in hands-only CPR to
                turn bystanders into lifesavers during cardiac emergencies.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                SUPPORT TRAINING
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
