import { FastifyInstance } from "fastify";
import { GetUser } from "../controllers/userController/getUser";
import { CreateUser } from "../controllers/userController/createUser";
import { UpdateUser } from "../controllers/userController/updateUser";
import { RemoveUser } from "../controllers/userController/removeUser";

export const UserRoute = async (app: FastifyInstance) => {
  app.get("/users", GetUser);
  app.post("/users", CreateUser);
  app.patch("/users/:id", UpdateUser);
  app.delete("/users/:id", RemoveUser);
};
