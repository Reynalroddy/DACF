import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/placeholder.svg?height=400&width=1200')`,
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <h3 className="text-xl font-bold mb-6">Organization</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-teal-400">
                  Join Academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Upcoming events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Recent Cause
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-teal-400">
                  Love Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Share & care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Child Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Medical Treatment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Discover</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-teal-400">
                  How To Sponsor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Support a Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Community Attitudes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Family Adopting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">About</h3>
            <p className="text-gray-300 mb-6 text-pretty">
              We are a volunteer based organisation and helps disabled and under-privileged children by providing them
              with funding for equipment and services so they can live a better life.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <div>
                <p>Road-2,East Shibgonj</p>
                <p>House No: M-23,Sylhet</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <div>
                <p>support@generosity.com</p>
                <p>support@generosity.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <div>
                <p>(+880) 0823 560 433</p>
                <p>(+880) 0823 560 433</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">Copyright © 2025. All right reserved by BlueWindLab</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Spreads The Words</span>
              <div className="flex space-x-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
