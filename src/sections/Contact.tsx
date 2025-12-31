import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { Github, Linkedin } from 'lucide-react'
import Section from '@/layers/Section'
import Stack from '@/layers/Stack'
import Card from '@/ui/Card'
import Link from '@/ui/Link'
import List from '@/ui/List'
import Bubble from '@/ui/Bubble'
import Text from '@/typography/Text'
import Title from '@/typography/Title'
import Headline from '@/typography/Headline'
import type { Information } from '@/schemas/informationSchema'
import { db } from '@/lib/firebase'
import type { Modality, Status, Type } from '@/lib/constants'

export default function Contact() {
  const uid = import.meta.env.VITE_FIREBASE_UID ?? ''
  const [information, setInformation] = useState<Information>({} as Information)
  const [status, setStatus] = useState<Status>('loading')

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

  async function load() {
    try {
      setStatus('loading')

      const documentReference = doc(db, 'users', uid)
      const document = await getDoc(documentReference)
      setInformation({ ...document.data() } as Information)

      setStatus('done')
    } catch (error) {
      setStatus('failed')
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <Section id='contact'>
      <Title>Contact</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <Card>
          <Stack gap='4'>
            <Stack>
              <Stack direction='horizontal'>
                <Headline>Availability</Headline>
                <Bubble
                  animate
                  color={
                    information.availability ? 'bg-green-500' : 'bg-red-500'
                  }
                  quantity={4}
                />
              </Stack>
              {information.availability ? (
                <Text>
                  Looking for a Software Engineer? You’re in luck! I’m currently
                  exploring new opportunities — don’t hesitate to get in touch.
                </Text>
              ) : (
                <Text>Nope, I'm not available right now</Text>
              )}
            </Stack>

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
          </Stack>
        </Card>

        <Card>
          <Stack>
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

              {/* <div className='flex sm:flex-row flex-col'>
                <Text className='grow'>Availability</Text>
                <Text>Immediate</Text>
              </div> */}
            </div>
            {information.interests && <List items={information.interests} />}
          </Stack>
        </Card>
      </div>
    </Section>
  )
}
