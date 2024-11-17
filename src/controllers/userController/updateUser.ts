import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserSchema } from "./schema";
import { api } from "api/api";

export const UpdateUser = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { id } = req.params as { id: string };
    const user = CreateUserSchema.safeParse(req.body).data;
    const response = await api.patch(`/users/${id}`, {
      name: user?.name,
      salary: user?.salary,
      companyValuation: user?.companyValuation,
    });

    res.status(200).send(response.data);
  } catch (err) {
    console.log(err);
  }
};
