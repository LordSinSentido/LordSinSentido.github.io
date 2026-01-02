import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import Stack from '@/layers/Stack'
import Headline from '@/typography/Headline'
import Subheadline from '@/typography/Subheadline'
import Text from '@/typography/Text'
import Button from '@/ui/Button'
import Link from '@/ui/Link'
import Badge from '@/ui/Badge'
import { animationDuration, animationEase } from '@/lib/constants'
import type { Project } from '@/schemas/projectSchema'
import Overlay from './Overlay'

interface DialogProps {
  project: Project
  open: boolean
  handleDialog: () => void
}

export default function Dialog({ project, open, handleDialog }: DialogProps) {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <>
      <AnimatePresence>
        {open && <Overlay callback={handleDialog} />}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            layout
            key='DialogContent'
            className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-lg w-[90vw] max-h-[90dvh] rounded-xl p-4 bg-surface-container overflow-x-scroll scrollbar-none scrollbar-hide'
            layoutId={project.id}
            transition={{ duration: animationDuration, ease: animationEase }}
          >
            <Stack gap='4'>
              <Stack gap='0'>
                <Headline>{project.title}</Headline>
                <Subheadline>{project.type}</Subheadline>
              </Stack>

              {project.description.split(/\n/).map((value, index) => (
                <Text key={`${project.id}-text-${index}`}>{value}</Text>
              ))}

              {open && (
                <motion.div
                  variants={{
                    opened: { opacity: 1, scaleY: 1 },
                    closed: { opacity: 0, scaleY: 0 }
                  }}
                  initial='closed'
                  animate='opened'
                  exit='closed'
                  transition={{
                    duration: animationDuration,
                    ease: animationEase
                  }}
                >
                  <Stack direction='horizontal' className='flex-wrap'>
                    {project.languages?.map((badge) => (
                      <Badge
                        title={badge}
                        key={`${project.id} ${badge} language badge`}
                      />
                    ))}
                    {project.technologies?.map((badge) => (
                      <Badge
                        title={badge}
                        key={`${project.id} ${badge} technology badge`}
                      />
                    ))}
                  </Stack>
                </motion.div>
              )}

              <Stack direction='horizontal' className='justify-end'>
                {project.url && <Link href={project.url}>See demo</Link>}
                {project.repo && <Link href={project.repo}>See repo</Link>}
              </Stack>
            </Stack>

            {open && (
              <motion.div
                className='absolute top-2 right-2 p-2'
                variants={{
                  opened: { opacity: 1, scale: 1 },
                  closed: { opacity: 0, scale: 0 }
                }}
                initial='closed'
                animate='opened'
                exit='closed'
                transition={{
                  duration: animationDuration,
                  ease: animationEase
                }}
              >
                <Button onClick={handleDialog} aria-label='Cerrar diálogo'>
                  <X className='h-5 w-5' />
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
