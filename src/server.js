import cors from "@fastify/cors";
import Fastify from "fastify";
import { Server as IOServer } from "socket.io";
import prismaPlugin from "./plugins/prisma.js";
import pagesRoutes from "./routes/pagesRoutes.js";
import workspaceRoutes from "./routes/workspacesRoute.js";
import initPageSocket from "./sockets/pagesSocket.js";
import initWhiteboardSocket from "./sockets/whiteboardSocket.js";

const fastify = Fastify({ logger: true });
await fastify.register(cors, { origin: true });
await fastify.register(prismaPlugin);

// register REST routes
await fastify.register(pagesRoutes, { prefix: "/api" });
await fastify.register(workspaceRoutes, { prefix: "/api" });

// Function to start server
const start = async () => {
  try {
    const port = process.env.PORT || 3002;

    // Start Fastify first
    await fastify.listen({ port, host: "0.0.0.0" });

    // Attach Socket.IO to Fastify's HTTP server
    const io = new IOServer(fastify.server, {
      cors: { origin: true },
    });

    // Initialize sockets
    initPageSocket(io, fastify);
    initWhiteboardSocket(io, fastify);

    // Log info
    fastify.log.info(`Server running at http://localhost:${port}`);
  } catch (error) {
    // log error
    fastify.log.error(error);

    // Exit on error
    process.exit(1);
  }
};

// Start server
start();
