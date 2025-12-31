import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Button from '@/ui/Button'
import Link from '@/ui/Link'
import Logo from '@/ui/Logo'
import Stack from '@/layers/Stack'
import { animationDuration, animationEase } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleDrawer = () => setIsOpen(!isOpen)

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
          <Link href={section.ref} onClick={handleDrawer} target='_self'>
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

      <nav className='fixed top-2 right-2 z-50'>
        <Stack
          direction='horizontal'
          className='sm:visible sm:flex invisible hidden'
        >
          <Sections />
        </Stack>

        <Stack
          direction='vertical'
          className='sm:invisible visible items-end z-50'
        >
          <Button className='z-50' onClick={() => setIsOpen(!isOpen)}>
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
            {isOpen && (
              <motion.div
                key='Overlay'
                className={`fixed inset-0 bg-black/40`}
                initial='closed'
                animate='opened'
                exit='closed'
                variants={{
                  opened: { opacity: 1, pointerEvents: 'auto' },
                  closed: { opacity: 0, pointerEvents: 'none' }
                }}
                transition={{
                  duration: animationDuration,
                  ease: animationEase
                }}
                onClick={handleDrawer}
                id='overlay'
              />
            )}
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
                className='overflow-hidden  z-50'
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
