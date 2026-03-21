import { validationResult } from "express-validator";

const validateRequest = (req, _res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return next({
    statusCode: 400,
    message: "Validation failed.",
    errors: errors.array().map(({ path, msg }) => ({ field: path, message: msg })),
  });
};

export default validateRequest;

