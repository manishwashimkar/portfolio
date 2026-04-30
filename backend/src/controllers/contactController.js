import { matchedData } from "express-validator";

import Contact from "../models/Contact.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const contactData = matchedData(req, { locations: ["body"] });
    const contact = await Contact.create(contactData);

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};
