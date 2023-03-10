const {
  genSaltSync,
  hashSync,
  compareSync,
} = require("bcrypt"); /*allow to crypt string password*/

const {
  sign,
} = require("jsonwebtoken"); /*parsing token for some user connected*/

const { statment } = require("../../builder/builder");

const {
  create,
  update,
  deleteUser,
  getAll,
  getById,
  getByEmail,
} = require("./users.service");

const userController = {
  createUser: (req, res) => {
    const body = req.body;

    //Hash pass
    const salt = genSaltSync(10);
    body.user_pass = hashSync(body.user_pass, salt);
    //end Hash

    const sql =
      "INSERT INTO users(user_name, user_gender, user_email, user_pass) VALUES(?,?,?,?)";
    const data = [
      body.user_name,
      body.user_gender,
      body.user_email,
      body.user_pass,
    ];
    statment(sql, data, (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "failed",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "user created successfuly !",
        data: results,
      });
    });
  },

  /*update statment*/
  updateUser: (req, res) => {
    const body = req.body;
    //crypt user password
    const salt = genSaltSync(10);
    body.user_pass = hashSync(body.user_pass, salt);
    update(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      if (!results) {
        return res.status(500).json({
          status: "failed",
          message: "user not exit!",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "user updated successfuly !",
        data: results,
      });
    });
  },

  /*delete user param[id]*/
  deleteUser: (req, res) => {
    const body = req.body;
    deleteUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      if (!results) {
        return res.status(500).json({
          status: "failed",
          message: "user not exit!",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "user deleted successfuly !",
        data: results,
      });
    });
  },

  /*get user @param[id]*/
  getUser: (req, res) => {
    const body = req.body;
    getById(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      return res.status(200).json({
        status: "success",
        data: results,
      });
    });
  },

  /*get all user*/
  getUsers: (req, res) => {
    getAll((err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      return res.status(200).json({
        status: "success",
        data: results,
      });
    });
  },

  login: (req, res) => {
    const body = req.body;
    getByEmail(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          status: "failed",
          message: "database connection failed",
        });
      }
      if (!results) {
        return res.json({
          status: "failed",
          message: "invalid email or password!",
        });
      }

      /* Check and compare pass*/
      const result = compareSync(body.user_pass, results.user_pass);
      if (result) {
        results.user_pass = undefined;
        const jsonToken = sign({ result: results }, "que1234", {
          expiresIn: "1h",
        });
        return res.json({
          status: "success",
          data: results,
          token: jsonToken,
        });
      } else {
        return res.json({
          status: "failed",
          message: "invalid email or password!",
        });
      }
    });
  },
};

module.exports = userController;
