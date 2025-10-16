export default function Dialog({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  title: String
  children: React.ReactElement
}) {
  if (!isOpen) return null
  return (
    <div className='dialog overflow-x-scroll' onClick={() => onClose()}>
      <div className='max-w-3xl' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
