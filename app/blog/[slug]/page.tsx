import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/blog'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Straipsnis nerastas' }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://elstyga.lt/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      ...(post.dateModified && { modifiedTime: post.dateModified }),
      url: `https://elstyga.lt/blog/${slug}`,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug, 2)

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    ...(post.dateModified && { dateModified: post.dateModified }),
    url: `https://elstyga.lt/blog/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'Elstyga',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Elstyga',
      url: 'https://elstyga.lt',
    },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Pradžia',
        item: 'https://elstyga.lt',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogas',
        item: 'https://elstyga.lt/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://elstyga.lt/blog/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <article className="relative bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">Pradžia</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-orange-500 transition-colors">Blogas</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-600 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-orange-600 bg-orange-100 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="h1 text-slate-800 mb-4">{post.title}</h1>

          {/* Date + Reading time */}
          <div className="flex items-center gap-4 text-slate-400 mb-10">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('lt-LT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min. skaitymo</span>
          </div>

          {/* Table of Contents */}
          {post.toc.length > 1 && (
            <nav aria-label="Turinys" className="mb-10 p-6 bg-gray-50 rounded-2xl border border-slate-200">
              <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">
                Turinys
              </h2>
              <ul className="space-y-2">
                {post.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-slate-500 hover:text-orange-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Content */}
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-poppins prose-headings:text-slate-800
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-700
              prose-li:text-slate-600
              prose-ul:my-4 prose-ol:my-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-orange-50 rounded-2xl border border-orange-100 text-center">
            <h3 className="h4 text-slate-800 mb-2">Reikia elektros paslaugų?</h3>
            <p className="text-slate-500 mb-6">
              Susisiekite su mumis dėl nemokamos konsultacijos
            </p>
            <Link
              href="/#contacts"
              className="btn px-8 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 font-semibold"
            >
              Susisiekti
            </Link>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="h3 text-slate-800 mb-6">Susiję straipsniai</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {related.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-orange-600 bg-orange-100 rounded-full px-2.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-poppins font-semibold text-slate-800 group-hover:text-orange-500 transition-colors duration-200 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{related.description}</p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                      <span className="text-slate-400">{related.readingTime} min. skaitymo</span>
                      <span className="text-orange-500 font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                        Skaityti
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
