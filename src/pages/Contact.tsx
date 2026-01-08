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
import Badge from '@/components/ui/Badge'
import Subheadline from '@/components/typography/Subheadline'

export default function Contact() {
  const { information, getInformation } = useFirestoreContext()

  useEffect(() => {
    getInformation()
  }, [getInformation])

  const typeMap: Record<Type, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    contract: 'Contract',
    freelance: 'Freelance'
  }

  const modalityMap: Record<Modality, string> = {
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
              {information.availability && (
                <Stack
                  direction='horizontal'
                  gap='4'
                  className='items-center bg-secondary-container text-on-secondary-container p-4 rounded-xl'
                >
                  <Bubble animate color='bg-green-500' quantity={4} />
                  <Text>
                    Looking for a Software Engineer? You’re in luck! I’m
                    currently exploring new opportunities — don’t hesitate to
                    get in touch.
                  </Text>
                </Stack>
              )}

              <Text>You can do it through these platforms:</Text>
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
          </Stack>
        </Stack>
      ) : (
        <Loading />
      )}
    </>
  )
}
