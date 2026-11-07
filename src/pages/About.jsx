import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { Target, Eye, Lightbulb, Users } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink-950 mb-4">About NovaCraft</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">A growing digital development studio building websites and web applications for clients around the world.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-ink-700 space-y-6">
            <p>
              NovaCraft is a digital agency focused on building professional, high-quality web products. We work with businesses of all sizes — from solo entrepreneurs to growing companies — to create websites, web applications, and custom digital tools.
            </p>
            <p>
              We believe that every business deserves a strong digital presence. Whether you need a simple landing page or a complex web application, we approach each project with the same commitment to quality, clarity, and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-ink-100">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink-950 mb-2">Our Mission</h3>
              <p className="text-ink-600">To make professional digital products accessible to businesses everywhere, regardless of size or industry.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-ink-100">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink-950 mb-2">Our Vision</h3>
              <p className="text-ink-600">A world where every business has the digital tools it needs to grow and succeed.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-ink-100">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink-950 mb-2">Our Philosophy</h3>
              <p className="text-ink-600">Clean code, thoughtful design, and honest communication. We build things that last.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-ink-100">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink-950 mb-2">How We Work</h3>
              <p className="text-ink-600">We listen first, then build. Every project starts with understanding your goals and ends with a product you're proud of.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-ink-950 mb-4">Ready to work together?</h2>
          <p className="text-ink-600 mb-8">Let's discuss your project and see how we can help.</p>
          <Link to="/contact" className="inline-block px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  )
}
