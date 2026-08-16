import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function RefundPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">1. Returns</h2>
            <p>We accept returns within 30 days of the date received. Products must be unopened and in original packaging.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">2. Refund Process</h2>
            <p>To initiate a return, contact us at {BUSINESS.email}. Refunds are processed within 5-10 business days after we receive the returned product.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">3. Return Shipping</h2>
            <p>Customers are responsible for return shipping costs unless the return is due to our error.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">4. Non-Returnable Items</h2>
            <p>Opened health products may not be returnable for hygiene reasons. Please contact us before returning any opened supplement.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">5. Damaged or Defective Items</h2>
            <p>If you receive a damaged or defective item, please contact us within 7 days of delivery with photos.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">6. Refund Method</h2>
            <p>Refunds are issued to the original payment method used at checkout.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">7. Exchanges</h2>
            <p>We currently do not offer direct exchanges. Please return the item for a refund and place a new order.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">8. Contact</h2>
            <p>For return inquiries, contact us at {BUSINESS.email} or mail to {BUSINESS.address}.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
