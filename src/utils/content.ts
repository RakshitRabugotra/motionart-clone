/* File containing content constants for the page */
export type ReviewType = {
  imageSrc: string
  starSrc: string
  score: number
  reviewCount: number
}

export const REVIEWS: ReviewType[] = [
  {
    imageSrc: '/reviews/img2.png',
    starSrc: '/reviews/stars.png',
    score: 4.5,
    reviewCount: 9,
  },
  {
    imageSrc: '/reviews/img1.png',
    starSrc: '/reviews/stars.png',
    score: 4.5,
    reviewCount: 9,
  },
  {
    imageSrc: '/reviews/img3.png',
    starSrc: '/reviews/stars.png',
    score: 4.5,
    reviewCount: 9,
  },
]

// The image of the want
export const WAND_IMAGE_SRC = '/wand.png'

// The image in the logo
export const LOGO_IMG_SRC = '/logo.png'

export type UsageType = {
  heading: string
  description: string
  imageSrc: string
}

export const USAGE_PREVIEW: UsageType[] = [
  {
    heading: 'Apply On Section',
    description:
      'Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.',
    imageSrc: '/sections/section1.png',
  },
  {
    heading: 'Apply On Page',
    description:
      'Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.',
    imageSrc: '/sections/section2.png',
  },
  {
    heading: 'Supported by All Popular Browsers',
    description:
      'Rest assured, Motion Art is designed to be compatible with all major web browsers.',
    imageSrc: '/browsers.png',
  },
]

export const FEATURES: UsageType[] = [
  {
    heading: 'Light Weight',
    description: 'Motion Art for Elementor is designed to be lightweight.',
    imageSrc: '/features/img7.png',
  },
  {
    heading: '100% Responsive',
    description: 'Create a consistent visual experience across all devices.',
    imageSrc: '/features/img6.png',
  },
  {
    heading: 'User Friendly Interface',
    description:
      'Ensure a smooth experience for both applicants and administrators.',
    imageSrc: '/features/img8.png',
  },
]
