import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string(),
  salary: z.number(),
  companyValuation: z.number(),
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;
