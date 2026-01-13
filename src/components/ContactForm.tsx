import {
  animationDuration,
  animationEase,
  type EmailStatus
} from '@/lib/constants'
import { contactFormSchema, type ContactForm } from '@/schemas/contactSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { MailCheck } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import Text from '@/components/typography/Text'
import Stack from '@/components/layers/Stack'
import { AreaInput, TextInput } from '@/components/ui/Inputs'
import Button from '@/components/ui/Button'

export default function ContactForm() {
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

  const animationVariants = {
    initial: { opacity: 0, y: '1rem' },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <AnimatePresence>
      {status === 'sent' ? (
        <motion.div
          variants={animationVariants}
          initial='initial'
          animate='animate'
          exit='initial'
          transition={{ duration: animationDuration, ease: animationEase }}
        >
          <MailCheck size='3.75rem' className='stroke-primary' />
          <Text>Thank you, your email was sent!</Text>
        </motion.div>
      ) : (
        <motion.form
          variants={animationVariants}
          initial='initial'
          animate='animate'
          exit='initial'
          transition={{ duration: animationDuration, ease: animationEase }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack>
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

            <Stack direction='horizontal-reverse' className='w-full'>
              <Button disabled={status == 'sending'} buttonType='primary'>
                Submit
              </Button>

              <AnimatePresence>
                {status === 'failed' && (
                  <motion.div
                    className='w-full'
                    initial={{ opacity: 0, y: '1rem' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '1rem' }}
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
            </Stack>
          </Stack>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
