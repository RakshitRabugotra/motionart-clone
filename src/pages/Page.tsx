import { useTitle } from '@/utils/hooks'

import Banner from './Section/Banner'
import Hero from './Section/Hero'
import Reviews from './Section/Reviews'
import ToolAd from './Section/ToolAd'
import Heading from '@/components/Heading'
import { USAGE_PREVIEW, UsageType } from '@/utils/content'

export default function Page() {
  // Give the page a title
  useTitle()

  return (
    <div className='min-h-screen bg-dark-900 p-4 text-light-300 md:p-5'>
      <Banner />
      <Hero />
      <Reviews />
      <ToolAd />
      <Compatibility />
    </div>
  )
}

function Compatibility() {
  return (
    <div className='pt-[80px]'>
      <Heading className='font-sora text-2xl font-medium leading-[55px]'>
        {'Apply On Any Section Or Enable For Whole Page'}
      </Heading>

      <div>
        {USAGE_PREVIEW.map((item: UsageType, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  )
}

function Card({ heading, description, imageSrc }: UsageType) {
  return (
    <div>
      <img src={imageSrc} loading='lazy' decoding='async' />
    </div>
  )
}
