import Stack from '@/layers/Stack'
import Headline from '@/typography/Headline'
import Text from '@/typography/Text'
import Title from '@/typography/Title'
import Bubble from '@/ui/Bubble'
import {
  animationDuration,
  animationEase,
  type EmailStatus
} from '@/lib/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFirestoreContext } from '@/context/FirestoreContext'
import { useEffect, useState } from 'react'
import Section from '@/layers/Section'
import Link from '@/ui/Link'
import { Github, Linkedin } from 'lucide-react'
import SEO from '@/context/SEO'
import Loading from '@/ui/Loading'
import Card from '@/components/layers/Card'
import Button from '@/components/ui/Button'
import { AreaInput, TextInput } from '@/components/ui/Inputs'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { contactFormSchema, type ContactForm } from '@/schemas/contactSchema'
import { AnimatePresence, motion } from 'motion/react'

const ContactForm = () => {
  const [status, setStatus] = useState<EmailStatus>('waiting')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onSubmit'
  })

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      setStatus('sending')
      const response = await fetch(
        `https://misosa-dashboard.vercel.app/api/v1/contact`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      if (!response.ok)
        throw new Error(`Couldn't send the email: ${response.status}`)
      setStatus('sent')
    } catch (error) {
      setStatus('failed')
      setTimeout(() => setStatus('waiting'), 5000)
      console.error(`Something went wrong`)
      return false
    }
  }

  return (
    <AnimatePresence>
      {status === 'sent' ? (
        <motion.div
          variants={{
            initial: { opacity: 0, y: '1rem' },
            animate: { opacity: 1, y: 0 }
          }}
          initial='initial'
          animate='animate'
          exit='initial'
          transition={{ duration: animationDuration, ease: animationEase }}
        >
          <Text>Thank you, your email was sent!</Text>
        </motion.div>
      ) : (
        <motion.form
          variants={{
            initial: { opacity: 0, y: '1rem' },
            animate: { opacity: 1, y: 0 }
          }}
          initial='initial'
          animate='animate'
          exit='initial'
          transition={{ duration: animationDuration, ease: animationEase }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack className='items-end'>
            <TextInput
              title='E-mail*'
              placeholder='email@emaple.com'
              type='email'
              register={register('email')}
              error={errors.email?.message}
            />
            <TextInput
              title='Subject*'
              placeholder="Let's get in contact"
              type='text'
              register={register('subject')}
              error={errors.subject?.message}
            />
            <AreaInput
              title='Message*'
              placeholder='Here goes your message'
              register={register('message')}
              error={errors.message?.message}
            />

            <AnimatePresence>
              {status === 'failed' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: animationDuration,
                    ease: animationEase
                  }}
                >
                  <Text className='p-2 rounded-lg bg-error text-on-error'>
                    Something went wrong, please, try aging later.
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>

            <Button buttonType='primary'>Submit</Button>
          </Stack>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

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
