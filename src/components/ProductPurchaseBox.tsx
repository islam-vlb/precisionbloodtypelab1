'use client'

import React, { useState } from 'react'
import { Product, ProductVariant, getDefaultVariant } from '@/lib/supabase'
import { ShoppingCart, Plus, Minus, Check } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { BUSINESS } from '@/lib/config'

const SECTION_ORDER = [
  'Regular Product Options',
  'Bundle Offers',
  'Single Test Offer',
  'Test + Support Bundle Offers',
  'Multi-Test Value Offers',
]

export default function ProductPurchaseBox({ product, selectedVariantId, onVariantChange }: { product: Product, selectedVariantId?: string, onVariantChange?: (id: string) => void }) {
  const { addToCart } = useCart()
  const defaultVariant = getDefaultVariant(product)
  const [internalSelectedVariantId, setInternalSelectedVariantId] = useState(defaultVariant.id)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const currentSelectedVariantId = selectedVariantId ?? internalSelectedVariantId
  const setSelectedVariantId = onVariantChange ?? setInternalSelectedVariantId

  const selectedVariant: ProductVariant =
    product.variants.find((v) => v.id === currentSelectedVariantId) ?? defaultVariant

  const sections = SECTION_ORDER.filter((section) =>
    product.variants.some((v) => v.section === section)
  )

  const subtotal = selectedVariant.price * quantity

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        {sections.map((section) => (
          <div key={section}>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-clinical-crimson mb-3">
              {section}
            </h3>
            <div className="space-y-2">
              {product.variants
                .filter((v) => v.section === section)
                .map((variant) => {
                  const isSelected = variant.id === selectedVariantId
                  return (
                    <button
                      type="button"
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={`w-full flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-150 ${
                        isSelected
                          ? 'border-clinical-crimson bg-clinical-crimson/5'
                          : 'border-clinical-gray-dark bg-clinical-white hover:border-clinical-crimson/40'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                          isSelected ? 'border-clinical-crimson' : 'border-clinical-gray-dark'
                        }`}
                      >
                        {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-clinical-crimson" />}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="flex items-center gap-2 flex-wrap">
                          <span className="font-heading font-bold text-clinical-charcoal text-sm">
                            {variant.label}
                          </span>
                          {variant.isBundle && (
                            <span className="inline-flex items-center rounded-full bg-clinical-gold-light border border-clinical-gold/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-clinical-gold">
                              Bundle Offer
                            </span>
                          )}
                        </span>
                        <span className="block text-xs text-clinical-muted mt-0.5">{variant.detail}</span>
                      </span>
                      <span className="font-heading font-bold text-clinical-charcoal flex-shrink-0">
                        ${variant.price.toFixed(2)}
                      </span>
                    </button>
                  )
                })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-clinical-charcoal">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-8 w-8 items-center justify-center border border-clinical-gray-dark text-clinical-charcoal hover:border-clinical-crimson hover:text-clinical-crimson transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center font-semibold text-clinical-charcoal">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-8 w-8 items-center justify-center border border-clinical-gray-dark text-clinical-charcoal hover:border-clinical-crimson hover:text-clinical-crimson transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2 text-sm border-t border-clinical-gray-dark pt-4">
        <div className="flex justify-between">
          <span className="text-clinical-muted">Subtotal ({quantity} item{quantity > 1 ? 's' : ''})</span>
          <span className="font-semibold text-clinical-charcoal">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-clinical-muted">Shipping</span>
          <span className="font-semibold text-clinical-charcoal">Included</span>
        </div>
        <div className="flex justify-between border-t border-clinical-gray-dark pt-2 text-base">
          <span className="font-bold text-clinical-charcoal">Total</span>
          <span className="font-bold text-clinical-crimson">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full rounded-lg px-6 py-4 font-heading font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
          added
            ? 'bg-green-600 text-white'
            : 'bg-clinical-charcoal text-clinical-white hover:bg-clinical-charcoal-light'
        }`}
      >
        {added ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>

      <p className="text-xs text-clinical-muted">Charges will appear as {BUSINESS.descriptor} on your statement</p>
    </div>
  )
}
