import Heading from '@/components/Heading'
import { FEATURES, UsageType } from '@/utils/content'
import { twMerge } from 'tailwind-merge'

export default function Features() {
  return (
    <div className='flex flex-col items-center pt-8 md:py-[100px]'>
      <div>
        <Heading className='mb-3 font-sora text-2xl font-medium leading-[45px] md:max-w-[690px] md:text-center md:text-[40px] md:leading-[60px]'>
          {'An All-Round Plugin With Powerful Features'}
        </Heading>

        <p className='break-words text-center text-base font-light leading-[30px] text-light-300/75 md:max-w-[690px]'>
          {
            "Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience."
          }
        </p>
      </div>

      <div className='flex flex-col flex-wrap justify-between gap-5 md:flex-row md:pt-[50px] lg:flex-nowrap'>
        {FEATURES.map((item: UsageType, index) =>
          index === FEATURES.length - 1 ? (
            <Card
              {...item}
              key={index}
              className='md:basis-full lg:basis-1/3'
            />
          ) : (
            <Card
              {...item}
              key={index}
              className='md:max-w-[47%] lg:basis-1/3'
            />
          ),
        )}
      </div>
    </div>
  )
}

function Card({
  heading,
  description,
  imageSrc,
  className,
}: UsageType & { className: string }) {
  return (
    <div className={twMerge('card flex flex-col', className)}>
      <div className='self-start'>
        <img
          src={imageSrc}
          decoding='async'
          loading='lazy'
          className=' -ml-5'
        />
      </div>
      <div>
        <Heading className='text-left font-sora text-xl font-medium leading-[45px]'>
          {heading}
        </Heading>
        <p className='font-outfit text-base font-light leading-[30px] text-light-300/75 md:text-lg'>
          {description}
        </p>
      </div>
    </div>
  )
}
