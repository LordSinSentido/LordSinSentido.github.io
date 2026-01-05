import Section from '@/components/layers/Section'
import Text from '@/components/typography/Text'
import Stack from '@/layers/Stack'
import Title from '@/typography/Title'

export default function NotFound() {
  return (
    <Stack>
      <Title>Ups… we can't found that page</Title>
      <Section>
        <Text>
          Maybe there was something here, but it doesn't exist anymore
        </Text>
      </Section>
    </Stack>
  )
}
