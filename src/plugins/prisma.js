import fp from "fastify-plugin";
import { PrismaClient } from "../generated/prisma/index.js";

export default fp(async (fastify) => {
  const prisma = new PrismaClient();

  fastify.decorate("prisma", prisma);

  fastify.addHook("onClose", async (fastify) => {
    await fastify.prisma.$disconnect();
  });
});
