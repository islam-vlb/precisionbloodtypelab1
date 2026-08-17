'use client'

import React, { useState } from 'react'
import { BUSINESS } from '@/lib/config'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Contact</span>
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-6">
            Contact Us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-clinical-crimson mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-clinical-charcoal">Email</p>
                  <p className="text-sm text-clinical-muted">{BUSINESS.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-clinical-crimson mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-clinical-charcoal">Address</p>
                  <p className="text-sm text-clinical-muted">{BUSINESS.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-clinical-crimson mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-clinical-charcoal">Phone</p>
                  <p className="text-sm text-clinical-muted">{BUSINESS.phone}</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-clinical-muted">
              We typically respond within 1-2 business days.
            </p>
          </div>
          <div className="rounded-2xl border border-clinical-gray-dark bg-clinical-gray p-6 lg:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-clinical-charcoal font-semibold">Thank you! Your message has been sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Name</label>
                  <input type="text" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinical-charcoal mb-1.5">Message</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-clinical-gray-dark bg-clinical-white px-4 py-2.5 text-sm text-clinical-charcoal placeholder-clinical-muted focus:border-clinical-crimson focus:outline-none focus:ring-1 focus:ring-clinical-crimson/20 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full rounded-lg bg-clinical-charcoal px-6 py-3 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
