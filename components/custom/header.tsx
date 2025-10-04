import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);

    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          // Calculate position with offset for header
          const headerOffset = 100; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          // Scroll to the element with offset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }, 300); // Longer delay to ensure sheet is closed
  };
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className="flex items-center gap-2 space-x-1 md:space-x-2">
                <div>
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="hidden sm:inline font-bold">
                    GET IN TOUCH
                  </span>
                  <span className="text-xs md:text-sm font-bold">
                    info@dacf.com
                  </span>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <div>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">OFFICE ADDRESS</span>
                  <span className="font-bold">
                    18B Eleruwa Street, Wemabod Estate, Ikeja Lagos
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <div>
                  <Clock className="w-4 h-4" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="hidden lg:inline font-bold">
                    OPENING HOUR
                  </span>
                  <span className="font-bold">9AM - 5PM</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* <span className="hidden md:inline">Email</span>
              <span className="hidden md:inline">Community</span>
              <span className="hidden lg:inline">Support</span> */}
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
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-2 py-2 lg:py-0">
              <div className="flex items-center">
                <Image
                  src="/logo2.png"
                  alt="DACF Logo"
                  width={100}
                  height={100}
                  className="rounded-md w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
                  priority
                  quality={100}
                />
                {/* <div className="ml-2 md:ml-3">
      <h1 className="text-sm md:text-xl font-bold text-gray-800">DACF</h1>
      <p className="text-xs md:text-sm text-gray-600 hidden sm:block">Development Advocacy Center</p>
    </div> */}
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8 cursor-pointer">
              <a
                href="/"
                className="bg-teal-600 text-white px-6 py-2 rounded font-medium"
              >
                HOME
              </a>
              <a
                href="#mission"
                className="text-gray-700 hover:text-teal-600 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("mission")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                MISSION
              </a>
              <a
                href="#causes"
                className="text-gray-700 hover:text-teal-600 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("causes")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CAUSES
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTACT
              </a>
            </nav>

            <div className="flex items-center space-x-2">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 md:px-6 text-sm md:text-base">
                DONATE NOW
              </Button>

              {/* Mobile menu */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <a
                      href="/"
                      className="bg-teal-600 text-white px-6 py-3 rounded font-medium text-center"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("home");
                      }}
                    >
                      HOME
                    </a>
                    <a
                      href="#mission"
                      className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("mission");
                      }}
                    >
                      MISSION
                    </a>
                    <a
                      href="#causes"
                      className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("causes");
                      }}
                    >
                      CAUSES
                    </a>
                    <a
                      href="#footer"
                      className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("footer");
                      }}
                    >
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
  );
}
