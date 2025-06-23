"use client"

import { useState, useEffect } from "react"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "#414141" : "transparent",
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Menova Lux Logo"
                width={isScrolled ? 50 : 60}
                height={isScrolled ? 50 : 60}
                className="rounded-lg object-contain transition-all duration-500 hover:scale-105"
                style={{
                  background: "transparent",
                }}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-100 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div className="hidden md:block">
              <h1 className={`text-white font-bold transition-all duration-500 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>MENOVA LUX</h1>
              <p className={`text-white/80 transition-all duration-500 ${
                isScrolled ? "text-xs" : "text-sm"
              }`}>Rénovation Générale Inc.</p>
              <p className={`text-white/70 transition-all duration-500 ${
                isScrolled ? "text-xs" : "text-xs"
              }`}>Licence: 5865-5564-01</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("accueil")}
              className="relative text-white hover:text-white transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-white/10 group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-white hover:text-white transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-white/10 group"
            >
              À Propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="relative text-white hover:text-white transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-white/10 group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("projets")}
              className="relative text-white hover:text-white transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-white/10 group"
            >
              Projets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-white hover:text-white transition-all duration-300 font-medium py-2 px-3 rounded-md hover:bg-white/10 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:15149248424"
                className="flex items-center space-x-2 text-white hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(514) 924-8424</span>
              </a>
              <a
                href="tel:15148247562"
                className="flex items-center space-x-2 text-white hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(514) 824-7562</span>
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-to-b from-[#414141] to-black text-white border-l border-white/10">
                <div className="flex flex-col space-y-6 mt-8">
                  <button
                    onClick={() => scrollToSection("accueil")}
                    className="text-left hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    Accueil
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    À Propos
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-left hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("projets")}
                    className="text-left hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    Projets
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                  >
                    Contact
                  </button>
                  <div className="border-t border-white/20 pt-4">
                    <div className="space-y-3">
                      <a
                        href="tel:15149248424"
                        className="flex items-center space-x-3 hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg border border-white/20 hover:border-white/40"
                      >
                        <Phone className="h-5 w-5" />
                        <span className="font-medium">(514) 924-8424</span>
                      </a>
                      <a
                        href="tel:15148247562"
                        className="flex items-center space-x-3 hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg border border-white/20 hover:border-white/40"
                      >
                        <Phone className="h-5 w-5" />
                        <span className="font-medium">(514) 824-7562</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
