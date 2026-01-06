import { motion } from 'motion/react'
import { AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { animationDuration, animationEase } from '@/lib/constants'

interface CollapsableProps {
  header: React.ReactNode
  content?: React.ReactNode
  disabled?: boolean
}

export default function Collapsable({
  header,
  content,
  disabled
}: CollapsableProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <motion.div
      className={`rounded-xl p-4`}
      initial='closed'
      variants={{
        opened: {
          backgroundColor: 'var(--color-secondary-container',
          color: 'var(-on-secondary-container)'
        },
        closed: {
          backgroundColor: 'var(--color-surface-container)',
          color: 'var(--color-on-surface)'
        }
      }}
      animate={open ? 'opened' : 'closed'}
      transition={{ duration: animationDuration, ease: animationEase }}
    >
      <div
        className={`flex items-center w-full gap-4 overflow-hidden ${
          disabled ? '' : 'cursor-pointer'
        }`}
        onClick={() => setOpen(disabled ? false : !open)}
      >
        <div className='flex-1'>{header}</div>
        <motion.span
          className='flex-none'
          animate={{ rotate: open ? -180 : 0 }}
          transition={{ duration: animationDuration, ease: animationEase }}
        >
          <ChevronDown />
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && !disabled && (
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
    </motion.div>
  )
}
