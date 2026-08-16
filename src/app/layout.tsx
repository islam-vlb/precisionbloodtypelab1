import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'

export const metadata: Metadata = {
  title: 'PrecisionBloodTypeLab — Blood Type Test Pack',
  description: 'Determine your ABO and Rh blood type from home with the Blood Type Test Pack from TrevCore LLC.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-charcoal antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
