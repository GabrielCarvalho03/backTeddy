import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { UserRoute } from "../routes/user";

export const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(UserRoute);
