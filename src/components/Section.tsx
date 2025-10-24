import type { LucideIcon } from 'lucide-react'
import React from 'react'

export function Title({
  title,
  icon
}: {
  title: string
  icon?: React.ReactElement<React.ComponentProps<LucideIcon>>
}) {
  return (
    <div className='flex items-center px-4 sm:px-6 md:px-10 gap-2 text-2xl mt-20 mb-5'>
      {React.isValidElement(icon) && icon}
      <h3 className='uppercase text-left'>{title}</h3>
    </div>
  )
}

export function Section({
  id,
  children
}: {
  id: string
  children: React.ReactNode
}) {
  return <section id={id}>{children}</section>
}

export function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-5 px-4 sm:px-6 md:px-10'>{children}</div>
  )
}

export default { Section, Title, Body }
