'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart()
  const shipping = 7.95
  const total = subtotal + (items.length > 0 ? shipping : 0)

  if (items.length === 0) {
    return (
      <div className="bg-clinical-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-clinical-gray mb-6">
            <ShoppingCart className="h-7 w-7 text-clinical-muted" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-clinical-charcoal mb-4">Your Cart is Empty</h1>
          <p className="text-clinical-muted mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-clinical-charcoal px-8 py-3 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-3xl font-bold text-clinical-charcoal mb-8 tracking-tight">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="group rounded-2xl border border-clinical-gray-dark bg-clinical-white p-6 hover:border-clinical-crimson/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border ${
                      item.product.category === 'test-kit'
                        ? 'border-clinical-crimson/20 bg-clinical-crimson/5'
                        : 'border-clinical-blue-dark bg-clinical-blue'
                    }`}>
                      <span className="text-xl font-bold font-heading text-clinical-crimson">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-clinical-charcoal">{item.product.name}</h3>
                      <p className="text-sm text-clinical-muted">${item.product.price.toFixed(2)} each</p>
                      {item.product.category === 'supplement' && (
                        <p className="mt-2 text-xs text-clinical-crimson/80">
                          These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-clinical-gray-dark text-clinical-charcoal hover:border-clinical-crimson hover:text-clinical-crimson transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-clinical-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-clinical-gray-dark text-clinical-charcoal hover:border-clinical-crimson hover:text-clinical-crimson transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-semibold text-clinical-charcoal min-w-[80px] text-right">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-clinical-muted hover:text-clinical-crimson transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-clinical-gray p-6 border border-clinical-gray-dark sticky top-24">
              <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-clinical-muted">
                    <span className="truncate pr-2">{item.product.name} × {item.quantity}</span>
                    <span className="font-semibold text-clinical-charcoal flex-shrink-0">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-clinical-gray-dark pt-3 space-y-2">
                  <div className="flex justify-between text-clinical-muted">
                    <span>Subtotal</span>
                    <span className="font-semibold text-clinical-charcoal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-clinical-muted">
                    <span>Shipping</span>
                    <span className="font-semibold text-clinical-charcoal">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-clinical-gray-dark pt-2 text-base">
                    <span className="font-bold text-clinical-charcoal">Total</span>
                    <span className="font-bold text-clinical-charcoal">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link
                href="/checkout"
                className="mt-6 flex items-center justify-center gap-2 w-full rounded-lg bg-clinical-crimson px-6 py-3.5 text-center font-heading font-semibold text-white hover:bg-clinical-crimson-light transition-colors"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="mt-3 block w-full rounded-lg border border-clinical-gray-dark px-6 py-3 text-center font-heading font-semibold text-clinical-charcoal hover:bg-clinical-white transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
