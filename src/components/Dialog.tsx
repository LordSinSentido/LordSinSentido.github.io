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
      className='bg-light-surface-dim/75 dark:bg-dark-surface-dim/75 backdrop-blur-xs fixed inset-0 md:p-10 p-2 z-50 flex justify-center items-start overflow-scroll'
      onClick={() => onClose()}
    >
      <div className='max-w-3xl' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
