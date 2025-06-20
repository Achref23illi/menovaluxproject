import { CheckCircle, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À Propos de Menova Lux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis notre création, nous nous engageons à transformer vos espaces avec excellence, créativité et
              professionnalisme.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez Menova Lux, nous croyons que chaque espace a le potentiel de devenir extraordinaire. Notre mission
                est de transformer vos rêves en réalité grâce à notre expertise en rénovation générale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous combinons savoir-faire traditionnel et techniques modernes pour offrir des résultats qui dépassent
                vos attentes, dans le respect des délais et du budget convenu.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Équipe d'experts qualifiés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Matériaux de qualité supérieure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Respect des délais et budgets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Garantie sur tous nos travaux</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/modern-living-room.jpeg"
                alt="Salon moderne rénové par Menova Lux"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">500+</h4>
              <p className="text-gray-600">Clients Satisfaits</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">15+</h4>
              <p className="text-gray-600">Années d'Expérience</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">24/7</h4>
              <p className="text-gray-600">Support Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
