import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Button from '@/ui/Button'
import Link from '@/ui/Link'
import Logo from '@/ui/Logo'
import Stack from '@/layers/Stack'
import { animationDuration, animationEase } from '@/lib/constants'
import Overlay from '@/components/layers/Overlay'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOverlay = () => setIsOpen(!isOpen)

  const Sections = () => {
    const sections = [
      { name: 'Skills', ref: '#skills' },
      { name: 'Projects', ref: '#projects' },
      { name: 'Jobs', ref: '#jobs' },
      { name: 'Contact', ref: '#contact' }
    ]
    return (
      <>
        {sections.map((section) => (
          <Link href={section.ref} onClick={handleOverlay} target='_self'>
            {section.name}
          </Link>
        ))}
      </>
    )
  }

  return (
    <>
      <Link href='#' className='fixed top-2 left-2' target='_self'>
        <Logo className='fill-primary size-6' />
      </Link>

      <nav className='fixed top-2 right-2 z-30'>
        <Stack
          direction='horizontal'
          className='sm:visible sm:flex invisible hidden'
        >
          <Sections />
        </Stack>

        <Stack direction='vertical' className='sm:invisible visible items-end'>
          <Button
            className={`${isOpen ? 'z-30' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode='wait' initial={false}>
              {isOpen ? (
                <motion.div
                  key='close'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: animationDuration }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: animationDuration }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          <AnimatePresence>
            {isOpen && <Overlay callback={handleOverlay} />}
          </AnimatePresence>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key='menu'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{
                  duration: animationDuration,
                  ease: animationEase
                }}
                className='overflow-hidden z-30'
                id='collapsible-content'
              >
                <Stack className='items-end'>
                  <Sections />
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </Stack>
      </nav>
    </>
  )
}
