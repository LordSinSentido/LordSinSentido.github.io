import { motion } from 'motion/react'
import { Link, useMatch } from 'react-router-dom'
import { animationDuration, animationEase } from '@/lib/constants'
import type { ReactNode } from 'react'

interface MenuItemProps {
  icon?: ReactNode
  title: string
  href: string
  target?: '_self' | '_blank'
}

export default function MenuItem({ icon, href, target }: MenuItemProps) {
  const match = useMatch({ path: href, end: true })
  const isCurrentLocation = !!match

  return (
    <motion.li
      animate={
        isCurrentLocation
          ? { backgroundColor: 'var(--color-surface-container-lowest)' }
          : { backgroundColor: 'var(--color-surface-container-highest)' }
      }
      whileHover={
        isCurrentLocation
          ? { backgroundColor: 'var(--color-surface-container-lowest)' }
          : { backgroundColor: 'var(--color-surface-container)' }
      }
      whileFocus={{ backgroundColor: 'var(--color-surface-container)' }}
      whileTap={{ backgroundColor: 'var(--color-surface-container-lowest)' }}
      transition={{ ease: animationEase, duration: animationDuration }}
      className='cursor-pointer select-none relative inline-block rounded-lg group overflow-hidden'
    >
      <Link
        target={target ?? '_self'}
        className='flex flex-col items-center-safe gap-2 p-2'
        to={href}
      >
        <span>{icon}</span>
      </Link>
    </motion.li>
  )
}
