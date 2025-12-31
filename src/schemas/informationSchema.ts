import { z } from 'zod'

export const informationSchema = z.object({
  degree: z.string(),
  description: z.string(),
  availability: z.boolean(),
  interests: z.array(z.string()).optional(),
  modality: z.array(z.string()).optional(),
  type: z.array(z.string()).optional()
})

export type Information = z.infer<typeof informationSchema>
