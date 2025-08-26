import { createWorkspace, getMyWorkspaces } from "../controllers/workspaceController";

async function workspaceRoutes(fastify) {
  fastify.post("/workspaces", createWorkspace);
  fastify.get("/me/workspaces", getMyWorkspaces);
}

export default workspaceRoutes;
