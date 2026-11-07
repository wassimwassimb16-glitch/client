import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { MessageSquare, FileText, Palette, Code, TestTube, Rocket, Wrench } from 'lucide-react'

const steps = [
  { icon: MessageSquare, title: 'Initial Contact', description: 'You reach out and tell us about your project. We listen and ask questions.' },
  { icon: FileText, title: 'Understanding Requirements', description: 'We dive deep into your needs, goals, target audience, and technical requirements.' },
  { icon: FileText, title: 'Project Planning', description: 'We create a clear plan with scope, timeline, and deliverables.' },
  { icon: Palette, title: 'UI/UX Design', description: 'We design the look and feel of your product, with your feedback at every step.' },
  { icon: Code, title: 'Development', description: 'We build your product using modern, reliable technologies.' },
  { icon: TestTube, title: 'Testing & QA', description: 'We test thoroughly to make sure everything works perfectly.' },
  { icon: FileText, title: 'Client Review', description: 'You review the final product and request any adjustments.' },
  { icon: Rocket, title: 'Deployment', description: 'We launch your product and make it live for the world to see.' },
  { icon: Wrench, title: 'Maintenance & Support', description: 'We provide ongoing support and updates to keep your product running smoothly.' },
]

export default function Process() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink-950 mb-4">Our Process</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">A clear, transparent workflow from first conversation to launch and beyond.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-brand-600 flex items-center justify-center text-white font-display font-bold text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-xl text-ink-950 mb-1 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-brand-600" />
                      {step.title}
                    </h3>
                    <p className="text-ink-600">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Start your project today</h2>
          <p className="text-ink-300 mb-8">We're ready to listen. Tell us about your idea.</p>
          <Link to="/quote" className="inline-block px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            {t.nav.startProject}
          </Link>
        </div>
      </section>
    </div>
  )
}
