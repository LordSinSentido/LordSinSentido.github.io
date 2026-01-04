interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col gap-4 px-4 sm:px-16 lg:px-30 2xl:px-[20%] ${className}`}
    >
      {children}
    </section>
  )
}
