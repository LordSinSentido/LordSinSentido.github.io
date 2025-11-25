import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import Card from '@/components/ui/Card'
import Headline from '@/components/ui/Headline'
import Stack from '@/components/layers/Stack'
import Link from '@/components/ui/Link'
import { Github, Linkedin } from 'lucide-react'
import List from '@/components/ui/List'

export default function Contact() {
  return (
    <Section>
      <Title>Contact</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <Card>
          <Stack gap='4'>
            <Stack>
              <Headline>Availability</Headline>
              <Text>
                Looking for a Software Engineer? You’re in luck! I’m currently
                exploring new opportunities — don’t hesitate to get in touch.
              </Text>
            </Stack>

            <Stack>
              <Headline>Interests</Headline>

              <div className='grid grid-cols-1 gap-2 sm:gap-0'>
                <div className='flex sm:flex-row flex-col'>
                  <Text className='grow'>Type of work</Text>
                  <Text>Full-time</Text>
                </div>

                <div className='flex sm:flex-row flex-col'>
                  <Text className='grow'>Work modality</Text>
                  <Text>Flexible / On-site</Text>
                </div>

                <div className='flex sm:flex-row flex-col'>
                  <Text className='grow'>Availability</Text>
                  <Text>Immediate</Text>
                </div>
              </div>

              <List
                items={[
                  'Backend and microservices development',
                  'Frontend development with React',
                  'Automation and testing'
                ]}
              />
            </Stack>
          </Stack>
        </Card>

        <Card>
          <Stack>
            <Headline>Contact platforms</Headline>
            <Text>You can contact me through these platforms:</Text>
            <Stack direction='horizontal'>
              <Link href='/'>
                <Linkedin className='size-4' />
                LinkedIn
              </Link>
              <Link href='/'>
                <Github className='size-4' />
                GitHub
              </Link>
            </Stack>
          </Stack>
        </Card>
      </div>
    </Section>
  )
}
