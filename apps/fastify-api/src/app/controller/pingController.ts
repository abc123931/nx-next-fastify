import { FastifyPluginAsync } from "fastify";

export const pingController: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    "/",
    async (_, reply) => {
      reply.status(200).send({ message: "pong" });
    }
  );
};
