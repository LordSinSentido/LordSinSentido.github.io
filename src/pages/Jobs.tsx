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

  const getMonth: Record<string, string> = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  }

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
                    <Stack gap='1' className='sm:flex-row sm:gap-4'>
                      <Stack className='justify-end flex-1' gap='1'>
                        <Headline>{job.position}</Headline>
                        <Subheadline>{job.organization}</Subheadline>
                      </Stack>
                      <Stack className='sm:justify-end sm:items-end' gap='1'>
                        <Subheadline>{job.location}</Subheadline>
                        <Subheadline>
                          {getMonth[job.startingMonth]}/{job.startingYear} —{' '}
                          {job.current
                            ? 'Current'
                            : `${getMonth[job.endingMonth]}/${job.endingYear}`}
                        </Subheadline>
                      </Stack>
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
