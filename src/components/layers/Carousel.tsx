import { Children } from 'react'

interface Carousel {
  children: React.ReactNode
}

export default function Carousel({ children }: Carousel) {
  return (
    <div className='flex gap-2 overflow-x-auto  scroll-smooth snap-x snap-mandatory scrollbar-none scrollbar-hide pb-1'>
      {Children.map(children, (child) => (
        <div className='shrink-0 w-[84dvw] max-w-120 snap-start h-full md:scroll-ml-8 scroll-ml-4'>
          {child}
        </div>
      ))}
    </div>
  )
}
