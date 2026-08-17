'use client'

import React from 'react'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'
import { X, Minus, Plus, ShoppingCart, ArrowRight } from 'lucide-react'

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, itemCount, subtotal } = useCart()
  const [isOpen, setIsOpen] = React.useState(false)

  const shipping = 7.95
  const total = subtotal + (items.length > 0 ? shipping : 0)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-clinical-charcoal hover:text-clinical-crimson transition-colors"
        aria-label="Open cart"
      >
        <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 lg:h-5 lg:w-5 items-center justify-center rounded-full bg-clinical-crimson text-[10px] lg:text-xs font-bold text-white">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-clinical-charcoal/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-clinical-white shadow-2xl animate-slide-in-right">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-clinical-gray-dark px-6 py-5">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5 text-clinical-crimson" />
                  <h2 className="text-lg font-bold font-heading text-clinical-charcoal">Your Cart</h2>
                  {itemCount > 0 && (
                    <span className="rounded-full bg-clinical-crimson/10 px-2.5 py-0.5 text-xs font-semibold text-clinical-crimson">
                      {itemCount} {itemCount === 1 ? 'item' : 'items'}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-clinical-muted hover:text-clinical-charcoal transition-colors"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="h-16 w-16 rounded-full bg-clinical-gray flex items-center justify-center mb-4">
                      <ShoppingCart className="h-7 w-7 text-clinical-muted" />
                    </div>
                    <p className="font-semibold text-clinical-charcoal mb-1">Your cart is empty</p>
                    <p className="text-sm text-clinical-muted">Add products to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="group rounded-xl border border-clinical-gray-dark p-4 hover:border-clinical-crimson/30 transition-colors">
                        <div className="flex gap-4">
                          <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border ${
                            item.product.category === 'test-kit'
                              ? 'border-clinical-crimson/20 bg-clinical-crimson/5'
                              : 'border-clinical-blue-dark bg-clinical-blue'
                          }`}>
                            <span className="text-xl font-bold font-heading text-clinical-crimson">
                              {item.product.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-semibold text-clinical-charcoal text-sm truncate">{item.product.name}</h3>
                                <p className="text-xs text-clinical-muted mt-0.5">${item.product.price.toFixed(2)} each</p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="p-1 text-clinical-muted hover:text-clinical-crimson transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="Remove item"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-full border border-clinical-gray-dark text-clinical-charcoal hover:border-clinical-crimson hover:text-clinical-crimson transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-6 text-center text-sm font-semibold text-clinical-charcoal">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-full border border-clinical-gray-dark text-clinical-charcoal hover:border-clinical-crimson hover:text-clinical-crimson transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <span className="font-semibold text-clinical-charcoal text-sm">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                            {item.product.category === 'supplement' && (
                              <p className="mt-2 text-[10px] text-clinical-crimson/80 leading-relaxed">
                                These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-clinical-gray-dark px-6 py-5 bg-clinical-gray/30">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-clinical-muted">
                      <span>Subtotal</span>
                      <span className="font-medium text-clinical-charcoal">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-clinical-muted">
                      <span>Shipping</span>
                      <span className="font-medium text-clinical-charcoal">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t border-clinical-gray-dark pt-2 text-base">
                      <span className="font-bold text-clinical-charcoal">Total</span>
                      <span className="font-bold text-clinical-charcoal">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Link
                      href="/checkout"
                      className="flex items-center justify-center gap-2 w-full rounded-lg bg-clinical-crimson px-4 py-3.5 text-center font-semibold text-white hover:bg-clinical-crimson-light transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="block w-full rounded-lg border border-clinical-gray-dark px-4 py-3 text-center font-semibold text-clinical-charcoal hover:bg-clinical-white transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
