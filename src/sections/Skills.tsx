import type React from 'react'
import Section from '../components/Section'
import Tab from '../components/Tab'
import SkillsJSON from '../sources/skills.json'
import type { SkillsInterface } from '../types'
import Badge from '../components/Badge'
import {
  BookCopy,
  Code,
  HardDrive,
  LayoutDashboard,
  ToolCase,
  type LucideIcon
} from 'lucide-react'

export default function Skills() {
  const mySkills: SkillsInterface = SkillsJSON as SkillsInterface

  const items: {
    name: string
    icon?: React.ReactElement<React.ComponentProps<LucideIcon>>
    element: React.ReactElement
  }[] = [
    {
      name: 'Programming Languages',
      icon: <Code />,
      element: <Badge badges={mySkills.languages} />
    },
    {
      name: 'Backend',
      icon: <HardDrive />,
      element: <Badge badges={mySkills.backend} />
    },
    {
      name: 'Frontend',
      icon: <LayoutDashboard />,
      element: <Badge badges={mySkills.frontend} />
    },
    {
      name: 'Tools',
      icon: <ToolCase />,
      element: <Badge badges={mySkills.tools} />
    }
  ]

  return (
    <Section.Section id='skills'>
      <Section.Title title='Technical skills' icon={<BookCopy />} />
      <Section.Body>
        <Tab items={items} />
      </Section.Body>
    </Section.Section>
  )
}
