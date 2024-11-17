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
exports.UpdateUser = void 0;
const schema_1 = require("./schema");
const api_1 = require("api/api");
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = schema_1.CreateUserSchema.safeParse(req.body).data;
        const response = yield api_1.api.patch(`/users/${id}`, {
            name: user === null || user === void 0 ? void 0 : user.name,
            salary: user === null || user === void 0 ? void 0 : user.salary,
            companyValuation: user === null || user === void 0 ? void 0 : user.companyValuation,
        });
        res.status(200).send(response.data);
    }
    catch (err) {
        console.log(err);
    }
});
exports.UpdateUser = UpdateUser;
