export const products = [
  {
    id: 'blood-type-test-pack',
    name: 'Blood Type Test Pack',
    price: 27.95,
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
    medicalDisclaimer: 'This product is intended for general informational and educational purposes. It is not intended for use prior to blood transfusion, surgery, or medical procedures, and does not replace laboratory blood typing performed by a healthcare provider. Always confirm your blood type through a licensed medical professional before any medical decision.',
  },
  {
    id: 'blood-health-support-formula',
    name: 'Blood Health Support Formula',
    price: 29.95,
    slug: 'blood-health-support-formula',
    category: 'supplement',
    description: 'A standardized daily supplement formulated to help support healthy blood pressure levels already within a normal range and everyday cardiovascular health as part of a balanced lifestyle. This product is not intended to diagnose, treat, cure, or prevent any disease.',
    longDescription: 'Support your cardiovascular health with a standardized daily formula designed to help support blood pressure levels already within a normal range as part of a balanced lifestyle.',
    features: [
      'Formulated to support healthy blood pressure levels already within a normal range',
      'Supports everyday cardiovascular health as part of a balanced lifestyle',
      'Standardized formula for consistent potency in every capsule',
      '90 capsules per bottle',
      'One capsule serving per day',
    ],
    image: '/images/blood-health-support-formula.png',
    fdaDisclosure: 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement, especially if you have a medical condition, are pregnant or nursing, or are taking blood pressure medication.',
    supplementDisclaimer: 'This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement.',
  },
] as const

export type Product = typeof products[number]
