import Link from 'next/link'
import { BUSINESS } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-clinical-charcoal text-clinical-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 3L7 11.5V24.5C7 34.5 20 40 20 40s13-5.5 13-15.5V11.5L20 3z"
                    fill="#FFFFFF"
                    stroke="#8B1E2D"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 10.5c-2 4-7 9-7 14.5a7.5 7.5 0 0 0 15 0c0-5.5-5-10.5-7-14.5z"
                    fill="#8B1E2D"
                  />
                </svg>
                <span className="font-heading text-lg font-bold tracking-tight">PrecisionBloodTypeLab</span>
              </Link>
              <p className="text-sm text-clinical-white/60 leading-relaxed max-w-sm">
                Simple, private at-home blood type testing. Know your ABO and Rh blood type from the comfort of home.
              </p>
              <div className="mt-6 space-y-2 text-sm text-clinical-white/50">
                <p>{BUSINESS.name}</p>
                <p>{BUSINESS.address}</p>
                <p className="pt-2">{BUSINESS.email}</p>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-clinical-white/40 mb-6">
                Shop
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Blood Type Test Pack
                  </Link>
                </li>
                <li>
                  <Link href="/product/blood-health-support-formula" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Blood Health Support Formula
                  </Link>
                </li>
                <li>
                  <Link href="/ingredients" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Ingredients
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-clinical-white/40 mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/fulfillment-address" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Fulfillment Address
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-clinical-white/40 mb-6">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-sm text-clinical-white/70 hover:text-clinical-white transition-colors">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-clinical-white/10 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-clinical-white/50">
              <p>⚠️ Individuals under 18 are not permitted to purchase</p>
              <span className="hidden sm:inline text-clinical-white/20">|</span>
              <p>Charges will appear as PrecisionBloodTypeLab on your statement</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-12 rounded bg-clinical-white/10 flex items-center justify-center">
                <span className="text-xs font-bold text-clinical-white/60">VISA</span>
              </div>
              <div className="h-8 w-12 rounded bg-clinical-white/10 flex items-center justify-center">
                <div className="flex">
                  <div className="h-5 w-5 rounded-full bg-[#EB001B]/80" />
                  <div className="h-5 w-5 rounded-full bg-[#F79E1B]/80 -ml-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-clinical-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-clinical-white/40">
              © 2026 TrevCore LLC — PrecisionBloodTypeLab. All rights reserved.
            </p>
            <p className="text-xs text-clinical-white/30 max-w-xl text-center sm:text-right">
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
