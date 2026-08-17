'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Check, ShoppingCart, ChevronRight, FlaskConical, Microscope, Shield, Clock, Users } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/supabase'
import ScrollReveal from '@/components/ScrollReveal'

const mainProduct = products[0]
const supplementProduct = products[1]

export default function HomePage() {
  const { addToCart } = useCart()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      icon: <Microscope className="h-6 w-6" />,
    },
    {
      num: '02',
      title: 'Apply to Card',
      desc: 'Apply your sample to the test card and wait the recommended time.',
      icon: <FlaskConical className="h-6 w-6" />,
    },
    {
      num: '03',
      title: 'Read Your Result',
      desc: 'Match the colors on your card to the included chart to determine your blood type.',
      icon: <Shield className="h-6 w-6" />,
    },
  ]

  const kitContents = [
    { name: 'Multiple Tests', desc: 'Several test cards included per pack' },
    { name: 'Lancet', desc: 'Sterile finger-prick collection device' },
    { name: 'Test Card', desc: 'ABO and Rh factor testing surface' },
    { name: 'Result Chart', desc: 'Easy-to-read color reference guide' },
    { name: 'Instructions', desc: 'Step-by-step guidance included' },
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
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-clinical-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0A0A0B 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-clinical-gray-dark bg-clinical-gray px-4 py-1.5 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-clinical-crimson animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-clinical-charcoal">
                  At-Home Blood Type Testing
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-clinical-charcoal leading-[0.95] tracking-tight">
                Know Your
                <br />
                <span className="text-clinical-crimson relative inline-block">
                  Blood Type.
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C47.5 2.5 152.5 2.5 199 5.5" stroke="#8B1E2D" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-clinical-muted leading-relaxed max-w-lg">
                Simple. Private. At Home.
              </p>
              <p className="mt-4 text-base text-clinical-muted leading-relaxed max-w-lg">
                {mainProduct.longDescription}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => addToCart(mainProduct)}
                  className="inline-flex items-center gap-3 rounded-lg bg-clinical-charcoal px-8 py-4 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-all duration-200 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <ShoppingCart className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Explore the Test Pack</span>
                  <ChevronRight className="h-4 w-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-clinical-charcoal px-8 py-4 font-heading font-semibold text-clinical-charcoal hover:bg-clinical-charcoal hover:text-clinical-white transition-all duration-200"
                >
                  How It Works
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-clinical-crimson" />
                  <span className="text-sm font-medium text-clinical-charcoal">Results in Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-clinical-crimson" />
                  <span className="text-sm font-medium text-clinical-charcoal">Private Testing</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-7 relative">
              <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-clinical-blue via-clinical-white to-clinical-gray" />
                <div className="absolute inset-4 rounded-2xl border border-clinical-gray-dark/50 bg-clinical-white overflow-hidden">
                  <img
                    src="https://img.magnific.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?semt=ais_test_b&w=740&q=80"
                    alt="Medical laboratory professional"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinical-charcoal/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 lg:-right-8 h-24 w-24 rounded-xl border border-clinical-gray-dark bg-clinical-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold font-heading text-clinical-crimson">ABO</p>
                    <p className="text-[10px] uppercase tracking-widest text-clinical-muted mt-0.5">+ Rh</p>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 lg:-left-6 h-20 w-20 rounded-xl border border-clinical-gray-dark bg-clinical-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg font-bold font-heading text-clinical-charcoal">5 min</p>
                    <p className="text-[10px] uppercase tracking-widest text-clinical-muted mt-0.5">Results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOOD TYPE VISUALIZATION */}
      <section className="bg-clinical-gray py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0A0A0B 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-charcoal tracking-tight">
                Blood Type System
              </h2>
              <p className="mt-4 text-lg text-clinical-muted max-w-2xl mx-auto">
                Understanding the four primary ABO blood groups and Rh factor classification.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
              {[
                { type: 'A', desc: 'Has A antigens', color: 'bg-clinical-crimson' },
                { type: 'B', desc: 'Has B antigens', color: 'bg-blue-600' },
                { type: 'AB', desc: 'Has both A & B', color: 'bg-purple-600' },
                { type: 'O', desc: 'Has neither antigen', color: 'bg-clinical-charcoal' },
              ].map((blood) => (
                <div key={blood.type} className="group relative rounded-2xl bg-clinical-white p-6 lg:p-8 border border-clinical-gray-dark hover:border-clinical-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-clinical-crimson/10 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${blood.color} text-white font-heading text-xl font-bold`}>
                      {blood.type}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-clinical-charcoal mb-1">Type {blood.type}</h3>
                  <p className="text-sm text-clinical-muted">{blood.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3 rounded-xl bg-clinical-white px-6 py-4 border border-clinical-gray-dark">
                <span className="text-2xl font-bold font-heading text-clinical-charcoal">Rh+</span>
                <span className="text-sm text-clinical-muted">Rh factor present</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-clinical-white px-6 py-4 border border-clinical-gray-dark">
                <span className="text-2xl font-bold font-heading text-clinical-charcoal">Rh−</span>
                <span className="text-sm text-clinical-muted">Rh factor absent</span>
              </div>
            </div>
            <p className="mt-10 text-center text-xs text-clinical-muted max-w-xl mx-auto leading-relaxed">
              For educational and informational purposes. Confirm your blood type through a qualified healthcare professional before any medical decision.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* FEATURED TEST PACK */}
      <section className="bg-clinical-white py-20 lg:py-28 relative" id="test-pack">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Featured Product</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-charcoal tracking-tight">
                Blood Type Test Pack
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-clinical-blue to-clinical-gray" />
                <div className="absolute inset-6 rounded-2xl border border-clinical-gray-dark bg-clinical-white flex items-center justify-center">
                  <div className="text-center">
                    <svg viewBox="0 0 120 120" className="h-28 w-28 mx-auto mb-4 text-clinical-crimson" fill="currentColor">
                      <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                    </svg>
                    <p className="text-sm font-semibold text-clinical-charcoal">Blood Type Test Pack</p>
                    <p className="text-xs text-clinical-muted mt-1">Product Image</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold font-heading text-clinical-charcoal mb-4">
                  ${mainProduct.price.toFixed(2)}
                </p>
                <p className="text-base text-clinical-muted leading-relaxed mb-8">
                  {mainProduct.longDescription}
                </p>
                <div className="space-y-3 mb-8">
                  {mainProduct.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-clinical-crimson/10 mt-0.5">
                        <Check className="h-3 w-3 text-clinical-crimson" />
                      </div>
                      <span className="text-sm text-clinical-charcoal leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => addToCart(mainProduct)}
                    className="inline-flex items-center gap-3 rounded-lg bg-clinical-charcoal px-8 py-4 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-all duration-200 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <ShoppingCart className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">Add to Cart</span>
                    <ChevronRight className="h-4 w-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <Link
                    href="/product/blood-type-test-pack"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-clinical-charcoal px-8 py-4 font-heading font-semibold text-clinical-charcoal hover:bg-clinical-charcoal hover:text-clinical-white transition-all duration-200"
                  >
                    View Product
                  </Link>
                </div>
                <div className="mt-8 rounded-xl border-2 border-clinical-crimson/20 bg-clinical-blue/50 p-5">
                  <p className="text-xs text-clinical-charcoal/80 leading-relaxed">{mainProduct.medicalDisclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-clinical-gray py-20 lg:py-28" id="how-it-works">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Process</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-charcoal tracking-tight">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-clinical-muted max-w-2xl mx-auto">
                Three simple steps to discover your blood type from home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="group relative rounded-2xl bg-clinical-white p-8 lg:p-10 border border-clinical-gray-dark hover:border-clinical-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-clinical-crimson/10 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl lg:text-6xl font-bold font-heading text-clinical-crimson/10 group-hover:text-clinical-crimson/20 transition-colors">
                      {step.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-crimson/10 text-clinical-crimson">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">{step.title}</h3>
                  <p className="text-sm text-clinical-muted leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="h-6 w-6 text-clinical-crimson/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="bg-clinical-white py-20 lg:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Kit Contents</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-charcoal tracking-tight">
                What&apos;s Inside
              </h2>
              <p className="mt-4 text-lg text-clinical-muted max-w-2xl mx-auto">
                Everything you need for at-home blood type testing, included in each pack.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {kitContents.map((item, i) => (
                <div key={item.name} className="group relative rounded-2xl bg-clinical-gray p-6 lg:p-8 border border-clinical-gray-dark hover:border-clinical-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-clinical-crimson/10 hover:-translate-y-1 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clinical-white text-clinical-crimson font-heading text-lg font-bold border border-clinical-gray-dark">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-clinical-charcoal mb-1">{item.name}</h3>
                  <p className="text-xs text-clinical-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECONDARY WELLNESS PRODUCT */}
      <section className="bg-clinical-gray py-20 lg:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto lg:mx-0 w-full">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-clinical-blue to-clinical-gray" />
                <div className="absolute inset-6 rounded-2xl border border-clinical-gray-dark bg-clinical-white flex items-center justify-center">
                  <div className="text-center">
                    <svg viewBox="0 0 120 120" className="h-24 w-24 mx-auto mb-3 text-clinical-crimson" fill="currentColor">
                      <path d="M60 10c-15 25-40 45-40 65 0 15 12 27 27 27 8 0 15-3 20-8 5 5 12 8 20 8 15 0 27-12 27-27 0-20-25-40-40-65z"/>
                    </svg>
                    <p className="text-sm font-semibold text-clinical-charcoal">Blood Health Support Formula</p>
                    <p className="text-xs text-clinical-muted mt-1">Daily Supplement</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Wellness Support</span>
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-4">
                  Blood Health Support Formula
                </h2>
                <p className="text-3xl lg:text-4xl font-bold font-heading text-clinical-charcoal mb-6">
                  ${supplementProduct.price.toFixed(2)}
                </p>
                <p className="text-base text-clinical-muted leading-relaxed mb-6">
                  {supplementProduct.longDescription}
                </p>
                <div className="space-y-2 mb-8">
                  {supplementProduct.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-clinical-crimson/10 mt-0.5">
                        <Check className="h-3 w-3 text-clinical-crimson" />
                      </div>
                      <span className="text-sm text-clinical-charcoal leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => addToCart(supplementProduct)}
                    className="inline-flex items-center gap-3 rounded-lg bg-clinical-charcoal px-8 py-4 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-all duration-200 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <ShoppingCart className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">Explore Wellness Support</span>
                    <ChevronRight className="h-4 w-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <Link
                    href="/product/blood-health-support-formula"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-clinical-charcoal px-8 py-4 font-heading font-semibold text-clinical-charcoal hover:bg-clinical-charcoal hover:text-clinical-white transition-all duration-200"
                  >
                    View Product
                  </Link>
                </div>
                <div className="mt-6 rounded-xl border border-clinical-gray-dark bg-clinical-white p-4">
                  <p className="text-xs text-clinical-muted leading-relaxed">{supplementProduct.fdaDisclosure}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-clinical-white py-20 lg:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-charcoal tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={faq.q} className="group rounded-2xl border border-clinical-gray-dark bg-clinical-white overflow-hidden hover:border-clinical-crimson/30 transition-all duration-300 hover:shadow-lg hover:shadow-clinical-crimson/5">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-clinical-charcoal text-base lg:text-lg list-none">
                    <span>{faq.q}</span>
                    <ChevronRight className="h-5 w-5 text-clinical-muted group-open:rotate-90 transition-transform duration-200 flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm text-clinical-muted leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA SECTION */}
      <section className="bg-clinical-charcoal py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <ScrollReveal>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-white tracking-tight mb-6">
              Ready to know your blood type?
            </h2>
            <p className="text-lg text-clinical-white/60 mb-10 max-w-2xl mx-auto">
              Simple, private, at-home testing with results available in minutes.
            </p>
            <button
              onClick={() => addToCart(mainProduct)}
              className="inline-flex items-center gap-3 rounded-lg bg-clinical-crimson px-10 py-5 font-heading font-semibold text-clinical-white hover:bg-clinical-crimson-light transition-all duration-200 group relative overflow-hidden text-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <ShoppingCart className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Order Your Pack</span>
              <ChevronRight className="h-5 w-5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="mt-6 text-sm text-clinical-white/40">
              {mainProduct.medicalDisclaimer}
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
