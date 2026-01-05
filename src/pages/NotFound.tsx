import Section from '@/components/layers/Section'
import Text from '@/components/typography/Text'
import SEO from '@/context/SEO'
import Stack from '@/layers/Stack'
import Title from '@/typography/Title'

export default function NotFound() {
  return (
    <>
      <SEO title='Not Found' description='You reach an unknown page.' />
      <Stack>
        <Title>Ups… we can't found that page</Title>
        <Section>
          <Text>
            Maybe there was something here, but it doesn't exist anymore
          </Text>
        </Section>
      </Stack>
    </>
  )
}
