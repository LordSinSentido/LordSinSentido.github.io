import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Section from '@/layers/Section'
import Stack from '@/layers/Stack'
import Carousel from '@/layers/Carousel'
import Text from '@/typography/Text'
import Title from '@/typography/Title'
import Headline from '@/typography/Headline'
import Subheadline from '@/typography/Subheadline'
import Card from '@/ui/Card'
import Link from '@/ui/Link'
import { Skeleton } from '@/ui/Skeleton'
import random from '@/lib/random'
import Issue from '@/ui/Issue'
import type { Project } from '@/schemas/projectSchema'
import { db } from '@/lib/firebase'
import { animationDuration, animationEase, type Status } from '@/lib/constants'
import Dialog from '@/components/layers/Dialog'
import { motion } from 'motion/react'
import Button from '@/components/ui/Button'

export default function Experience() {
  const uid = import.meta.env.VITE_FIREBASE_UID ?? ''
  const [projects, setProjects] = useState<Project[]>([])
  const [status, setStatus] = useState<Status>('loading')

  async function load() {
    try {
      setStatus('loading')

      const projectsCollection = collection(db, 'users', uid, 'projects')
      const projectsDocuments = await getDocs(projectsCollection)
      setProjects(
        projectsDocuments.docs.map(
          (document) => ({ id: document.id, ...document.data() } as Project)
        )
      )

      setStatus('done')
    } catch (error) {
      console.error('Something went wrong: ', error)
      setStatus('failed')
    }
  }

  useEffect(() => {
    load()
  }, [])

  const ProjectCard = ({ project }: { project: Project }) => {
    const [open, setOpen] = useState<boolean>(false)
    const handleDialog = () => setOpen(!open)

    return (
      <>
        <motion.div
          layout
          className='rounded-xl p-4 bg-surface-container'
          layoutId={project.id}
          transition={{ duration: animationDuration, ease: animationEase }}
        >
          <Stack gap='4'>
            <Stack gap='0'>
              <Headline>{project.title}</Headline>
              <Subheadline>{project.type}</Subheadline>
            </Stack>

            <Text className='line-clamp-3'>{project.description}</Text>

            <Stack direction='horizontal' className='justify-end'>
              {project.repo && <Link href={project.repo}>See repo</Link>}

              <Button buttonType='primary' onClick={handleDialog}>
                See more
              </Button>
            </Stack>
          </Stack>
        </motion.div>
        <Dialog project={project} open={open} handleDialog={handleDialog} />
      </>
    )
  }

  const views = {
    loading: (
      <Carousel>
        {Array.from({ length: random(3, 6) }).map((_, index) => (
          <Card key={`Project skeleton ${index}`}>
            <Stack gap='4'>
              <Stack gap='1'>
                <Skeleton rounded='xs' width='w-50' height='h-5' />
                <Skeleton rounded='xs' width='w-30' height='h-3' />
              </Stack>
              <Stack gap='1'>
                {Array.from({ length: 3 }).map((_, subindex) => (
                  <Skeleton
                    key={`Line skeleton ${subindex} from ${index}`}
                    rounded='xs'
                  />
                ))}
              </Stack>
              <Stack direction='horizontal' className='justify-end'>
                {Array.from({ length: 2 }).map((_, subindex) => (
                  <Skeleton
                    key={`Button skeleton ${subindex} from ${index}`}
                    width='w-30'
                    height='h-10'
                  />
                ))}
              </Stack>
            </Stack>
          </Card>
        ))}
      </Carousel>
    ),
    done: (
      <Carousel>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Carousel>
    ),
    failed: <Issue retry={() => load()} />
  }

  return (
    <Section id='projects'>
      <Title>Projects</Title>
      {views[status]}
    </Section>
  )
}
