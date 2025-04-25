import dotenv from "dotenv";
import connectDB from "./config/db";
import { app, setupApolloServer } from "./app";

dotenv.config();

// Start the server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Setup Apollo Server
    await setupApolloServer();

    // Start Express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/graphql...`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

startServer();
