export interface ProductVariant {
  id: string
  label: string
  detail: string
  price: number
  section: string
  isBundle: boolean
  deviceCount?: number
  image?: string
}

export const products = [
  {
    id: 'circulation-support-device',
    name: 'Circulation Support Device',
    slug: 'circulation-support-device',
    category: 'device',
    description: 'A portable circulation-support device designed for everyday use, using gentle electrical stimulation and mild heat therapy to help support normal blood circulation in the legs and feet as part of a daily wellness routine. This device does not test, sample, or analyze blood in any way.',
    longDescription: 'Support healthy circulation from the comfort of home. The Circulation Support Device is designed for simple, everyday use, combining gentle electrical stimulation with mild heat therapy to help promote normal blood circulation in the legs and feet as part of a daily wellness routine.',
    features: [
      'Adjustable intensity levels for gentle stimulation',
      'Mild heat therapy function',
      'Compact, portable design for home use',
      'Simple power, mode, and intensity controls',
      'Rechargeable battery',
      'Includes user guide',
    ],
    image: '/images/products/device-1x.jpg',
    medicalDisclaimer: 'This product is a general wellness circulation-support device. It does not test, sample, diagnose, or analyze blood or any biological material. It is not a substitute for professional medical advice. Always consult a qualified healthcare provider regarding any health concerns, especially if you have a pacemaker or other implanted medical device.',
    defaultVariantId: 'single-device',
    variants: [
      {
        id: 'single-device',
        label: 'Circulation Support Device',
        detail: '1 Device',
        price: 47.89,
        section: 'Single Device Offer',
        isBundle: false,
        deviceCount: 1,
        image: '/images/products/device-1x.jpg',
      },
      {
        id: 'device-starter-support',
        label: 'Circulation Support Device — Plus',
        detail: '1 Device',
        price: 49.76,
        section: 'Single Device Offer',
        isBundle: false,
        deviceCount: 1,
        image: '/images/products/device-1x.jpg',
      },
      {
        id: 'device-standard-support',
        label: 'Circulation Support Device — Premium',
        detail: '1 Device',
        price: 53.45,
        section: 'Single Device Offer',
        isBundle: false,
        deviceCount: 1,
        image: '/images/products/device-1x.jpg',
      },
      {
        id: 'device-extended-support',
        label: 'Circulation Support Device — Complete',
        detail: '1 Device',
        price: 54.95,
        section: 'Single Device Offer',
        isBundle: false,
        deviceCount: 1,
        image: '/images/products/device-1x.jpg',
      },
      {
        id: '2-device-value-bundle',
        label: '2-Device Value Bundle — Standard',
        detail: '2 Devices',
        price: 86.88,
        section: 'Multi-Device Value Offers',
        isBundle: false,
        deviceCount: 2,
        image: '/images/products/device-2x.jpg',
      },
      {
        id: '2-device-starter-support-bundle',
        label: '2-Device Value Bundle — Plus',
        detail: '2 Devices',
        price: 87.64,
        section: 'Multi-Device Value Offers',
        isBundle: false,
        deviceCount: 2,
        image: '/images/products/device-2x.jpg',
      },
      {
        id: '2-device-standard-support-bundle',
        label: '2-Device Value Bundle — Premium',
        detail: '2 Devices',
        price: 87.76,
        section: 'Multi-Device Value Offers',
        isBundle: false,
        deviceCount: 2,
        image: '/images/products/device-2x.jpg',
      },
      {
        id: '2-device-extended-support-bundle',
        label: '2-Device Value Bundle — Complete',
        detail: '2 Devices',
        price: 94.82,
        section: 'Multi-Device Value Offers',
        isBundle: false,
        deviceCount: 2,
        image: '/images/products/device-2x.jpg',
      },
      {
        id: '3-device-value-bundle',
        label: '3-Device Value Bundle',
        detail: '3 Devices',
        price: 96.95,
        section: 'Multi-Device Value Offers',
        isBundle: false,
        deviceCount: 3,
        image: '/images/products/device-3x.jpg',
      },
    ] satisfies ProductVariant[],
  },
  {
    id: 'blood-health-support-formula',
    name: 'Compression Support Socks',
    slug: 'blood-health-support-formula',
    category: 'accessory',
    description: 'A pair of general compression-style support socks designed for everyday comfort as part of a daily wellness routine. Intended for general comfort and support use — not a medical or diagnostic product.',
    longDescription: 'Everyday compression-style support socks designed for comfort as part of a daily wellness routine. A simple, general-purpose comfort accessory — not a medical or diagnostic product.',
    features: [
      'Snug, supportive knit for everyday wear',
      'Reinforced heel and toe',
      'One general adult size',
      'Machine washable',
      'Pairs naturally with daily use of the Circulation Support Device',
    ],
    image: '/images/products/compression-socks-1x.jpg',
    medicalDisclaimer: 'This product is a general comfort accessory. It does not test, sample, diagnose, or analyze blood or any biological material, and it is not a substitute for professional medical advice. Consult a qualified healthcare provider regarding any health concerns.',
    defaultVariantId: 'standard-pair',
    variants: [
      {
        id: 'starter-pair',
        label: '1 Pair — Standard',
        detail: '1 Pair of Compression Support Socks',
        price: 9.99,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/compression-socks-1x.jpg',
      },
      {
        id: 'standard-pair',
        label: '1 Pair — Plus',
        detail: '1 Pair of Compression Support Socks',
        price: 13.95,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/compression-socks-1x.jpg',
      },
      {
        id: 'extended-pair',
        label: '1 Pair — Premium',
        detail: '1 Pair of Compression Support Socks',
        price: 14.75,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/compression-socks-1x.jpg',
      },
      {
        id: 'complete-pair',
        label: '1 Pair — Complete',
        detail: '1 Pair of Compression Support Socks',
        price: 17.95,
        section: 'Regular Product Options',
        isBundle: false,
        image: '/images/products/compression-socks-1x.jpg',
      },
      {
        id: '2-pair-value-bundle',
        label: '2-Pair Value Bundle',
        detail: '2 Pairs of Compression Support Socks',
        price: 18.75,
        section: 'Bundle Offers',
        isBundle: true,
        image: '/images/products/compression-socks-2x.jpg',
      },
      {
        id: '3-pair-savings-bundle',
        label: '3-Pair Savings Bundle',
        detail: '3 Pairs of Compression Support Socks',
        price: 28.76,
        section: 'Bundle Offers',
        isBundle: true,
        image: '/images/products/compression-socks-3x.jpg',
      },
      {
        id: '4-pair-best-value-bundle',
        label: '4-Pair Best Value Bundle',
        detail: '4 Pairs of Compression Support Socks',
        price: 38.64,
        section: 'Bundle Offers',
        isBundle: true,
        image: '/images/products/compression-socks-4x.jpg',
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
