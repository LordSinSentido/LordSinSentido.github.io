import { z } from 'zod'

export const jobSchema = z.object({
  id: z.string().optional(),
  position: z.string(),
  current: z.boolean(),
  location: z.string(),
  organization: z.string(),
  description: z.string(),
  startingMonth: z.string(),
  startingYear: z.string(),
  endingMonth: z.string(),
  endingYear: z.string(),
  goals: z.array(z.string())
})

export type Job = z.infer<typeof jobSchema>
