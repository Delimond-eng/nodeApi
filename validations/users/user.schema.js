const joi = require("@hapi/joi");
const schema = {
  user: joi.object({
    user_name: joi.string().max(50).required(),
    user_gender: joi.string().valid("M", "F").max(1).required(),
    user_email: joi.string().email().required(),
    user_pass: joi
      .string()
      .max(10)
      .message("Au moins 10 caractères")
      .min(5)
      .message("Au moins 5 caractères"),
  }),
};

module.exports = schema;
