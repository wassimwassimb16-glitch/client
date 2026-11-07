import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { services } from '../data/services.js'
import { Globe, ShoppingCart, Calendar, Building2, GraduationCap, Heart, LayoutDashboard, Database, Wrench, Search } from 'lucide-react'

const iconMap = {
  'business-websites': Globe,
  'corporate-websites': Globe,
  'landing-pages': LayoutDashboard,
  'ecommerce': ShoppingCart,
  'booking-systems': Calendar,
  'restaurant-sites': Calendar,
  'hotel-sites': Building2,
  'real-estate': Building2,
  'education': GraduationCap,
  'healthcare': Heart,
  'portfolios': LayoutDashboard,
  'saas': LayoutDashboard,
  'dashboards': LayoutDashboard,
  'crm': Database,
  'inventory': Database,
  'custom-apps': Wrench,
  'api-integrations': Wrench,
  'database': Database,
  'redesign': Wrench,
  'maintenance': Wrench,
  'performance': Search,
  'seo': Search,
}

export default function Services() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink-950 mb-4">Our Services</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">We build a wide range of digital products, from simple websites to complex web applications.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.id] || Globe
              return (
                <div key={s.id} className="p-6 rounded-2xl border border-ink-100 hover:border-brand-200 hover:shadow-lg transition-all bg-white">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink-950 mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-600 mb-4">{s.description}</p>
                  <Link to="/quote" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                    {t.common.requestThis} →
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Need something custom?</h2>
          <p className="text-ink-300 mb-8">We love building unique solutions. Tell us what you need.</p>
          <Link to="/quote" className="inline-block px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            {t.nav.startProject}
          </Link>
        </div>
      </section>
    </div>
  )
}
