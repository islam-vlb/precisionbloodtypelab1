import { BUSINESS } from '@/lib/config'

export default function FulfillmentAddressPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-8">Fulfillment Address</h1>
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="font-heading text-xl font-bold text-charcoal mb-4">Mailing / Fulfillment Address</h2>
          <p className="text-gray-700">{BUSINESS.name}</p>
          <p className="text-gray-700">{BUSINESS.address}</p>
          <p className="mt-6 text-sm text-gray-500">
            Please use this address for any returns or correspondence.
          </p>
        </div>
      </div>
    </div>
  )
}
