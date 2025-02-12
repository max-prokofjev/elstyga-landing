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
  title: 'Elektros Paslaugos | Profesionalūs ir Patikimi Sprendimai',
  description: 'Profesionalios elektros instaliacijos paslaugos namams ir verslui. Licencijuoti elektrikai, skubi pagalba 24/7.',
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
 