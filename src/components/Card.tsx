import type React from "react"

export function Header({
  title,
  description,
  children,
}: {
  title: String
  description?: String
  children?: React.ReactElement
}) {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        {title && <p className='text-2xl font-light'>{title}</p>}
        {description && (
          <p className='line-clamp-1 font-light text-base'>{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}

export function Body({ children }: { children: React.ReactNode }) {
  return <div className='flex flex-col gap-5 h-full'>{children}</div>
}

export function Actions({ children }: { children: React.ReactNode }) {
  return <div className='flex gap-2 justify-end flex-wrap'>{children}</div>
}

export function Card({ children }: { children?: React.ReactNode }) {
  return <div className='card'>{children}</div>
}

export default { Card, Header, Body, Actions }
