import { getAllPosts } from '@/lib/blog'
import BlogList from '@/components/blog-list'

export const metadata = {
  title: 'Blogas',
  description: 'Elstyga tinklaraštis — elektros darbų patarimai, naujienos ir naudinga informacija.',
  alternates: {
    canonical: 'https://elstyga.lt/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  // Filter chips: tags that appear in at least 3 posts, most frequent first
  const tagCounts = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
    }
  }
  const filterTags = Array.from(tagCounts.entries())
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
    .slice(0, 10)

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

        <BlogList posts={posts} filterTags={filterTags} />
      </div>
    </section>
  )
}
