'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ShoppingCart, Search, FlaskConical } from 'lucide-react'
import CartDrawer from '@/components/CartDrawer'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { itemCount } = useCart()
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-clinical-white/95 backdrop-blur-md border-b border-clinical-gray-dark shadow-sm'
          : 'bg-clinical-white border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg viewBox="0 0 40 40" className="h-8 w-8 lg:h-9 lg:w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 3L7 11.5V24.5C7 34.5 20 40 20 40s13-5.5 13-15.5V11.5L20 3z"
                  fill="#0A0A0F"
                  stroke="#8B1E2D"
                  strokeWidth="1.5"
                  className="transition-colors group-hover:fill-clinical-crimson"
                />
                <path
                  d="M20 10.5c-2 4-7 9-7 14.5a7.5 7.5 0 0 0 15 0c0-5.5-5-10.5-7-14.5z"
                  fill="#8B1E2D"
                  className="transition-colors group-hover:fill-clinical-crimson-light"
                />
              </svg>
            </div>
            <span className="font-heading text-base lg:text-lg font-bold text-clinical-charcoal tracking-tight hidden sm:block">
              PrecisionBloodTypeLab
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson transition-colors relative py-2"
            >
              Home
            </Link>
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                  productsOpen ? 'text-clinical-crimson' : 'text-clinical-charcoal hover:text-clinical-crimson'
                }`}
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] rounded-2xl bg-clinical-white shadow-xl shadow-clinical-charcoal/10 border border-clinical-gray-dark overflow-hidden animate-fade-in-up z-50">
                  <div className="p-3">
                    <div className="grid grid-cols-1 gap-1">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          href={product.category === 'test-kit' ? '/' : `/product/${product.slug}`}
                          className="group flex items-start gap-4 rounded-xl p-3 hover:bg-clinical-gray transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border ${
                            product.category === 'test-kit'
                              ? 'border-clinical-crimson/20 bg-clinical-crimson/5'
                              : 'border-clinical-blue-dark bg-clinical-blue'
                          }`}>
                            <FlaskConical className={`h-5 w-5 ${
                              product.category === 'test-kit' ? 'text-clinical-crimson' : 'text-clinical-crimson'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-clinical-charcoal text-sm group-hover:text-clinical-crimson transition-colors">
                                {product.name}
                              </h3>
                              {product.category === 'test-kit' && (
                                <span className="rounded-full bg-clinical-crimson/10 px-2 py-0.5 text-xs font-medium text-clinical-crimson">
                                  Primary
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-clinical-muted mt-1 leading-relaxed">
                              {product.description}
                            </p>
                            <p className="text-sm font-semibold text-clinical-charcoal mt-1.5">
                              ${product.price.toFixed(2)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-clinical-gray-dark">
                      <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full rounded-lg bg-clinical-charcoal px-4 py-2.5 text-sm font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        Browse All Products
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson transition-colors py-2">
              Science
            </Link>
            <Link href="/about" className="text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson transition-colors py-2">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <Link
              href="/product/blood-type-test-pack"
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-clinical-charcoal px-5 py-2.5 text-sm font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors"
            >
              Explore Test Pack
            </Link>
            <button
              onClick={() => {
                setProductsOpen(false)
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
              }}
              className="hidden md:flex items-center gap-2 rounded-full border border-clinical-gray-dark bg-clinical-white px-3 py-2 text-sm text-clinical-muted hover:border-clinical-crimson hover:text-clinical-crimson transition-all duration-200"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>
            <CartDrawer />
            <button
              className="lg:hidden p-2 text-clinical-charcoal hover:text-clinical-crimson transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-clinical-gray-dark bg-clinical-white animate-fade-in">
            <nav className="flex flex-col gap-1 py-4">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson hover:bg-clinical-gray rounded-lg mx-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson hover:bg-clinical-gray rounded-lg mx-2 transition-colors"
                >
                  Products
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="mt-1 ml-2 mr-2 space-y-1">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={product.category === 'test-kit' ? '/' : `/product/${product.slug}`}
                        className="block px-4 py-2.5 text-sm text-clinical-charcoal hover:text-clinical-crimson hover:bg-clinical-gray rounded-lg transition-colors"
                        onClick={() => {
                          setProductsOpen(false)
                          setMobileOpen(false)
                        }}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson hover:bg-clinical-gray rounded-lg mx-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Science
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson hover:bg-clinical-gray rounded-lg mx-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-medium text-clinical-charcoal hover:text-clinical-crimson hover:bg-clinical-gray rounded-lg mx-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <div className="mx-4 mt-2">
                <Link
                  href="/product/blood-type-test-pack"
                  className="block w-full rounded-lg bg-clinical-charcoal px-4 py-3 text-center text-sm font-semibold text-clinical-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Explore Test Pack
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
