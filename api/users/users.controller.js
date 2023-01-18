const {
  genSaltSync,
  hashSync,
} = require("bcrypt"); /*allow to crypt string password*/
const {
  create,
  update,
  deleteUser,
  getAll,
  getById,
} = require("./users.service");

const userController = {
  createUser: (req, res) => {
    const body = req.body;

    //crypt user password
    const salt = genSaltSync(10);
    body.user_pass = hashSync(body.user_pass, salt);

    //create statment
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: "failed",
          message: "Database connection error!",
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
        return res.status(500).json({
          status: "failed",
          message: "Database connection error!",
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
        return res.status(500).json({
          status: "failed",
          message: "Database connection error!",
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
        return res.status(500).json({
          status: "failed",
          message: "Database connection error!",
        });
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
        return res.status(500).json({
          status: "failed",
          message: "Database connection error!",
        });
      }
      return res.status(200).json({
        status: "success",
        data: results,
      });
    });
  },
};

module.exports = userController;
