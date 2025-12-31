import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  description: z.string(),
  languages: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  repo: z.string(),
  url: z.string().optional()
})

export type Project = z.infer<typeof projectSchema>
