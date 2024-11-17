"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("env/env");
exports.api = axios_1.default.create({
    baseURL: env_1.ProcessEnv.BASE_URL,
});
