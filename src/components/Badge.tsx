export default function Badge({ badges }: { badges: String[] }) {
  return (
    <div className='flex cursor-default gap-1 flex-wrap'>
      {badges.map((badge) => (
        <p className='badge-item'>{badge}</p>
      ))}
    </div>
  )
}
