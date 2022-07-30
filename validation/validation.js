const Joi = require("joi");

const validateLogin = (data) => {
  const loginDataSchema = Joi.object({
    email: Joi.string().required().email().required(),
    password: Joi.string().min(8).required(),
  });
  return loginDataSchema.validate(data);
};

module.exports = { validateLogin };
