import Section from '../layers/Section'

interface TitleProps {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <Section>
      <p className='font-sans text-2xl font-medium mt-2.5'>{children}</p>
    </Section>
  )
}
