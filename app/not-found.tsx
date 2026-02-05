import Link from 'next/link'

export const metadata = {
  title: 'Puslapis nerastas',
}

export default function NotFound() {
  return (
    <section className="relative bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-8xl font-poppins font-bold text-orange-500 mb-4">404</h1>
          <h2 className="text-2xl font-poppins font-semibold text-slate-800 mb-4">
            Puslapis nerastas
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            Atsiprašome, bet ieškomas puslapis neegzistuoja arba buvo perkeltas.
          </p>
          <Link
            href="/"
            className="btn text-white bg-orange-500 hover:bg-orange-600 rounded-lg px-6 py-3 inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Grįžti į pradžią
          </Link>
        </div>
      </div>
    </section>
  )
}
