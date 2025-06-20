"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Westmount, QC",
      rating: 5,
      text: "Menova Lux a transformé notre cuisine au-delà de nos attentes. L'équipe est professionnelle, ponctuelle et le résultat est absolument magnifique. Je recommande sans hésitation !",
      project: "Rénovation de cuisine",
    },
    {
      name: "Jean-Pierre Martin",
      location: "Outremont, QC",
      rating: 5,
      text: "Excellent travail pour la rénovation de notre salle de bain. L'équipe a respecté les délais et le budget. La qualité des finitions est exceptionnelle. Merci à toute l'équipe !",
      project: "Rénovation salle de bain",
    },
    {
      name: "Sophie Tremblay",
      location: "Mont-Royal, QC",
      rating: 5,
      text: "Nous avons fait appel à Menova Lux pour l'aménagement de notre sous-sol. Le résultat dépasse nos espérances. Une équipe à l'écoute et très compétente.",
      project: "Aménagement sous-sol",
    },
    {
      name: "Robert Gagnon",
      location: "Laval, QC",
      rating: 5,
      text: "Rénovation complète de notre maison. Travail impeccable, respect des délais et excellent service client. Je recommande vivement Menova Lux pour tous vos projets de rénovation.",
      project: "Rénovation complète",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ce Que Disent Nos Clients</h2>
            <p className="text-xl text-gray-600">La satisfaction de nos clients est notre plus grande fierté</p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-yellow-400 mb-6" />

            <div className="mb-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-yellow-600 font-medium">{testimonials[currentTestimonial].project}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="border-gray-300 hover:border-yellow-400 hover:text-yellow-400"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="border-gray-300 hover:border-yellow-400 hover:text-yellow-400"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Projets Réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="text-gray-600">Note Moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
