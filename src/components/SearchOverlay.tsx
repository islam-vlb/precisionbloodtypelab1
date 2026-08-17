'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { products, type Product } from '@/lib/supabase'
import { Search, X, ShoppingCart, ChevronRight } from 'lucide-react'

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { addToCart } = useCart()

  const filteredProducts = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase()
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
        )
      })
    : products

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault()
          setIsOpen(true)
        }
        return
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredProducts.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length)
      }
      if (e.key === 'Enter' && filteredProducts[selectedIndex]) {
        setIsOpen(false)
        const product = filteredProducts[selectedIndex]
        if (product.category === 'test-kit') {
          window.location.href = '/'
        } else {
          window.location.href = `/product/${product.slug}`
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredProducts, selectedIndex])

  const handleProductClick = (product: Product) => {
    setIsOpen(false)
    if (product.category === 'test-kit') {
      window.location.href = '/'
    } else {
      window.location.href = `/product/${product.slug}`
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-full border border-clinical-gray-dark bg-clinical-white px-4 py-2 text-sm text-clinical-muted hover:border-clinical-crimson hover:text-clinical-charcoal transition-all duration-200 group"
        aria-label="Open search"
      >
        <Search className="h-4 w-4 group-hover:text-clinical-crimson transition-colors" />
        <span className="hidden sm:inline">Search products...</span>
        <kbd className="hidden md:inline-flex items-center rounded border border-clinical-gray-dark bg-clinical-gray px-1.5 py-0.5 text-xs font-mono text-clinical-muted ml-auto">
          ⌘K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] animate-fade-in">
          <div className="absolute inset-0 bg-clinical-charcoal/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative mx-auto mt-[15vh] max-w-2xl w-full px-4">
            <div className="rounded-2xl bg-clinical-white shadow-2xl shadow-clinical-charcoal/20 overflow-hidden border border-clinical-gray-dark">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-clinical-gray-dark">
                <Search className="h-5 w-5 text-clinical-muted flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, categories, ingredients..."
                  className="flex-1 bg-transparent text-clinical-charcoal placeholder-clinical-muted outline-none text-base"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-clinical-gray transition-colors"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4 text-clinical-muted" />
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto">
                {filteredProducts.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-clinical-muted text-sm">No products found matching &ldquo;{query}&rdquo;</p>
                  </div>
                ) : (
                  <div className="py-2">
                    {filteredProducts.map((product, index) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center gap-4 px-6 py-3 text-left transition-colors ${
                          index === selectedIndex
                            ? 'bg-clinical-blue'
                            : 'hover:bg-clinical-gray'
                        }`}
                      >
                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border ${
                          product.category === 'test-kit'
                            ? 'border-clinical-crimson/20 bg-clinical-crimson/5'
                            : 'border-clinical-blue-dark bg-clinical-blue'
                        }`}>
                          <span className={`text-lg font-bold font-heading ${
                            product.category === 'test-kit' ? 'text-clinical-crimson' : 'text-clinical-crimson'
                          }`}>
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-clinical-charcoal text-sm truncate">{product.name}</p>
                          <p className="text-xs text-clinical-muted truncate">{product.description}</p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-sm font-semibold text-clinical-charcoal">
                            ${product.price.toFixed(2)}
                          </span>
                          <ChevronRight className="h-4 w-4 text-clinical-muted" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between px-6 py-3 border-t border-clinical-gray-dark bg-clinical-gray/50">
                <div className="flex items-center gap-4 text-xs text-clinical-muted">
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-clinical-gray-dark bg-clinical-white px-1.5 py-0.5 font-mono">↑↓</kbd> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-clinical-gray-dark bg-clinical-white px-1.5 py-0.5 font-mono">↵</kbd> Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-clinical-gray-dark bg-clinical-white px-1.5 py-0.5 font-mono">ESC</kbd> Close
                  </span>
                </div>
                <span className="text-xs text-clinical-muted">
                  {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
