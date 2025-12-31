interface Subheadline {
  children: React.ReactNode
}

export default function Subheadline({ children }: Subheadline) {
  return (
    <p className='font-sans text-sm tracking-tight leading-tight'>{children}</p>
  )
}
