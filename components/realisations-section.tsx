'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Home, Bath, ChefHat, Building2, Ruler, Trees } from 'lucide-react'
import { useLocale } from '@/components/locale-provider'

const realisations = [
  { id: 1, count: 150, icon: Home, titleKey: 'real1_title', descKey: 'real1_desc', categoryKey: 'real1_category' },
  { id: 2, count: 85, icon: Bath, titleKey: 'real2_title', descKey: 'real2_desc', categoryKey: 'real2_category' },
  { id: 3, count: 65, icon: ChefHat, titleKey: 'real3_title', descKey: 'real3_desc', categoryKey: 'real3_category' },
  { id: 4, count: 40, icon: Building2, titleKey: 'real4_title', descKey: 'real4_desc', categoryKey: 'real4_category' },
  { id: 5, count: 25, icon: Ruler, titleKey: 'real5_title', descKey: 'real5_desc', categoryKey: 'real5_category' },
  { id: 6, count: 35, icon: Trees, titleKey: 'real6_title', descKey: 'real6_desc', categoryKey: 'real6_category' }
]

const achievements = [
  { value: '15+', titleKey: 'achv_experience_title', descKey: 'achv_experience_desc' },
  { value: '95%', titleKey: 'achv_clients_title', descKey: 'achv_clients_desc' },
  { value: '400+', titleKey: 'achv_projects_title', descKey: 'achv_projects_desc' },
  { value: '12', titleKey: 'achv_team_title', descKey: 'achv_team_desc' }
]

export function RealisationsSection() {
  const { t } = useLocale()
  const [animatedCounts, setAnimatedCounts] = useState<{ [key: number]: number }>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          realisations.forEach((realisation) => {
            let current = 0
            const increment = realisation.count / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= realisation.count) {
                current = realisation.count
                clearInterval(timer)
              }
              setAnimatedCounts(prev => ({ ...prev, [realisation.id]: Math.floor(current) }))
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('realisations_title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('realisations_description')}</p>
          </div>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((a, idx) => (
              <Card key={idx} className="text-center p-6 bg-gray-800 border-gray-700 hover:border-[#C9A961] transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="text-3xl md:text-4xl font-bold text-[#C9A961] mb-2">{a.value}</div>
                  <div className="text-lg font-semibold text-white mb-1">{t(a.titleKey as string)}</div>
                  <div className="text-sm text-gray-400">{t(a.descKey as string)}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Realisations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((r) => (
              <Card key={r.id} className="group bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-[#C9A961]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#C9A961] rounded-lg">
                      <r.icon className="w-8 h-8 text-black" />
                    </div>
                    <Badge variant="secondary" className="bg-[#C9A961] text-black">
                      {t(r.categoryKey as string)}
                    </Badge>
                  </div>

                  <div className="text-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-[#C9A961] mb-2">
                      {(animatedCounts[r.id] || 0)}+
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t(r.titleKey as string)}</h3>
                    <p className="text-gray-300">{t(r.descKey as string)}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-[#C9A961] rounded-full mr-2"></span>
                      {t('real_success_label')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 border border-gray-600">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('cta_real_heading')}</h3>
              <p className="text-lg mb-6 text-gray-300">{t('cta_real_subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-[#C9A961] hover:bg-[#B8975A] text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  {t('cta_request_quote')}
                </a>
                <a href="#gallery" className="border-2 border-[#C9A961] text-[#C9A961] px-8 py-3 rounded-lg font-semibold hover:bg-[#C9A961] hover:text-black transition-colors duration-300">
                  {t('cta_view_gallery')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 