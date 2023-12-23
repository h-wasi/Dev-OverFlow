import mongoose from "mongoose";

let isconnected: boolean = false;

export const connectionToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("Missing MONGODB_URL");
  if (isconnected) {
    return console.log("MongoDB is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });
    isconnected = true;
    console.log("mongodb is connected");
  } catch (error) {
    console.log("mongodb connection failed", error);
  }
};
