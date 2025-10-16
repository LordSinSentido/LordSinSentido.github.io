import { ExternalLink, type LucideIcon } from "lucide-react"
import React from "react"

export default function Link({
  href,
  title,
  icon,
}: {
  href: string
  title: string
  icon?: React.ReactElement<React.ComponentProps<LucideIcon>>
}) {
  return (
    <a className='button-secondary' target='_blank' href={href.toString()}>
      <div className='flex gap-2 items-center'>
        {icon ? (
          React.cloneElement(icon, { className: "button-icon" })
        ) : (
          <ExternalLink className='button-icon' />
        )}
        {title}
      </div>
    </a>
  )
}
