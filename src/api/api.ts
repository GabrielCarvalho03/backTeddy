import axios from "axios";
import { ProcessEnv } from "env/env";

export const api = axios.create({
  baseURL: "https://boasorte.teddybackoffice.com.br",
});
