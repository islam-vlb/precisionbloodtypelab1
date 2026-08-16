'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react'
import CartDrawer from '@/components/CartDrawer'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-ivory border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4L8 12v12c0 8 12 14 12 14s12-6 12-14V12L20 4z" fill="#1E2530" stroke="#8B1E2D" strokeWidth="2"/>
              <path d="M20 12c-2 4-6 8-6 12a6 6 0 0 0 12 0c0-4-4-8-6-12z" fill="#8B1E2D"/>
            </svg>
            <span className="font-heading text-xl font-bold text-charcoal tracking-tight">
              PrecisionBloodTypeLab
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-charcoal hover:text-crimson transition-colors">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-crimson transition-colors"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-gray-100">
                  <div className="py-2">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={product.slug === 'blood-type-test-pack' ? '/' : `/product/${product.slug}`}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-ivory hover:text-crimson"
                        onClick={() => setProductsOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-sm font-medium text-charcoal hover:text-crimson transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-charcoal hover:text-crimson transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <CartDrawer />
            <button
              className="md:hidden p-2 text-charcoal"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-charcoal" onClick={() => setMobileOpen(false)}>Home</Link>
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-charcoal"
                >
                  Products <ChevronDown className="h-4 w-4" />
                </button>
                {productsOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={product.slug === 'blood-type-test-pack' ? '/' : `/product/${product.slug}`}
                        className="text-sm text-charcoal hover:text-crimson"
                        onClick={() => setMobileOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about" className="text-sm font-medium text-charcoal" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/contact" className="text-sm font-medium text-charcoal" onClick={() => setMobileOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
