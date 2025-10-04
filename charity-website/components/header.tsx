import { Button } from "@/components/ui/button"
import { Heart, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className="flex items-center space-x-1 md:space-x-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">GET IN TOUCH</span>
                <span className="text-xs md:text-sm">info@dacf.com</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>OFFICE ADDRESS</span>
                <span>18B Eleruwa Street, Wemabod Estate, Ikeja Lagos</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="hidden lg:inline">OPENING HOUR</span>
                <span>9AM - 5PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="hidden md:inline">Email</span>
              <span className="hidden md:inline">Community</span>
              <span className="hidden lg:inline">Support</span>
              <div className="flex space-x-1 md:space-x-2">
                <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                <Instagram className="w-3 h-3 md:w-4 md:h-4" />
                <Youtube className="w-3 h-3 md:w-4 md:h-4 hidden sm:block" />
                <Linkedin className="w-3 h-3 md:w-4 md:h-4 hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
              <span className="text-xl md:text-2xl font-bold text-gray-800">DACF</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="bg-teal-600 text-white px-6 py-2 rounded font-medium">
                HOME
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">
                ABOUT US
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">
                EVENTS
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">
                PAGES
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">
                BLOG
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">
                ELEMENTS
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">
                CONTACT
              </a>
            </nav>

            <div className="flex items-center space-x-2">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 md:px-6 text-sm md:text-base">
                DONATE NOW
              </Button>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <a href="#" className="bg-teal-600 text-white px-6 py-3 rounded font-medium text-center">
                      HOME
                    </a>
                    <a href="#" className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4">
                      ABOUT US
                    </a>
                    <a href="#" className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4">
                      EVENTS
                    </a>
                    <a href="#" className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4">
                      PAGES
                    </a>
                    <a href="#" className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4">
                      BLOG
                    </a>
                    <a href="#" className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4">
                      ELEMENTS
                    </a>
                    <a href="#" className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4">
                      CONTACT
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
