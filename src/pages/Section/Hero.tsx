import Heading from '@/components/Heading'

export default function Hero() {
  return (
    <div className='flex w-full flex-col py-20 md:flex-row'>
      <div className='flex w-full justify-center p-3 md:w-[25vw] md:justify-start'>
        <div className='flex w-1/2 max-w-48 flex-col gap-[10px] text-lg md:max-w-36'>
          <Heading className='text-gradient text-wrap text-center font-sora font-medium md:text-left'>
            {'Transform Your Website'}
          </Heading>

          <p className='text-nowrap text-center font-outfit font-light leading-6 md:text-wrap md:text-left'>
            {'With Motion Art Effect'}
          </p>
        </div>
      </div>

      <div className='w-full md:w-[50vw]'>
        <Heading className='mb-4 font-sora text-4xl font-medium leading-[55px] md:text-[65px] md:leading-[85px]'>
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

      <div className='w-[25vw]'></div>
    </div>
  )
}
