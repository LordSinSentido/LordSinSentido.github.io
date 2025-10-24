import {
  BookCopy,
  BriefcaseBusiness,
  Ellipsis,
  MessagesSquare,
  Proportions,
  type LucideIcon
} from 'lucide-react'
import React, { useState } from 'react'
import Button from './Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const sections: {
    name: string
    icon?: React.ReactElement<React.ComponentProps<LucideIcon>>
    href: string
  }[] = [
    { name: 'Skills', icon: <BookCopy />, href: '#skills' },
    { name: 'Projects', icon: <Proportions />, href: '#projects' },
    { name: 'Experience', icon: <BriefcaseBusiness />, href: '#experience' },
    { name: 'Contact', icon: <MessagesSquare />, href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className='fixed top-2 left-2 right-2 z-50 transition-all duration-1000 ease-in-out'>
      <div className='flex items-center justify-between'>
        <div className='bg-light-surface-container-high/75 dark:bg-dark-surface-container-high/75 backdrop-blur-sm rounded-lg drop-shadow-lg p-1'>
          <Button.Secondary
            title='Miguel Sosa'
            onClick={() => scrollToSection('#home')}
          />
        </div>
        <div className='flex justify-end bg-light-surface-container-high/75 dark:bg-dark-surface-container-high/75 backdrop-blur-sm sm:rounded-lg rounded-full drop-shadow-lg p-1'>
          <div className='hidden sm:flex'>
            {sections.map((item) => (
              <Button.Secondary
                title={item.name}
                icon={item?.icon}
                onClick={() => scrollToSection(item.href)}
                key={item.name}
              />
            ))}
          </div>

          <div className='sm:hidden'>
            <Button.Icon
              isActive={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              size='6'
            >
              <Ellipsis />
            </Button.Icon>
          </div>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out sm:hidden ${isOpen ? 'max-h-[100dvh] opacity-100 mt-2' : 'max-h-0 invisible opacity-0'} bg-light-surface-container-lowest/75 dark:bg-dark-surface-container-lowest/75 border-2 border-light-surface-container-low dark:border-dark-surface-container-low backdrop-blur-sm rounded-lg drop-shadow-lg p-2`}
      >
        {sections.map((item) => (
          <Button.Secondary
            title={item.name}
            icon={item?.icon}
            onClick={() => scrollToSection(item.href)}
            key={item.name}
          />
        ))}
      </div>
    </nav>
  )
}
