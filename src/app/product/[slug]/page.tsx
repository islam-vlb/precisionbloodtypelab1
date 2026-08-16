import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/lib/supabase'
import { Check, ShoppingCart } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return notFound()

  const isSupplement = product.category === 'supplement'

  return (
    <div className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="text-crimson hover:underline">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-charcoal font-medium">{product.name}</li>
          </ol>
        </nav>

        {!isSupplement ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="aspect-square rounded-2xl bg-ivory-dark border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center p-8">
                <svg viewBox="0 0 120 120" className="h-32 w-32 mx-auto mb-4 text-crimson" fill="currentColor">
                  <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                </svg>
                <p className="text-sm text-gray-500 font-medium">Blood Type Test Pack — Product Image</p>
              </div>
            </div>

            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal">{product.name}</h1>
              <p className="mt-2 text-3xl font-bold text-crimson">${product.price.toFixed(2)}</p>
              <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>

              <div className="mt-8">
                <AddToCartButton product={product} />
              </div>

              <div className="mt-8">
                <h2 className="font-heading text-xl font-bold text-charcoal mb-4">Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-5 w-5 text-crimson flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-lg border-2 border-crimson/30 bg-ivory-dark p-6">
                <p className="text-sm text-gray-700 leading-relaxed">{product.medicalDisclaimer}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <nav className="mb-4 text-sm">
                  <ol className="flex items-center gap-2">
                    <li><Link href="/" className="text-crimson hover:underline">Home</Link></li>
                    <li className="text-gray-400">/</li>
                    <li><Link href="/product/blood-type-test-pack" className="text-crimson hover:underline">Blood Type Test Pack</Link></li>
                    <li className="text-gray-400">/</li>
                    <li className="text-charcoal font-medium">{product.name}</li>
                  </ol>
                </nav>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal">{product.name}</h1>
                <p className="mt-2 text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-charcoal mb-4">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-charcoal mb-4">Ingredients</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-ivory-dark">
                        <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-charcoal">Ingredient</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-charcoal">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.ingredients?.map((ing) => (
                        <tr key={ing.name}>
                          <td className="border border-gray-200 px-4 py-2 text-gray-700">{ing.name}</td>
                          <td className="border border-gray-200 px-4 py-2 text-gray-700">{ing.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-lg border-2 border-crimson/30 bg-ivory-dark p-6">
                <p className="text-sm text-gray-700 leading-relaxed">{product.fdaDisclosure}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <div className="aspect-square rounded-xl bg-ivory-dark border-2 border-dashed border-gray-300 flex items-center justify-center mb-6">
                  <div className="text-center p-6">
                    <svg viewBox="0 0 120 120" className="h-24 w-24 mx-auto mb-3 text-crimson" fill="currentColor">
                      <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                    </svg>
                    <p className="text-xs text-gray-500 font-medium">Blood Health Support Formula — Product Image</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-crimson mb-4">${product.price.toFixed(2)}</p>
                <AddToCartButton product={product} />
                <div className="mt-6 flex items-center gap-3">
                  <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="32" rx="5" fill="#1A1F71"/>
                    <text x="25" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">VISA</text>
                  </svg>
                  <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Mastercard" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="32" rx="5" fill="#1C1C1C"/>
                    <circle cx="19" cy="16" r="11" fill="#EB001B"/>
                    <circle cx="31" cy="16" r="11" fill="#F79E1B"/>
                    <path d="M25 7.5a11 11 0 0 1 0 17A11 11 0 0 1 25 7.5z" fill="#FF5F00"/>
                  </svg>
                </div>
                <p className="mt-4 text-xs text-gray-500">Charges will appear as PrecisionBloodTypeLab on your statement</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Looking for our main product?</p>
                  <Link href="/" className="text-crimson font-semibold hover:underline">Blood Type Test Pack →</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
