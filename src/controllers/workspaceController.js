export const getMyWorkspaces = async (req, reply) => {
  const { userId } = req.query;
  try {
    const workspaces = await req.server.prisma.workspace.findMany({
      where: { creatorId: userId },
    });
    reply.code(200).send(workspaces);
  } catch (error) {
    req.log.error(error);
    reply.code(503).send({ error: "Internal server error" });
  }
};
