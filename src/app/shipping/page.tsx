import { BUSINESS } from '@/lib/config'

export default function ShippingPage() {
  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Support</span>
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-6">Shipping Policy</h1>
        </div>
        <div className="space-y-8 text-clinical-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">1. Shipping Method</h2>
            <p>All orders are shipped via USPS Priority Mail for a flat rate of $7.95 per order.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">2. Delivery Area</h2>
            <p>Shipping is currently available only within the United States. We do not ship internationally.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">3. Processing Time</h2>
            <p>Orders are typically processed within 1-2 business days. You will receive a confirmation email once your order ships.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">4. Delivery Time</h2>
            <p>Delivery times vary by location but typically range from 2-5 business days via USPS Priority Mail.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">5. Tracking</h2>
            <p>A tracking number will be provided once your order ships. You can use this to monitor your delivery.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">6. Shipping Address</h2>
            <p>Please ensure your shipping address is correct at checkout. We are not responsible for packages sent to incorrect addresses provided by the customer.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">7. Discreet Packaging</h2>
            <p>All orders are shipped in discreet packaging with no external indication of contents.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">8. Contact</h2>
            <p>For shipping questions, contact us at {BUSINESS.email}.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
