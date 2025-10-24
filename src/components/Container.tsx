import type React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-5 sm:p-6 p-4 rounded-lg bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest border-2 border-light-surface-container-low dark:border-dark-surface-container-low h-full'>
      {children}
    </div>
  )
}
