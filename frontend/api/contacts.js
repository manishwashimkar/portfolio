import { connectToDatabase, Contact } from "../lib/mongo.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getTrimmedString = (value) => (typeof value === "string" ? value.trim() : "");

const getRequestBody = (body) => {
  if (typeof body !== "string") {
    return body;
  }

  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
};

const getDatabaseErrorMessage = (error) => {
  if (error?.message === "MONGODB_URI is not configured.") {
    return error.message;
  }

  if (error?.code === "ENOTFOUND" || error?.message?.includes("querySrv ENOTFOUND")) {
    return "MongoDB connection failed. Check that MONGODB_URI uses your real Atlas cluster hostname.";
  }

  return "Unable to save your message right now.";
};

const validateContactData = (body = {}) => {
  const name = getTrimmedString(body.name);
  const email = getTrimmedString(body.email).toLowerCase();
  const message = getTrimmedString(body.message);
  const errors = [];

  if (name.length < 2 || name.length > 80) {
    errors.push({ field: "name", message: "Name should be between 2 and 80 characters." });
  }

  if (!emailPattern.test(email) || email.length > 120) {
    errors.push({ field: "email", message: "Please provide a valid email address." });
  }

  if (message.length < 10 || message.length > 1200) {
    errors.push({ field: "message", message: "Message should be between 10 and 1200 characters." });
  }

  return {
    data: { name, email, message },
    errors,
  };
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  const { data, errors } = validateContactData(getRequestBody(req.body));

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  try {
    await connectToDatabase();
    const contact = await Contact.create(data);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact submission failed:", error);

    return res.status(500).json({
      success: false,
      message: getDatabaseErrorMessage(error),
    });
  }
}
