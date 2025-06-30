"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MONGODB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEnvVar(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing Environmental variable ${key}`);
    }
    return value;
}
const MONGODB = getEnvVar("MONGODB");
exports.MONGODB = MONGODB;
const PORT = getEnvVar("PORT");
exports.PORT = PORT;
