import Contact from "../models/Contact.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

