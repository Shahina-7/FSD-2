import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = (MONGO_URL) => {
    return mongoose.connect(MONGO_URL)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Problem while connecting to MongoDB", err.message);
            throw err;
        });
};

export default dbConnect;