import type React from 'react'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-5 sm:p-6 p-4 rounded-lg bg-light-background dark:bg-dark-background border-2 border-light-surface-container-low dark:border-dark-surface-container-low'>
      {children}
    </div>
  )
}
