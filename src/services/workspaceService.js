export const getWorkspaceById = async (fastify, id) => {
  return fastify.prisma.workspace.findUnique({ where: { id } });
};
