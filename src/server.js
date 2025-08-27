import Fastify from "fastify";
import cors from "@fastify/cors";
import prismaPlugin from "./plugins/prisma.js";
import projectRoutes from "./routes/projectRoutes.js";
import workspaceRoutes from "./routes/workspacesRoute.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, { origin: "*" });
fastify.register(prismaPlugin);

fastify.register(projectRoutes, { prefix: "/api" });
fastify.register(workspaceRoutes, { prefix: "/api" });

const start = async () => {
  try {
    const port = process.env.PORT || 3002;
    await fastify.listen({ port, host: "0.0.0.0" });
    fastify.log.info(`Server running on port ${port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
