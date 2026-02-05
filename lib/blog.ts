import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  image?: string
  tags: string[]
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  image?: string
  tags: string[]
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  return posts
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    image: data.image || undefined,
    tags: data.tags || [],
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    image: data.image || undefined,
    tags: data.tags || [],
    content: contentHtml,
  }
}
