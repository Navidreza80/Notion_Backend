import * as projectController from "../controllers/projectController.js";

async function projectRoutes(fastify, options) {
  fastify.post("/", projectController.createProject);
  fastify.get("/", projectController.getProjects);
  fastify.get("/:id", projectController.getProjectById);
  fastify.put("/:id", projectController.updateProject);
  fastify.delete("/:id", projectController.deleteProject);
}

export default projectRoutes;
