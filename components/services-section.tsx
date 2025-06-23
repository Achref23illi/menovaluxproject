'use client'

import { Home, Wrench, Paintbrush, Building, Grid3X3, Briefcase, Users, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from "@/components/locale-provider"

export function ServicesSection() {
  const { t } = useLocale()

  const services = [
    {
      icon: Home,
      titleKey: 'service_living_spaces_title',
      descriptionKey: 'service_living_spaces_description',
      featureKeys: [
        'service_living_spaces_feature1',
        'service_living_spaces_feature2',
        'service_living_spaces_feature3',
        'service_living_spaces_feature4',
      ],
    },
    {
      icon: Paintbrush,
      titleKey: 'service_bathroom_title',
      descriptionKey: 'service_bathroom_description',
      featureKeys: [
        'service_bathroom_feature1',
        'service_bathroom_feature2',
        'service_bathroom_feature3',
        'service_bathroom_feature4',
      ],
    },
    {
      icon: Building,
      titleKey: 'service_professional_spaces_title',
      descriptionKey: 'service_professional_spaces_description',
      featureKeys: [
        'service_professional_spaces_feature1',
        'service_professional_spaces_feature2',
        'service_professional_spaces_feature3',
        'service_professional_spaces_feature4',
      ],
    },
    {
      icon: Users,
      titleKey: 'service_public_restrooms_title',
      descriptionKey: 'service_public_restrooms_description',
      featureKeys: [
        'service_public_restrooms_feature1',
        'service_public_restrooms_feature2',
        'service_public_restrooms_feature3',
        'service_public_restrooms_feature4',
      ],
    },
    {
      icon: Grid3X3,
      titleKey: 'service_flooring_title',
      descriptionKey: 'service_flooring_description',
      featureKeys: [
        'service_flooring_feature1',
        'service_flooring_feature2',
        'service_flooring_feature3',
        'service_flooring_feature4',
      ],
    },
    {
      icon: Briefcase,
      titleKey: 'service_offices_title',
      descriptionKey: 'service_offices_description',
      featureKeys: [
        'service_offices_feature1',
        'service_offices_feature2',
        'service_offices_feature3',
        'service_offices_feature4',
      ],
    },
    {
      icon: Lightbulb,
      titleKey: 'service_tech_solutions_title',
      descriptionKey: 'service_tech_solutions_description',
      featureKeys: [
        'service_tech_solutions_feature1',
        'service_tech_solutions_feature2',
        'service_tech_solutions_feature3',
        'service_tech_solutions_feature4',
      ],
    },
    {
      icon: Wrench,
      titleKey: 'service_premium_finishes_title',
      descriptionKey: 'service_premium_finishes_description',
      featureKeys: [
        'service_premium_finishes_feature1',
        'service_premium_finishes_feature2',
        'service_premium_finishes_feature3',
        'service_premium_finishes_feature4',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('services_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services_description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base">{t(service.descriptionKey)}</CardDescription>
                  <ul className="space-y-2">
                    {service.featureKeys.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-2 h-2 bg-[#C9A961] rounded-full mr-2"></span>
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">{t('not_find_service')}</p>
            <a
              href="tel:15148247562"
              className="inline-flex items-center px-8 py-3 bg-[#C9A961] hover:bg-[#B8975A] text-black font-semibold rounded-lg transition-colors"
            >
              {t('contact_us')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
