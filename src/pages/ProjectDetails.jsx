import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { projects } from '../data/portfolio.js'
import { ArrowLeft, ExternalLink, Check } from 'lucide-react'

export default function ProjectDetails() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-display font-bold text-ink-950 mb-4">Project not found</h1>
        <Link to="/portfolio" className="text-brand-600 hover:text-brand-700">← Back to portfolio</Link>
      </div>
    )
  }

  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3)

  return (
    <div>
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex items-center gap-1 text-sm text-ink-600 hover:text-ink-900 mb-6">
            <ArrowLeft className="w-4 h-4" /> {t.common.back}
          </Link>

          <div className="h-64 md:h-80 rounded-2xl flex items-center justify-center mb-8" style={{ background: project.cover }}>
            <span className="text-white font-display font-bold text-4xl opacity-80">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-ink-950 mb-2">{project.title}</h1>
              <p className="text-lg text-ink-600 mb-6">{project.tagline}</p>
              <p className="text-ink-700 mb-8">{project.description}</p>

              <h2 className="font-display font-semibold text-xl text-ink-950 mb-4">Key Features</h2>
              <ul className="space-y-2 mb-8">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span className="text-ink-700">{f}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display font-semibold text-xl text-ink-950 mb-4">Technology</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm bg-brand-50 text-brand-700 rounded-lg">{tech}</span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                <h3 className="font-display font-semibold text-ink-950 mb-2">Want something similar?</h3>
                <p className="text-sm text-ink-600 mb-4">We can build a custom version of this for your business.</p>
                <Link to="/quote" className="block text-center px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
                  {t.common.requestThis}
                </Link>
              </div>
              <div className="p-6 rounded-2xl border border-ink-100">
                <h3 className="font-display font-semibold text-ink-950 mb-2">Category</h3>
                <p className="text-sm text-ink-600 capitalize">{project.category}</p>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display font-semibold text-2xl text-ink-950 mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/portfolio/${r.slug}`} className="rounded-2xl border border-ink-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-32 flex items-center justify-center" style={{ background: r.cover }}>
                      <span className="text-white font-display font-bold opacity-80">{r.title}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-ink-950">{r.title}</h3>
                      <p className="text-sm text-ink-600">{r.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
