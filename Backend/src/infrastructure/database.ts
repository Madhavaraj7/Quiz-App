import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("Mongo URI is not defined in .env file");
    }

    await mongoose.connect(mongoURI);
    console.log(mongoURI);

    console.log("Database connected successfully");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Database connection failed:", error.message);
    } else {
      console.error("Database connection failed:", error);
    }
    process.exit(1); 
  }
};
