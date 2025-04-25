import { Application } from "express";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const app: Application = express();

// Create Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const setupApolloServer = async () => {
  // Start Apollo Server
  await apolloServer.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(apolloServer));
};

export { app, setupApolloServer, apolloServer };
