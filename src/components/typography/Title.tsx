interface TitleProps {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <p className='font-sans text-2xl font-medium mt-2.5 px-0 sm:px-16 lg:px-30 2xl:px-50'>
      {children}
    </p>
  )
}
