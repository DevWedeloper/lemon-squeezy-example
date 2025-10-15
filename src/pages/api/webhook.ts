import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()
    // eslint-disable-next-line no-console
    console.log('Webhook received:', body)
    return new Response(JSON.stringify({ received: true }), { status: 200 })
  }
  catch (err) {
    console.error('Error parsing webhook:', err)
    return new Response('Bad Request', { status: 400 })
  }
}
