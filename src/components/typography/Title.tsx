interface Title {
  children: React.ReactNode
}

export default function Title({ children }: Title) {
  return <p className='font-sans text-2xl font-medium'>{children}</p>
}
