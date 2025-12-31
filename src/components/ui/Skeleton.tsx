import { motion } from 'motion/react'

type Rounded = 'xs' | 'lg' | 'md' | 'full'
type Height = `h-${string}`
type Width = `w-${string}`

interface Skeleton {
  className?: string
  rounded?: Rounded
  height?: Height
  width?: Width
}

export function Skeleton({ className, rounded, height, width }: Skeleton) {
  const roundedValues: Record<Rounded, string> = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    xs: 'rounded-xs'
  }

  return (
    <motion.div
      className={`
        ${rounded ? roundedValues[rounded] : roundedValues['lg']}
        ${height ?? 'h-4'}
        ${width ?? 'w-full'} 
        bg-foreground 
        ${className ?? ''}
      `}
      initial={{ opacity: 0.4 }}
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    />
  )
}
