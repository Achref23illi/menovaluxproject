'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Home, Bath, ChefHat, Building2, Ruler, Trees } from 'lucide-react'

const realisations = [
  {
    id: 1,
    title: "Rénovations Complètes",
    count: 150,
    description: "Rénovations complètes d'appartements et maisons",
    icon: Home,
    category: "Résidentiel"
  },
  {
    id: 2,
    title: "Salles de Bains",
    count: 85,
    description: "Salles de bains modernes et fonctionnelles",
    icon: Bath,
    category: "Sanitaire"
  },
  {
    id: 3,
    title: "Cuisines",
    count: 65,
    description: "Cuisines contemporaines sur mesure",
    icon: ChefHat,
    category: "Aménagement"
  },
  {
    id: 4,
    title: "Espaces Professionnels",
    count: 40,
    description: "Bureaux et locaux commerciaux",
    icon: Building2,
    category: "Commercial"
  },
  {
    id: 5,
    title: "Extensions",
    count: 25,
    description: "Extensions et agrandissements",
    icon: Ruler,
    category: "Construction"
  },
  {
    id: 6,
    title: "Terrasses & Jardins",
    count: 35,
    description: "Aménagements extérieurs",
    icon: Trees,
    category: "Extérieur"
  }
]

const achievements = [
  {
    title: "Années d'Expérience",
    value: "15+",
    description: "D'expertise dans le bâtiment"
  },
  {
    title: "Clients Satisfaits",
    value: "95%",
    description: "Taux de satisfaction client"
  },
  {
    title: "Projets Terminés",
    value: "400+",
    description: "Réalisations à notre actif"
  },
  {
    title: "Équipe Qualifiée",
    value: "12",
    description: "Artisans expérimentés"
  }
]

export function RealisationsSection() {
  const [animatedCounts, setAnimatedCounts] = useState<{ [key: number]: number }>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          
          // Animate counters
          realisations.forEach((realisation, index) => {
            let current = 0
            const increment = realisation.count / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= realisation.count) {
                current = realisation.count
                clearInterval(timer)
              }
              setAnimatedCounts(prev => ({
                ...prev,
                [realisation.id]: Math.floor(current)
              }))
            }, 30)
          })
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('realisations-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="realisations-section" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Réalisations en Chiffres
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des années d'expertise au service de vos projets. Découvrez nos principales réalisations 
              et l'impact de notre savoir-faire dans différents domaines du bâtiment.
            </p>
          </div>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 bg-gray-800 border-gray-700 hover:border-[#C9A961] transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="text-3xl md:text-4xl font-bold text-[#C9A961] mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Realisations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((realisation) => (
              <Card key={realisation.id} className="group bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-[#C9A961]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#C9A961] rounded-lg">
                      <realisation.icon className="w-8 h-8 text-black" />
                    </div>
                    <Badge variant="secondary" className="bg-[#C9A961] text-black">
                      {realisation.category}
                    </Badge>
                  </div>
                  
                  <div className="text-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-[#C9A961] mb-2">
                      {animatedCounts[realisation.id] || 0}+
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {realisation.title}
                    </h3>
                    <p className="text-gray-300">
                      {realisation.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-[#C9A961] rounded-full mr-2"></span>
                      Projets terminés avec succès
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 border border-gray-600">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Prêt à Concrétiser Votre Projet ?
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Rejoignez nos clients satisfaits et transformez votre espace avec notre expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="bg-[#C9A961] hover:bg-[#B8975A] text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Demander un Devis Gratuit
                </a>
                <a 
                  href="#gallery" 
                  className="border-2 border-[#C9A961] text-[#C9A961] px-8 py-3 rounded-lg font-semibold hover:bg-[#C9A961] hover:text-black transition-colors duration-300"
                >
                  Voir Notre Galerie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 