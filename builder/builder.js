const db = require("../config/db");

const builder = {
  statment: (sql, data, callback) => {
    db.query(sql, data, (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
};

module.exports = builder;
