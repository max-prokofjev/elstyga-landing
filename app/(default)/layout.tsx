import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import ScrollReveal from '@/components/scroll-reveal'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <ScrollReveal />

      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      <Footer />
    </>
  )
}
