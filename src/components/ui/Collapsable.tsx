import { motion } from 'motion/react'
import { AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { animationDuration, animationEase } from '@/lib/constants'

interface Collapsable {
  header: React.ReactNode
  content?: React.ReactNode
  disabled?: boolean
}

export default function Collapsable({
  header,
  content,
  disabled
}: Collapsable) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <div
        className={`flex items-center w-full ${
          disabled ? '' : 'cursor-pointer'
        }`}
        onClick={() => setIsOpen(disabled ? false : !isOpen)}
      >
        <div className='flex-1'>{header}</div>
        <motion.span
          className='flex-none'
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: animationDuration, ease: animationEase }}
        >
          <ChevronDown />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && !disabled && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: animationDuration, ease: animationEase }}
            className='overflow-hidden'
            id='collapsible-content'
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
