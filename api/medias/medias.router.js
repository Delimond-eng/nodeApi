router = require("express").Router();
const { browseFile, getMedias } = require("./medias.controller");

const multer = require("multer");
const storage = require("../../utils/storage");

const upload = multer({
  storage: storage,
});

router.post("/upload", [upload.single("media"), browseFile]);
router.get("/", getMedias);

module.exports = router;
