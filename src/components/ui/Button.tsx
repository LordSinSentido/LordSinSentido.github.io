import { motion } from 'motion/react'

import { buttonBase, buttonPrimary, buttonSecondary } from '@/ui/ButtonClasses'
import { animationDuration, animationEase } from '@/lib/constants'

type ButtonType = 'primary' | 'secondary'

interface ButtonInterface {
  buttonType?: ButtonType
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  children = 'Button',
  buttonType = 'secondary',
  onClick,
  className
}: ButtonInterface) {
  const buttonStyles: Record<ButtonType, string> = {
    primary: buttonPrimary,
    secondary: buttonSecondary
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${buttonBase} ${buttonStyles[buttonType]} ${className}`}
      transition={{ ease: animationEase, duration: animationDuration }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.button>
  )
}
