import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Section from '@/layers/Section'
import Stack from '@/layers/Stack'
import Card from '@/ui/Card'
import Collapsable from '@/ui/Collapsable'
import List from '@/ui/List'
import Text from '@/typography/Text'
import Title from '@/typography/Title'
import Headline from '@/typography/Headline'
import Subheadline from '@/typography/Subheadline'
import { Skeleton } from '@/ui/Skeleton'
import Issue from '@/ui/Issue'
import type { Job } from '@/schemas/jobSchema'
import { db } from '@/lib/firebase'
import type { Status } from '@/lib/constants'

export default function Experience() {
  const uid = import.meta.env.VITE_FIREBASE_UID ?? ''
  const [jobs, setJobs] = useState<Job[]>([])
  const [status, setStatus] = useState<Status>('loading')

  async function load() {
    try {
      setStatus('loading')

      const jobsCollection = collection(db, 'users', uid, 'jobs')
      const jobsDocuments = await getDocs(jobsCollection)
      setJobs(
        jobsDocuments.docs.map(
          (document) => ({ id: document.id, ...document.data() } as Job)
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

  const views = {
    loading: (
      <>
        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={`Jobs skeleton ${index}`}>
            <Collapsable
              header={
                <Stack gap='1'>
                  <Skeleton rounded='xs' width='w-50' height='h-5' />
                  <Skeleton rounded='xs' width='w-30' height='h-3' />
                </Stack>
              }
              disabled
            />
          </Card>
        ))}
      </>
    ),
    done: (
      <>
        {jobs.map((job, index) => (
          <Card key={job.id} delay={index}>
            <Collapsable
              header={
                <Stack gap='0'>
                  <Headline>{job.organization}</Headline>
                  <Subheadline>
                    {job.position} | {job.location}
                  </Subheadline>
                </Stack>
              }
              content={
                <Stack className='mt-2'>
                  <Text>{job.description}</Text>
                  <List items={job.goals} />
                </Stack>
              }
            />
          </Card>
        ))}
      </>
    ),
    failed: <Issue retry={() => load()} />
  }

  return (
    <Section id='jobs'>
      <Title>Latest jobs</Title>
      {status !== 'failed' ? <Stack>{views[status]}</Stack> : views['failed']}
    </Section>
  )
}
