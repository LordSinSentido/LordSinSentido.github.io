'use client'
import * as motion from 'motion/react-client'
import {
  buttonBase,
  buttonPrimary,
  buttonSecondary
} from '@/utils/buttonClasses'

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
      transition={{ ease: 'circInOut', duration: 0.3 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.button>
  )
}
