import { z } from 'zod'

export const skill = z.object({
  id: z.string(),
  value: z.string(),
  type: z.string()
})

export type Skill = z.infer<typeof skill>
