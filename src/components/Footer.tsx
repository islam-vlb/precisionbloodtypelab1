import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L8 12v12c0 8 12 14 12 14s12-6 12-14V12L20 4z" fill="#1E2530" stroke="#8B1E2D" strokeWidth="2"/>
                <path d="M20 12c-2 4-6 8-6 12a6 6 0 0 0 12 0c0-4-4-8-6-12z" fill="#8B1E2D"/>
              </svg>
              <span className="font-heading text-lg font-bold">PrecisionBloodTypeLab</span>
            </Link>
            <p className="text-sm text-ivory/70">{BUSINESS.name}</p>
            <p className="text-sm text-ivory/70">{BUSINESS.address}</p>
            <p className="text-sm text-ivory/70 mt-2">{BUSINESS.email}</p>
            <p className="text-sm text-ivory/70">{BUSINESS.phone}</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Blood Type Test Pack</Link></li>
              <li><Link href="/product/blood-health-support-formula" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Blood Health Support Formula</Link></li>
              <li><Link href="/ingredients" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Ingredients</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-ivory/70 hover:text-crimson transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Contact</Link></li>
              <li><Link href="/fulfillment-address" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Fulfillment Address</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Refund Policy</Link></li>
              <li><Link href="/shipping" className="text-sm text-ivory/70 hover:text-crimson transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-8">
          <p className="text-sm text-ivory/70 mb-2">
            ⚠️ Individuals under 18 are not permitted to purchase
          </p>
          <p className="text-sm text-ivory/70 mb-4">
            Charges will appear as PrecisionBloodTypeLab on your statement
          </p>
          <p className="text-sm text-ivory/70 mb-4">
            Personal information will not be shared with Third Parties
          </p>
          <p className="text-xs text-ivory/50 mb-4">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <div className="flex items-center gap-3 mb-6">
            <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="32" rx="5" fill="#1A1F71"/>
              <text x="25" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">VISA</text>
            </svg>
            <svg viewBox="0 0 50 32" className="h-8 w-auto rounded" aria-label="Mastercard" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="32" rx="5" fill="#1C1C1C"/>
              <circle cx="19" cy="16" r="11" fill="#EB001B"/>
              <circle cx="31" cy="16" r="11" fill="#F79E1B"/>
              <path d="M25 7.5a11 11 0 0 1 0 17A11 11 0 0 1 25 7.5z" fill="#FF5F00"/>
            </svg>
          </div>
          <p className="text-xs text-ivory/50">
            © 2026 TrevCore LLC — PrecisionBloodTypeLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
