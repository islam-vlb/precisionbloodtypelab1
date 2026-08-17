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
          <p className="text-clinical-muted">Full ingredient list for the Blood Health Support Formula.</p>
        </div>
        <div className="rounded-2xl border border-clinical-gray-dark bg-clinical-white overflow-hidden mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-clinical-gray">
                <th className="border-b border-clinical-gray-dark px-4 py-3 text-left text-xs font-semibold text-clinical-charcoal uppercase tracking-wider">Ingredient</th>
                <th className="border-b border-clinical-gray-dark px-4 py-3 text-left text-xs font-semibold text-clinical-charcoal uppercase tracking-wider">Amount per Serving</th>
              </tr>
            </thead>
            <tbody>
              {supplement.ingredients?.map((ing) => (
                <tr key={ing.name} className="border-b border-clinical-gray-dark last:border-b-0">
                  <td className="px-4 py-3 text-sm text-clinical-charcoal">{ing.name}</td>
                  <td className="px-4 py-3 text-sm text-clinical-muted">{ing.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
