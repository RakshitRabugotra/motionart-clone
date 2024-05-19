import Heading from '@/components/Heading'
import { USAGE_PREVIEW, UsageType } from '@/utils/content'
import { twMerge } from 'tailwind-merge'

export default function Compatibility() {
  return (
    <div className='pt-[80px]'>
      <Heading className='font-sora text-2xl font-medium leading-[55px]'>
        {'Apply On Any Section Or Enable For Whole Page'}
      </Heading>

      <div className='mt-[50px] flex flex-col gap-5'>
        {USAGE_PREVIEW.map(
          (item: UsageType, index) =>
            // Don't print the last card, as it is reserved for compatibility
            index !== USAGE_PREVIEW.length - 1 && (
              <Card {...item} key={index} />
            ),
        )}
      </div>

      <div className='m-5'>
        <Card
          {...USAGE_PREVIEW[USAGE_PREVIEW.length - 1]}
          className='px-[30px] py-[50px]'
        />
      </div>
    </div>
  )
}

function Card({
  heading,
  description,
  imageSrc,
  className,
}: UsageType & { className?: string }) {
  return (
    <div className={twMerge('card', className)}>
      <Heading className='font-sora mb-3 text-xl font-medium'>
        {heading}
      </Heading>
      <p className='font-outfit text-center text-base font-light leading-8 text-light-300/75'>
        {description}
      </p>
      <div className=' mt-8'>
        <img src={imageSrc} loading='lazy' decoding='async' />
      </div>
    </div>
  )
}
