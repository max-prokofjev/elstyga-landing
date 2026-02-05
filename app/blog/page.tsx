import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blogas',
  description: 'Elstyga tinklaraštis — elektros darbų patarimai, naujienos ir naudinga informacija.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="relative bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h1 className="h1 text-slate-800 mb-4">Blogas</h1>
          <p className="text-xl text-slate-500">
            Naudingi patarimai apie elektros darbus, saugumą ir instaliacijas
          </p>
        </div>

        {/* Blog posts grid */}
        {posts.length === 0 ? (
          <div className="text-center text-slate-400 py-12">
            <p>Straipsnių kol kas nėra.</p>
          </div>
        ) : (
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`} className="block p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-orange-600 bg-orange-100 rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="h4 text-slate-800 group-hover:text-orange-500 transition-colors duration-200 mb-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-500 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Date + read more */}
                  <div className="flex items-center justify-between text-sm">
                    <time className="text-slate-400" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('lt-LT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-orange-500 font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                      Skaityti
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
