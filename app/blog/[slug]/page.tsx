import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
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
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="relative bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium mb-8 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Visi straipsniai
          </Link>

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

          {/* Date */}
          <time className="block text-slate-400 mb-10" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('lt-LT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

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
        </div>
      </article>
    </>
  )
}
