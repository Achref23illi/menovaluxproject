"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "Pièce à vivre moderne",
      category: "pièce à vivre",
      description:
        "Cette pièce à vivre a été entièrement rénovée pour offrir un espace moderne, lumineux et accueillant. La conception privilégie la simplicité élégante, tout en intégrant des matériaux et des finitions de qualité qui rehaussent le confort quotidien.",
      image: "/images/20200720_232213.jpg",
      details: [
        "Plancher en bois foncé pour une ambiance chaleureuse et contemporaine",
        "Mur d’accent en pierre naturelle apportant texture et caractère",
        "Grandes fenêtres habillées de stores modernes à lamelles pour une gestion optimale de la lumière",
        "Éclairage encastré LED pour une luminosité uniforme et une touche actuelle",
        "Porte vitrée contemporaine à trois panneaux laissant circuler la lumière entre les espaces",
        "Système domotique intégré (thermostat mural) pour un confort optimal",
        "Moulures et encadrements blancs pour une finition épurée"
      ],
      duration: "5 semaines",
      surface: "32 m²"
    },
    {
      title: "Rénovation Salle de Bain Luxueuse",
      category: "Salle de Bain",
      description:
        "Cette salle de bain contemporaine a été entièrement repensée pour conjuguer élégance et fonctionnalité dans un espace optimisé. La rénovation met en avant des matériaux raffinés, des lignes épurées et une organisation intelligente pour répondre aux besoins quotidiens d’une famille moderne.",
      image: "/images/20200722_180958.jpg",
      details: [
        "Douche-baignoire vitrée avec carrelage mural grand format et frise décorative",
        "Double vasque avec meuble suspendu laqué noir et tiroirs spacieux",
        "Miroirs intégrés à éclairage design pour une luminosité parfaite",
        "Éclairage suspendu à cristaux pour une touche sophistiquée",
        "Carrelage au sol ton pierre, facile d’entretien et résistant",
        "Fenêtre avec store vénitien, favorisant la lumière naturelle et l’intimité"
      ],
      duration: "3 semaines",
      surface: "15 m²"
    },
    {
      title: "Chantier d’aménagement d’espaces professionnels",
      category: "couloir",
      description:
        "Ce couloir en cours d’aménagement illustre l’importance d’une coordination minutieuse et d’un savoir-faire technique dans la réalisation d’espaces professionnels. L’intervention des artisans met en lumière les étapes essentielles de la pose de portes et de cloisons, dans un environnement moderne et fonctionnel.",
      image: "/images/20180727_102008.jpg",
      details: [
        "Installation de portes métalliques sur mesure pour garantir robustesse et sécurité",
        "Pose de cloisons et finition des encadrements pour une esthétique soignée",
        "Faux-plafond modulaire intégrant l’éclairage et les éléments techniques",
        "Revêtement mural uniforme pour un rendu professionnel",
        "Collaboration efficace entre les membres de l’équipe, assurant précision et respect des délais"
      ],
      duration: "6 semaines",
      surface: "65 m²"
    },
    {
      title: "espace sanitaire moderne",
      category: "espace sanitaire",
      description: "Cette salle d’eau collective a été conçue pour offrir un environnement propre, fonctionnel et résolument contemporain, répondant aux exigences des espaces publics ou professionnels. Les matériaux choisis et l’agencement favorisent l’hygiène, la facilité d’entretien et l’accessibilité.",
      image: "/images/20190926_015906.jpg",
      details: [
        "Lave-mains linéaire en résine blanche avec robinetterie murale intégrée, facilitant le nettoyage et l’utilisation simultanée",
        "Grand miroir toute longueur pour optimiser la luminosité et l’impression d’espace",
        "Distributeurs de savon et d’essuie-mains automatiques, favorisant l’hygiène sans contact",
        "Sol en carrelage imitation bois, résistant et antidérapant pour une sécurité accrue",
        "Cloisons de séparation en inox pour les urinoirs, assurant intimité et robustesse",
        "Poubelle en acier inoxydable au design épuré, parfaitement intégrée à l’ensemble"
      ],
      duration: "1 semaine",
      surface: "10 m²"
    },
    {
      title: "Sol en carrelage effet bois",
      category: "sol",
      description: "Le revêtement de sol présenté ici met en valeur un carrelage imitation bois de haute qualité, choisi pour allier l’esthétique chaleureuse du bois naturel à la robustesse et la facilité d’entretien du carrelage. Idéal pour les espaces à fort passage, il apporte une touche moderne et élégante à tout intérieur.",
      image: "/images/20190920_224235.jpg",
      details: [
        "Carrelage grand format à effet bois, nuances naturelles et veinage réaliste",
        "Pose en quinconce pour un rendu dynamique et contemporain",
        "Surface résistante à l’usure, à l’humidité et aux taches",
        "Palette de teintes sobres s’intégrant harmonieusement à tous les styles d’aménagement",
        "Facilité de nettoyage, adaptée aux environnements professionnels ou publics",
        "Palette de teintes sobres s’intégrant harmonieusement à tous les styles d’aménagement"
      ],
      duration: "1 semaine",
      surface: "10 m²"
    },
    {
      title: "Bureau lumineux",
      category: "bureau",
      description: "Ce bureau lumineux offre un cadre de travail privilégié grâce à ses larges fenêtres panoramiques donnant sur la ville. L’agencement minimaliste et le mobilier fonctionnel favorisent la concentration tout en profitant d’une belle luminosité naturelle et d’un panorama dégagé, même par temps hivernal.",
      image: "/images/20200218_105304.jpg",
      details: [
        "Grandes baies vitrées offrant une vue spectaculaire et un apport maximal de lumière naturelle",
        "Bureau contemporain en bois clair, adapté à un usage quotidien",
        "Porte à cadre noir avec vitrage dépoli, assurant confidentialité et élégance",
        "Murs blancs amplifiant la luminosité et la sensation d’espace",
        "Moulures décoratives contemporaines",
        "Éclairage LED intégré pour une ambiance lumineuse et économique"
      ],
      duration: "1 semaine",
      surface: "10 m²"
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
                <div className="absolute top-4 left-4 bg-[#C9A961] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {projects[currentProject].category}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h3>
                
                {/* Project Stats */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-400">Durée: </span>
                    <span className="text-[#C9A961] font-semibold">{projects[currentProject].duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-400">Surface: </span>
                    <span className="text-[#C9A961] font-semibold">{projects[currentProject].surface}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">{projects[currentProject].description}</p>

                <div className="space-y-3 mb-8">
                  {projects[currentProject].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#C9A961] rounded-full"></span>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevProject}
                    className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black"
                    aria-label="Projet précédent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentProject ? "bg-[#C9A961]" : "bg-gray-600"
                        }`}
                        aria-label={`Aller au projet ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextProject}
                    className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black"
                    aria-label="Projet suivant"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-[#C9A961] hover:bg-[#B8975A] text-black font-semibold px-8 py-3">
              Voir Plus de Projets
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
