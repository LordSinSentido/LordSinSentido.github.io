import type React from "react"
import { useState } from "react"
import Button from "./Button"

export function Body({
  isOpen,
  children,
}: {
  isOpen: boolean
  children: React.ReactElement
}) {
  return (
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] invisible opacity-0"
      }`}
    >
      <div className='overflow-hidden'>{children}</div>
    </div>
  )
}

export function Header({
  title,
  image,
  children,
}: {
  title: string
  image?: string
  children?: React.ReactElement
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={`flex flex-col h-full ${isOpen && "bg-light-surface-container-low dark:bg-dark-surface-container-low"} rounded-lg`}
    >
      <Button.Image
        image={image}
        alt={title}
        onClick={() => setIsOpen(!isOpen)}
      />
      {children && <Body isOpen={isOpen}>{children}</Body>}
    </div>
  )
}

export default { Header, Body }
