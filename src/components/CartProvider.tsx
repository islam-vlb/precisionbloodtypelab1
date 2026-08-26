'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product, ProductVariant, products } from '@/lib/supabase'

export interface CartItem {
  product: Product
  variant: ProductVariant
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void
  removeFromCart: (productId: string, variantId: string) => void
  updateQuantity: (productId: string, variantId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('pbtl-cart')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        const migrated = parsed.map((item: Record<string, unknown>) => {
          if (item.product && !item.variant) {
            const product = item.product as { id: string; slug?: string; defaultVariantId?: string; variants?: Array<{ id: string }> }
            const fallbackProduct = products.find((p) => p.id === product.id || p.slug === product.slug)
            if (fallbackProduct) {
              const defaultVariant = fallbackProduct.variants.find(
                (v) => v.id === fallbackProduct.defaultVariantId
              ) ?? fallbackProduct.variants[0]
              return { ...item, variant: defaultVariant }
            }
            return null
          }
          return item
        }).filter(Boolean)
        setItems(migrated)
      } catch {
        setItems([])
      }
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('pbtl-cart', JSON.stringify(items))
    }
  }, [items, mounted])

  const addToCart = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.variant.id === variant.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, variant, quantity }]
    })
  }

  const removeFromCart = (productId: string, variantId: string) => {
    setItems((prev) => prev.filter((item) => !(item.product.id === productId && item.variant.id === variantId)))
  }

  const updateQuantity = (productId: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.variant.id === variantId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => setItems([])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
