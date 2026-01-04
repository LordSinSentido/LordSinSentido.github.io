import Section from '@/layers/Section'

interface QuoteProps {
  children: string
}

export default function Quote({ children }: QuoteProps) {
  return (
    <Section className='items-center'>
      <q className='font-cursive text-2xl text-center font-semibold max-w-4xl leading-10'>
        {children}
      </q>
    </Section>
  )
}
