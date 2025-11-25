import Image from 'next/image'
import ProfilePicture from '@/public/profile.jpg'
import Text from '@/components/ui/Text'

export default function Header() {
  return (
    <header className='bg-[url(https://fpuawmikrrnhgwzcpjnr.supabase.co/storage/v1/object/public/resources/images/background.jpg)] bg-cover bg-center shadow-lg'>
      <div className='py-25 px-10 flex flex-col-reverse justify-center items-center md:flex-row gap-10 bg-background/65'>
        <div className='max-w-2xl text-center md:text-left'>
          <h1 className='font-sans text-4xl capitalize'>Miguel Sosa</h1>
          <h2 className='font-sans text-2xl font-extralight tracking-wide uppercase'>
            Software Engineer
          </h2>
          <Text>
            With 3 years of experience, I worked along companies to provide them
            backend and frontend solutions with my services as a software
            engineer. I'm specializing in REST API servers, microservices, and
            Jenkins pipelines.
          </Text>
        </div>
        <Image
          className='rounded-full size-50 drop-shadow-md'
          src='https://fpuawmikrrnhgwzcpjnr.supabase.co/storage/v1/object/public/resources/images/profile.jpeg'
          width={400}
          height={400}
          alt='Profile picture'
        />
      </div>
    </header>
  )
}
