import Heading from '@/components/Heading'
import { PURCHASE_LINK } from '@/utils/constants'
import { WAND_IMAGE_SRC } from '@/utils/content'

export default function ToolAd() {
  return (
    <div className='flex flex-col items-center pt-16 md:flex-row md:justify-between'>
      <div className='flex w-full flex-col items-center p-3 md:max-w-[55vw] md:items-start'>
        <Heading className='mb-4 font-sora text-2xl font-medium leading-[45px] md:text-[40px] md:leading-[60px]'>
          {'Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors'}
        </Heading>
        <p className='mb-5 text-center font-outfit text-base leading-8 text-light-300/75 md:text-left'>
          {
            'Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.'
          }
        </p>

        <a
          className='gradient rounded-[20px] p-5 font-sora text-xl text-white'
          href={PURCHASE_LINK}
          target='_blank'
        >
          {'Purchase From Envato \u2192'}
        </a>
      </div>

      <div className='mt-5 w-full md:w-fit'>
        <img
          src={WAND_IMAGE_SRC}
          loading='lazy'
          decoding='async'
          className='mx-auto object-cover'
        />
      </div>
    </div>
  )
}
