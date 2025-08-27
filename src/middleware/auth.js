export async function authenticate(req, reply) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return reply.status(401).send({ error: "Missing token" });
    }

    const token = authHeader.split(" ")[1];

    const session = await req.server.prisma.session.findUnique({
      where: { session_token: token },
      include: { User: true },
    });

    if (!session || session.expires < new Date()) {
      return reply.status(401).send({ error: "Invalid or expired token" });
    }

    req.user = session.User;
  } catch (err) {
    return reply.status(500).send(err);
  }
}
