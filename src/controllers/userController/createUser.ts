import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserSchema } from "./schema";
import { api } from "api/api";

export const CreateUser = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const user = CreateUserSchema.safeParse(req.body).data;

    const response = await api.post("/users", {
      name: user?.name,
      salary: user?.salary,
      companyValuation: user?.companyValuation,
    });
    console.log(response.data);

    res.status(201).send(response.data);
  } catch (err) {
    console.log(err);
  }
};
