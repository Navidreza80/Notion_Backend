import Fastify from "fastify";
import config from "./config/index.js";

const fastify = Fastify({
  logger: true,
});

const start = async () => {
  try {
    await fastify.listen({ port: config.port });
    fastify.log.info(`Server running on port ${config.port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
