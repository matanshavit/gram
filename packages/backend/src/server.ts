import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify({
  logger: {
    level: 'info',
  },
})

// Register CORS
await server.register(cors, {
  origin: ['http://localhost:3000'],
  credentials: true,
})

// Health check endpoint
server.get('/api/health', async () => {
  return {
    status: 'ok',
    service: 'gram-backend',
    timestamp: new Date().toISOString(),
  }
})

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3001
    const host = process.env.HOST || '0.0.0.0'

    await server.listen({ port, host })
    console.log(`🚀 Gram backend running on http://${host}:${port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
