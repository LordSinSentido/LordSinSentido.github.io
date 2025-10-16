import { Ellipsis } from "lucide-react"
import { useState } from "react"
import Button from "./Button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className='navbar'>
      <Button.Icon onClick={() => setIsOpen(!isOpen)} size='6'>
        <Ellipsis />
      </Button.Icon>

      <nav
        className={`transition-all duration-300 ease-in-out 
          ${isOpen ? "opacity-100 mt-2" : "invisible opacity-0 md:opacity-100 md:visible"}`}
      >
        <a href='#about'>About me</a>
        <a href='#projects'>My projects</a>
        <a href='#contact'>Contact me</a>
      </nav>
    </div>
  )
}
