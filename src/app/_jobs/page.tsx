import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import Card from '@/components/ui/Card'
import Headline from '@/components/ui/Headline'
import Subheadline from '@/components/ui/Subheadline'
import Collapsable from '@/components/ui/Collapsable'
import Stack from '@/components/layers/Stack'
import List from '@/components/ui/List'
import { Job } from '@/types/Job'

export const dynamic = 'force-dynamic'

export default async function Experience() {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`)
  const data = (await request.json()) as Job[]

  return (
    <Section>
      <Title>Latest jobs</Title>
      <Stack>
        {data.map((job, index) => (
          <Card key={job.company} delay={index}>
            <Collapsable
              header={
                <Stack gap='0'>
                  <Headline>{job.company}</Headline>
                  <Subheadline>{job.location}</Subheadline>
                </Stack>
              }
              content={
                <Stack>
                  <Text>{job.description}</Text>
                  <List items={job.goals} />
                </Stack>
              }
            />
          </Card>
        ))}
      </Stack>
    </Section>
  )
}
