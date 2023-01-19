const { create, getAll } = require("./medias.service");

const mediaController = {
  browseFile: (req, res) => {
    const body = req.body;
    let filePath = `http://${process.env.APP_HOST}:${process.env.APP_PORT}/media/${req.file.filename}`;
    body.media_url = filePath;
    body.media_name = req.file.filename;
    create(body, (err, results) => {
      if (err) {
        return res.json({
          success: "failed",
          msg: "Database connection failed",
        });
      }
      return res.json({
        status: "success",
        message: "media uploaded successfuly!",
        data: results,
      });
    });
  },

  getMedias: (req, res) => {
    getAll((err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      return res.status(200).json({
        status: "success",
        medias: results,
      });
    });
  },
};

module.exports = mediaController;
