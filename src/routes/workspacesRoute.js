import {
  createWorkspace,
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
}

export default workspaceRoutes;
