export default function initWhiteboardSocket(io) {
  const roomState = {};

  io.on("connection", (socket) => {
    socket.on("userJoined", ({ roomId }) => {
      socket.join(roomId);
      socket.emit("userIsJoined", { success: true });
      if (roomState[roomId]?.imageURL) {
        socket.emit("whiteboardDataResponse", {
          imageURL: roomState[roomId].imageURL,
        });
      }
    });

    socket.on("whiteboardData", ({ roomId, imageURL }) => {
      roomState[roomId] = { imageURL };
      socket.to(roomId).emit("whiteboardDataResponse", { imageURL });
    });
  });
}
