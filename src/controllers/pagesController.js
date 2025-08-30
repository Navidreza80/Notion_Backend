import * as pagesService from "../services/pagesService.js";

export const createPage = async (req, reply) => {
  try {
    const { title, content, isSubPage, workspaceId, parentPageId } = req.body;

    const project = await pagesService.createPage(req.server, {
      title,
      content,
      isSubPage,
      workspaceId,
      ...(parentPageId && parentPageId),
    });

    return reply.code(201).send(project);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: error.message });
  }
};

export const getPages = async (req, reply) => {
  try {
    const projects = await pagesService.getPages(req.server);
    reply.code(200).send(projects);
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const getPageById = async (req, reply) => {
  try {
    const { id } = req.params;
    const project = await pagesService.getPageById(req.server, id);

    if (!project) {
      return reply.code(404).send({ error: "Project not found" });
    }

    return reply.send(project);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: error.message });
  }
};

export const getPageByParentId = async (req, reply) => {
  try {
    const { id } = req.params;
    const project = await pagesService.getPageByParentId(req.server, id);

    if (!project) {
      return reply.code(404).send({ error: "Project not found" });
    }

    return reply.send(project);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: error.message });
  }
};

export const updatePage = async (req, reply) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const project = await pagesService.updatePage(req.server, id, {
      title,
      content,
    });
    return reply.send(project);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: error.message });
  }
};

export const deletePage = async (req, reply) => {
  try {
    const { id } = req.params;

    await req.server.prisma.page.delete({ where: { id } });
    return reply.send({ message: "Project deleted successfully" });
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
};
