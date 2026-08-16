import { products } from '@/lib/supabase'

export default function IngredientsPage() {
  const supplement = products.find((p) => p.category === 'supplement')
  if (!supplement) return null

  return (
    <div className="bg-ivory min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-8">Ingredients</h1>
        <p className="text-gray-600 mb-8">Full ingredient list for the Blood Health Support Formula.</p>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-ivory-dark">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-charcoal">Ingredient</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-charcoal">Amount per Serving</th>
              </tr>
            </thead>
            <tbody>
              {supplement.ingredients?.map((ing) => (
                <tr key={ing.name}>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">{ing.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">{ing.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-lg border-2 border-crimson/30 bg-ivory-dark p-6">
          <p className="text-sm text-gray-700 leading-relaxed">{supplement.fdaDisclosure}</p>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-600">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  )
}
