"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessEnv = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    BASE_URL: zod_1.z.string(),
});
const _env = envSchema.safeParse(process.env);
if (_env.success == false) {
    console.error("Invalid environment variables", _env.error.format());
    throw new Error("Invalid environment variables");
}
exports.ProcessEnv = _env.data;
