type StackDirection = 'vertical' | 'horizontal'

type gapValues = '0' | '1' | '1.5' | '2' | '3' | '4' | '8' | '16'

interface StackProps {
  children: React.ReactNode
  direction?: StackDirection
  gap?: gapValues
  className?: string
}

export default function Stack({
  children,
  direction,
  gap,
  className
}: StackProps) {
  const gapValues: Record<gapValues, string> = {
    0: 'gap-0',
    1: 'gap-1',
    1.5: 'gap-1.5',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    8: 'gap-8',
    16: 'gap-16'
  }

  return (
    <div
      className={`flex ${
        direction == undefined || direction === 'vertical'
          ? 'flex-col'
          : 'flex-row'
      } ${gap == undefined ? 'gap-4' : gapValues[gap]} ${className}`}
    >
      {children}
    </div>
  )
}
