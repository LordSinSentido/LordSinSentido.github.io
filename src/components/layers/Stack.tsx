type StackDirection = 'vertical' | 'horizontal'

type gapValues = '0' | '1' | '2' | '3' | '4'

interface Stack {
  children: React.ReactNode
  direction?: StackDirection
  gap?: gapValues
  className?: string
}

export default function Stack({ children, direction, gap, className }: Stack) {
  const gapValues: Record<gapValues, string> = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4'
  }

  return (
    <div
      className={`flex ${
        direction == undefined || direction === 'vertical'
          ? 'flex-col'
          : 'flex-row'
      } ${gap == undefined ? 'gap-2' : gapValues[gap]} ${className}`}
    >
      {children}
    </div>
  )
}
