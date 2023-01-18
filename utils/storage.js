const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./upload/medias",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

module.exports = storage;
