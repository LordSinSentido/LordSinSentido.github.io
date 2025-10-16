export interface MyInformationInterface {
  name: string
  degree: string
  hero: string
  description: string
  skills: string[]
  links: { title: string; url: string }[]
}

export interface ExperienceInterface {
  company: string
  image?: string
  description: string
}

export interface ProjectInterface {
  name: String
  shortDescription: String
  description: String
  participation: String
  languages?: String[]
  technologies?: String[]
  repo?: String
  demo?: String
}