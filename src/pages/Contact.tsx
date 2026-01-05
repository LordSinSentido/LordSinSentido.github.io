import Stack from '@/layers/Stack'
import Headline from '@/typography/Headline'
import Text from '@/typography/Text'
import Title from '@/typography/Title'
import Bubble from '@/ui/Bubble'
import List from '@/ui/List'
import type { Modality, Type } from '@/lib/constants'
import { useFirestoreContext } from '@/context/FirestoreContext'
import { useEffect } from 'react'
import Section from '@/layers/Section'
import Link from '@/ui/Link'
import { Github, Linkedin } from 'lucide-react'
import SEO from '@/context/SEO'
import Loading from '@/ui/Loading'

export default function Contact() {
  const { information, getInformation } = useFirestoreContext()

  useEffect(() => {
    getInformation()
  }, [getInformation])

  const modalityMap: Record<Modality, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    contract: 'Contract',
    freelance: 'Freelance'
  }

  const typeMap: Record<Type, string> = {
    'on-site': 'On-site',
    hybrid: 'Hybrid',
    remote: 'Remote'
  }

  return (
    <>
      <SEO
        title='Contact me'
        description='Here you can get ways to reach me out.'
      />
      {information ? (
        <Stack>
          <Title>Contact me</Title>
          <Stack gap='16'>
            <Section>
              <Headline>Reach me out</Headline>
              <Stack
                direction='horizontal'
                gap='4'
                className='items-center bg-secondary-container text-on-secondary-container p-4 rounded-xl'
              >
                <Bubble
                  animate
                  color={
                    information.availability ? 'bg-green-500' : 'bg-red-500'
                  }
                  quantity={4}
                />
                <Text>
                  {information.availability ? (
                    <>
                      Looking for a Software Engineer? You’re in luck! I’m
                      currently exploring new opportunities — don’t hesitate to
                      get in touch.
                    </>
                  ) : (
                    <>Nope, I'm not available right now</>
                  )}
                </Text>
              </Stack>

              <Text>You can do it through these platforms</Text>
              <Stack direction='horizontal'>
                <Link href='https://www.linkedin.com/in/misosa/'>
                  <Linkedin className='size-4' />
                  LinkedIn
                </Link>
                <Link href='https://github.com/LordSinSentido'>
                  <Github className='size-4' />
                  GitHub
                </Link>
              </Stack>
            </Section>

            <Section>
              <Headline>Interests</Headline>
              <div className='grid grid-cols-1 gap-2 sm:gap-0'>
                {information.type && (
                  <div className='flex sm:flex-row flex-col'>
                    <Text className='grow'>Type of work</Text>
                    <Text>
                      {information.type
                        .map((modality) => modalityMap[modality as Modality])
                        .join(' / ')}
                    </Text>
                  </div>
                )}

                {information.modality && (
                  <div className='flex sm:flex-row flex-col'>
                    <Text className='grow'>Work modality</Text>
                    <Text>
                      {information.modality
                        .map((type) => typeMap[type as Type])
                        .join(' / ')}
                    </Text>
                  </div>
                )}
              </div>
              {information.interests && <List items={information.interests} />}
            </Section>
          </Stack>
        </Stack>
      ) : (
        <Loading />
      )}
    </>
  )
}
