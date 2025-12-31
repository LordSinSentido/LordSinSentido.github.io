import { z } from 'zod'

export const jobSchema = z.object({
  id: z.string().optional(),
  position: z.string(),
  location: z.string(),
  organization: z.string(),
  description: z.string(),
  goals: z.array(z.string())
})

export type Job = z.infer<typeof jobSchema>
