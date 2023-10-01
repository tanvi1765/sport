const Joi = require("joi");

// Create jwt
const generateToken = {
  body: Joi.object({
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};
