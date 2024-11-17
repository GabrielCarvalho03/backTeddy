"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const getUser_1 = require("../controllers/userController/getUser");
const createUser_1 = require("@controllers/userController/createUser");
const updateUser_1 = require("@controllers/userController/updateUser");
const removeUser_1 = require("@controllers/userController/removeUser");
const UserRoute = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get("/users", getUser_1.GetUser);
    app.post("/users", createUser_1.CreateUser);
    app.patch("/users/:id", updateUser_1.UpdateUser);
    app.delete("/users/:id", removeUser_1.RemoveUser);
});
exports.UserRoute = UserRoute;
