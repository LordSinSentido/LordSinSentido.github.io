import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Section from '@/layers/Section'
import Text from '@/typography/Text'
import Title from '@/typography/Title'
import Card from '@/ui/Card'
import Stack from '@/layers/Stack'
import Badge from '@/ui/Badge'
import { Skeleton } from '@/ui/Skeleton'
import random from '@/lib/random'
import Issue from '@/ui/Issue'
import type { Skill } from '@/schemas/skillsSchema'
import { db } from '@/lib/firebase'
import type { Status } from '@/lib/constants'

export default function Skills() {
  const uid = import.meta.env.VITE_FIREBASE_UID ?? ''
  const [skills, setSkills] = useState<Skill[]>([])
  const [status, setStatus] = useState<Status>('loading')

  async function load() {
    try {
      setStatus('loading')

      const skillsCollection = collection(db, 'users', uid, 'skills')
      const skillsDocuments = await getDocs(skillsCollection)
      setSkills(
        skillsDocuments.docs.map(
          (document) => ({ id: document.id, ...document.data() } as Skill)
        )
      )

      setStatus('done')
    } catch (error) {
      setStatus('failed')
    }
  }

  useEffect(() => {
    load()
  }, [])

  const BadgeView = ({ values }: { values: Skill[] }) => (
    <Stack direction='horizontal' className='flex-wrap'>
      {values?.map((value) => (
        <Badge title={value.value} key={`${value.id}`} />
      ))}
    </Stack>
  )

  const views = {
    loading: (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={`Skills skeleton ${index}`}>
            <Stack>
              <Skeleton rounded='xs' width='w-35' />
              <Stack direction='horizontal' className='flex-wrap'>
                {Array.from({ length: random(5, 8) }).map((_, subindex) => (
                  <Skeleton
                    key={`Badge skeleton ${subindex} from ${index}`}
                    rounded='full'
                    height='h-5'
                    width='w-18'
                  />
                ))}
              </Stack>
            </Stack>
          </Card>
        ))}
      </>
    ),
    done: (
      <>
        {skills?.some((skill) => skill.type === 'languages') && (
          <Card>
            <Stack>
              <Text>Programming languages</Text>
              <BadgeView
                values={skills.filter((skill) => skill.type === 'languages')}
              />
            </Stack>
          </Card>
        )}

        {skills.some((skill) => skill.type === 'tools') && (
          <Card>
            <Stack>
              <Text>Tools</Text>
              <BadgeView
                values={skills.filter((skill) => skill.type === 'tools')}
              />
            </Stack>
          </Card>
        )}

        {skills.some((skill) => skill.type === 'backend') && (
          <Card>
            <Stack>
              <Text>Backend</Text>
              <BadgeView
                values={skills.filter((skill) => skill.type === 'backend')}
              />
            </Stack>
          </Card>
        )}

        {skills.some((skill) => skill.type === 'frontend') && (
          <Card>
            <Stack>
              <Text>Frontend</Text>
              <BadgeView
                values={skills.filter((skill) => skill.type === 'frontend')}
              />
            </Stack>
          </Card>
        )}
      </>
    ),
    failed: <Issue retry={() => load()} />
  }

  return (
    <Section id='skills'>
      <Title>Skills</Title>
      {status !== 'failed' ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 auto-rows-max'>
          {views[status]}
        </div>
      ) : (
        views['failed']
      )}
    </Section>
  )
}
