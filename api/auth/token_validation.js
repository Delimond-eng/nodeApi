const { verify } = require("jsonwebtoken");

const tokenValidator = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, "que1234", (err, decoded) => {
        if (err) {
          res.json({
            status: "failed",
            message: "Invalid Token!",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        status: "failed",
        message: "Access denied! unauthorized user",
      });
    }
  },
};

module.exports = tokenValidator;
