const pool = require("../../config/db");

const mediaService = {
  create: (data, callback) => {
    pool.query(
      "INSERT INTO medias(media_name, media_url) VALUES(?,?)",
      [data.media_name, data.media_url],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getAll: (callback) => {
    pool.query("SELECT * FROM medias", [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
};

module.exports = mediaService;
