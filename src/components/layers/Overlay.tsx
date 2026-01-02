import { animationDuration, animationEase } from '@/lib/constants'
import { motion } from 'motion/react'

interface OverlayProps {
  callback: () => void
}

export default function Overlay({ callback }: OverlayProps) {
  return (
    <motion.div
      key='Overlay'
      className='fixed inset-0 bg-black/40 z-25 backdrop-blur-sm'
      initial='closed'
      animate='opened'
      exit='closed'
      variants={{
        opened: { opacity: 1, pointerEvents: 'auto' },
        closed: { opacity: 0, pointerEvents: 'none' }
      }}
      transition={{ duration: animationDuration, ease: animationEase }}
      onClick={callback}
      id='overlay'
    />
  )
}
