import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLanguage } from '../i18n/LanguageProvider.jsx'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'
import { Send, CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  country: z.string().min(2, 'Country is required'),
  projectType: z.string().min(2, 'Project type is required'),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  description: z.string().min(10, 'Please describe your project'),
  references: z.string().optional(),
})

export default function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    setError(null)
    if (!isSupabaseConfigured) {
      setSubmitted(true)
      reset()
      return
    }
    const { error: supaError } = await supabase.from('inquiries').insert([data])
    if (supaError) {
      setError(supaError.message)
      return
    }
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-display font-bold text-ink-950 mb-2">Message sent!</h1>
        <p className="text-ink-600 mb-6">Thank you for reaching out. We'll get back to you within one business day.</p>
        <button onClick={() => setSubmitted(false)} className="text-brand-600 hover:text-brand-700 font-medium">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink-950 mb-4">Contact Us</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">Tell us about your project and we'll get back to you quickly.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1">Company</label>
                <input {...register('company')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1">Country *</label>
                <input {...register('country')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
                {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">Project Type *</label>
              <select {...register('projectType')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                <option value="">Select a type</option>
                <option value="website">Website</option>
                <option value="ecommerce">E-commerce</option>
                <option value="webapp">Web Application</option>
                <option value="dashboard">Dashboard</option>
                <option value="redesign">Website Redesign</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && <p className="text-sm text-red-600 mt-1">{errors.projectType.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1">Budget Range</label>
                <select {...register('budget')} className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                  <option value="">Select a range</option>
                  <option value="< 1000">Under $1,000</option>
                  <option value="1000-5000">$1,000 — $5,000</option>
                  <option value="5000-15000">$5,000 — $15,000</option>
                  <option value="15000+">$15,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1">Desired Deadline</label>
                <input {...register('deadline')} type="text" placeholder="e.g. 2 months" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">Project Description *</label>
              <textarea {...register('description')} rows="5" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
              {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">Reference Links</label>
              <textarea {...register('references')} rows="2" placeholder="Any websites or examples you like" className="w-full px-3 py-2.5 border border-ink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? t.common.sending : t.common.submit}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
