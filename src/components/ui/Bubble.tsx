import { animationEase } from '@/lib/constants'
import { motion } from 'motion/react'

interface Bubble {
  color?: `bg-${string}` | undefined
  quantity?: number
  animate?: boolean
}
export default function Bubble({ color, quantity, animate }: Bubble) {
  return (
    <div>
      {Array.from({ length: quantity ?? 3 }).map((_, index, values) => (
        <motion.div
          className={`size-4 ${color ?? 'bg-primary'} rounded-full absolute`}
          animate={animate ? 'animate' : 'static'}
          variants={{
            animate: { scale: [0, 1.5, 0.0], opacity: [0, 1, 0, 0] },
            static: { scale: 1, opacity: 1 }
          }}
          transition={{
            ease: animationEase,
            duration: values.length,
            repeat: Infinity,
            delay: index
          }}
        />
      ))}
    </div>
  )
}
