import * as workspaceService from "../services/workspaceService.js";

export const getMyWorkspaces = async (req, reply) => {
  const { id } = req.user;
  try {
    const workspaces = await req.server.prisma.workspace.findMany({
      where: { creatorId: id },
    });
    reply.code(200).send(workspaces);
  } catch (error) {
    req.log.error(error);
    reply.code(503).send({ error: "Internal server error" });
  }
};

export const getWorkspaceById = async (req, reply) => {
  const { id } = req.params;
  try {
    const workspace = await workspaceService.getWorkspaceById(req.server, id);
    return reply.send(workspace);
  } catch (error) {
    req.log.error(error);
    reply.code(503).send({ error: "Internal server error" });
  }
};

export const createWorkspace = async (req, reply) => {
  const { id } = await req.user;
  const { name } = await req.body;
  try {
    const workspace = await workspaceService.createWorkspace(req.server, {
      creatorId: id,
      name,
    });
    return reply.send(workspace);
  } catch (error) {
    req.log.error(error);
    reply.code(503).send({ error: "Internal server error" });
  }
};
