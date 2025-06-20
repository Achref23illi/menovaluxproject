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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/new-logo.jpeg"
              alt="Menova Lux Logo"
              width={60}
              height={60}
              className="rounded-lg object-contain"
              style={{
                background: "transparent",
              }}
            />
            <div className="hidden md:block">
              <h1 className="text-white font-bold text-xl">MENOVA LUX</h1>
              <p className="text-white/80 text-sm">Rénovation Générale Inc.</p>
              <p className="text-white/70 text-xs">Licence: 5865-5564-01</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projets")}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:15149248424"
              className="hidden md:flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(514) 924-8424</span>
            </a>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black text-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <button
                    onClick={() => scrollToSection("accueil")}
                    className="text-left hover:text-yellow-400 transition-colors"
                  >
                    Accueil
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left hover:text-yellow-400 transition-colors"
                  >
                    À Propos
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-left hover:text-yellow-400 transition-colors"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("projets")}
                    className="text-left hover:text-yellow-400 transition-colors"
                  >
                    Projets
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </button>
                  <a
                    href="tel:15149248424"
                    className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(514) 924-8424</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
