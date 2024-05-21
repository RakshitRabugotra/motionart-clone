import { PURCHASE_LINK } from '@/utils/constants'
import { LOGO_IMG_SRC } from '@/utils/content'

export default function Header() {
  return (
    <div className='inline-flex w-full px-5 pt-5'>
      <div className='basis-1/2 p-3'>
        <img
          src={LOGO_IMG_SRC}
          loading='lazy'
          decoding='async'
          className='relative z-[9]'
        />
      </div>
      <div className='basis-1/2'>
        <a
          href={PURCHASE_LINK}
          className='ml-auto hidden max-w-fit rounded-md border-2 bg-white px-[35px] py-4 font-outfit text-lg text-dark-800 md:block'
        >
          Purchase Now
        </a>
      </div>
    </div>
  )
}
