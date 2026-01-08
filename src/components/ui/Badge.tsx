import Text from '@/typography/Text.tsx'
import type { ReactElement } from 'react'

interface BadgeProps {
  title: string
  icon?: ReactElement
}

export default function Badge({ title, icon }: BadgeProps) {
  return (
    <div className='inline-flex gap-2 items-center rounded-full bg-tertiary text-on-tertiary py-1 px-2 cursor-default'>
      {icon && icon}
      <Text size='sm'>{title}</Text>
    </div>
  )
}
