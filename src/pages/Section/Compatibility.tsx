import Heading from '@/components/Heading'
import { USAGE_PREVIEW, UsageType } from '@/utils/content'
import { twMerge } from 'tailwind-merge'

export default function Compatibility() {
  return (
    <div className='pt-[80px]'>
      <Heading className='max-w-fit font-sora text-2xl font-medium leading-[55px] md:mx-auto md:max-w-[690px] md:text-center md:text-[40px] md:leading-[60px]'>
        {'Apply On Any Section Or Enable For Whole Page'}
      </Heading>

      <div className='mt-[50px] flex flex-col gap-5 md:flex-row md:justify-between'>
        {USAGE_PREVIEW.map(
          (item: UsageType, index) =>
            // Don't print the last card, as it is reserved for compatibility
            index !== USAGE_PREVIEW.length - 1 && (
              <Card
                {...item}
                key={index}
                className={twMerge(
                  'md:max-w-fit',
                  index % 2 == 0 ? 'md:mb-32' : 'md:mt-32',
                )}
              />
            ),
        )}
      </div>

      <div className='m-5 md:mt-[100px]'>
        <Card
          {...USAGE_PREVIEW[USAGE_PREVIEW.length - 1]}
          className='flex flex-col items-center px-[30px] py-[50px] [&>p]:text-center'
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
      <Heading className='mb-3 font-sora text-xl font-medium sm:text-left md:text-2xl'>
        {heading}
      </Heading>
      <p className='text-center font-outfit text-base font-light leading-8 text-light-300/75 sm:text-left md:max-w-[40vw] md:text-lg lg:text-left'>
        {description}
      </p>
      <div className='mt-8'>
        <img
          src={imageSrc}
          loading='lazy'
          decoding='async'
          className='mx-auto'
        />
      </div>
    </div>
  )
}
