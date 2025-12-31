import { useEffect, useState } from 'react'
import Button from '@/ui/Button'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { animationDuration, animationEase } from '@/lib/constants'

interface Drawer {
  children: React.ReactNode
  title: string
}

export default function Drawer({ children, title }: Drawer) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleDrawer = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  return (
    <>
      <Button buttonType='primary' onClick={handleDrawer}>
        {title}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='Overlay'
            className={`fixed inset-0 bg-black/40 z-75`}
            initial='closed'
            animate='opened'
            exit='closed'
            variants={{
              opened: { opacity: 1, pointerEvents: 'auto' },
              closed: { opacity: 0, pointerEvents: 'none' }
            }}
            transition={{ duration: animationDuration, ease: animationEase }}
            onClick={handleDrawer}
            id='overlay'
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='DrawerContent'
            className='fixed left-0 right-0 bottom-0 z-75 bg-surface-container-high rounded-t-2xl shadow-xl max-w-4xl mx-auto w-full'
            variants={{
              opened: { translateY: 0 },
              closed: { translateY: '100%' }
            }}
            initial='closed'
            animate='opened'
            exit='closed'
            transition={{ duration: animationDuration, ease: animationEase }}
            id='drawer-content'
          >
            <div className='relative max-h-[95dvh] overflow-y-auto p-4'>
              {children}
              <Button
                className='absolute top-0 right-0 mt-4 mr-4'
                onClick={handleDrawer}
              >
                <X />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
