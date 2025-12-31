interface Card {
  children: React.ReactNode
  classname?: string
  delay?: number
}

export default function Card({ children, classname }: Card) {
  return (
    <div className={`rounded-xl p-4 bg-surface-container ${classname}`}>
      {children}
    </div>
  )
}
