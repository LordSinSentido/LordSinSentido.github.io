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
            className={`rounded-xl col-span-2 shadow-sm bg-[url(${information.header})] bg-cover bg-center`}
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
