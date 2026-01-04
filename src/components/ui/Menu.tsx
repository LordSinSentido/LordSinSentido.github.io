import { animationDuration, animationEase } from '@/lib/constants'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface MenuProps {
  children: ReactNode
}

export default function Menu({ children }: MenuProps) {
  return (
    <motion.ul
      whileHover={{ boxShadow: 'var(--shadow-lg)' }}
      transition={{ ease: animationEase, duration: animationDuration }}
      className='flex p-2 gap-2'
    >
      {children}
    </motion.ul>
  )
}
