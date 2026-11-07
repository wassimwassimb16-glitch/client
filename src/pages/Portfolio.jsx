import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { projects, categories } from '../data/portfolio.js'
import { Search, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.tagline.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink-950 mb-4">Our Portfolio</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">Explore demo projects across different industries and product types. Each one shows what we can build for you.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
              <input
                type="text"
                placeholder={t.common.search + '...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeCategory === 'all' ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'
              }`}
            >
              {t.common.all}
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeCategory === c.id ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.slug} className="rounded-2xl border border-ink-100 overflow-hidden hover:shadow-lg transition-all bg-white">
                <div className="h-48 flex items-center justify-center" style={{ background: p.cover }}>
                  <span className="text-white font-display font-bold text-2xl opacity-80">{p.title}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-ink-950 mb-1">{p.title}</h3>
                  <p className="text-sm text-ink-600 mb-3">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-ink-100 text-ink-600 rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/portfolio/${p.slug}`}
                      className="flex-1 text-center px-3 py-2 text-sm font-medium text-brand-600 border border-brand-200 rounded-lg hover:bg-brand-50"
                    >
                      {t.common.viewDetails}
                    </Link>
                    <Link
                      to={`/portfolio/${p.slug}`}
                      className="px-3 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-ink-500">No projects match your search.</div>
          )}
        </div>
      </section>
    </div>
  )
}
