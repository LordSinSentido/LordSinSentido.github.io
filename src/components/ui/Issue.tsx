import { Unplug } from 'lucide-react'
import Stack from '@/layers/Stack'
import Headline from '@/typography/Headline'
import Button from '@/ui/Button'
import Text from '@/typography/Text'

interface Issue {
  retry?: () => void
}
export default function Issue({ retry }: Issue) {
  return (
    <Stack
      gap='4'
      direction='horizontal'
      className='items-center justify-center'
    >
      <Unplug className='size-20' />
      <Stack>
        <Headline>Upsss… something went wrong</Headline>
        <Text>
          We have some troubles loading this content, please try again later.
        </Text>
        {retry && (
          <Button buttonType='secondary' onClick={() => retry()}>
            Retry
          </Button>
        )}
      </Stack>
    </Stack>
  )
}
