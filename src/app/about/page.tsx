import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function AboutPage() {
  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">About</span>
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-6">
            About TrevCore LLC
          </h1>
          <div className="space-y-6 text-clinical-muted leading-relaxed">
            <p>
              TrevCore LLC is the company behind {BUSINESS.brandName}. We are based in Tulsa, Oklahoma and operate this website to provide wellness devices and health supplements to customers across the United States.
            </p>
            <p>
              Our mission is to make everyday wellness accessible and convenient. The Circulation Support Device is a portable, non-diagnostic device that uses gentle electrical stimulation and mild heat therapy to help support normal circulation in the legs and feet as part of a daily routine, from the privacy of home.
            </p>
            <p>
              We also offer the Blood Health Support Formula, a daily nutritional supplement formulated with iron, vitamin B12, and folate that provides supplemental support for normal nutritional needs related to healthy blood levels, as part of a balanced diet. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p>
              TrevCore LLC is committed to clear communication, accurate product information, and responsible customer service. All charges appear as {BUSINESS.descriptor} on your statement.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-clinical-gray p-8 border border-clinical-gray-dark">
          <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-4">Business Information</h2>
          <div className="space-y-2 text-sm text-clinical-muted">
            <p><span className="font-semibold text-clinical-charcoal">Company:</span> {BUSINESS.name}</p>
            <p><span className="font-semibold text-clinical-charcoal">Address:</span> {BUSINESS.address}</p>
            <p><span className="font-semibold text-clinical-charcoal">Email:</span> {BUSINESS.email}</p>
            <p><span className="font-semibold text-clinical-charcoal">Phone:</span> {BUSINESS.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
