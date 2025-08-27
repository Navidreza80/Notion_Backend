export const createProject = async (fastify, data) => {
  return fastify.prisma.project.create({ data });
};

export const getProjects = async (fastify) => {
  return fastify.prisma.project.findMany();
};

export const getProjectById = async (fastify, id) => {
  return fastify.prisma.project.findUnique({
    where: { id },
    include: { User: true },
  });
};

export const updateProject = async (fastify, id, data) => {
  return fastify.prisma.project.update({ where: { id }, data });
};

export const deleteProject = async (fastify, id) => {
  return fastify.prisma.project.delete({ where: { id } });
};
