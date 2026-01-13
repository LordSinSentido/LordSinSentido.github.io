import type { ReactNode } from 'react'

interface MenuProps {
  children: ReactNode
}

export default function Menu({ children }: MenuProps) {
  return (
    <menu className='flex p-2 gap-2 rounded-xl bg-surface-container-highest shadow-md'>
      {children}
    </menu>
  )
}
