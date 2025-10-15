import z from 'zod'

const EnvSchema = z.object({
  LEMONSQUEEZY_API_KEY: z.string(),
  SIGNING_SECRET: z.string(),
})

const { data: env, error } = EnvSchema.safeParse(import.meta.env)

if (error) {
  console.error('❌ Invalid env:')
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2))
}

export default env!
