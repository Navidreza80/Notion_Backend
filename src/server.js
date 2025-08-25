import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (req, res) => {
  return {
    message: "Hello world?",
  };
});

fastify.route({
  method: "GET",
  url: "/hello/:name",
  handler: (req, res) => {
    return {
      message: `Hello ${req.params.name}`,
    };
  },
});

try {
  fastify.listen({ port: 3002, host: "0.0.0.0" });
} catch (error) {
  fastify.log.error(error);
  process.exit();
}
