import Text from '@/components/ui/Text'

interface Badge {
  title: string
}
export default function Badge({ title }: Badge) {
  return (
    <div className='block rounded-full bg-tertiary-container text-on-tertiary-container py-1 px-2 cursor-default'>
      <Text>{title}</Text>
    </div>
  )
}
