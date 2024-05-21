export default function Footer() {
  return (
    <div className='gradient relative z-[9] w-screen max-w-[100vw] pt-3'>
      <div className='flex max-w-screen-xl flex-col items-center justify-center font-outfit text-sm font-normal text-light-300/75 md:mx-auto md:flex-row-reverse md:justify-between'>
        <div className='p-3'>
          <ul className='inline-flex '>
            <li className='mx-[15px]'>Documentation</li>
            <li className='mx-[15px]'>Support</li>
          </ul>
        </div>

        <div className='p-3'>
          {'© 2023 Copywrite. All rights reserved by QodeMatrix'}
        </div>
      </div>
    </div>
  )
}
