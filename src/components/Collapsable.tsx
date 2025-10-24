import type React from 'react'
import { useState } from 'react'
import Button from './Button'

export function Body({
  isOpen,
  children
}: {
  isOpen: boolean
  children: React.ReactElement
}) {
  return (
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen
          ? 'grid-rows-[1fr] opacity-100 mb-2'
          : 'grid-rows-[0fr] invisible opacity-0'
      }`}
    >
      <div className='overflow-hidden'>{children}</div>
    </div>
  )
}

export function Collapsable({ children }: { children?: React.ReactElement }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={`flex flex-col h-full rounded-lg`}>
      {children && <Body isOpen={isOpen}>{children}</Body>}
      <Button.Secondary
        title={isOpen ? 'Show less' : 'Show more'}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  )
}

export default { Collapsable, Body }
