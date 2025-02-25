import './css/style.css'

import { Inter, Poppins } from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

export const metadata = {
  metadataBase: new URL('https://elstyga.lt'),
  title: {
    default: 'Elstyga | Profesionalios Elektros Paslaugos',
    template: '%s | Elstyga'
  },
  description: 'Profesionalios elektros instaliacijos paslaugos namams ir verslui Vilniuje.',
  keywords: [
    'elektros darbai',
    'elektros instaliacija',
    'elektrikai vilniuje',
    'elektros montavimas',
    'elektros gedimų šalinimas',
    'elektros įrenginių priežiūra'
  ],
  authors: [{ name: 'Elstyga' }],
  creator: 'Elstyga',
  publisher: 'Elstyga',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    url: 'https://elstyga.lt',
    title: 'Elstyga | Profesionalios Elektros Paslaugos',
    description: 'Profesionalios elektros instaliacijos paslaugos namams ir verslui Vilniuje.',
    siteName: 'Elstyga',
    images: [{
      // url: '/images/og-image.jpg', // Make sure to add this image
      width: 1200,
      height: 630,
      alt: 'Elstyga - Profesionalios Elektros Paslaugos'
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IxtyL-_5vzKQ4EJgGZfyi9MO4ORSH5EcJWbUPfbPWio', // Add your verification code
  },
  alternates: {
    canonical: 'https://elstyga.lt',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-blue-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
 