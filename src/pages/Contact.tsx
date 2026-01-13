import Stack from '@/layers/Stack'
import Text from '@/typography/Text'
import Title from '@/typography/Title'
import Bubble from '@/ui/Bubble'
import { useFirestoreContext } from '@/context/FirestoreContext'
import { useEffect } from 'react'
import Section from '@/layers/Section'
import Link from '@/ui/Link'
import { Github, Linkedin } from 'lucide-react'
import SEO from '@/context/SEO'
import Loading from '@/ui/Loading'
import Card from '@/components/layers/Card'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  const { information, getInformation } = useFirestoreContext()

  useEffect(() => {
    getInformation()
  }, [getInformation])

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

              <Card>
                <ContactForm />
              </Card>

              <Text>You can also do it through these platforms:</Text>
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
          </Stack>
        </Stack>
      ) : (
        <Loading />
      )}
    </>
  )
}
