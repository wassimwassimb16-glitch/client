import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { industries } from '../data/industries.js'
import { Utensils, Sparkles, Hotel, Home, Stethoscope, BookOpen, ShoppingBag, HardHat, Car, Briefcase, Scale, TrendingUp, Cpu, Dumbbell, Music, Truck, Plane, HeartHandshake, User } from 'lucide-react'

const iconMap = {
  restaurants: Utensils, beauty: Sparkles, hotels: Hotel, realestate: Home,
  healthcare: Stethoscope, education: BookOpen, retail: ShoppingBag,
  construction: HardHat, automotive: Car, professional: Briefcase,
  legal: Scale, finance: TrendingUp, tech: Cpu, fitness: Dumbbell,
  events: Music, logistics: Truck, travel: Plane, nonprofit: HeartHandshake,
  personal: User,
}

export default function Industries() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink-950 mb-4">Industries We Serve</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">We build digital solutions for businesses across many sectors. Whatever your industry, we can help.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = iconMap[ind.id] || Briefcase
              return (
                <div key={ind.id} className="p-6 rounded-2xl border border-ink-100 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink-950 mb-2">{ind.title}</h3>
                  <p className="text-sm text-ink-600">{ind.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-brand-50 border border-brand-100 text-center">
            <h3 className="font-display font-semibold text-xl text-ink-950 mb-2">Don't see your industry?</h3>
            <p className="text-ink-600 mb-4">We work with businesses in all sectors. If you have a project in mind, we'd love to hear about it.</p>
            <Link to="/contact" className="inline-block px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
