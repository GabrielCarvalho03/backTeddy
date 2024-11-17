import { api } from "api/api";
import axios from "axios";
import { FastifyReply, FastifyRequest } from "fastify";

export const GetUser = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { _page, _limit } = req.query as { _page: string; _limit: string };

    console.log("page", _limit);
    const response = await api.get(`/users?page=${_page}&limit=${_limit}`);
    res.send(response.data);
  } catch (err) {
    console.log(err);
  }
};
