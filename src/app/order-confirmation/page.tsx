import Link from 'next/link'
import { BUSINESS } from '@/lib/config'
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmationPage() {
  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="rounded-2xl border border-clinical-gray-dark bg-clinical-gray p-8 sm:p-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-clinical-muted mb-8">Your order has been placed successfully. We&apos;ll send you a confirmation email shortly.</p>
          <p className="text-sm text-clinical-muted mb-8">Charges will appear as PrecisionBloodTypeLab on your statement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-clinical-charcoal px-8 py-3 font-heading font-semibold text-clinical-white hover:bg-clinical-charcoal-light transition-colors">
              Return to Home
            </Link>
            <Link href="/product/blood-type-test-pack" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-clinical-charcoal px-8 py-3 font-heading font-semibold text-clinical-charcoal hover:bg-clinical-charcoal hover:text-clinical-white transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
