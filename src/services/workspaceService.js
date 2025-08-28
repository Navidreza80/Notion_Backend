export const getWorkspaceById = async (fastify, id) => {
  return fastify.prisma.workspace.findUnique({ where: { id } });
};

export const createWorkspace = async (fastify, data) => {
  return fastify.prisma.workspace.create({ data });
};

export const editWorkspace = async (fastify, creatorId, id, data) => {
  return fastify.prisma.workspace.update({ data, where: { creatorId, id } });
};

export const deleteWorkspace = async (fastify, creatorId, id) => {
  return fastify.prisma.workspace.delete({ where: { creatorId, id } });
};