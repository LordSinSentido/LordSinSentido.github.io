export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col gap-2 px-4 md:px-8 pt-12'>
      {children}
    </section>
  )
}
