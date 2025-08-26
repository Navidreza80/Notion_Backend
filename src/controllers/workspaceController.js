import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../utils/prisma";

export const createWorkspace = async (req, reply) => {
  const { name } = req.body;

  // create workspace

  return reply.code(201).send(workspace);
};

export const getMyWorkspaces = async (req, reply) => {
    const {userId} = req.body
try {
    const workspaces = await prisma.workspaces.findMany({
        where: {creatorId: }
    })
} catch (error) {
    
}


};
