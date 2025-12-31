import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Text from '@/typography/Text'
import type { Information } from '@/schemas/informationSchema'
import type { Status } from '@/lib/constants'
import { Skeleton } from '@/components/ui/Skeleton'
import Stack from '@/components/layers/Stack'

export default function Header() {
  const uid = import.meta.env.VITE_FIREBASE_UID ?? ''
  const [information, setInformation] = useState<Information>({} as Information)
  const [status, setStatus] = useState<Status>('loading')

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
    <header className='bg-[url(https://v1a4c4yut32jfys8.public.blob.vercel-storage.com/background.jpg)] bg-cover bg-center shadow-lg w-full'>
      <div className='py-25 px-10 flex flex-col-reverse justify-center items-center md:flex-row gap-10 bg-background/65'>
        <div className='max-w-2xl text-center md:text-left'>
          <h1 className='font-sans text-4xl capitalize'>Miguel Sosa</h1>
          {status !== 'failed' ? (
            <>
              {status === 'loading' ? (
                <Skeleton height='h-6' />
              ) : (
                <h2 className='font-sans text-2xl font-extralight tracking-wide uppercase '>
                  {information?.degree}
                </h2>
              )}
            </>
          ) : null}

          {status !== 'failed' ? (
            <>
              {status === 'loading' ? (
                <Stack className='pt-2'>
                  <Skeleton height='h-4' />
                  <Skeleton height='h-4' />
                  <Skeleton height='h-4' />
                </Stack>
              ) : (
                <Text>{information?.description}</Text>
              )}
            </>
          ) : null}
        </div>
        <img
          className='rounded-full size-50 drop-shadow-md'
          src='https://v1a4c4yut32jfys8.public.blob.vercel-storage.com/profile.jpeg'
          alt='Profile picture'
        />
      </div>
    </header>
  )
}
