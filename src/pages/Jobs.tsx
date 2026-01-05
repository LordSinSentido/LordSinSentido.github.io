import { useEffect } from 'react'
import { useFirestoreContext } from '@/context/FirestoreContext'
import Stack from '@/layers/Stack'
import Section from '@/layers/Section'
import Headline from '@/typography/Headline'
import Subheadline from '@/typography/Subheadline'
import Title from '@/typography/Title'
import Text from '@/typography/Text'
import Collapsable from '@/ui/Collapsable'
import List from '@/ui/List'
import Loading from '@/ui/Loading'
import SEO from '@/context/SEO'

export default function Jobs() {
  const { jobs, getJobs } = useFirestoreContext()

  useEffect(() => {
    getJobs()
  }, [getJobs])

  return (
    <>
      <SEO
        title='Jobs'
        description='Here you can see the companies where I worked.'
      />
      {jobs ? (
        <Stack>
          <Title>Experience</Title>
          <Section>
            <Stack>
              {jobs.map((job) => (
                <Collapsable
                  key={job.id}
                  header={
                    <Stack gap='1'>
                      <Headline>
                        {job.position} @ {job.organization}
                      </Headline>
                      <Subheadline>{job.location}</Subheadline>
                    </Stack>
                  }
                  content={
                    <Stack className='mt-2'>
                      <Text>{job.description}</Text>
                      <List items={job.goals} />
                    </Stack>
                  }
                />
              ))}
            </Stack>
          </Section>
        </Stack>
      ) : (
        <Loading />
      )}
    </>
  )
}
