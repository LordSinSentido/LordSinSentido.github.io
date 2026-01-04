import Text from '@/typography/Text.tsx'

interface BadgeProps {
  title: string
}

export default function Badge({ title }: BadgeProps) {
  return (
    <div className='block rounded-full bg-tertiary text-on-tertiary py-1 px-2 cursor-default'>
      <Text size='sm'>{title}</Text>
    </div>
  )
}
