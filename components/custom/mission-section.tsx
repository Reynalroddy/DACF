import { Users, Briefcase, HandHeart } from "lucide-react";

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">
              Our <span className="text-teal-600">Mission</span>
            </h2>
            <p className="text-gray-600 mb-6 text-pretty">
              The Damilola Adeyemo Cardiovascular Foundation is committed to
              reducing cardiovascular related deaths in Nigeria through
              comprehensive education and awareness. We equip healthcare
              providers and the broader community with the skills and confidence
              needed to save lives and effectively address cardiovascular
              conditions.
            </p>
            <p className="text-gray-600 mb-8 text-pretty">
              Since our founding, we have been dedicated to training healthcare
              professionals in Basic Life Support (BLS), Advanced Cardiovascular
              Life Support (ACLS), and Pediatric Advanced Life Support (PALS)
              across Nigeria.
            </p>
            <div className="mb-6">
              <p className="text-gray-800 font-semibold">Damilola Adeyemo</p>
              <p className="text-gray-600">Founder, DACF</p>
            </div>
          </div>
          <div>
            <img
              src="/mission.jpg"
              alt="Our team"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">VOLUNTEERING</h3>
            <p className="text-gray-600 text-pretty">
              Join Our Lifesaving Team. Every second counts when it comes to
              saving a life. By volunteering with us, you become part of a
              mission that empowers healthcare providers with essential skills.
            </p>
          </div>
          <div className="text-center p-6 bg-teal-600 text-white rounded-lg">
            <HandHeart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">FUNDRAISING</h3>
            <p className="text-pretty">
              Support Our Mission, Save More Lives. Your donation means a nurse
              can confidently resuscitate a child, a doctor can stabilize a
              patient in cardiac arrest.
            </p>
          </div>
          <div className="text-center p-6">
            <Briefcase className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">HELP & SUPPORT</h3>
            <p className="text-gray-600 text-pretty">
              We provide comprehensive training programs that equip doctors,
              nurses, and first responders with lifesaving techniques to reduce
              preventable deaths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
