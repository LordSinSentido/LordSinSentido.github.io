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
import Drawer from '@/ui/Drawer'
import Link from '@/ui/Link'
import Badge from '@/ui/Badge'
import { Skeleton } from '@/ui/Skeleton'
import random from '@/lib/random'
import Issue from '@/ui/Issue'
import type { Project } from '@/schemas/projectSchema'
import { db } from '@/lib/firebase'
import type { Status } from '@/lib/constants'

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
          <Card>
            <Stack gap='4'>
              <Stack gap='0'>
                <Headline>{project.title}</Headline>
                <Subheadline>{project.type}</Subheadline>
              </Stack>

              <Text className='line-clamp-3'>{project.description}</Text>

              <Stack direction='horizontal' className='justify-end'>
                {project.repo && <Link href={project.repo}>See repo</Link>}
                <Drawer title='See more'>
                  <Stack gap='4'>
                    <Stack gap='0'>
                      <Headline>{project.title}</Headline>
                      <Subheadline>{project.type}</Subheadline>
                    </Stack>

                    {project.description.split(/\n/).map((value, index) => (
                      <Text key={`${project.id} ${index} paragraph`}>
                        {value}
                      </Text>
                    ))}

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

                    <Stack direction='horizontal' className='justify-end'>
                      {project.url && <Link href={project.url}>See demo</Link>}
                      {project.repo && (
                        <Link href={project.repo}>See repo</Link>
                      )}
                    </Stack>
                  </Stack>
                </Drawer>
              </Stack>
            </Stack>
          </Card>
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
