"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "Cuisine Moderne avec Îlot Central",
      category: "Cuisine",
      description:
        "Transformation complète d'une cuisine avec îlot en marbre, armoires blanches et finitions contemporaines.",
      image: "/images/modern-kitchen.webp",
      details: [
        "Îlot en marbre blanc",
        "Armoires laquées blanches",
        "Luminaires suspendus design",
        "Comptoir en quartz",
      ],
    },
    {
      title: "Salle de Bain Spa Contemporaine",
      category: "Salle de Bain",
      description:
        "Création d'un espace de détente luxueux avec douche italienne, baignoire îlot et finitions haut de gamme.",
      image: "/images/modern-bathroom.webp",
      details: ["Douche italienne", "Baignoire îlot design", "Vanité flottante en bois", "Éclairage LED intégré"],
    },
    {
      title: "Salon Familial Ouvert",
      category: "Salon",
      description:
        "Réaménagement complet d'un salon avec cheminée moderne, étagères intégrées et espace de vie ouvert.",
      image: "/images/modern-living-room.jpeg",
      details: [
        "Cheminée en pierre naturelle",
        "Étagères intégrées sur mesure",
        "Espace ouvert salon-salle à manger",
        "Éclairage d'ambiance",
      ],
    },
    {
      title: "Rénovation Complète Résidentielle",
      category: "Rénovation",
      description: "Transformation totale d'une résidence avec cuisine ouverte, salon moderne et finitions luxueuses.",
      image: "/images/modern-kitchen.webp",
      details: ["Concept ouvert", "Matériaux haut de gamme", "Design contemporain", "Optimisation de l'espace"],
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projets" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets récents qui témoignent de notre savoir-faire et de notre attention
              aux détails.
            </p>
          </div>

          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {projects[currentProject].category}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">{projects[currentProject].description}</p>

                <div className="space-y-3 mb-8">
                  {projects[currentProject].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevProject}
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentProject ? "bg-yellow-400" : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextProject}
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
              Voir Plus de Projets
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
