export const createPage = async (fastify, data) => {
  return fastify.prisma.page.create({ data });
};

export const getPages = async (fastify) => {
  return fastify.prisma.page.findMany();
};

export const getPageById = async (fastify, id) => {
  return fastify.prisma.page.findUnique({
    where: { id },
  });
};

export const updatePage = async (fastify, id, data) => {
  return fastify.prisma.page.update({ where: { id }, data });
};

export const deletePage = async (fastify, id) => {
  return fastify.prisma.page.delete({ where: { id } });
};
