import express from "express";
import "dotenv/config";
import connectToDatabase from "./config/spaceTourism.config.js";
import errorHandler from "./middleware/errorhandler.middleware.js";
import spaceTourism from "./router/spaceTourism.router.js";
import notFound from "./router/notFound.router.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;
// Using CORS middleware to allow cross-origin requests
app.use(cors());
// Parse JSON data in the request body
app.use(express.json());

// Serve static files from the "public" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assets = path.join(__dirname, "public" , "assets");
app.use(express.static(assets));


// Space Tourism Routes
app.use("/space-tourism", spaceTourism);

// Not Found Route
app.use(notFound);
// Error Handling Function
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectToDatabase();
});
