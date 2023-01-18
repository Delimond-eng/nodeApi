router = require("express").Router();
const { browseFile } = require("./medias.controller");

const multer = require("multer");
const storage = require("../../utils/storage");

const upload = multer({
  storage: storage,
  limits: { fieldSize: 10 },
});

router.post("/upload", [upload.single("media"), browseFile]);

module.exports = router;
