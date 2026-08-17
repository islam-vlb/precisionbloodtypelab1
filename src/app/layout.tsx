import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'
import SearchOverlay from '@/components/SearchOverlay'

export const metadata: Metadata = {
  title: 'PrecisionBloodTypeLab — Blood Type Test Pack',
  description: 'Determine your ABO and Rh blood type from home with the Blood Type Test Pack from TrevCore LLC.',
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
