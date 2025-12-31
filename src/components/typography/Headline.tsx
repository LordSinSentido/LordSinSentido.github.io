interface Headline {
  children: React.ReactNode
}

export default function Headline({ children }: Headline) {
  return (
    <p className='font-sans text-lg font-semibold leading-tight'>{children}</p>
  )
}
