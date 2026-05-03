import mongoose from "mongoose";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing. Add it to backend/.env before starting the server.");
  }

  const maxAttempts = 3;
  const options = {
    serverSelectionTimeoutMS: 10000,
  };

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await mongoose.connect(mongoUri, options);
      console.log("MongoDB connected successfully");
      return;
    } catch (error) {
      console.error(`MongoDB connection failed (attempt ${attempt}/${maxAttempts})`, error.message);

      if (attempt === maxAttempts) {
        console.error(error);
        process.exit(1);
      }

      const backoffMs = attempt * 2000;
      console.log(`Retrying MongoDB connection in ${backoffMs / 1000} seconds...`);
      await sleep(backoffMs);
    }
  }
};

export default connectDB;

