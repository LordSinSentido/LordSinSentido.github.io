import { z } from 'zod'

export const contactFormSchema = z.object({
  email: z.email().nonempty().nonoptional(),
  subject: z.string().nonempty().nonoptional(),
  message: z.string().nonempty().nonoptional()
})

export type ContactForm = z.infer<typeof contactFormSchema>
