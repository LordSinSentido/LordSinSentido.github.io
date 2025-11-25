type StackDirection = 'vertical' | 'horizontal'

interface StackInterface {
  children: React.ReactNode
  direction?: StackDirection
  gap?: string
  className?: string
}

export default function Stack({
  children,
  direction = 'vertical',
  gap = '2',
  className
}: StackInterface) {
  return (
    <div
      className={`flex ${
        direction === 'vertical' ? 'flex-col' : 'flex-row'
      } gap-${gap} ${className}`}
    >
      {children}
    </div>
  )
}
