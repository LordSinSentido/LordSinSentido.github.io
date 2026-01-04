import * as motion from 'motion/react-client'
import { buttonBase, buttonSecondary } from '@/ui/ButtonClasses'
import { animationDuration, animationEase } from '@/lib/constants'

type Target = '_blank' | '_self'

interface LinkProps {
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
}: LinkProps) {
  return (
    <motion.a
      onClick={onClick}
      href={href}
      target={target ?? '_blank'}
      className={`${buttonBase} ${buttonSecondary} ${className}`}
      transition={{ ease: animationEase, duration: animationDuration }}
      whileHover={{ opacity: 0.8 }}
      whileTap={{ opacity: 0.6 }}
    >
      {children}
    </motion.a>
  )
}
