export default function Text({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`font-sans text-base font-base tracking-wide leading-tight hyphens-auto ${className}`}
      lang='en'
    >
      {children}
    </p>
  )
}
