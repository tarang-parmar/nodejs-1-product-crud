import express from "express";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/productsRoute.js";
import { getFilePaths } from "./config/Utils.js";
import demoRoutes from "./routes/demoRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", productRoutes);
app.use("/api", demoRoutes);
/**
 * Serves static files from the 'uploads' directory.
 */
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send(`Server is running at ${process.env.PORT}`);
});

export default app;
