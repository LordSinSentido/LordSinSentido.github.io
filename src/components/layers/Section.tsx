interface Layer {
  children: React.ReactNode
  id?: string
}

export default function Section({ children, id }: Layer) {
  return (
    <section
      id={id}
      className='flex flex-col gap-2 px-4 md:px-8 pt-12 max-w-6xl w-full'
    >
      {children}
    </section>
  )
}
