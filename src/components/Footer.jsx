import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-xl text-white mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm">N</span>
              NovaCraft
            </div>
            <p className="text-sm text-ink-400 max-w-md">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/quote" className="hover:text-white">Request a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/process" className="hover:text-white">Our Process</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-500">&copy; {new Date().getFullYear()} NovaCraft. {t.footer.rights}</p>
          <p className="text-xs text-ink-600">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
