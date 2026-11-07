import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext()

const LANGUAGES = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
]

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    const meta = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]
    document.documentElement.lang = meta.code
    document.documentElement.dir = meta.dir
    localStorage.setItem('lang', meta.code)
  }, [lang])

  const t = translations[lang] || translations.en

  const value = { lang, setLang, t, languages: LANGUAGES, dir: (LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]).dir }
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
