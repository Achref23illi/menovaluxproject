import { Home, Wrench, Paintbrush, Building, Grid3X3, Briefcase, Users, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Aménagement d'Espaces de Vie Modernes",
      description: "Transformation complète de vos pièces à vivre avec des matériaux nobles et des finitions contemporaines.",
      features: ["Planchers en bois foncé", "Murs d'accent en pierre naturelle", "Éclairage LED encastré", "Système domotique intégré"],
    },
    {
      icon: Paintbrush,
      title: "Salles de Bain Luxueuses",
      description: "Création d'espaces sanitaires élégants conjuguant design contemporain et fonctionnalité optimale.",
      features: ["Douches vitrées grand format", "Doubles vasques suspendues", "Éclairage design à cristaux", "Carrelage effet pierre"],
    },
    {
      icon: Building,
      title: "Espaces Professionnels sur Mesure",
      description: "Aménagement d'environnements de travail modernes et fonctionnels pour entreprises et commerces.",
      features: ["Cloisons et portes métalliques", "Faux-plafonds modulaires", "Coordination d'équipe", "Respect des délais"],
    },
    {
      icon: Users,
      title: "Espaces Sanitaires Collectifs",
      description: "Conception et installation d'équipements sanitaires pour espaces publics et professionnels.",
      features: ["Lave-mains linéaires en résine", "Robinetterie automatique", "Distributeurs sans contact", "Revêtements antidérapants"],
    },
    {
      icon: Grid3X3,
      title: "Revêtements de Sol Spécialisés",
      description: "Pose expertisée de carrelages haut de gamme et revêtements techniques pour tous environnements.",
      features: ["Carrelage effet bois", "Pose en quinconce", "Surfaces résistantes", "Finitions professionnelles"],
    },
    {
      icon: Briefcase,
      title: "Bureaux et Espaces de Travail",
      description: "Aménagement d'espaces de travail lumineux et ergonomiques optimisant productivité et bien-être.",
      features: ["Grandes baies vitrées", "Mobilier contemporain", "Éclairage LED économique", "Agencement minimaliste"],
    },
    {
      icon: Lightbulb,
      title: "Solutions Techniques Intégrées",
      description: "Installation et intégration de systèmes techniques modernes pour un confort optimal.",
      features: ["Thermostat intelligent", "Ventilation silencieuse", "Éclairage architectural", "Automatisation"],
    },
    {
      icon: Wrench,
      title: "Finitions et Détails Premium",
      description: "Attention particulière aux détails et finitions qui font la différence dans vos projets.",
      features: ["Moulures contemporaines", "Encadrements sur mesure", "Quincaillerie premium", "Coordination couleurs"],
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
                  <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-2 h-2 bg-[#C9A961] rounded-full mr-2"></span>
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
              className="inline-flex items-center px-8 py-3 bg-[#C9A961] hover:bg-[#B8975A] text-black font-semibold rounded-lg transition-colors"
            >
              Contactez-nous pour un devis personnalisé
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
