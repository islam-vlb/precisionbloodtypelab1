import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function AboutPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-8">About TrevCore LLC</h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
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
          <div className="bg-ivory-dark rounded-lg p-6 border border-gray-200 mt-8">
            <h2 className="font-heading text-xl font-bold text-charcoal mb-2">Business Information</h2>
            <p className="text-sm text-gray-700">{BUSINESS.name}</p>
            <p className="text-sm text-gray-700">{BUSINESS.address}</p>
            <p className="text-sm text-gray-700 mt-2">{BUSINESS.email}</p>
            <p className="text-sm text-gray-700">{BUSINESS.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
