"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from '@/components/locale-provider'

export function ContactSection() {
  const { t } = useLocale()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('contact_title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('contact_subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('contact_info_title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#C9A961] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact_phone_label')}</h4>
                      <div className="space-y-1">
                        <a href="tel:15149248424" className="text-gray-300 hover:text-[#C9A961] transition-colors block">
                          (514) 924-8424
                        </a>
                        <a href="tel:15148247562" className="text-gray-300 hover:text-[#C9A961] transition-colors block">
                          (514) 824-7562
                        </a>
                      </div>
                      <p className="text-sm text-gray-400">{t('contact_emergency')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#C9A961] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact_license_label')}</h4>
                      <p className="text-gray-300">5865-5564-01</p>
                      <p className="text-gray-300">Intervenant: 5865-5564</p>
                      <p className="text-sm text-gray-400">{t('contact_general_contractor')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#C9A961] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact_email_label')}</h4>
                      <a
                        href="mailto:info@menovalux.com"
                        className="text-gray-300 hover:text-[#C9A961] transition-colors"
                      >
                        info@menovalux.com
                      </a>
                      <p className="text-sm text-gray-400">{t('contact_email_response')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#C9A961] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact_service_area_label')}</h4>
                      <p className="text-gray-300">Montréal et environs</p>
                      <p className="text-sm text-gray-400">Laval, Longueuil, Rive-Sud, Rive-Nord</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#C9A961] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact_open_hours_label')}</h4>
                      <div className="text-gray-300 space-y-1">
                        <p>{t('contact_open_hours_week')}</p>
                        <p>{t('contact_open_hours_sat')}</p>
                        <p>{t('contact_open_hours_sun')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-[#C9A961] text-black border-0">
                <CardHeader>
                  <CardTitle className="text-xl">{t('contact_free_quote_title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{t('contact_free_quote_description')}</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ {t('contact_free_quote_feature1')}</li>
                    <li>✓ {t('contact_free_quote_feature2')}</li>
                    <li>✓ {t('contact_free_quote_feature3')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{t('contact_form_title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          {t('contact_form_label_full_name')}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          placeholder={t('contact_form_placeholder_name') as string}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          {t('contact_form_label_phone')}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          placeholder={t('contact_form_placeholder_phone') as string}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact_form_label_email')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder={t('contact_form_placeholder_email') as string}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact_form_label_service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                      >
                        <option value="">{t('contact_form_select_service')}</option>
                        <option value="renovation-complete">{t('contact_form_option_complete_renovation')}</option>
                        <option value="cuisine">{t('contact_form_option_kitchen')}</option>
                        <option value="salle-de-bain">{t('contact_form_option_bathroom')}</option>
                        <option value="sous-sol">{t('contact_form_option_basement')}</option>
                        <option value="electricite">{t('contact_form_option_electricity')}</option>
                        <option value="plomberie">{t('contact_form_option_plumbing')}</option>
                        <option value="autre">{t('contact_form_option_other')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact_form_label_project_description')}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder={t('contact_form_placeholder_project_description') as string}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#C9A961] hover:bg-[#B8975A] text-black font-semibold py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {t('contact_form_submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
