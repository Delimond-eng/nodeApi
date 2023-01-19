const {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
  login,
} = require("./users.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
router.post("/", checkToken, createUser); /*create one user*/
router.get("/", getUsers); /*get all users*/
router.post("/view", checkToken, getUser); /*get single user by user_id*/
router.post("/update", checkToken, updateUser); /*update user*/
router.post("/delete", checkToken, deleteUser); /*delete user by user_id*/
router.post("/login", login);
module.exports = router;
