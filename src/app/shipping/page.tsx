import { BUSINESS } from '@/lib/config'

export default function ShippingPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-8">Shipping Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">1. Shipping Method</h2>
            <p>All orders are shipped via USPS Priority Mail for a flat rate of $7.95 per order.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">2. Delivery Area</h2>
            <p>Shipping is currently available only within the United States. We do not ship internationally.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">3. Processing Time</h2>
            <p>Orders are typically processed within 1-2 business days. You will receive a confirmation email once your order ships.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">4. Delivery Time</h2>
            <p>Delivery times vary by location but typically range from 2-5 business days via USPS Priority Mail.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">5. Tracking</h2>
            <p>A tracking number will be provided once your order ships. You can use this to monitor your delivery.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">6. Shipping Address</h2>
            <p>Please ensure your shipping address is correct at checkout. We are not responsible for packages sent to incorrect addresses provided by the customer.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">7. Discreet Packaging</h2>
            <p>All orders are shipped in discreet packaging with no external indication of contents.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal">8. Contact</h2>
            <p>For shipping questions, contact us at {BUSINESS.email}.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
