"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    name: zod_1.z.string(),
    salary: zod_1.z.number(),
    companyValuation: zod_1.z.number(),
});
