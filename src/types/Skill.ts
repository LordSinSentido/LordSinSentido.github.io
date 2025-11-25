type SkillGroups = 'language' | 'tool' | 'backend' | 'frontend'

export interface Skill {
  name: string
  type: SkillGroups
}
