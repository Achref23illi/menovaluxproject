import { Home, Wrench, Paintbrush, Zap, Droplets, Hammer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Rénovation Complète",
      description: "Transformation totale de votre espace, de la conception à la finition.",
      features: ["Design personnalisé", "Gestion de projet", "Finitions haut de gamme"],
    },
    {
      icon: Wrench,
      title: "Rénovation de Cuisine",
      description: "Modernisez votre cuisine avec nos solutions sur mesure.",
      features: ["Armoires personnalisées", "Comptoirs en quartz", "Électroménagers intégrés"],
    },
    {
      icon: Paintbrush,
      title: "Rénovation de Salle de Bain",
      description: "Créez un espace de détente luxueux et fonctionnel.",
      features: ["Douches italiennes", "Vanités sur mesure", "Carrelage premium"],
    },
    {
      icon: Zap,
      title: "Électricité",
      description: "Installation et mise aux normes électriques complètes.",
      features: ["Mise aux normes", "Éclairage LED", "Domotique"],
    },
    {
      icon: Droplets,
      title: "Plomberie",
      description: "Services de plomberie résidentielle et commerciale.",
      features: ["Réparations", "Installations", "Urgences 24/7"],
    },
    {
      icon: Hammer,
      title: "Travaux Généraux",
      description: "Tous vos projets de construction et rénovation.",
      features: ["Agrandissements", "Sous-sols", "Toitures"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services de rénovation pour tous vos besoins, avec la qualité et l'expertise que
              vous méritez.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">Vous ne trouvez pas le service que vous cherchez ?</p>
            <a
              href="tel:15148247562"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors"
            >
              Contactez-nous pour un devis personnalisé
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
