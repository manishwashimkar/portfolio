import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1200,
    },
  },
  {
    timestamps: true,
  },
);

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

const cachedConnection = globalThis.mongooseConnection || {
  connection: null,
  promise: null,
};

globalThis.mongooseConnection = cachedConnection;

export const connectToDatabase = async () => {
  if (cachedConnection.connection) {
    return cachedConnection.connection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!cachedConnection.promise) {
    cachedConnection.promise = mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cachedConnection.connection = await cachedConnection.promise;
  return cachedConnection.connection;
};
