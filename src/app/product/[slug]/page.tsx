'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/lib/supabase'
import { Check, ChevronRight, Shield, Clock, Users, Package, FlaskConical, HelpCircle, Truck, Lock } from 'lucide-react'
import ProductPurchaseBox from '@/components/ProductPurchaseBox'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return notFound()

  const isSupplement = product.category === 'supplement'
  const relatedProduct = products.find((p) => p.slug !== product.slug)

  const faqs = [
    {
      q: 'Is this for medical or surgical use?',
      a: 'No. This product is intended for general informational and educational purposes. It is not intended for use prior to blood transfusion, surgery, or medical procedures. Always confirm your blood type through a licensed medical professional before any medical decision.',
    },
    {
      q: 'How many tests are in a pack?',
      a: 'Each pack includes multiple tests so you can confirm your results or test additional family members. The exact count is listed on the product packaging.',
    },
    {
      q: 'What is your return policy?',
      a: 'We accept returns within 30 days of the date received. Please see our Refund Policy for full details.',
    },
    {
      q: 'How is my information protected?',
      a: 'Personal information will not be shared with Third Parties. We only collect the information necessary to process and ship your order.',
    },
  ]

  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-clinical-crimson hover:text-clinical-crimson-light transition-colors font-medium">Home</Link></li>
            <li className="text-clinical-gray-dark">/</li>
            <li><Link href="/product/blood-type-test-pack" className="text-clinical-crimson hover:text-clinical-crimson-light transition-colors font-medium">Blood Type Test Pack</Link></li>
            {isSupplement && (
              <>
                <li className="text-clinical-gray-dark">/</li>
                <li className="text-clinical-charcoal font-medium">{product.name}</li>
              </>
            )}
          </ol>
        </nav>

        {!isSupplement ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative aspect-square rounded-3xl bg-clinical-gray overflow-hidden border border-clinical-gray-dark">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 120 120" className="h-32 w-32 mx-auto mb-4 text-clinical-crimson" fill="currentColor">
                    <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                  </svg>
                  <p className="text-sm font-semibold text-clinical-charcoal">Blood Type Test Pack</p>
                  <p className="text-xs text-clinical-muted mt-1">Product Image</p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-3 py-1 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">At-Home Test Kit</span>
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-charcoal tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-3xl lg:text-4xl font-bold font-heading text-clinical-charcoal mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-base text-clinical-muted leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex-1 min-w-[200px]">
                  <ProductPurchaseBox product={product} />
                </div>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-clinical-charcoal px-6 py-4 font-heading font-semibold text-clinical-charcoal hover:bg-clinical-charcoal hover:text-clinical-white transition-all duration-200"
                >
                  How It Works
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 rounded-xl bg-clinical-gray p-3">
                  <Clock className="h-4 w-4 text-clinical-crimson flex-shrink-0" />
                  <span className="text-xs font-medium text-clinical-charcoal">Results in Minutes</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-clinical-gray p-3">
                  <Shield className="h-4 w-4 text-clinical-crimson flex-shrink-0" />
                  <span className="text-xs font-medium text-clinical-charcoal">Private Testing</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-clinical-gray p-3">
                  <Users className="h-4 w-4 text-clinical-crimson flex-shrink-0" />
                  <span className="text-xs font-medium text-clinical-charcoal">Multiple Tests</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold font-heading text-clinical-charcoal mb-6">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-base text-clinical-muted leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-4">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-clinical-crimson/10 mt-0.5">
                        <Check className="h-3 w-3 text-clinical-crimson" />
                      </div>
                      <span className="text-sm text-clinical-charcoal leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.ingredients && (
                <div>
                  <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-4">Ingredients</h2>
                  <div className="overflow-x-auto rounded-xl border border-clinical-gray-dark">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-clinical-gray">
                          <th className="border-b border-clinical-gray-dark px-4 py-3 text-left text-xs font-semibold text-clinical-charcoal uppercase tracking-wider">Ingredient</th>
                          <th className="border-b border-clinical-gray-dark px-4 py-3 text-left text-xs font-semibold text-clinical-charcoal uppercase tracking-wider">Amount per Serving</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.ingredients.map((ing) => (
                          <tr key={ing.name} className="border-b border-clinical-gray-dark last:border-b-0">
                            <td className="px-4 py-3 text-sm text-clinical-charcoal">{ing.name}</td>
                            <td className="px-4 py-3 text-sm text-clinical-muted">{ing.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="rounded-xl border-2 border-clinical-crimson/20 bg-clinical-blue/50 p-6">
                <p className="text-sm text-clinical-charcoal leading-relaxed">{product.fdaDisclosure}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-clinical-gray p-6 border border-clinical-gray-dark">
                <div className="aspect-square rounded-xl bg-clinical-white border border-clinical-gray-dark flex items-center justify-center mb-6">
                  <div className="text-center">
                    <svg viewBox="0 0 120 120" className="h-20 w-20 mx-auto mb-3 text-clinical-crimson" fill="currentColor">
                      <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                    </svg>
                    <p className="text-xs text-clinical-muted font-medium">Blood Health Support Formula</p>
                  </div>
                </div>
                <p className="text-3xl font-bold font-heading text-clinical-charcoal mb-4">${product.price.toFixed(2)}</p>
                <ProductPurchaseBox product={product} />
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-8 w-12 rounded bg-clinical-white border border-clinical-gray-dark flex items-center justify-center">
                    <span className="text-xs font-bold text-clinical-charcoal">VISA</span>
                  </div>
                  <div className="h-8 w-12 rounded bg-clinical-white border border-clinical-gray-dark flex items-center justify-center">
                    <div className="flex">
                      <div className="h-4 w-4 rounded-full bg-[#EB001B]/80" />
                      <div className="h-4 w-4 rounded-full bg-[#F79E1B]/80 -ml-2" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-clinical-muted">Charges will appear as PrecisionBloodTypeLab on your statement</p>
                <div className="mt-6 pt-6 border-t border-clinical-gray-dark">
                  <p className="text-sm text-clinical-muted mb-2">Looking for our main product?</p>
                  <Link href="/" className="inline-flex items-center gap-1 text-clinical-crimson font-semibold hover:text-clinical-crimson-light transition-colors text-sm">
                    Blood Type Test Pack <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADDITIONAL SECTIONS FOR TEST KIT */}
        {!isSupplement && (
          <div className="mt-20 space-y-20">
            <section id="how-it-works">
              <div className="text-center mb-12">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-clinical-charcoal tracking-tight">How It Works</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { num: '01', title: 'Prick & Collect', desc: 'Use the included lancet for a simple finger-prick and collect a small blood sample.' },
                  { num: '02', title: 'Apply to Card', desc: 'Apply your sample to the test card and wait the recommended time.' },
                  { num: '03', title: 'Read Your Result', desc: 'Match the colors on your card to the included chart to determine your blood type.' },
                ].map((step) => (
                  <div key={step.num} className="rounded-2xl bg-clinical-gray p-8 border border-clinical-gray-dark text-center">
                    <span className="text-4xl font-bold font-heading text-clinical-crimson/20">{step.num}</span>
                    <h3 className="font-heading text-lg font-bold text-clinical-charcoal mt-3 mb-2">{step.title}</h3>
                    <p className="text-sm text-clinical-muted leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="text-center mb-12">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-clinical-charcoal tracking-tight">What&apos;s Included</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Multiple Tests', desc: 'Several test cards included per pack' },
                  { name: 'Lancet', desc: 'Sterile finger-prick collection device' },
                  { name: 'Test Card', desc: 'ABO and Rh factor testing surface' },
                  { name: 'Result Chart', desc: 'Easy-to-read color reference guide' },
                  { name: 'Instructions', desc: 'Step-by-step guidance included' },
                ].map((item, i) => (
                  <div key={item.name} className="rounded-2xl bg-clinical-gray p-6 border border-clinical-gray-dark text-center">
                    <div className="flex items-center justify-center mb-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clinical-white text-clinical-crimson font-heading text-sm font-bold border border-clinical-gray-dark">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm font-bold text-clinical-charcoal mb-1">{item.name}</h3>
                    <p className="text-xs text-clinical-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="text-center mb-12">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-clinical-charcoal tracking-tight">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group rounded-2xl border border-clinical-gray-dark bg-clinical-white overflow-hidden hover:border-clinical-crimson/30 transition-colors">
                    <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-clinical-charcoal text-base list-none">
                      <span>{faq.q}</span>
                      <ChevronRight className="h-5 w-5 text-clinical-muted group-open:rotate-90 transition-transform duration-200 flex-shrink-0 ml-4" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-sm text-clinical-muted leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <div className="rounded-2xl border-2 border-clinical-crimson/20 bg-clinical-blue/50 p-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-clinical-crimson flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-clinical-charcoal mb-2">Important Information</h3>
                    <p className="text-sm text-clinical-charcoal/80 leading-relaxed">{product.medicalDisclaimer}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-clinical-gray p-6 border border-clinical-gray-dark">
                  <Truck className="h-6 w-6 text-clinical-crimson mb-3" />
                  <h3 className="font-heading font-bold text-clinical-charcoal mb-1">Shipping & Returns</h3>
                  <p className="text-sm text-clinical-muted mb-3">USPS Priority Mail, $7.95 flat rate. 30-day returns.</p>
                  <Link href="/shipping" className="text-sm text-clinical-crimson font-semibold hover:text-clinical-crimson-light transition-colors">
                    View Policy <ChevronRight className="h-4 w-4 inline" />
                  </Link>
                </div>
                <div className="rounded-2xl bg-clinical-gray p-6 border border-clinical-gray-dark">
                  <Lock className="h-6 w-6 text-clinical-crimson mb-3" />
                  <h3 className="font-heading font-bold text-clinical-charcoal mb-1">Privacy</h3>
                  <p className="text-sm text-clinical-muted mb-3">Your information is protected and not shared with third parties.</p>
                  <Link href="/privacy" className="text-sm text-clinical-crimson font-semibold hover:text-clinical-crimson-light transition-colors">
                    View Policy <ChevronRight className="h-4 w-4 inline" />
                  </Link>
                </div>
                <div className="rounded-2xl bg-clinical-gray p-6 border border-clinical-gray-dark">
                  <HelpCircle className="h-6 w-6 text-clinical-crimson mb-3" />
                  <h3 className="font-heading font-bold text-clinical-charcoal mb-1">Questions?</h3>
                  <p className="text-sm text-clinical-muted mb-3">Contact our support team for assistance.</p>
                  <Link href="/contact" className="text-sm text-clinical-crimson font-semibold hover:text-clinical-crimson-light transition-colors">
                    Contact Us <ChevronRight className="h-4 w-4 inline" />
                  </Link>
                </div>
              </div>
            </section>

            {relatedProduct && (
              <section>
                <div className="text-center mb-12">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-clinical-charcoal tracking-tight">Related Wellness Product</h2>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="rounded-2xl bg-clinical-gray p-8 border border-clinical-gray-dark hover:border-clinical-crimson/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex rounded-full bg-clinical-blue px-3 py-1 text-xs font-semibold uppercase tracking-widest text-clinical-charcoal">
                        {relatedProduct.category === 'supplement' ? 'Supplement' : 'Product'}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-clinical-charcoal mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-clinical-muted leading-relaxed mb-4">{relatedProduct.description}</p>
                    <p className="text-2xl font-bold font-heading text-clinical-charcoal mb-6">${relatedProduct.price.toFixed(2)}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/product/${relatedProduct.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-clinical-charcoal px-6 py-3 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors"
                      >
                        View Product
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
