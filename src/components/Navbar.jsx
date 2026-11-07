import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { t, lang, setLang, languages } = useLanguage()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/industries', label: t.nav.industries },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/about', label: t.nav.about },
    { to: '/process', label: t.nav.process },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-ink-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-ink-950">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm">N</span>
            NovaCraft
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'text-brand-600 bg-brand-50' : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 rounded-lg hover:bg-ink-50"
              >
                {languages.find((l) => l.code === lang)?.label}
                <ChevronDown className="w-4 h-4" />
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1 right-0 w-32 bg-white border border-ink-100 rounded-lg shadow-lg py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false) }}
                      className={`w-full text-left px-3 py-2 text-sm ${lang === l.code ? 'bg-brand-50 text-brand-600' : 'text-ink-700 hover:bg-ink-50'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/quote"
              className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors"
            >
              {t.nav.startProject}
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink-600" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-ink-100">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 text-base font-medium rounded-lg ${
                      isActive ? 'text-brand-600 bg-brand-50' : 'text-ink-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="flex gap-2 mt-3 px-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1.5 text-sm rounded ${lang === l.code ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700'}`}
                  >
                    {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="mt-3 mx-3 px-4 py-2.5 text-center text-sm font-semibold text-white bg-brand-600 rounded-lg"
              >
                {t.nav.startProject}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
