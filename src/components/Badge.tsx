export default function Badge({ badges }: { badges: String[] }) {
  return (
    <div className='flex cursor-default gap-2 flex-wrap'>
      {badges.map((badge, index) => (
        <p className='badge-item' key={`Badge #${index} ${badge}`}>
          {badge}
        </p>
      ))}
    </div>
  )
}
