'use client'
import * as motion from 'motion/react-client'
import { AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface CollapsableInterface {
  header: React.ReactNode
  content: React.ReactNode
}

export default function Collapsable({ header, content }: CollapsableInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <div
        className='w-full relative cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        {header}
        <motion.span
          className='absolute top-0 right-0'
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.3, ease: 'circInOut' }}
        >
          <ChevronDown />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: 'circInOut' }}
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
