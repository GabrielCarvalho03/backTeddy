import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserSchema } from "./schema";
import { api } from "../../api/api";

export const RemoveUser = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { id } = req.params as { id: string };
    console.log("id", id);
    const response = await api.delete(`/users/${id}`);
    res.status(204).send(response.data);
  } catch (err) {
    console.log(err);
  }
};
