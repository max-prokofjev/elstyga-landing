import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="relative bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-10">
          <h2 className="h2 text-slate-800 mb-4">Naujausi straipsniai</h2>
          <p className="text-lg text-slate-500">
            Patarimai apie elektros darbus, saugumą ir modernius sprendimus
          </p>
        </div>

        {/* Blog cards */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-3 md:max-w-none">
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
                <h3 className="h4 text-slate-800 group-hover:text-orange-500 transition-colors duration-200 mb-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 mb-4 line-clamp-2 text-sm">
                  {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{post.readingTime} min. skaitymo</span>
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

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
          >
            Visi straipsniai
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
