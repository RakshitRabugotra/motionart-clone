/* Example heading component, delete if not needed */

import { twMerge } from 'tailwind-merge'

export default function Heading({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <h1
      id={id}
      className={twMerge(
        'text-center text-4xl leading-[55px] md:text-left md:text-[65px] md:leading-[75px]',
        className,
      )}
    >
      {children}
    </h1>
  )
}
