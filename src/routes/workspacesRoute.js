import { getMyWorkspaces } from "../controllers/workspaceController.js";
import { authenticate } from "../middleware/auth.js";

async function workspaceRoutes(fastify) {
  fastify.get("/me/workspaces", { preHandler: authenticate }, getMyWorkspaces);
}

export default workspaceRoutes;
