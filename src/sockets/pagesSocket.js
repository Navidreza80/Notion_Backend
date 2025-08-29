import { roomFor } from "../utils/room.js";
import * as pagesService from "../services/pagesService.js";

export default function initPageSocket(io, fastify) {
  io.on("connection", (socket) => {
    socket.on("page:join", async ({ id }) => {
      socket.join(roomFor(id));

      const page = await pagesService.getPageById(fastify, id);
      if (page) {
        socket.emit("page:load", page);
      }
    });

    socket.on("page:patch", async ({ id, content }) => {
      const updated = await pagesService.patchPageContent(fastify, id, content);

      io.to(roomFor(id)).emit("page:patched", {
        id: updated.id,
        content: updated.content,
        updatedAt: updated.updatedAt,
      });
    });
  });
}
