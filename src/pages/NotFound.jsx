import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-display font-bold text-ink-950 mb-4">404</h1>
      <p className="text-xl text-ink-600 mb-8">Page not found</p>
      <Link to="/" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg">
        Go Home
      </Link>
    </div>
  )
}
