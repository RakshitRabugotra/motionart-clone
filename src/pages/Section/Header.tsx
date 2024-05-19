import { LOGO_IMG_SRC } from '@/utils/content'

export default function Header() {
  return (
    <div className='inline-flex w-full pt-5'>
      <div className='basis-1/2 p-3'>
        <img src={LOGO_IMG_SRC} loading='lazy' decoding='async' />
      </div>
      <div className='basis-1/2'></div>
    </div>
  )
}
