export default function Headline({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-sans text-lg font-semibold leading-tight'>{children}</p>
  )
}
