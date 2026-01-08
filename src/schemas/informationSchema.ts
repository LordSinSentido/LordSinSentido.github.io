import { z } from 'zod'

export const informationSchema = z.object({
  degree: z.string(),
  description: z.string(),
  hometown: z.string(),
  heading: z.string(),
  avatar: z.string(),
  header: z.string(),
  availability: z.boolean(),
  strengths: z.array(z.string()).optional(),
  interests: z.array(z.string()).optional(),
  modality: z.array(z.string()).optional(),
  type: z.array(z.string()).optional()
})

export type Information = z.infer<typeof informationSchema>
