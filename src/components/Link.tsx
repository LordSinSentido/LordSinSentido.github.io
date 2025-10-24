import { ExternalLink, type LucideIcon } from 'lucide-react'
import React from 'react'

export default function Link({
  href,
  title,
  icon
}: {
  href: string
  title: string
  icon?: React.ReactElement<React.ComponentProps<LucideIcon>>
}) {
  return (
    <a
      className='button-secondary block'
      target='_blank'
      href={href.toString()}
    >
      <span className='inline-block'>
        {icon ? (
          React.cloneElement(icon, { className: 'button-icon' })
        ) : (
          <ExternalLink className='button-icon' />
        )}
      </span>{' '}
      {title}
    </a>
  )
}
