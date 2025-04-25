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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloServer = exports.setupApolloServer = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express4_1 = require("@apollo/server/express4");
const server_1 = require("@apollo/server");
const schemas_1 = require("./schemas");
const resolvers_1 = require("./resolvers");
const app = (0, express_1.default)();
exports.app = app;
// Create Apollo Server
const apolloServer = new server_1.ApolloServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
exports.apolloServer = apolloServer;
const setupApolloServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // Start Apollo Server
    yield apolloServer.start();
    app.use("/graphql", (0, cors_1.default)(), express_1.default.json(), (0, express4_1.expressMiddleware)(apolloServer));
});
exports.setupApolloServer = setupApolloServer;
