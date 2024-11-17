"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config({ path: ".env.local" });
const envSchema = zod_1.z.object({
    BASE_URL: zod_1.z.string(),
});
const _env = envSchema.safeParse(process.env);
if (_env.success == false) {
    console.error("Invalid environment variables", _env.error.format());
    throw new Error("Invalid environment variables");
}
exports.ProcessEnv = _env.data;
