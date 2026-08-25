import { products } from '@/lib/supabase'

export default function IngredientsPage() {
  const supplement = products.find((p) => p.category === 'supplement')
  if (!supplement) return null

  return (
    <div className="bg-clinical-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-clinical-crimson/20 bg-clinical-crimson/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinical-crimson">Ingredients</span>
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-clinical-charcoal tracking-tight mb-6">Ingredients</h1>
          <p className="text-clinical-muted">Ingredient information for the Blood Health Support Formula.</p>
        </div>
        <div className="rounded-2xl border border-clinical-gray-dark bg-clinical-gray p-6 mb-8">
          <p className="text-sm text-clinical-charcoal leading-relaxed">
            For a full list of ingredients and amounts per serving, please refer to the Supplement Facts panel on the product packaging.
          </p>
        </div>
        <div className="rounded-xl border-2 border-clinical-crimson/20 bg-clinical-blue/50 p-6">
          <p className="text-sm text-clinical-charcoal leading-relaxed">{supplement.fdaDisclosure}</p>
        </div>
        <div className="mt-8">
          <p className="text-xs text-clinical-muted">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  )
}
