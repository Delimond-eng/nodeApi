const pool = require("../../config/db");

const userService = {
  create: (data, callback) => {
    pool.query(
      "INSERT INTO users(user_name, user_gender, user_email, user_pass) VALUES(?,?,?,?)",
      [data.user_name, data.user_gender, data.user_email, data.user_pass],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  update: (data, callback) => {
    pool.query(
      "UPDATE users SET user_name=?, user_gender=?, user_email=?, user_pass=? WHERE user_id=?",
      [
        data.user_name,
        data.user_gender,
        data.user_email,
        data.user_pass,
        data.user_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  deleteUser: (data, callback) => {
    pool.query(
      "DELETE FROM users WHERE user_id=?",
      [data.user_id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  getAll: (callback) => {
    pool.query("SELECT * FROM users", [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getById: (data, callback) => {
    pool.query(
      "SELECT * FROM users WHERE user_id=?",
      [data.user_id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getByEmail: (data, callback) => {
    pool.query(
      "SELECT * FROM users WHERE user_email=?",
      [data.user_email],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
module.exports = userService;
