import { createProject, getProjects, getProjectById, updateProject, deleteProject } from "../controllers/projectController.js";

async function projectRoutes(fastify,) {
  fastify.post("/projects", createProject);
  fastify.get("/projects", getProjects);
  fastify.get("/projects/:id", getProjectById);
  fastify.put("/projects/:id", updateProject);
  fastify.delete("/projects/:id", deleteProject);
}

export default projectRoutes;
