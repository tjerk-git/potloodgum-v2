import { z } from 'zod'

const schema = z.object({
  email: z.string(),
  name: z.string(),
})

export default async function submit(formData: FormData) {
  const parsed = schema.parse({
    email: formData.get('email'),
    name: formData.get('name'),
  })
}