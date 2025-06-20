"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prêt à transformer votre espace ? Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Téléphone</h4>
                      <a href="tel:15149248424" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        (514) 924-8424
                      </a>
                      <p className="text-sm text-gray-400">Disponible 24/7 pour urgences</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Licence RBQ</h4>
                      <p className="text-gray-300">5865-5564-01</p>
                      <p className="text-gray-300">Intervenant: 5865-5564</p>
                      <p className="text-sm text-gray-400">Entrepreneur général</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:info@menovalux.com"
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        info@menovalux.com
                      </a>
                      <p className="text-sm text-gray-400">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Zone de Service</h4>
                      <p className="text-gray-300">Montréal et environs</p>
                      <p className="text-sm text-gray-400">Laval, Longueuil, Rive-Sud, Rive-Nord</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Heures d'Ouverture</h4>
                      <div className="text-gray-300 space-y-1">
                        <p>Lun - Ven: 7h00 - 18h00</p>
                        <p>Sam: 8h00 - 16h00</p>
                        <p>Dim: Sur rendez-vous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-yellow-400 text-black border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Devis Gratuit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Obtenez une estimation gratuite et sans engagement pour votre projet de rénovation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Consultation gratuite à domicile</li>
                    <li>✓ Devis détaillé sous 48h</li>
                    <li>✓ Conseils d'experts inclus</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Demander un Devis</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Nom Complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Téléphone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          placeholder="(514) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Type de Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="renovation-complete">Rénovation Complète</option>
                        <option value="cuisine">Rénovation de Cuisine</option>
                        <option value="salle-de-bain">Rénovation de Salle de Bain</option>
                        <option value="sous-sol">Aménagement de Sous-sol</option>
                        <option value="electricite">Électricité</option>
                        <option value="plomberie">Plomberie</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Description du Projet *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder="Décrivez votre projet en détail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer la Demande
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
