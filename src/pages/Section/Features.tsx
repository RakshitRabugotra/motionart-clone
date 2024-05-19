import Heading from '@/components/Heading'
import { FEATURES, UsageType } from '@/utils/content'

export default function Features() {
  return (
    <div className='pt-8'>
      <Heading className='font-sora mb-3 text-2xl font-medium leading-[45px]'>
        {'An All-Round Plugin With Powerful Features'}
      </Heading>

      <p className='break-words text-center text-base font-light leading-[30px] text-light-300/75 md:text-left'>
        {
          "Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience."
        }
      </p>

      <div className='flex flex-col gap-5'>
        {FEATURES.map((item: UsageType, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  )
}

function Card({ heading, description, imageSrc }: UsageType) {
  return (
    <div className='card flex flex-col'>
      <div className='self-start'>
        <img
          src={imageSrc}
          decoding='async'
          loading='lazy'
          className=' -ml-5'
        />
      </div>
      <div>
        <Heading className='font-sora text-left text-xl font-medium leading-[45px]'>
          {heading}
        </Heading>
        <p className='font-outfit text-base font-light text-light-300/75'>
          {description}
        </p>
      </div>
    </div>
  )
}
