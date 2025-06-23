'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLocale } from '@/components/locale-provider'

export function Footer() {
  const { t } = useLocale()
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Menova Lux Logo"
                  width={60}
                  height={60}
                  className="rounded-lg object-contain"
                  style={{
                    background: "transparent",
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold">MENOVA LUX</h3>
                  <p className="text-gray-400">{t('tagline_company_type')}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Votre partenaire de confiance pour tous vos projets de rénovation à Montréal et environs.
                <br />
                <span className="text-sm text-gray-400">Licence RBQ: 5865-5564-01</span>
                <br />
                <span className="text-sm text-gray-400">Intervenant: 5865-5564</span>
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C9A961] hover:text-black transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C9A961] hover:text-black transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#C9A961] hover:text-black transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('services_title')}</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#C9A961] transition-colors">
                    {t('contact_form_option_complete_renovation')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C9A961] transition-colors">
                    {t('contact_form_option_kitchen')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C9A961] transition-colors">
                    {t('contact_form_option_bathroom')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C9A961] transition-colors">
                    {t('contact_form_option_basement')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C9A961] transition-colors">
                    {t('contact_form_option_electricity')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C9A961] transition-colors">
                    {t('contact_form_option_plumbing')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#C9A961]" />
                  <a href="tel:15149248424" className="hover:text-[#C9A961] transition-colors">
                    (514) 924-8424
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#C9A961]" />
                  <a href="mailto:info@menovalux.com" className="hover:text-[#C9A961] transition-colors">
                    info@menovalux.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-[#C9A961] mt-1" />
                  <div>
                    <p>Montréal, Québec</p>
                    <p className="text-sm text-gray-400 mt-1">Service dans le Grand Montréal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">{t('footer_rights')}</p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#C9A961] transition-colors">
                  {t('privacy_policy')}
                </a>
                <a href="#" className="hover:text-[#C9A961] transition-colors">
                  {t('terms_of_use')}
                </a>
                <a href="#" className="hover:text-[#C9A961] transition-colors">
                  {t('site_map')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
