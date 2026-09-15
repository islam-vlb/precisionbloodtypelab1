import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'
import SearchOverlay from '@/components/SearchOverlay'

export const metadata: Metadata = {
  title: 'CalaxoHealthyLifePerspective — Circulation Support Device',
  description: 'Support your daily circulation with the Circulation Support Device from TrevCore LLC — gentle electrical stimulation and mild heat therapy for home use.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-clinical-white text-clinical-charcoal antialiased">
        <CartProvider>
          <Header />
          <SearchOverlay />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
