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
import Overlay from '@/layers/Overlay'
import Card from '@/layers/Card'
import type { Project } from '@/schemas/projectSchema'

interface DialogProps {
  project: Project
  open: boolean
  handleDialog: (project?: Project) => void
}

export const ProjectCard = ({ project, open, handleDialog }: DialogProps) => {
  return (
    <Card>
      <Stack>
        <Stack gap='0'>
          <Headline>{project.title}</Headline>
          <Subheadline>{project.type}</Subheadline>
        </Stack>

        {!open && (
          <Text className={`${!open && 'line-clamp-3'}`}>
            {project.description}
          </Text>
        )}

        {open &&
          project.description
            .split(/\n/)
            .map((value, index) => (
              <Text key={`${project.id}-text-${index}`}>{value}</Text>
            ))}

        {open && (
          <Stack direction='horizontal' gap='1.5' className='flex-wrap'>
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
        )}

        <Stack direction='horizontal' gap='2' className='justify-end'>
          {open && project.url && <Link href={project.url}>See demo</Link>}
          {project.repo && <Link href={project.repo}>See repo</Link>}
          {!open && (
            <Button buttonType='primary' onClick={handleDialog}>
              See more
            </Button>
          )}
        </Stack>
      </Stack>

      {open && (
        <div className='absolute top-2 right-2 p-2'>
          <Button
            buttonType='primary'
            onClick={handleDialog}
            aria-label='Cerrar diálogo'
          >
            <X className='h-5 w-5' />
          </Button>
        </div>
      )}
    </Card>
  )
}

export const Dialog = ({ project, open, handleDialog }: DialogProps) => {
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
            className='fixed shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl w-[90vw] max-h-[90dvh] overflow-x-scroll scrollbar-none scrollbar-hide'
            initial='closed'
            animate='opened'
            exit='closed'
            variants={{
              opened: { opacity: 1, translateY: 0, pointerEvents: 'auto' },
              closed: { opacity: 0, translateY: '1rem', pointerEvents: 'none' }
            }}
            transition={{ duration: animationDuration, ease: animationEase }}
          >
            <ProjectCard
              project={project}
              open={open}
              handleDialog={handleDialog}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default { ProjectCard, Dialog }
