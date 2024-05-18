import Heading from '@/components/Heading'

export default function Hero() {
  return (
    <div className='flex w-full flex-col py-20 md:flex-row'>
      <div className='flex w-full justify-center p-3 md:w-[30vw] md:justify-start'>
        <div className='flex w-1/2 max-w-48 flex-col gap-[10px] text-lg md:max-w-36'>
          <h2 className='text-gradient font-sora text-wrap text-center font-medium md:text-left'>
            {'Transform Your Website'}
          </h2>

          <p className='font-outfit text-nowrap text-center font-light leading-6 md:text-wrap md:text-left'>
            {'With Motion Art Effect'}
          </p>
        </div>
      </div>

      <div className='w-full md:w-[40vw]'>
        <Heading className='font-sora mb-4 font-medium'>
          {'Attract Your Visitors Attention With Colorful'}
          <span className='text-gradient block pb-[10px]'>
            {'Motion Art Effect'}
          </span>
        </Heading>
        <p className='text-center text-base text-light-300/75 md:text-left md:text-lg'>
          {
            'Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. '
          }
        </p>
      </div>

      <div className='w-[30vw]'></div>
    </div>
  )
}
