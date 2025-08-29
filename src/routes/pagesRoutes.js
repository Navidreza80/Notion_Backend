import {
  createPage,
  deletePage,
  getPageById,
  getPages,
  updatePage,
} from "../controllers/pagesController.js";
import { authenticate } from "../middleware/auth.js";

async function pagesRoutes(fastify) {
  fastify.post("/pages", { preHandler: authenticate }, createPage);
  fastify.get("/pages", { preHandler: authenticate }, getPages);
  fastify.get("/pages/:id", { preHandler: authenticate }, getPageById);
  fastify.put("/pages/:id", { preHandler: authenticate }, updatePage);
  fastify.delete("/pages/:id", { preHandler: authenticate }, deletePage);
}

export default pagesRoutes;
