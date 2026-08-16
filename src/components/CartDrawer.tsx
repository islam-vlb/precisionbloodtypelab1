'use client'

import React from 'react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'
import { X, Minus, Plus, ShoppingCart } from 'lucide-react'

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, itemCount, subtotal } = useCart()
  const [isOpen, setIsOpen] = React.useState(false)

  const shipping = 7.95
  const total = subtotal + (items.length > 0 ? shipping : 0)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-charcoal hover:text-crimson transition-colors"
        aria-label="Open cart"
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-bold font-heading text-charcoal">Your Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-crimson"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <p className="text-center text-gray-500 py-12">Your cart is empty.</p>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.product.id} className="border-b border-gray-100 pb-4">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold text-charcoal">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">${item.product.price.toFixed(2)}</p>
                            {item.product.category === 'supplement' && (
                              <p className="mt-2 text-xs text-crimson">
                                These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-crimson hover:text-crimson"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-crimson hover:text-crimson"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-semibold text-charcoal">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-sm text-crimson hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-gray-200 px-6 py-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 text-base">
                      <span className="font-bold">Total</span>
                      <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <a
                      href="/checkout"
                      className="block w-full rounded-lg bg-crimson px-4 py-3 text-center font-semibold text-white hover:bg-crimson-light transition-colors"
                    >
                      Checkout
                    </a>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-center font-semibold text-charcoal hover:bg-ivory transition-colors"
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
