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
              TrevCore LLC is the company behind PrecisionBloodTypeLab. We are based in Tulsa, Oklahoma and operate this website to provide informational blood typing products and health supplements to customers across the United States.
            </p>
            <p>
              Our mission is to make basic blood information accessible and convenient. The Blood Type Test Pack allows individuals to determine their ABO and Rh blood type from the privacy of their home using a simple finger-prick sample.
            </p>
            <p>
              We also offer the Blood Health Support Formula, a daily supplement formulated with iron, vitamin B12, and folate to support overall blood health as part of a balanced diet.
            </p>
            <p>
              TrevCore LLC is committed to clear communication, accurate product information, and responsible customer service. All charges appear as PrecisionBloodTypeLab on your statement.
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
