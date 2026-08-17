import { BUSINESS } from '@/lib/config'

export default function FulfillmentAddressPage() {
  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Support</span>
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-6">Fulfillment Address</h1>
        </div>
        <div className="rounded-2xl bg-clinical-gray p-8 border border-clinical-gray-dark">
          <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-4">Mailing / Fulfillment Address</h2>
          <p className="text-clinical-charcoal">{BUSINESS.name}</p>
          <p className="text-clinical-charcoal">{BUSINESS.address}</p>
          <p className="mt-6 text-sm text-clinical-muted">
            Please use this address for any returns or correspondence.
          </p>
        </div>
      </div>
    </div>
  )
}
