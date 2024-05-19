export default function Footer() {
  return (
    <div className='gradient font-outfit flex flex-col items-center justify-center pt-3 text-sm font-normal text-light-300/75'>
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
  )
}
