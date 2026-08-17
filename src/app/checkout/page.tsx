'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { BUSINESS } from '@/lib/config'
import { Lock, Shield, CreditCard, ShoppingCart } from 'lucide-react'

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]

export default function CheckoutPage() {
  const { items, subtotal } = useCart()
  const [agreed, setAgreed] = useState(false)
  const shipping = 7.95
  const total = subtotal + (items.length > 0 ? shipping : 0)
  const hasSupplement = items.some((item) => item.product.category === 'supplement')

  if (items.length === 0) {
    return (
      <div className="bg-clinical-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-clinical-gray mb-6">
            <ShoppingCart className="h-7 w-7 text-clinical-muted" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-clinical-charcoal mb-4">Your Cart is Empty</h1>
          <p className="text-clinical-muted mb-8">Add items to your cart before checking out.</p>
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-clinical-charcoal px-8 py-3 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Lock className="h-5 w-5 text-clinical-crimson" />
          <h1 className="font-heading text-3xl font-bold text-clinical-charcoal tracking-tight">Secure Checkout</h1>
        </div>
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-clinical-gray-dark bg-clinical-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-5 w-5 text-clinical-crimson" />
                <h2 className="font-heading text-xl font-bold text-clinical-charcoal">Billing Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">First Name</label>
                  <input type="text" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Last Name</label>
                  <input type="text" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Address</label>
                  <input type="text" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">City</label>
                  <input type="text" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">State</label>
                  <select required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors">
                    <option value="">Select state</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">ZIP Code</label>
                  <input type="text" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Country</label>
                  <input type="text" value="United States" readOnly className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-gray px-4 py-2.5 text-sm text-clinical-muted" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Phone</label>
                  <input type="tel" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-clinical-gray-dark bg-clinical-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-5 w-5 text-clinical-crimson" />
                <h2 className="font-heading text-xl font-bold text-clinical-charcoal">Payment</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Expiry</label>
                    <input type="text" placeholder="MM/YY" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">CVC</label>
                    <input type="text" placeholder="123" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-12 rounded border border-clinical-gray-dark bg-clinical-white flex items-center justify-center">
                  <span className="text-xs font-bold text-clinical-charcoal">VISA</span>
                </div>
                <div className="h-8 w-12 rounded border border-clinical-gray-dark bg-clinical-white flex items-center justify-center">
                  <div className="flex">
                    <div className="h-4 w-4 rounded-full bg-[#EB001B]/80" />
                    <div className="h-4 w-4 rounded-full bg-[#F79E1B]/80 -ml-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-clinical-crimson/20 bg-clinical-blue/50 p-6 lg:p-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-clinical-gray-dark bg-clinical-white text-clinical-crimson focus:ring-clinical-crimson/20"
                />
                <span className="text-sm text-clinical-charcoal leading-relaxed">
                  I have read and agree to the{' '}
                  <Link href="/terms" className="font-semibold text-clinical-crimson underline underline-offset-2">Terms & Conditions</Link>,{' '}
                  <Link href="/privacy" className="font-semibold text-clinical-crimson underline underline-offset-2">Privacy Policy</Link>, and{' '}
                  <Link href="/refund" className="font-semibold text-clinical-crimson underline underline-offset-2">Refund Policy</Link>.
                </span>
              </label>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-clinical-charcoal">I agree to be billed <span className="font-semibold">${total.toFixed(2)}</span>.</p>
                <p className="text-sm text-clinical-charcoal">Your credit card will be charged <span className="font-semibold">${total.toFixed(2)}</span>.</p>
                <p className="text-xs text-clinical-muted">Charges will appear as PrecisionBloodTypeLab on your statement</p>
                <p className="text-xs text-clinical-crimson">⚠️ Individuals under 18 are not permitted to purchase</p>
                <p className="text-xs text-clinical-muted">Personal information will not be shared with Third Parties</p>
              </div>
            </div>
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
              <button
                disabled={!agreed}
                className={`mt-6 w-full rounded-lg px-6 py-3.5 font-heading font-semibold transition-all duration-200 ${
                  agreed
                    ? 'bg-clinical-crimson text-white hover:bg-clinical-crimson-light cursor-pointer'
                    : 'bg-clinical-gray-dark text-clinical-muted cursor-not-allowed'
                }`}
              >
                Place Order
              </button>
              {!agreed && (
                <p className="mt-2 text-xs text-center text-clinical-muted">Please agree to the terms to place your order.</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
