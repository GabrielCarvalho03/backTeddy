"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const user_1 = require("../routes/user");
exports.app = (0, fastify_1.default)();
exports.app.register(cors_1.default, {
    origin: "*",
});
exports.app.register(user_1.UserRoute);
