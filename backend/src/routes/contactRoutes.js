import express from "express";
import { body } from "express-validator";

import { submitContactForm } from "../controllers/contactController.js";
import validateRequest from "../middleware/validateRequest.js";

const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required.")
      .isLength({ min: 2, max: 80 })
      .withMessage("Name should be between 2 and 80 characters."),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("Please provide a valid email address."),
    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required.")
      .isLength({ min: 10, max: 1200 })
      .withMessage("Message should be between 10 and 1200 characters."),
  ],
  validateRequest,
  submitContactForm,
);

export default router;

