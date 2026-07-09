import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/blog'
import { PHONE, PHONE_DISPLAY } from '@/lib/site'
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
      ...(post.image && {
        images: [{ url: `https://elstyga.lt${post.image}`, width: 1200, height: 800 }],
      }),
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
    ...(post.image && { image: `https://elstyga.lt${post.image}` }),
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

  const faqData = post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null

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
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}
      <article className="relative bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">Pradžia</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-500 transition-colors">Blogas</Link>
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
                className="text-xs font-semibold text-blue-600 bg-blue-100 rounded-full px-2.5 py-0.5"
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

          {/* Featured image */}
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={800}
              className="w-full rounded-2xl mb-10"
              priority
            />
          )}

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
                      className="text-sm text-slate-500 hover:text-blue-500 transition-colors"
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
              prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-700
              prose-li:text-slate-600
              prose-ul:my-4 prose-ol:my-4
              prose-table:w-full prose-table:border-collapse prose-table:my-6
              prose-th:bg-slate-100 prose-th:text-left prose-th:text-slate-700 prose-th:font-semibold prose-th:px-4 prose-th:py-2.5 prose-th:border prose-th:border-slate-200
              prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-slate-200 prose-td:text-slate-600
              prose-tr:even:bg-slate-50"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQ (body-sourced FAQs are already rendered inside the content) */}
          {post.faqSource === 'frontmatter' && (
            <section className="mt-16" aria-label="Dažniausiai užduodami klausimai">
              <h2 className="h3 text-slate-800 mb-6">Dažniausiai užduodami klausimai</h2>
              <div className="space-y-4">
                {post.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group bg-gray-50 rounded-2xl border border-slate-200 px-6 py-4"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none font-poppins font-semibold text-slate-800 marker:hidden [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <svg
                        className="w-5 h-5 ml-4 shrink-0 text-blue-500 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-slate-600 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="h4 text-slate-800 mb-2">Reikia elektros paslaugų?</h3>
            <p className="text-slate-500 mb-6">
              Susisiekite su mumis dėl nemokamos konsultacijos
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="btn px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 font-semibold inline-flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/#kontaktai"
                className="btn px-8 py-3 text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                Rašyti užklausą
              </Link>
            </div>
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
                          className="text-xs font-semibold text-blue-600 bg-blue-100 rounded-full px-2.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-poppins font-semibold text-slate-800 group-hover:text-blue-500 transition-colors duration-200 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{related.description}</p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                      <span className="text-slate-400">{related.readingTime} min. skaitymo</span>
                      <span className="text-blue-500 font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
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
