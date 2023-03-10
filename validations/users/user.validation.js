
const { user } = require("./user.schema");

module.exports = {
  addUserValidation: async (req, res, next) => {
    const value = await user.validate(req.body);
    if (value.error) {
      res.json({
        status: "failed",
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
