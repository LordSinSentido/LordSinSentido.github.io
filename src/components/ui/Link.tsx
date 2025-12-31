import * as motion from 'motion/react-client'
import { buttonBase, buttonSecondary } from '@/ui/ButtonClasses'
import { animationDuration, animationEase } from '@/lib/constants'

type Target = '_blank' | '_self'
interface Link {
  href: string
  className?: string
  children: React.ReactNode
  target?: Target
  onClick?: () => void
}

export default function Link({
  children = 'Link',
  href,
  className,
  target,
  onClick
}: Link) {
  return (
    <motion.a
      onClick={onClick}
      href={href}
      target={target ?? '_blank'}
      className={`${buttonBase} ${buttonSecondary} ${className}`}
      transition={{ ease: animationEase, duration: animationDuration }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.a>
  )
}
