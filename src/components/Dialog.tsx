import { useEffect } from 'react'

export default function Dialog({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean
  onClose: () => void
  title: String
  children: React.ReactElement
}) {
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  if (!isOpen) return null
  return (
    <div
      className='bg-linear-to-b to-10% from-light-background to-light-surface-dim/65 dark:from-dark-background dark:to-dark-surface-dim/65
      backdrop-blur-xs fixed inset-0 z-50 flex justify-center items-end overflow-y-scroll overscroll-none'
      onClick={() => onClose()}
    >
      <div className='max-w-3xl' onClick={(e) => e.stopPropagation()}>
        <div className='min-h-[25dvh]' />
        {children}
      </div>
    </div>
  )
}
