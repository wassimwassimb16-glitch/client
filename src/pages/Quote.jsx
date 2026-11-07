import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

const schema = z.object({
  whatToBuild: z.string().min(5, 'Please describe what you want to build'),
  industry: z.string().min(2, 'Industry is required'),
  productType: z.string().min(2, 'Product type is required'),
  features: z.string().optional(),
  designStyle: z.string().optional(),
  budget: z.string().min(1, 'Budget is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  country: z.string().min(2, 'Country is required'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  additional: z.string().optional(),
})

const stepFields = [
  ['whatToBuild', 'industry', 'productType'],
  ['features', 'designStyle'],
  ['budget', 'timeline', 'country'],
  ['name', 'email', 'additional'],
]

export default function Quote() {
  const { t } = useLanguage()
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const { register, handleSubmit, trigger, formState: { errors, isSubmitting }, getValues } = useForm({
    resolver: zodResolver(schema),
  })

  const next = async () => {
    const fields = stepFields[step]
    const valid = await trigger(fields)
    if (valid) setStep(step + 1)
  }

  const onSubmit = async (data) => {
    setError(null)
    if (!isSupabaseConfigured) {
      setSubmitted(true)
      return
    }
    const { error: supaError } = await supabase.from('quote_requests').insert([data])
    if (supaError) { setError(supaError.message); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-display font-bold text-ink-950 mb-2">Request received!</h1>
        <p className="text-ink-600">We'll review your project details and get back to you soon.</p>
      </div>
    )
  }

  const values = getValues()

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-ink-950 mb-4">Request a Quote</h1>
          <p className="text-ink-600">Tell us about your project and we'll prepare a custom estimate.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            {[0, 1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  s <= step ? 'bg-brand-600 text-white' : 'bg-ink-200 text-ink-500'
                }`}>{s + 1}</div>
                {s < 3 && <div className={`w-12 sm:w-20 h-0.5 ${s < step ? 'bg-brand-600' : 'bg-ink-200'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="font-display font-semibold text-xl text-ink-950">What do you want to build?</h2>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Description *</label>
                  <textarea {...register('whatToBuild')} rows="3" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  {errors.whatToBuild && <p className="text-sm text-red-600 mt-1">{errors.whatToBuild.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Industry *</label>
                  <input {...register('industry')} placeholder="e.g. Restaurant, Real Estate, Tech" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  {errors.industry && <p className="text-sm text-red-600 mt-1">{errors.industry.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Product Type *</label>
                  <select {...register('productType')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                    <option value="">Select</option>
                    <option value="website">Website</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Web Application</option>
                    <option value="dashboard">Dashboard</option>
                    <option value="landing">Landing Page</option>
                  </select>
                  {errors.productType && <p className="text-sm text-red-600 mt-1">{errors.productType.message}</p>}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-display font-semibold text-xl text-ink-950">Features & Design</h2>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Required Features</label>
                  <textarea {...register('features')} rows="3" placeholder="e.g. User login, payment, booking system" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Preferred Design Style</label>
                  <select {...register('designStyle')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                    <option value="">Select</option>
                    <option value="modern">Modern & Clean</option>
                    <option value="corporate">Corporate & Professional</option>
                    <option value="creative">Creative & Bold</option>
                    <option value="minimal">Minimal & Elegant</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-display font-semibold text-xl text-ink-950">Budget & Timeline</h2>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Budget Range *</label>
                  <select {...register('budget')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                    <option value="">Select</option>
                    <option value="< 1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 — $5,000</option>
                    <option value="5000-15000">$5,000 — $15,000</option>
                    <option value="15000+">$15,000+</option>
                  </select>
                  {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Timeline *</label>
                  <input {...register('timeline')} placeholder="e.g. 1 month, 3 months" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Country *</label>
                  <input {...register('country')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country.message}</p>}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-display font-semibold text-xl text-ink-950">Your Information</h2>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Name *</label>
                  <input {...register('name')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Email *</label>
                  <input {...register('email')} type="email" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1">Additional Information</label>
                  <textarea {...register('additional')} rows="3" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                </div>
              </div>
            )}

            {error && <p className="text-sm text-red-600 mt-4">{error}</p>}

            <div className="flex justify-between mt-8">
              {step > 0 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-1 px-4 py-2 text-ink-600 hover:text-ink-900">
                  <ArrowLeft className="w-4 h-4" /> {t.common.previous}
                </button>
              ) : <div />}
              {step < 3 ? (
                <button type="button" onClick={next} className="flex items-center gap-1 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg">
                  {t.common.next} <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting} className="flex items-center gap-1 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-semibold rounded-lg">
                  {isSubmitting ? t.common.sending : t.common.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
