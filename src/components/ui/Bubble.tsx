import { animationEase } from '@/lib/constants'
import { motion } from 'motion/react'

interface BubbleProps {
  color?: `bg-${string}` | undefined
  quantity?: number
  animate?: boolean
}
export default function Bubble({ color, quantity, animate }: BubbleProps) {
  return (
    <div className='relative size-4 flex-none'>
      {Array.from({ length: quantity ?? 4 }).map((_, index, values) => (
        <motion.div
          className={`w-full h-full absolute top-0 left-0 ${
            color ?? 'bg-primary'
          } rounded-full`}
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
