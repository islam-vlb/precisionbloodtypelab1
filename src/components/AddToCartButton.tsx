'use client'

import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { Product } from '@/lib/supabase'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = React.useState(false)

  const handleClick = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full rounded-lg px-6 py-4 font-heading font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
        added
          ? 'bg-green-600 text-white'
          : 'bg-clinical-charcoal text-clinical-white hover:bg-clinical-charcoal-light'
      }`}
    >
      <ShoppingCart className="h-5 w-5" />
      {added ? 'Added to Cart' : 'Add to Cart'}
    </button>
  )
}
