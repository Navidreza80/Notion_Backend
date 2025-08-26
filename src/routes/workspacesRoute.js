import { getMyWorkspaces } from "../controllers/workspaceController.js";

async function workspaceRoutes(fastify) {
  fastify.get("/me/workspaces", getMyWorkspaces);
}

export default workspaceRoutes;
