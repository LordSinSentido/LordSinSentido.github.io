import {
  BriefcaseBusiness,
  FolderGit2,
  Github,
  Home,
  Linkedin,
  MessagesSquare
} from 'lucide-react'
import MenuItem from '@/ui/MenuItem'
import Menu from '@/ui/Menu'

export default function Navigation() {
  return (
    <nav className='flex sm:flex-col justify-between flex-0 [&>ul]:rounded-xl [&>ul]:bg-surface-container-highest'>
      <Menu>
        <MenuItem title='Home' icon={<Home />} href='/' />
        <MenuItem
          title='Experience'
          icon={<BriefcaseBusiness />}
          href='/experience'
        />
        <MenuItem title='Projects' icon={<FolderGit2 />} href='/projects' />
        <MenuItem title='Contact' icon={<MessagesSquare />} href='/contact' />
      </Menu>
      <Menu>
        <MenuItem
          title='LinkedIn'
          icon={<Linkedin />}
          href='https://www.linkedin.com/in/misosa'
          target='_blank'
        />
        <MenuItem
          title='GitHub'
          icon={<Github />}
          href='https://www.github.com/LordSinSentido'
          target='_blank'
        />
      </Menu>
    </nav>
  )
}
