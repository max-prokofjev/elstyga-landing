import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface TocItem {
  id: string
  text: string
  level: number
}

export interface FaqItem {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  dateModified?: string
  image?: string
  tags: string[]
  content: string
  toc: TocItem[]
  faq: FaqItem[]
  // 'frontmatter' FAQs also render as an accordion; 'body' FAQs are already part of the content
  faqSource: 'frontmatter' | 'body' | 'none'
  readingTime: number
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  dateModified?: string
  image?: string
  tags: string[]
  readingTime: number
}

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ąčęėįšųūž]/g, (c) => {
      const map: Record<string, string> = {
        'ą': 'a', 'č': 'c', 'ę': 'e', 'ė': 'e', 'į': 'i',
        'š': 's', 'ų': 'u', 'ū': 'u', 'ž': 'z',
      }
      return map[c] || c
    })
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function extractToc(htmlContent: string): TocItem[] {
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi
  const items: TocItem[] = []
  let match

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10)
    const text = match[2].replace(/<[^>]*>/g, '')
    const id = slugify(text)
    items.push({ id, text, level })
  }

  return items
}

function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h([2-3])>/gi,
    (_match, level, attrs, text, closeLevel) => {
      const plainText = text.replace(/<[^>]*>/g, '')
      const id = slugify(plainText)
      return `<h${level}${attrs} id="${id}">${text}</h${closeLevel}>`
    }
  )
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
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    dateModified: data.dateModified || undefined,
    image: data.image || undefined,
    tags: data.tags || [],
    readingTime: estimateReadingTime(content),
  }
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPostMeta[] {
  const currentMeta = getPostMeta(currentSlug)
  if (!currentMeta) return []

  const allPosts = getAllPosts().filter((p) => p.slug !== currentSlug)

  const scored = allPosts.map((post) => {
    const commonTags = post.tags.filter((t) => currentMeta.tags.includes(t)).length
    return { post, score: commonTags }
  })

  scored.sort((a, b) => b.score - a.score || (a.post.date > b.post.date ? -1 : 1))

  return scored.slice(0, limit).map((s) => s.post)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(remarkGfm).use(html).process(content)
  let contentHtml = processedContent.toString()
    .replace(/--/g, '\u2014')
    // The page renders the frontmatter title as the H1; drop the duplicate from the body
    .replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/, '')

  const toc = extractToc(contentHtml)
  contentHtml = addHeadingIds(contentHtml)

  const frontmatterFaq = parseFaq(data.faq)
  const bodyFaq = frontmatterFaq.length === 0 ? extractFaqFromHtml(contentHtml) : []
  const faq = frontmatterFaq.length > 0 ? frontmatterFaq : bodyFaq

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    dateModified: data.dateModified || undefined,
    image: data.image || undefined,
    tags: data.tags || [],
    content: contentHtml,
    toc,
    faq,
    faqSource: frontmatterFaq.length > 0 ? 'frontmatter' : bodyFaq.length > 0 ? 'body' : 'none',
    readingTime: estimateReadingTime(content),
  }
}

function parseFaq(raw: unknown): FaqItem[] {
  if (!Array.isArray(raw)) return []
  return raw
    .filter((item): item is { question: string; answer: string } =>
      Boolean(item && typeof item.question === 'string' && typeof item.answer === 'string')
    )
    .map(({ question, answer }) => ({ question, answer }))
}

function stripTags(htmlFragment: string): string {
  return htmlFragment.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

// Posts written before frontmatter FAQ support carry a "Dažniausiai užduodami
// klausimai" section in the body; extract its Q&A pairs for FAQPage schema.
function extractFaqFromHtml(htmlContent: string): FaqItem[] {
  const sectionMatch = htmlContent.match(
    /<h2[^>]*>[^<]*Dažniausiai užduodami klausimai[^<]*<\/h2>([\s\S]*?)(?=<h2|$)/i
  )
  if (!sectionMatch) return []

  const items: FaqItem[] = []
  const qaRegex = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|$)/gi
  let match
  while ((match = qaRegex.exec(sectionMatch[1])) !== null) {
    const question = stripTags(match[1])
    const answer = stripTags(match[2])
    if (question && answer) items.push({ question, answer })
  }
  return items
}
