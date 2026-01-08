interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-2xl mx-auto flex flex-col gap-4 ${className}`}
    >
      {children}
    </section>
  )
}
