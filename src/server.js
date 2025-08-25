import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, { origin: '*' });

fastify.get('/', async (request, reply) => {
  return { message: 'Hello world?' };
});

fastify.route({
  method: 'GET',
  url: '/hello/:name',
  handler: async (request, reply) => {
    return { message: `Hello ${request.params.name}` };
  },
});

const start = async () => {
  try {
    const port = process.env.PORT || 3002;
    await fastify.listen({ port, host: '0.0.0.0' });
    fastify.log.info(`Server running on port ${port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();