import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import Card from '@/components/ui/Card'
import Stack from '@/components/layers/Stack'
import Badge from '@/components/ui/Badge'

export const dynamic = 'force-dynamic'

export default async function Skills() {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`)
  const data = await request.json()

  const BadgeView = ({ values }: { values: string[] }) => (
    <Stack direction='horizontal' className='flex-wrap'>
      {values?.map((value) => (
        <Badge title={value} key={`Badge skill ${value}`} />
      ))}
    </Stack>
  )

  return (
    <Section>
      <Title>Skills</Title>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 auto-rows-max'>
        {data.language && (
          <Card>
            <Stack>
              <Text>Programming languages</Text>
              <BadgeView values={data.language}></BadgeView>
            </Stack>
          </Card>
        )}

        {data.tool && (
          <Card>
            <Stack>
              <Text>Tools</Text>
              <BadgeView values={data.tool}></BadgeView>
            </Stack>
          </Card>
        )}

        {data.backend && (
          <Card>
            <Stack>
              <Text>Backend</Text>
              <BadgeView values={data.backend}></BadgeView>
            </Stack>
          </Card>
        )}

        {data.frontend && (
          <Card>
            <Stack>
              <Text>Frontend</Text>
              <BadgeView values={data.frontend}></BadgeView>
            </Stack>
          </Card>
        )}
      </div>
    </Section>
  )
}
