export interface ProductVariant {
  id: string
  label: string
  detail: string
  price: number
  section: string
  isBundle: boolean
  testPackCount?: number
  bottleCount?: number
  capsuleCount?: number
}

export const products = [
  {
    id: 'blood-type-test-pack',
    name: 'Blood Type Test Pack',
    slug: 'blood-type-test-pack',
    category: 'test-kit',
    description: 'An at-home blood typing pack that lets you determine your ABO and Rh blood type from the privacy of home using a simple finger-prick sample. Each pack includes multiple tests so you can confirm your results or test additional family members. Intended for informational and educational use.',
    longDescription: 'Know your blood type from the comfort of home. The Blood Type Test Pack is designed for simple, private at-home testing with results available in minutes. Each pack contains multiple tests so you can verify results or test family members.',
    features: [
      'Determines ABO blood group and Rh factor',
      'Multiple tests included in each pack',
      'Simple finger-prick sample collection',
      'Easy-to-read color result chart included',
      'Results available in minutes at home',
      'For informational and educational purposes',
    ],
    image: '/images/blood-type-test-pack.png',
    medicalDisclaimer: 'This product is intended for general informational and educational purposes. It is not intended for use prior to blood transfusion, surgery, or medical procedures, and does not replace laboratory blood typing performed by a healthcare provider. Always confirm your blood type through a licensed medical professional before any medical decision. Results can be shared with your physician to discuss next steps.',
    defaultVariantId: 'single-test-pack',
    variants: [
      {
        id: 'single-test-pack',
        label: 'Blood Type Test Pack',
        detail: '1 Test Pack',
        price: 47.89,
        section: 'Single Test Offer',
        isBundle: false,
        testPackCount: 1,
      },
      {
        id: 'test-starter-support',
        label: 'Blood Type Test + Starter Support',
        detail: '1 Test Pack + 1 bottle / 30 capsules',
        price: 49.76,
        section: 'Test + Support Bundle Offers',
        isBundle: true,
        testPackCount: 1,
        bottleCount: 1,
        capsuleCount: 30,
      },
      {
        id: 'test-standard-support',
        label: 'Blood Type Test + Standard Support',
        detail: '1 Test Pack + 1 bottle / 60 capsules',
        price: 53.45,
        section: 'Test + Support Bundle Offers',
        isBundle: true,
        testPackCount: 1,
        bottleCount: 1,
        capsuleCount: 60,
      },
      {
        id: 'test-extended-support',
        label: 'Blood Type Test + Extended Support',
        detail: '1 Test Pack + 1 bottle / 90 capsules',
        price: 54.95,
        section: 'Test + Support Bundle Offers',
        isBundle: true,
        testPackCount: 1,
        bottleCount: 1,
        capsuleCount: 90,
      },
      {
        id: '2-test-value-bundle',
        label: '2-Test Value Bundle',
        detail: '2 Test Packs',
        price: 86.88,
        section: 'Multi-Test Value Offers',
        isBundle: false,
        testPackCount: 2,
      },
      {
        id: '2-test-starter-support-bundle',
        label: '2-Test + Starter Support Bundle',
        detail: '2 Test Packs + 1 bottle / 30 capsules',
        price: 87.64,
        section: 'Multi-Test Value Offers',
        isBundle: true,
        testPackCount: 2,
        bottleCount: 1,
        capsuleCount: 30,
      },
      {
        id: '2-test-standard-support-bundle',
        label: '2-Test + Standard Support Bundle',
        detail: '2 Test Packs + 1 bottle / 60 capsules',
        price: 87.76,
        section: 'Multi-Test Value Offers',
        isBundle: true,
        testPackCount: 2,
        bottleCount: 1,
        capsuleCount: 60,
      },
      {
        id: '2-test-extended-support-bundle',
        label: '2-Test + Extended Support Bundle',
        detail: '2 Test Packs + 1 bottle / 90 capsules',
        price: 94.82,
        section: 'Multi-Test Value Offers',
        isBundle: true,
        testPackCount: 2,
        bottleCount: 1,
        capsuleCount: 90,
      },
      {
        id: '3-test-value-bundle',
        label: '3-Test Value Bundle',
        detail: '3 Test Packs',
        price: 96.95,
        section: 'Multi-Test Value Offers',
        isBundle: false,
        testPackCount: 3,
      },
    ] satisfies ProductVariant[],
  },
  {
    id: 'blood-health-support-formula',
    name: 'Blood Health Support Formula',
    slug: 'blood-health-support-formula',
    category: 'supplement',
    description: 'A daily nutritional supplement formulated with iron, vitamin B12, and folate that provides supplemental support for normal nutritional needs related to healthy blood levels, as part of a balanced diet. This product is not intended to diagnose, treat, cure, or prevent any disease.',
    longDescription: 'A daily nutritional supplement with iron, vitamin B12, and folate that provides supplemental support for normal nutritional needs related to healthy blood levels, as part of a balanced diet.',
    features: [
      'Provides supplemental iron as part of a daily nutritional routine',
      'Contains vitamin B12 and folate to support normal nutritional needs',
      'Vitamin C included to help support iron absorption as part of a balanced diet',
      'Beet root extract included, traditionally used in daily wellness routines',
      'One capsule serving per day, easy to incorporate into a daily routine',
    ],
    image: '/images/blood-health-support-formula.png',
    fdaDisclosure: 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement, especially if you have a medical condition, are pregnant or nursing, or are taking blood-thinning medication.',
    supplementDisclaimer: 'This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement.',
    defaultVariantId: 'standard-bottle',
    variants: [
      {
        id: 'starter-bottle',
        label: 'Starter Bottle',
        detail: '1 bottle / 30 capsules',
        price: 9.99,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 30,
      },
      {
        id: 'standard-bottle',
        label: 'Standard Bottle',
        detail: '1 bottle / 60 capsules',
        price: 13.95,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 60,
      },
      {
        id: 'extended-bottle',
        label: 'Extended Bottle',
        detail: '1 bottle / 90 capsules',
        price: 14.75,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 90,
      },
      {
        id: 'complete-bottle',
        label: 'Complete Bottle',
        detail: '1 bottle / 120 capsules',
        price: 17.95,
        section: 'Regular Product Options',
        isBundle: false,
        bottleCount: 1,
        capsuleCount: 120,
      },
      {
        id: '2-bottle-value-bundle',
        label: '2-Bottle Value Bundle',
        detail: '2 bottles / 60 capsules per bottle / 120 capsules total',
        price: 18.75,
        section: 'Bundle Offers',
        isBundle: true,
        bottleCount: 2,
        capsuleCount: 120,
      },
      {
        id: '3-bottle-savings-bundle',
        label: '3-Bottle Savings Bundle',
        detail: '3 bottles / 60 capsules per bottle / 180 capsules total',
        price: 28.76,
        section: 'Bundle Offers',
        isBundle: true,
        bottleCount: 3,
        capsuleCount: 180,
      },
      {
        id: '4-bottle-best-value-bundle',
        label: '4-Bottle Best Value Bundle',
        detail: '4 bottles / 60 capsules per bottle / 240 capsules total',
        price: 38.64,
        section: 'Bundle Offers',
        isBundle: true,
        bottleCount: 4,
        capsuleCount: 240,
      },
    ] satisfies ProductVariant[],
  },
] as const

export type Product = typeof products[number]

export function getDefaultVariant(product: Product): ProductVariant {
  return product.variants.find((v) => v.id === product.defaultVariantId) ?? product.variants[0]
}

export function getStartingPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price))
}
