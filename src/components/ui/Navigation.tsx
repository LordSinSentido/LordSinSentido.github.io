import { motion } from 'motion/react'
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
import useScrollDirection from '@/hooks/useScrollDirections'

export default function Navigation() {
  const scrollDirection = useScrollDirection(20)

  return (
    <motion.nav
      animate={scrollDirection}
      variants={{
        up: { height: 'auto', opacity: 1 },
        down: { height: 0, opacity: 0 }
      }}
      className='fixed top-4 z-20 flex justify-between flex-0 [&>ul]:rounded-xl [&>ul]:bg-surface-container-highest max-w-372
      left-4 sm:left-20 lg:left-34 2xl:left-54
      right-4 sm:right-20 lg:right-34 2xl:right-54'
    >
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
    </motion.nav>
  )
}
