import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  BASE_URL: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success == false) {
  console.error("Invalid environment variables", _env.error.format());

  throw new Error("Invalid environment variables");
}

export const ProcessEnv = _env.data;
