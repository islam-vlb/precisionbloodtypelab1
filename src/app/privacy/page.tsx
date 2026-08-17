import { BUSINESS } from '@/lib/config'

export default function PrivacyPage() {
  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Legal</span>
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-6">Privacy Policy</h1>
        </div>
        <div className="space-y-8 text-clinical-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">1. Information We Collect</h2>
            <p>We collect personal information such as name, address, email, and payment information when you place an order.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">2. How We Use Your Information</h2>
            <p>We use your information to process orders, communicate order status, and improve our services.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">3. Third Parties</h2>
            <p>Personal information will not be shared with Third Parties except as necessary to process payments and ship orders.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">5. Cookies</h2>
            <p>We may use cookies to enhance your browsing experience and analyze site traffic.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">6. Children&apos;s Privacy</h2>
            <p>Individuals under 18 are not permitted to purchase from this site. We do not knowingly collect information from children.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">7. Your Rights</h2>
            <p>You may request access to or deletion of your personal information by contacting us at {BUSINESS.email}.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">8. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">9. Contact</h2>
            <p>For privacy inquiries, contact us at {BUSINESS.email}.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">10. Data Retention</h2>
            <p>We retain your information only as long as necessary to fulfill the purposes outlined in this policy.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">11. Third-Party Services</h2>
            <p>We may use third-party services for payment processing and shipping. These services have their own privacy policies.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold text-clinical-charcoal mb-3">12. Compliance</h2>
            <p>We comply with applicable data protection laws in the United States.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
