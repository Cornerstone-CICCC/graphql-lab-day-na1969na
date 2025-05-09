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
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const app_1 = require("./app");
dotenv_1.default.config();
// Start the server
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to MongoDB
        yield (0, db_1.default)();
        // Setup Apollo Server
        yield (0, app_1.setupApolloServer)();
        // Start Express server
        const PORT = process.env.PORT || 3000;
        app_1.app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}/graphql...`);
        });
    }
    catch (err) {
        console.error("Error starting server:", err);
    }
});
startServer();
