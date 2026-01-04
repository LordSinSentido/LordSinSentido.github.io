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

export default function Home() {
  const { information, getInformation, skills, getSkills } =
    useFirestoreContext()

  useEffect(() => {
    getInformation()
  }, [getInformation])

  useEffect(() => {
    getSkills()
  }, [getSkills])

  if (information && skills) {
    return (
      <Stack gap='16'>
        <div className='rounded-xl col-span-2 shadow-sm bg-[url(https://v1a4c4yut32jfys8.public.blob.vercel-storage.com/background.jpg)] bg-cover bg-center'>
          <div className='flex flex-col gap-4 py-10 justify-center items-center bg-surface/65 h-full'>
            <img
              className='rounded-full size-40'
              src='https://v1a4c4yut32jfys8.public.blob.vercel-storage.com/profile.jpeg'
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

        <Quote>
          Developing software isn’t just about writing code — it’s about solving
          real problems and delivering value.
        </Quote>

        <Section className='flex flex-col gap-4'>
          <Headline>About me</Headline>
          <Text>{information.description}</Text>
        </Section>

        <Section>
          <Headline>Here is my skill set... so far</Headline>
          <Stack
            direction='horizontal'
            className='flex-wrap justify-center px-10 md:px-20 bg-secondary-container py-4 rounded-xl'
            gap='1'
          >
            {skills.map((skill) => (
              <Badge title={skill.value} />
            ))}
          </Stack>
        </Section>

        <Section>
          <Headline>My strengths are...</Headline>
          <List
            items={[
              'Skilled in testing, maintaining, and troubleshooting complex codebases',
              'Experienced in designing and implementing new features to enhance performance and user experience',
              'Detail-oriented and committed to delivering high-quality, maintainable software',
              'Continuously learning and applying new technologies to enhance my skills',
              'Collaborative and adaptable, with experience working across international and cross-functional teams',
              'Adaptable to new environments, tools and challenges'
            ]}
          />
        </Section>
      </Stack>
    )
  } else {
    return <Loading />
  }
}
