import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());

dbConnect(MONGO_URL);

app.use("/api/v1/movies", movieRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal server error";

    res.status(status).json({ message });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});