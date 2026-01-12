import Stack from '@/layers/Stack'
import List from '@/ui/List'
import Quote from '@/typography/Quote'
import { useEffect } from 'react'
import { useFirestoreContext } from '@/context/FirestoreContext'
import Loading from '@/ui/Loading'
import Badge from '@/ui/Badge'
import Section from '@/layers/Section'
import Text from '@/typography/Text'
import Headline from '@/typography/Headline'
import SEO from '@/context/SEO'
import { MapPinHouse } from 'lucide-react'
import Subheadline from '@/components/typography/Subheadline'
import { modalityMap, typeMap, type Type, type Modality } from '@/lib/constants'

export default function Home() {
  const { information, getInformation, skills, getSkills } =
    useFirestoreContext()

  useEffect(() => {
    getInformation()
  }, [getInformation])

  useEffect(() => {
    getSkills()
  }, [getSkills])

  return (
    <>
      <SEO />
      {information && skills ? (
        <Stack gap='16'>
          <div
            className={`rounded-xl col-span-2 shadow-sm bg-cover bg-center`}
            style={{ backgroundImage: `url(${information.header})` }}
          >
            <div className='flex flex-col gap-4 py-10 justify-center items-center bg-surface/65 h-full'>
              <img
                className='rounded-full size-40'
                src={information.avatar}
                alt='Profile picture'
              />
              <Stack gap='1' className='items-center'>
                <h1 className='font-sans text-4xl capitalize'>Miguel Sosa</h1>
                <h2 className='font-sans text-2xl font-extralight tracking-wide uppercase '>
                  {information.degree}
                </h2>
                <Badge
                  icon={<MapPinHouse size='20' />}
                  title={information.hometown}
                />
              </Stack>
            </div>
          </div>

          <Quote>{information.heading}</Quote>

          <Section className='flex flex-col gap-4'>
            <Headline>About me</Headline>
            <Text>{information.description}</Text>
          </Section>

          <Section>
            <Headline>Here is my skill set... so far</Headline>
            <Stack
              direction='horizontal'
              className='flex-wrap justify-center px-10 md:px-20 bg-secondary-container py-4 rounded-xl'
              gap='1.5'
            >
              {skills.map((skill) => (
                <Badge title={skill.value} />
              ))}
            </Stack>
          </Section>

          <Section>
            <Headline>Interests</Headline>
            <Stack direction='horizontal'>
              {information.modality && (
                <Stack gap='2'>
                  <Subheadline>Work modality</Subheadline>
                  <Stack direction='horizontal' gap='1.5'>
                    {information.modality.map((modality) => (
                      <Badge title={modalityMap[modality as Modality]} />
                    ))}
                  </Stack>
                </Stack>
              )}

              {information.type && (
                <Stack gap='2'>
                  <Subheadline>Type of work</Subheadline>
                  <Stack direction='horizontal' gap='1.5'>
                    {information.type.map((type) => (
                      <Badge title={typeMap[type as Type]} />
                    ))}
                  </Stack>
                </Stack>
              )}
            </Stack>

            {information.interests && <List items={information.interests} />}
          </Section>

          {information.strengths && (
            <Section>
              <Headline>My strengths are...</Headline>
              <List items={information.strengths} />
            </Section>
          )}
        </Stack>
      ) : (
        <Loading />
      )}
    </>
  )
}
