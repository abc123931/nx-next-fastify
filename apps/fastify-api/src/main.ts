import { pingController } from './app/controller/pingController';
import Fastify from 'fastify';

const fastify = Fastify({
  connectionTimeout: 3000,
  logger: { level: 'info' },
});

const setUp = async () => {
  fastify.register(pingController, { prefix: '/ping' });
};

const start = async () => {
  try {
    await setUp();
    await fastify.listen(8081);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
