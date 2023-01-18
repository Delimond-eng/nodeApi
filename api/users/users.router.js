const { createUser } = require("./users.controller");
const router = require("express").Router();
router.post("/", createUser);

module.exports = router;
