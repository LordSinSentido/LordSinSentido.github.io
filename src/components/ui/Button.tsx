import { motion } from 'motion/react'

import {
  buttonBase,
  buttonDisabled,
  buttonPrimary,
  buttonSecondary
} from '@/ui/ButtonClasses'
import { animationDuration, animationEase } from '@/lib/constants'

type ButtonType = 'primary' | 'secondary'

interface ButtonProps {
  buttonType?: ButtonType
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({
  children = 'Button',
  buttonType = 'secondary',
  onClick,
  className,
  disabled
}: ButtonProps) {
  const buttonStyles: Record<ButtonType, string> = {
    primary: buttonPrimary,
    secondary: buttonSecondary
  }

  if (disabled)
    return (
      <button
        disabled={true}
        className={`${buttonBase} ${buttonDisabled} ${className}`}
      >
        {children}
      </button>
    )

  return (
    <motion.button
      onClick={onClick}
      className={`${buttonBase} ${buttonStyles[buttonType]} ${className}`}
      transition={{ ease: animationEase, duration: animationDuration }}
      whileHover={{ opacity: 0.8 }}
      whileTap={{ opacity: 0.6 }}
    >
      {children}
    </motion.button>
  )
}
