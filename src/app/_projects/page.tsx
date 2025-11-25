import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import Card from '@/components/ui/Card'
import Headline from '@/components/ui/Headline'
import Carousel from '@/components/layers/Carousel'
import Subheadline from '@/components/ui/Subheadline'
import Stack from '@/components/layers/Stack'
import { Project } from '@/types/Project'
import { Drawer } from '@/components/ui/Drawer'
import Link from '@/components/ui/Link'
import Badge from '@/components/ui/Badge'

export const dynamic = 'force-dynamic'

export default async function Experience() {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`
  )
  const data = (await request.json()) as Project[]

  return (
    <Stack>
      <Section>
        <Title>Projects</Title>
      </Section>
      <Carousel>
        {data.map((element) => (
          <Card>
            <Stack gap='4'>
              <Stack gap='0'>
                <Headline>{element.title}</Headline>
                <Subheadline>{element.subtitle}</Subheadline>
              </Stack>

              <Text className='line-clamp-3'>{element.description}</Text>

              <Stack direction='horizontal' className='justify-end'>
                <Link href='/'>See repo</Link>
                <Drawer title='See more'>
                  <Stack gap='4'>
                    <Stack gap='0'>
                      <Headline>{element.title}</Headline>
                      <Subheadline>{element.subtitle}</Subheadline>
                    </Stack>
                    <Text>{element.description}</Text>
                    {element.participation && (
                      <Text>{element.participation}</Text>
                    )}
                    <Stack direction='horizontal' className='flex-wrap'>
                      {element.languages?.map((badge, index) => (
                        <Badge
                          title={badge}
                          key={`Badge #${index} - ${badge}`}
                        />
                      ))}
                      {element.technologies?.map((badge, index) => (
                        <Badge
                          title={badge}
                          key={`Badge #${index} - ${badge}`}
                        />
                      ))}
                    </Stack>

                    <Stack direction='horizontal' className='justify-end'>
                      {element.demo && (
                        <Link href={element.demo}>See demo</Link>
                      )}
                      {element.repo && (
                        <Link href={element.repo}>See repo</Link>
                      )}
                    </Stack>
                  </Stack>
                </Drawer>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Carousel>
    </Stack>
  )
}
