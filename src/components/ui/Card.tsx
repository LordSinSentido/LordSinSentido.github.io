import { motion } from 'motion/react'

interface Card {
  children: React.ReactNode
  classname?: string
  delay?: number
}

export default function Card({ children, classname, delay = 1 }: Card) {
  return (
    <div className={`rounded-xl p-4 bg-surface-container ${classname}`}>
      {children}
    </div>
    // <motion.div
    //   className={`rounded-xl p-4 bg-surface-container ${classname}`}
    //   initial={{ opacity: 0, translateY: '0.2rem' }}
    //   whileInView={{ opacity: 1, translateY: 0 }}
    //   transition={{
    //     duration: 0.5,
    //     ease: 'circInOut',
    //     delay: 0.2 * delay
    //   }}
    //   viewport={{ once: true }}
    // >
    //   {children}
    // </motion.div>
  )
}
