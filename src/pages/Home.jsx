import { Link } from 'react-router-dom'
import { ArrowRight, Code, Palette, Globe, Zap, Shield, Users } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider.jsx'

const serviceCards = [
  { icon: Globe, title: 'Websites & Apps', desc: 'From landing pages to full SaaS platforms.' },
  { icon: Code, title: 'Custom Development', desc: 'Tailored solutions with modern tech stacks.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Clean interfaces that convert visitors.' },
  { icon: Zap, title: 'Performance', desc: 'Fast loading times and smooth interactions.' },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-600 bg-brand-50 rounded-full mb-6">{t.home.heroEyebrow}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink-950 leading-tight text-balance">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-ink-600 max-w-2xl">{t.home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors inline-flex items-center gap-2">
                {t.home.ctaPrimary} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="px-6 py-3 text-base font-semibold text-ink-700 bg-ink-100 hover:bg-ink-200 rounded-lg transition-colors">
                {t.home.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-ink-950">{t.home.servicesTitle}</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((c) => (
              <div key={c.title} className="p-6 rounded-xl border border-ink-100 hover:border-brand-200 hover:shadow-sm transition-all">
                <c.icon className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-ink-950">{t.home.industriesTitle}</h2>
          <p className="mt-4 text-ink-600 max-w-2xl">Restaurants, hotels, clinics, real estate, education, e-commerce, startups, and more.</p>
          <Link to="/industries" className="mt-6 inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
            View all industries <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-ink-950">{t.home.processTitle}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{ s: '01', t: 'Discovery', d: 'Understand your goals and users.' }, { s: '02', t: 'Design', d: 'Wireframes and visual mockups.' }, { s: '03', t: 'Build', d: 'Development with clean, reusable code.' }, { s: '04', t: 'Launch', d: 'Testing, deployment, and support.' }].map((step) => (
              <div key={step.s}>
                <span className="text-brand-600 font-display font-bold text-lg">{step.s}</span>
                <h3 className="mt-2 font-semibold text-ink-950">{step.t}</h3>
                <p className="mt-1 text-sm text-ink-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold">{t.home.whyTitle}</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[{ t: 'Modern stack', d: 'React, Tailwind, Supabase.' }, { t: 'Global reach', d: 'Serving clients worldwide.' }, { t: 'Transparent', d: 'Clear pricing and timelines.' }].map((item) => (
              <div key={item.t}>
                <h3 className="font-semibold text-lg">{item.t}</h3>
                <p className="mt-2 text-brand-100">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-ink-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white">{t.home.finalCta}</h2>
          <p className="mt-4 text-ink-400">{t.home.finalCtaSubtitle}</p>
          <Link to="/quote" className="mt-8 inline-block px-8 py-3 text-base font-semibold text-ink-950 bg-white hover:bg-ink-100 rounded-lg transition-colors">
            {t.home.ctaPrimary}
          </Link>
        </div>
      </section>
    </div>
  )
}
