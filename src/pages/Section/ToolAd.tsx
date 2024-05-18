import Heading from '@/components/Heading'
import { PURCHASE_LINK } from '@/utils/constants'
import { WAND_IMAGE_SRC } from '@/utils/content'

export default function ToolAd() {
  return (
    <div className='pt-16'>
      <div className='flex w-full flex-col items-center p-3'>
        <Heading className='font-sora mb-4 text-2xl font-medium leading-[45px]'>
          {'Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors'}
        </Heading>
        <p className='font-outfit mb-5 text-center text-base leading-8 text-light-300/75 md:text-left'>
          {
            'Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.'
          }
        </p>

        <a
          className='gradient font-sora rounded-[20px] p-5 text-xl text-white'
          href={PURCHASE_LINK}
          target='_blank'
        >
          {'Purchase From Envato \u2192'}
        </a>
      </div>

      <div className='mt-5 w-full'>
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
