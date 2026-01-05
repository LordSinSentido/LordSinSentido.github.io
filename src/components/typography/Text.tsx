type Size = 'xs' | 'sm' | 'base'

interface Text {
  children: React.ReactNode
  className?: string
  size?: Size
}

export default function Text({ children, className, size }: Text) {
  const textSize: Record<Size, string> = {
    base: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs'
  }
  return (
    <p
      className={`font-sans ${
        size ? textSize[size] : 'text-base'
      } font-base tracking-wide leading-tight ${className}`}
      lang='en'
    >
      {children}
    </p>
  )
}
