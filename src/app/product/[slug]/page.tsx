'use client'

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, getStartingPrice } from '@/lib/supabase'
import { Check, ChevronRight, Shield, Clock, Users, HelpCircle, Truck, Lock } from 'lucide-react'
import ProductPurchaseBox from '@/components/ProductPurchaseBox'
import { useState } from 'react'

const deviceFaqs = [
  {
    q: 'What is the Circulation Support Device?',
    a: 'It is a portable, at-home wellness device that uses gentle electrical stimulation and mild heat therapy to help support normal circulation in the legs and feet as part of a daily wellness routine. It does not test, sample, or analyze blood in any way.',
  },
  {
    q: 'How often should I use it?',
    a: 'Most users incorporate a short session into their daily routine. Start with a shorter session at a lower intensity and follow the included user guide for recommended usage.',
  },
  {
    q: 'How do the intensity levels work?',
    a: 'The device offers adjustable intensity levels so you can choose a gentle stimulation level that is comfortable for you, and increase it gradually as you get used to the sensation.',
  },
  {
    q: 'How long does the battery last?',
    a: 'The device uses a rechargeable battery designed to support multiple sessions on a single charge. Simply recharge it using the included cable when needed.',
  },
  {
    q: 'Is it safe to use if I have a pacemaker or other medical condition?',
    a: 'This device uses electrical stimulation, so it is not recommended for individuals with a pacemaker or other implanted medical device. Always consult a qualified healthcare provider before use if you have any health concerns.',
  },
  {
    q: 'How private is my information?',
    a: 'Your device ships in discreet, unmarked packaging. Personal information will not be shared with third parties, and we only collect the information necessary to process and ship your order.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns within 30 days of the date received. Please see our Refund Policy for full details.',
  },
]

const accessoryFaqs = [
  {
    q: 'What are the Compression Support Socks?',
    a: 'A pair of general compression-style support socks designed for everyday comfort, intended as a general comfort and support accessory.',
  },
  {
    q: 'What size are they?',
    a: 'The socks come in one general adult size designed to fit most.',
  },
  {
    q: 'Can I wash them?',
    a: 'Yes, they are machine washable — follow the included care instructions to keep them in good condition.',
  },
  {
    q: 'How private is my information?',
    a: 'Your order ships in discreet, unmarked packaging. Personal information will not be shared with third parties, and we only collect the information necessary to process and ship your order.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns within 30 days of the date received. Please see our Refund Policy for full details.',
  },
]

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const product = products.find((p) => p.slug === slug)
  if (!product) return notFound()

  const isDevice = product.category === 'device'
  const otherProduct = products.find((p) => p.slug !== product.slug)
  const faqs = isDevice ? deviceFaqs : accessoryFaqs

  const defaultVariant = product.variants.find((v) => v.id === product.defaultVariantId) ?? product.variants[0]
  const [selectedVariantId, setSelectedVariantId] = useState(defaultVariant.id)

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) ?? defaultVariant
  const productImage = selectedVariant.image ?? product.image

  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-clinical-crimson hover:text-clinical-crimson-light transition-colors font-medium">Home</Link></li>
            <li className="text-clinical-gray-dark">/</li>
            <li className="text-clinical-charcoal font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative aspect-square rounded-3xl bg-clinical-gray overflow-hidden border border-clinical-gray-dark flex items-center justify-center p-8">
              <img
                src={productImage}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-3 py-1 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">
                  {isDevice ? 'Wellness Device' : 'Wellness Accessory'}
                </span>
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-charcoal tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-2xl lg:text-3xl font-bold font-heading text-clinical-charcoal mb-6">
                Starting at ${getStartingPrice(product).toFixed(2)}
              </p>
              <p className="text-base text-clinical-muted leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="mb-8">
                <ProductPurchaseBox product={product} selectedVariantId={selectedVariantId} onVariantChange={setSelectedVariantId} />
              </div>
              {isDevice && (
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-2 rounded-xl bg-clinical-gray p-3">
                    <Clock className="h-4 w-4 text-clinical-crimson flex-shrink-0" />
                    <span className="text-xs font-medium text-clinical-charcoal">Daily Use</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-clinical-gray p-3">
                    <Shield className="h-4 w-4 text-clinical-crimson flex-shrink-0" />
                    <span className="text-xs font-medium text-clinical-charcoal">Non-Diagnostic</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-clinical-gray p-3">
                    <Users className="h-4 w-4 text-clinical-crimson flex-shrink-0" />
                    <span className="text-xs font-medium text-clinical-charcoal">For Everyday Use</span>
                  </div>
                </div>
              )}
            </div>
        </div>

        <div className="mt-20 space-y-20">
            {isDevice && (
              <section id="how-it-works">
                <div className="text-center mb-12">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-clinical-charcoal tracking-tight">How It Works</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { num: '01', title: 'Charge & Power On', desc: 'Charge the rechargeable battery, then power on the device using the control panel.' },
                    { num: '02', title: 'Choose Your Setting', desc: 'Select a comfortable intensity level and add mild heat therapy if you like.' },
                    { num: '03', title: 'Relax Into Your Routine', desc: 'Use the device for a few minutes as part of your daily circulation-support routine.' },
                  ].map((step) => (
                    <div key={step.num} className="rounded-2xl bg-clinical-gray p-8 border border-clinical-gray-dark text-center">
                      <span className="text-4xl font-bold font-heading text-clinical-crimson/20">{step.num}</span>
                      <h3 className="font-heading text-lg font-bold text-clinical-charcoal mt-3 mb-2">{step.title}</h3>
                      <p className="text-sm text-clinical-muted leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <div className="text-center mb-12">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-clinical-charcoal tracking-tight">What&apos;s Included</h2>
              </div>
              {isDevice ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { name: 'Support Device', desc: 'Portable circulation-support unit' },
                    { name: 'Charging Cable', desc: 'For the rechargeable battery' },
                    { name: 'Intensity Control', desc: 'Adjustable via the +/- buttons on the device' },
                    { name: 'Heat Function', desc: 'Mild heat therapy mode' },
                    { name: 'User Guide', desc: 'Step-by-step guidance included' },
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
              ) : (
                <ul className="max-w-xl mx-auto space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-5 w-5 text-clinical-crimson flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-clinical-charcoal leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
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
                  <p className="text-sm text-clinical-muted mb-3">USPS Priority Mail, shipping included. 30-day returns.</p>
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

            {otherProduct && (
              <section>
                <div className="text-center mb-12">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-clinical-charcoal tracking-tight">You Might Also Like</h2>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="rounded-2xl bg-clinical-gray p-8 border border-clinical-gray-dark hover:border-clinical-crimson/30 transition-all duration-300">
                    <h3 className="font-heading text-xl font-bold text-clinical-charcoal mb-2">{otherProduct.name}</h3>
                    <p className="text-sm text-clinical-muted leading-relaxed mb-4">{otherProduct.description}</p>
                    <p className="text-2xl font-bold font-heading text-clinical-charcoal mb-6">Starting at ${getStartingPrice(otherProduct).toFixed(2)}</p>
                    <Link
                      href={`/product/${otherProduct.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-clinical-charcoal px-6 py-3 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors"
                    >
                      View Product
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </section>
            )}
          </div>
      </div>
    </div>
  )
}
