'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogListProps {
  posts: BlogPostMeta[]
  filterTags: string[]
}

export default function BlogList({ posts, filterTags }: BlogListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const visiblePosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts

  return (
    <>
      {/* Tag filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-sm font-semibold rounded-full px-4 py-1.5 transition-colors duration-200 ${
            activeTag === null
              ? 'text-white bg-blue-600'
              : 'text-slate-600 bg-slate-100 hover:bg-blue-100 hover:text-blue-600'
          }`}
        >
          Visi
        </button>
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`text-sm font-semibold rounded-full px-4 py-1.5 transition-colors duration-200 ${
              activeTag === tag
                ? 'text-white bg-blue-600'
                : 'text-slate-600 bg-slate-100 hover:bg-blue-100 hover:text-blue-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog posts grid */}
      {visiblePosts.length === 0 ? (
        <div className="text-center text-slate-400 py-12">
          <p>Straipsnių kol kas nėra.</p>
        </div>
      ) : (
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">
          {visiblePosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={800}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-blue-600 bg-blue-100 rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="h4 text-slate-800 group-hover:text-blue-500 transition-colors duration-200 mb-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-500 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Date + reading time + read more */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('lt-LT', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingTime} min.</span>
                    </div>
                    <span className="text-blue-500 font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                      Skaityti
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
