import * as projectService from "../services/projectService.js";

export const createProject = async (req, reply) => {
  try {
    const { name, description, userId } = req.body;
    if (!name || !userId) {
      return reply.code(400).send({ error: "name and userId are required" });
    }

    const project = await projectService.createProject(req.server, {
      name,
      description,
      userId,
    });

    return reply.code(201).send(project);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: error.message });
  }
};

export const getProjects = async (req, reply) => {
  try {
    const projects = await projectService.getProjects(req.server);
    reply.code(200).send(projects);
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const getProjectById = async (req, reply) => {
  try {
    const { id } = req.params;
    const project = await projectService.getProjectById(req.server, id);

    if (!project) {
      return reply.code(404).send({ error: "Project not found" });
    }

    return reply.send(project);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: error.message });
  }
};

export const updateProject = async (req, reply) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const project = await projectService.updateProject(req.server, id, { name, description });
    return reply.send(project);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: error.message });
  }
};

export const deleteProject = async (req, reply) => {
  try {
    const { id } = req.params;
    const project = await req.server.prisma.Project.findUnique({ where: { id } });
    if (!project) {
      return reply.code(404).send({ error: "Project not found" });
    }
    await req.server.prisma.Project.delete({ where: { id } });
    return reply.send({ message: "Project deleted successfully" });
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
};

