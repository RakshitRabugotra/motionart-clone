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
    <h1 id={id} className={twMerge('text-center md:text-left', className)}>
      {children}
    </h1>
  )
}
