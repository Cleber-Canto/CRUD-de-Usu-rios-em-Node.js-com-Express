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
exports.deleteUser = exports.updateUser = exports.createUser = exports.findUserById = exports.findAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const findAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findMany();
});
exports.findAllUsers = findAllUsers;
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findUnique({
        where: { id },
    });
});
exports.findUserById = findUserById;
const createUser = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.create({
        data: {
            name,
            email,
        },
    });
});
exports.createUser = createUser;
const updateUser = (id, name, email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.update({
        where: { id },
        data: {
            name,
            email,
        },
    });
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.delete({
        where: { id },
    });
});
exports.deleteUser = deleteUser;
