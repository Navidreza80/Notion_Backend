import {
  createWorkspace,
  deleteWorkspace,
  editWorkspace,
  getMyWorkspaces,
  getWorkspaceById,
} from "../controllers/workspaceController.js";
import { authenticate } from "../middleware/auth.js";

async function workspaceRoutes(fastify) {
  fastify.get("/me/workspaces", { preHandler: authenticate }, getMyWorkspaces);
  fastify.get(
    "/workspaces/:id",
    { preHandler: authenticate },
    getWorkspaceById
  );
  fastify.post("/workspaces", { preHandler: authenticate }, createWorkspace);
  fastify.put("/workspaces/:id", { preHandler: authenticate }, editWorkspace);
    fastify.delete("/workspaces/:id", { preHandler: authenticate }, deleteWorkspace);
}

export default workspaceRoutes;
