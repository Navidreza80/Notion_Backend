export const createProject = async (fastify, data) => {
  return fastify.prisma.Project.create({ data });
};

export const getProjects = async (fastify) => {
  return fastify.prisma.Project.findMany({ include: { User: true } });
};

export const getProjectById = async (fastify, id) => {
  return fastify.prisma.Project.findUnique({ where: { id }, include: { User: true } });
};

export const updateProject = async (fastify, id, data) => {
  return fastify.prisma.Project.update({ where: { id }, data });
};

export const deleteProject = async (fastify, id) => {
  return fastify.prisma.Project.delete({ where: { id } });
};
