"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

export function HeroSection() {
  const { t } = useLocale()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{t('hero_heading')}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
          {t('hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-3"
            onClick={() => scrollToSection("contact")}
          >
            {t('request_quote')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-3"
            onClick={() => scrollToSection("projets")}
          >
            {t('view_projects')}
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <a href="tel:15149248424" className="flex items-center space-x-2 hover:text-[#C9A961] transition-colors">
            <Phone className="h-4 w-4" />
            <span>(514) 924-8424</span>
          </a>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Montréal, Québec</span>
          </div>
        </div>
      </div>
    </section>
  )
}
