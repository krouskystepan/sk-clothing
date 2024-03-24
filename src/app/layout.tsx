import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import ReduxProvider from '@/store/ReduxProvider'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'SK - Clothing',
  description: 'Just a simple clothing store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
