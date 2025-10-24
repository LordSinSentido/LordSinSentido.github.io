import React, { useState } from 'react'
import Button from './Button'
import Container from './Container'
import type { LucideIcon } from 'lucide-react'

export default function Tabs({
  items
}: {
  items: {
    name: string
    icon?: React.ReactElement<React.ComponentProps<LucideIcon>>
    element: React.ReactElement
  }[]
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  return (
    <div className='grid grid-cols-1 gap-2'>
      <div className='flex gap-1 justify-center-safe scrollbar-hide overflow-x-scroll'>
        {items.map((item, index) => (
          <div
            className='block flex-none'
            key={`Button #${index} ${item.name}`}
          >
            <Button.Secondary
              title={item.name}
              icon={item?.icon}
              onClick={() => setCurrentIndex(index)}
              isActive={currentIndex == index}
            />
          </div>
        ))}
      </div>
      {items.map((item, index) => (
        <div
          className={`${currentIndex == index ? '' : 'hidden'}`}
          key={`Element #${index} ${item.name}`}
        >
          <Container>{item.element}</Container>
        </div>
      ))}
    </div>
  )
}
