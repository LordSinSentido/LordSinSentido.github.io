'use client'
import * as motion from 'motion/react-client'
import { buttonBase, buttonSecondary } from '@/utils/buttonClasses'

interface ButtonInterface {
  href: string
  children: React.ReactNode
}

export default function Link({ children = 'Link', href }: ButtonInterface) {
  return (
    <motion.a
      href={href}
      target='_blank'
      className={`${buttonBase} ${buttonSecondary}`}
      transition={{ ease: 'circInOut', duration: 0.3 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.a>
  )
}
