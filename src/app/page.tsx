'use client'

import React from 'react'
import Link from 'next/link'
import { Check, ShoppingCart } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'

const mainProduct = products[0]

export default function HomePage() {
  const { addToCart } = useCart()

  const features = [
    'Determines ABO blood group and Rh factor',
    'Multiple tests included in each pack',
    'Simple finger-prick sample collection',
    'Easy-to-read color result chart included',
    'Results available in minutes at home',
    'For informational and educational purposes',
  ]

  const steps = [
    {
      num: '01',
      title: 'Prick & Collect',
      desc: 'Use the included lancet for a simple finger-prick and collect a small blood sample.',
    },
    {
      num: '02',
      title: 'Apply to Card',
      desc: 'Apply your sample to the test card and wait the recommended time.',
    },
    {
      num: '03',
      title: 'Read Your Result',
      desc: 'Match the colors on your card to the included chart to determine your blood type.',
    },
  ]

  const faqs = [
    {
      q: 'Is this for medical or surgical use?',
      a: 'No. This product is intended for general informational and educational purposes. It is not intended for use prior to blood transfusion, surgery, or medical procedures. Always confirm your blood type through a licensed medical professional before any medical decision.',
    },
    {
      q: 'How accurate is it?',
      a: 'The test is designed to provide a reliable indication of your ABO and Rh blood type when used correctly. However, it is intended for informational use only and should not replace laboratory blood typing performed by a healthcare provider.',
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
    <div>
      <section id="features" className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Know Your <span className="text-crimson">Blood Type</span> — From Home
              </h1>
              <div className="mt-4 h-1 w-24 bg-gold" />
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                {mainProduct.longDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => addToCart(mainProduct)}
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-heading font-semibold text-charcoal hover:bg-gold-light transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Order Your Pack
                </button>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-crimson px-8 py-4 font-heading font-semibold text-crimson hover:bg-crimson hover:text-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl bg-ivory-dark border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg viewBox="0 0 120 120" className="h-32 w-32 mx-auto mb-4 text-crimson" fill="currentColor">
                    <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                  </svg>
                  <p className="text-sm text-gray-500 font-medium">Blood Type Test Pack — Product Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Fast Finger-Prick Test', 'Results in Minutes', 'Multiple Tests Per Pack', 'Secure Checkout'].map((text) => (
              <div key={text} className="flex flex-col items-center text-center">
                <Check className="h-8 w-8 text-crimson mb-2" />
                <span className="text-sm font-medium text-charcoal">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal text-center mb-12">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex gap-4">
                <Check className="h-6 w-6 text-crimson flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <span className="font-heading text-5xl font-bold text-crimson">{step.num}</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal text-center mb-8">
            Product Details
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{mainProduct.longDescription}</p>
            <ul className="mt-6 space-y-3">
              {mainProduct.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="h-5 w-5 text-crimson flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border-2 border-crimson/30 bg-ivory-dark p-6">
              <p className="text-sm text-gray-700 leading-relaxed">{mainProduct.medicalDisclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crimson">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ivory mb-6">
            Ready to know your blood type?
          </h2>
          <button
            onClick={() => addToCart(mainProduct)}
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-heading font-semibold text-charcoal hover:bg-gold-light transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Order Your Pack
          </button>
        </div>
      </section>
    </div>
  )
}
