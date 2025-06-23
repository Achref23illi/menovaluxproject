'use client'

import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

export function AboutSection() {
  const { t } = useLocale()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('about_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about_description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('mission_title')}</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('mission_paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('mission_paragraph2')}
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{t('feature_expert_team')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{t('feature_quality_materials')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{t('feature_deadlines_budgets')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{t('feature_work_guarantee')}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/20190926_000310.jpg"
                alt="Salon moderne rénové par Menova Lux"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">500+</h4>
              <p className="text-gray-600">{t('stats_clients')}</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">15+</h4>
              <p className="text-gray-600">{t('stats_experience')}</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">24/7</h4>
              <p className="text-gray-600">{t('stats_support')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
